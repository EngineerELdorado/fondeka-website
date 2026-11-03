import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const load = file => import(`data:text/javascript;base64,${Buffer.from(readFileSync(new URL(file, import.meta.url), 'utf8')).toString('base64')}`);
const { getApiFaqContent, parseApiFaq, parseFaqBlocks } = await load('../src/lib/apiFaqContent.js');
const { apiFaqUi } = await load('../src/lib/apiFaqUi.js');
const { supportedCountries } = await load('../src/lib/supportedCountries.js');

for (const lang of ['en', 'fr']) {
  const content = getApiFaqContent(lang);
  const questions = content.sections.flatMap(section => section.questions);
  const question = number => questions.find(item => item.number === number);
  test(`${lang}: all questions, rich answers and public resources are complete`, () => {
    assert.equal(content.sections.length, 13);
    assert.equal(apiFaqUi[lang].topicNames.length, content.sections.length);
    assert.deepEqual(questions.map(item => item.number), Array.from({ length: 120 }, (_, index) => index + 1));
    assert.equal(new Set(questions.map(item => item.id)).size, 120);
    assert.equal(content.essentials.rows.length, 8);
    assert.equal(content.intro.length, 3);
    assert.equal(content.glossary.blocks.find(block => block.type === 'table').rows.length, 19);
    assert.equal(content.glossary.blocks.find(block => block.type === 'list').items.length, 13);
    for (const item of questions) {
      assert.ok(item.question && item.blocks.length > 0);
      for (const block of item.blocks) {
        if (block.type === 'table') assert.ok(block.rows.every(row => row.length === block.headers.length), item.id);
      }
    }
    assert.ok(!JSON.stringify(content).includes('Publication notes'));
  });

  test(`${lang}: country coverage and financial examples retain their qualifications`, () => {
    const countries = question(11).blocks.find(block => block.type === 'table');
    assert.equal(countries.rows.length, supportedCountries.length);
    assert.equal(countries.rows.length, 12);
    const countryText = JSON.stringify(countries);
    for (const currency of ['CDF', 'USD', 'XAF', 'XOF', 'KES', 'MZN', 'UGX', 'RWF', 'SLE', 'TZS', 'ZMW']) assert.ok(countryText.includes(currency));
    assert.ok(!countryText.includes('SLL'));
    const pricing = question(35).blocks.find(block => block.type === 'table');
    assert.deepEqual(pricing.rows.map(row => row[1].match(/\d+/g)), [['3'], ['2'], ['5']]);
    const examples = question(42).blocks.find(block => block.type === 'table');
    assert.deepEqual(examples.rows.map(row => row.join(' ').match(/\d+/g)), [
      ['100', '5', '105', '100'], ['100', '5', '100', '95'],
      ['100', '5', '105', '100'], ['100', '5', '100', '95'],
    ]);
    assert.ok(JSON.stringify(question(59)).includes('BUSINESS_API_LIVE_PAYMENTS_DISABLED'));
    const statuses = question(93).blocks.find(block => block.type === 'table');
    assert.deepEqual(statuses.rows.map(row => row[0]), ['`ACCEPTED`', '`PROCESSING`', '`COMPLETED`', '`FAILED`']);
  });
}

test('both languages share stable question/topic IDs and every interface label', () => {
  assert.deepEqual(Object.keys(apiFaqUi.en).sort(), Object.keys(apiFaqUi.fr).sort());
  assert.deepEqual(getApiFaqContent('en').sections.map(section => [section.id, section.questions.map(item => item.id)]), getApiFaqContent('fr').sections.map(section => [section.id, section.questions.map(item => item.id)]));
  assert.equal(new Set(supportedCountries.map(country => country.code)).size, 12);
});

test('parser preserves lists, table alignment and paragraphs; incomplete guides fail early', () => {
  const blocks = parseFaqBlocks('First paragraph.\n\n1. First\n2. Second\n\n| Mode | Total |\n| --- | ---: |\n| EXCLUSIVE | 105 USD |\n\nFinal paragraph.');
  assert.deepEqual(blocks.map(block => block.type), ['paragraph', 'list', 'table', 'paragraph']);
  assert.equal(blocks[1].ordered, true);
  assert.deepEqual(blocks[2].align, ['left', 'right']);
  assert.throws(() => parseApiFaq('# Incomplete\n\n## Topic\n\n### 1. Question?\n\nAnswer.\n\n## Glossary\n\nTerm.'), /120 questions/);
});
