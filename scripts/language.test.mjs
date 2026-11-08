import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/lib/language.js', import.meta.url), 'utf8');
const { preferredLanguage, termsLanguage } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);

test('legal terms use the requested translation with French as the source fallback', () => {
  for (const value of ['en', 'EN', 'en-US', ['en', 'fr']]) {
    assert.equal(termsLanguage(value), 'en');
  }
  for (const value of [undefined, null, '', 'fr', 'fr-CD', 'de', 'english', [], ['fr', 'en']]) {
    assert.equal(termsLanguage(value), 'fr');
  }
});

test('regional French and English preferences select the supported language', () => {
  assert.equal(preferredLanguage('fr-CD,fr;q=0.9,en;q=0.8'), 'fr');
  assert.equal(preferredLanguage('en-US,en;q=0.9,fr;q=0.8'), 'en');
  assert.equal(preferredLanguage('FR-ca'), 'fr');
});

test('quality values and preference order determine the best supported choice', () => {
  assert.equal(preferredLanguage('en;q=0.5,fr;q=0.9'), 'fr');
  assert.equal(preferredLanguage('fr;q=0.4,en;q=0.8'), 'en');
  assert.equal(preferredLanguage('fr;q=0.8,en;q=0.8'), 'fr');
  assert.equal(preferredLanguage('de-DE,de;q=0.9,fr;q=0.8,en;q=0.7'), 'fr');
});

test('unavailable, missing or invalid preferences fall back to English', () => {
  assert.equal(preferredLanguage(), 'en');
  assert.equal(preferredLanguage(null), 'en');
  assert.equal(preferredLanguage('de-DE,es;q=0.8'), 'en');
  assert.equal(preferredLanguage('fr;q=invalid,en;q=0.5'), 'en');
  assert.equal(preferredLanguage('fr;q=2,en;q=0.5'), 'en');
  assert.equal(preferredLanguage('fr;q=0,en;q=0'), 'en');
});

test('wildcards respect explicit supported-language weights and exclusions', () => {
  assert.equal(preferredLanguage('*'), 'en');
  assert.equal(preferredLanguage('en;q=0,*;q=1'), 'fr');
  assert.equal(preferredLanguage('fr;q=0,*;q=1'), 'en');
  assert.equal(preferredLanguage('en;q=0.5,fr;q=0.8,*;q=1'), 'fr');
});

test('a saved manual choice overrides detection; unknown cookie values are ignored', () => {
  assert.equal(preferredLanguage('fr-FR', 'en'), 'en');
  assert.equal(preferredLanguage('en-US', 'fr'), 'fr');
  assert.equal(preferredLanguage('fr-FR', 'invalid'), 'fr');
});
