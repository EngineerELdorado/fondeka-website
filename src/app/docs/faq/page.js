import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqBlocks from '@/components/FaqBlocks';
import { getApiFaqContent, faqBlockText } from '@/lib/apiFaqContent';
import { apiFaqUi } from '@/lib/apiFaqUi';
import { paymentApiLanguage } from '@/lib/paymentApiContent';
import { createMetadata, servicePath, serviceSeo, siteUrl } from '@/lib/seo';
import FaqExplorer from './FaqExplorer';
import { FaqIconTile } from '@/components/FaqIcon';
import './faq.css';

export function generateMetadata({ searchParams }) {
  return createMetadata('apiFaq', paymentApiLanguage(searchParams.lang));
}

export default function ApiFaqPage({ searchParams }) {
  const lang = paymentApiLanguage(searchParams.lang);
  const content = getApiFaqContent(lang);
  const ui = apiFaqUi[lang];
  const canonical = `${siteUrl}${servicePath('apiFaq', lang)}`;
  const metadata = createMetadata('apiFaq', lang);
  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
    '@id': `${canonical}#faq`,
    name: content.title, description: metadata.description, url: canonical,
    dateModified: serviceSeo.apiFaq.lastModified,
    publisher: { '@type': 'Organization', name: 'Fondeka', url: siteUrl },
    about: { '@type': 'Service', name: ui.api, url: `${siteUrl}${servicePath('business', lang)}` },
    mainEntity: content.sections.flatMap(section => section.questions.map(question => ({
      '@type': 'Question', name: question.question, url: `${canonical}#${question.id}`,
      acceptedAnswer: { '@type': 'Answer', text: question.blocks.map(faqBlockText).join('\n\n') },
    }))),
  };
  const breadcrumbs = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: ui.api, item: `${siteUrl}/business${lang === 'fr' ? '?lang=fr' : ''}` },
      { '@type': 'ListItem', position: 3, name: ui.label, item: canonical },
    ],
  };

  return <main lang={lang} className="api-faq-page">
    <section className="faq-page-header">
      <div className="container-pad">
        <nav aria-label={lang === 'fr' ? 'Fil d’Ariane' : 'Breadcrumb'} className="faq-breadcrumbs">
          <Link href={`/?lang=${lang}`}>{ui.home}</Link><span aria-hidden="true">/</span>
          <Link href={`/business?lang=${lang}`}>{ui.api}</Link><span aria-hidden="true">/</span><span aria-current="page">{ui.label}</span>
        </nav>
        <div className="faq-heading">
          <h1>{content.title}</h1>
        </div>
      </div>
    </section>
    <FaqExplorer key={lang} sections={content.sections} lang={lang} />
    <section id="faq-resources" className="faq-resources scroll-mt-24">
      <div className="container-pad faq-resources-grid">
        <div className="faq-glossary faq-surface"><h2>{content.glossary.title}</h2><FaqBlocks blocks={content.glossary.blocks} tableLabel={content.glossary.title} /></div>
        <aside className="faq-help faq-surface"><FaqIconTile icon="help" tone="violet" /><h2 className="mt-4">{ui.support}</h2><p>{ui.supportBody}</p><Link href={`/support?lang=${lang}`} className="faq-button">{ui.contact}</Link><a href="mailto:info@fondeka.com" className="faq-inline-link">info@fondeka.com</a></aside>
      </div>
    </section>
    <JsonLd data={schema} /><JsonLd data={breadcrumbs} />
  </main>;
}
