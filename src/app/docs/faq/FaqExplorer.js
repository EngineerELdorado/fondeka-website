'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import FaqBlocks from '@/components/FaqBlocks';
import { apiFaqUi } from '@/lib/apiFaqUi';
import FaqIcon, { FaqIconTile, faqTopicVisuals } from '@/components/FaqIcon';

const storageKey = 'fondeka-api-faq-read-v1';
const starterQuestions = [3, 35, 48, 62];
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const blockText = block => block.text || block.items?.join(' ') || [block.headers, ...block.rows].flat().join(' ');

export default function FaqExplorer({ sections, lang }) {
  const ui = apiFaqUi[lang];
  const [query, setQuery] = useState('');
  const [read, setRead] = useState(new Set());
  const [ready, setReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [allExpanded, setAllExpanded] = useState(false);
  const [target, setTarget] = useState(null);
  const [activeTopic, setActiveTopic] = useState(sections[0].id);
  const answersRef = useRef(null);
  const questions = useMemo(() => sections.flatMap(section => section.questions), [sections]);
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const filtered = sections.map(section => ({
    ...section,
    questions: section.questions.filter(question => {
      const text = normalize(`${section.title} ${question.question} ${question.blocks.map(blockText).join(' ')}`);
      return terms.every(term => text.includes(term));
    }),
  })).filter(section => section.questions.length);
  const found = filtered.reduce((count, section) => count + section.questions.length, 0);
  const unlocked = [read.size > 0, starterQuestions.every(number => read.has(number)), read.size >= 10, read.size === questions.length];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(saved)) setRead(new Set(saved.filter(number => Number.isInteger(number) && number >= 1 && number <= questions.length)));
    } catch { setStorageAvailable(false); }
    setReady(true);
  }, [questions.length]);

  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(storageKey, JSON.stringify([...read])); } catch { setStorageAvailable(false); }
    }
  }, [read, ready]);

  useEffect(() => {
    const expanded = Boolean(query.trim());
    answersRef.current?.querySelectorAll('details').forEach(element => { element.open = expanded; });
    setAllExpanded(expanded);
  }, [query]);

  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (/^question-\d+$/.test(id)) {
        setQuery('');
        setTarget({ id });
        const section = sections.find(item => item.questions.some(question => question.id === id));
        if (section) setActiveTopic(section.id);
      } else if (sections.some(section => section.id === id)) {
        setActiveTopic(id);
      }
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [sections]);

  useEffect(() => {
    if (!target) return;
    const element = document.getElementById(target.id);
    if (element) {
      element.open = true;
      element.scrollIntoView({ block: 'start' });
      element.querySelector('summary')?.focus({ preventScroll: true });
      setTarget(null);
    }
  }, [target, query]);

  const toggleRead = number => setRead(previous => {
    const next = new Set(previous);
    if (next.has(number)) next.delete(number); else next.add(number);
    return next;
  });
  const syncExpanded = () => {
    const elements = [...(answersRef.current?.querySelectorAll('details') || [])];
    setAllExpanded(elements.length > 0 && elements.every(element => element.open));
  };
  const toggleExpanded = () => {
    answersRef.current?.querySelectorAll('details').forEach(element => { element.open = !allExpanded; });
    setAllExpanded(!allExpanded);
  };

  return <>
    <section className="container-pad faq-learning" aria-labelledby="reading-trail">
      <div className="faq-learning-grid">
        <div className="faq-trail faq-surface">
          <div className="faq-card-heading">
            <FaqIconTile icon="book" tone="blue" />
            <div><h2 id="reading-trail">{ui.trail}</h2><p>{ui.trailBody}</p></div>
          </div>
          <ol className="faq-starter-path">
            {starterQuestions.map((number, index) => <li key={number}>
              <a href={`#question-${number}`} onClick={() => { setQuery(''); setTarget({ id: `question-${number}` }); }} className="faq-starter-link" data-faq-tone={['blue', 'amber', 'violet', 'teal'][index]} data-read={read.has(number)}>
                <span className="faq-step-number" aria-label={read.has(number) ? ui.markedRead : undefined}>{read.has(number) ? '✓' : index + 1}</span>
                <span>{ui.steps[index]}</span><FaqIcon name="arrow" />
              </a>
            </li>)}
          </ol>
        </div>
        <div className="faq-progress faq-surface">
          <div className="faq-card-heading"><FaqIconTile icon="growth" /><h2>{ui.progress}</h2></div>
          <p className="faq-progress-count" aria-live="polite"><span data-faq-read-count>{read.size}</span><span>{ui.of} {questions.length} {ui.answers} {ui.read}</span></p>
          <progress className="faq-reading-progress" value={read.size} max={questions.length} aria-label={ui.progress} />
          <div className="faq-milestones">{ui.milestones.map((label, index) => <span key={label} className="faq-milestone" data-complete={unlocked[index]}><span aria-hidden="true">{unlocked[index] ? '✓' : '○'}</span>{label}</span>)}</div>
          <p className="faq-storage-note">{storageAvailable ? ui.saved : ui.sessionOnly}</p>
          {read.size > 0 && <button type="button" className="faq-text-action" onClick={() => setRead(new Set())}>{ui.reset}</button>}
        </div>
      </div>
    </section>

    <section id="questions" className="container-pad faq-workspace" aria-labelledby="faq-search-heading">
      <div className="faq-workspace-grid">
        <aside className="faq-topic-sidebar" style={{ alignSelf: 'stretch' }}>
          <nav className="faq-topic-nav faq-surface" aria-label={ui.topics}>
            <h2><FaqIcon name="book" />{ui.topics}</h2>
            <ul>{filtered.map(section => {
              const index = sections.findIndex(item => item.id === section.id);
              const total = sections[index].questions.length;
              const count = sections[index].questions.filter(question => read.has(question.number)).length;
              return <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setActiveTopic(section.id)} className="faq-topic-link" aria-current={activeTopic === section.id ? 'location' : undefined} data-complete={count === total} title={section.title}>
                  <FaqIconTile {...faqTopicVisuals[index]} />
                  <span className="faq-topic-name">{ui.topicNames[index]}</span>
                  <span className="faq-topic-count" aria-label={`${count} ${ui.of} ${total} ${ui.answers} ${ui.read}`}>{count}/{total}</span>
                </a>
              </li>;
            })}</ul>
            <a href="#faq-resources" className="faq-text-action">{ui.resources}</a>
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="faq-search-panel faq-surface">
            <h2 id="faq-search-heading">{ui.search}</h2>
            <p id="faq-search-hint">{ui.searchHint}</p>
            <div className="faq-search-control">
              <label htmlFor="faq-search" className="sr-only">{ui.search}</label>
              <FaqIcon name="search" />
              <input id="faq-search" type="search" value={query} onChange={event => setQuery(event.target.value)} disabled={!ready} placeholder={ui.placeholder} aria-describedby="faq-search-hint" />
            </div>
            <div className="faq-search-actions">
              <p role="status">{found} {ui.results}</p>
              <div>
                {query && <button type="button" onClick={() => setQuery('')} className="faq-text-action">{ui.clear}</button>}
                {found > 0 && <button type="button" onClick={toggleExpanded} disabled={!ready} className="faq-text-action">{allExpanded ? ui.collapse : ui.expand}</button>}
              </div>
            </div>
            <div className="faq-select-control">
              <label htmlFor="faq-topic" className="sr-only">{ui.jump}</label>
              <select id="faq-topic" defaultValue="" onChange={event => { if (event.target.value) { setActiveTopic(event.target.value); window.location.hash = event.target.value; } }}>
                <option value="" disabled>{ui.jump}</option>
                {filtered.map(section => <option key={section.id} value={section.id}>{section.title}</option>)}
              </select>
              <span className="faq-chevron"><FaqIcon name="chevron" /></span>
            </div>
            <noscript><p>{ui.noScript}</p></noscript>
          </div>

          <div ref={answersRef} className="faq-answer-sections">
            {filtered.map(section => {
              const index = sections.findIndex(item => item.id === section.id);
              return <section key={section.id} id={section.id} className="faq-topic-section faq-surface" aria-labelledby={`${section.id}-heading`}>
                <div className="faq-topic-heading">
                  <FaqIconTile {...faqTopicVisuals[index]} />
                  <h2 id={`${section.id}-heading`}>{section.title}</h2>
                  <span>{section.questions.length} {ui.answers}</span>
                </div>
                <div>{section.questions.map(question => <details key={question.id} id={question.id} onToggle={syncExpanded} className="faq-question">
                  <summary>
                    <h3>
                      <span className="faq-question-number" data-read={read.has(question.number)} aria-label={read.has(question.number) ? ui.markedRead : undefined}>{read.has(question.number) ? '✓' : String(question.number).padStart(2, '0')}</span>
                      <span className="faq-question-title">{question.question}</span>
                      <span className="faq-chevron"><FaqIcon name="chevron" /></span>
                    </h3>
                  </summary>
                  <div className="faq-answer">
                    {question.blocks[0]?.type === 'paragraph' && <div className="faq-quick-answer"><p><FaqIcon name="book" />{ui.quick}</p><FaqBlocks blocks={[question.blocks[0]]} tableLabel={question.question} /></div>}
                    <FaqBlocks blocks={question.blocks[0]?.type === 'paragraph' ? question.blocks.slice(1) : question.blocks} tableLabel={question.question} />
                    <div className="faq-answer-actions">
                      <button type="button" onClick={() => toggleRead(question.number)} disabled={!ready} aria-pressed={read.has(question.number)} title={read.has(question.number) ? ui.undo : undefined} className="faq-read-button">{read.has(question.number) ? `✓ ${ui.markedRead}` : ui.markRead}</button>
                      <a href={`#${question.id}`} className="faq-text-action"><FaqIcon name="link" />{ui.permalink}</a>
                    </div>
                  </div>
                </details>)}</div>
              </section>;
            })}
            {found === 0 && <div className="faq-empty faq-surface"><FaqIconTile icon="search" tone="blue" /><h3>{ui.empty}</h3><p>{ui.emptyBody}</p><button type="button" onClick={() => setQuery('')} className="faq-button">{ui.clear}</button></div>}
          </div>
        </div>
      </div>
    </section>
  </>;
}
