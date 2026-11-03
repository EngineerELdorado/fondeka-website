import { readFileSync } from 'node:fs';
import path from 'node:path';

// Only the customer-facing documents live here. Publication notes stay private.
const documents = {
  en: readFileSync(path.join(process.cwd(), 'src/content/business-api-faq.en.md'), 'utf8'),
  fr: readFileSync(path.join(process.cwd(), 'src/content/business-api-faq.fr.md'), 'utf8'),
};

export function parseFaqBlocks(markdown) {
  const lines = markdown.trim().split('\n');
  const blocks = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line.startsWith('|')) {
      const table = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        table.push(lines[index++].trim().slice(1, -1).split('|').map(cell => cell.trim()));
      }
      const [headers, separators, ...rows] = table;
      blocks.push({ type: 'table', headers, rows, align: separators.map(cell => cell.endsWith(':') ? 'right' : 'left') });
      continue;
    }
    if (/^(?:- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items = [];
      const pattern = ordered ? /^\d+\. / : /^- /;
      while (index < lines.length && pattern.test(lines[index].trim())) {
        items.push(lines[index++].trim().replace(pattern, ''));
      }
      blocks.push({ type: 'list', ordered, items });
      continue;
    }
    const paragraph = [];
    while (index < lines.length && lines[index].trim() && !lines[index].trim().startsWith('|') && !/^(?:- |\d+\. )/.test(lines[index].trim())) {
      paragraph.push(lines[index++].trim());
    }
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }
  return blocks;
}

export function faqBlockText(block) {
  const text = block.text || block.items?.join(' ') || [block.headers, ...block.rows].flat().join(' ');
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|`/g, '');
}

export function parseApiFaq(markdown) {
  const headings = [...markdown.matchAll(/^## (.+)$/gm)];
  const opening = parseFaqBlocks(markdown.slice(markdown.indexOf('\n') + 1, headings[0].index));
  const sections = [];
  let glossary;
  for (let index = 0; index < headings.length; index++) {
    const title = headings[index][1];
    const body = markdown.slice(headings[index].index + headings[index][0].length, headings[index + 1]?.index ?? markdown.length);
    const entries = [...body.matchAll(/^### (\d+)\. (.+)$/gm)];
    if (!entries.length) {
      if (index === headings.length - 1) glossary = { title, blocks: parseFaqBlocks(body) };
      continue;
    }
    sections.push({
      id: `topic-${sections.length + 1}`,
      title,
      questions: entries.map((entry, questionIndex) => ({
        id: `question-${entry[1]}`,
        number: Number(entry[1]),
        question: entry[2],
        blocks: parseFaqBlocks(body.slice(entry.index + entry[0].length, entries[questionIndex + 1]?.index ?? body.length)),
      })),
    });
  }
  const numbers = sections.flatMap(section => section.questions.map(question => question.number));
  if (numbers.length !== 120 || numbers.some((number, index) => number !== index + 1) || !glossary) {
    throw new Error('The API FAQ must contain all 120 questions in order and a glossary.');
  }
  return {
    title: markdown.match(/^# (.+)$/m)[1],
    intro: opening.filter(block => block.type === 'paragraph' && !block.text.startsWith('**')).map(block => block.text),
    essentials: opening.find(block => block.type === 'table'),
    sections,
    glossary,
  };
}

const content = { en: parseApiFaq(documents.en), fr: parseApiFaq(documents.fr) };

export function getApiFaqContent(lang = 'en') {
  return content[lang === 'fr' ? 'fr' : 'en'];
}
