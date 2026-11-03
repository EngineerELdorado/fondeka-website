import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const moduleUrl = source => `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const content = moduleUrl(readFileSync(new URL('../src/lib/paymentApiContent.js', import.meta.url), 'utf8'));
const source = readFileSync(new URL('../src/lib/seo.js', import.meta.url), 'utf8').replace("from './paymentApiContent'", `from ${JSON.stringify(content)}`);
const { siteUrl, servicePath, createMetadata, serviceSeo } = await import(moduleUrl(source));

test('canonical origin matches the public host that serves the website', () => {
  assert.equal(siteUrl, 'https://www.fondeka.com');
  for (const slug of Object.keys(serviceSeo)) {
    const metadata = createMetadata(slug);
    assert.ok(metadata.openGraph.url.startsWith(siteUrl + '/'));
    assert.ok(metadata.alternates.canonical.startsWith('/'));
  }
});

test('FAQ languages have stable explicit canonicals and reciprocal alternates', () => {
  for (const lang of ['en', 'fr']) {
    const metadata = createMetadata('apiFaq', lang);
    assert.equal(servicePath('apiFaq', lang), `/docs/faq?lang=${lang}`);
    assert.equal(metadata.alternates.canonical, `/docs/faq?lang=${lang}`);
    assert.equal(metadata.openGraph.url, `${siteUrl}/docs/faq?lang=${lang}`);
    assert.deepEqual(metadata.alternates.languages, {
      en: '/docs/faq?lang=en', fr: '/docs/faq?lang=fr', 'x-default': '/docs/faq',
    });
    assert.ok(metadata.title.includes('Mobile Money'));
    assert.ok(metadata.title.toLowerCase().includes('crypto'));
    assert.ok(metadata.description.includes(lang === 'fr' ? 'RDC' : 'DR Congo'));
    assert.ok(metadata.description.includes('Sandbox'));
    assert.ok(existsSync(new URL(`../public${metadata.openGraph.images[0].url}`, import.meta.url)));
    assert.ok(!/best|number one|guaranteed|meilleur/i.test(metadata.description));
  }
});

test('FAQ review metadata records the content review rather than deployment time', () => {
  assert.equal(serviceSeo.apiFaq.lastModified, '2026-11-03');
});

test('existing Business and developer-introduction URL conventions stay compatible', () => {
  assert.equal(servicePath('business', 'en'), '/business');
  assert.equal(servicePath('business', 'fr'), '/business?lang=fr');
  assert.equal(servicePath('docs', 'en'), '/docs');
  assert.equal(servicePath('docs', 'fr'), '/docs?lang=fr');
  assert.equal(servicePath('cards', 'fr'), '/cards');
});
