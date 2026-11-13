import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqBlocks, { FaqInline } from '@/components/FaqBlocks';
import { getApiFaqContent, faqBlockText } from '@/lib/apiFaqContent';
import { apiFaqUi } from '@/lib/apiFaqUi';
import { paymentApiLanguage } from '@/lib/paymentApiContent';
import { businessAppUrl, businessApiGuidesUrl } from '@/lib/business';
import { createMetadata, servicePath, serviceSeo, siteUrl } from '@/lib/seo';
import FaqExplorer from './FaqExplorer';
import FaqIcon, { FaqIconTile } from '@/components/FaqIcon';
import './faq.css';

export function generateMetadata({ searchParams }) {
  return createMetadata('apiFaq', paymentApiLanguage(searchParams.lang));
}

export default function ApiFaqPage({ searchParams }) {
  const lang = paymentApiLanguage(searchParams.lang);
  const content = getApiFaqContent(lang);
  const ui = apiFaqUi[lang];
  const docsUrl = `${businessApiGuidesUrl}?lang=${lang}`;
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
          <FaqIconTile icon="help" tone="blue" />
          <div><h1>{content.title}</h1><p>{content.intro[0]}</p><div className="faq-header-meta"><span className="faq-count">120 {ui.answers}</span><span>{ui.publisher}</span><span>{ui.reviewed}</span></div></div>
        </div>
        <div className="faq-header-actions">
          <a href={docsUrl} className="faq-button faq-button-primary" data-api-docs-cta="header"><FaqIcon name="book" />{ui.docs}<FaqIcon name="external" /></a>
          <a href={businessAppUrl} className="faq-button" data-api-portal-cta="header">{ui.portal}<FaqIcon name="external" /></a>
        </div>
        <details className="faq-essentials faq-surface">
          <summary><FaqIconTile icon="book" tone="teal" /><span>{ui.essentials}</span><span className="faq-chevron"><FaqIcon name="chevron" /></span></summary>
          <div className="faq-essentials-body"><p><FaqInline text={content.intro[1]} /></p><FaqBlocks blocks={[content.essentials]} tableLabel={ui.essentials} /><p>{content.intro[2]}</p></div>
        </details>
      </div>
    </section>
    <FaqExplorer key={lang} sections={content.sections} lang={lang} />
    <section id="faq-resources" className="faq-resources scroll-mt-24">
      <div className="container-pad faq-resources-grid">
        <div className="faq-glossary faq-surface"><h2>{content.glossary.title}</h2><FaqBlocks blocks={content.glossary.blocks} tableLabel={content.glossary.title} /></div>
        <aside className="faq-help faq-surface"><FaqIconTile icon="help" tone="violet" /><h2 className="mt-4">{ui.support}</h2><p>{ui.supportBody}</p><Link href={`/support?lang=${lang}`} className="faq-button">{ui.contact}</Link><a href="mailto:info@fondeka.com" className="faq-inline-link">info@fondeka.com</a></aside>
      </div>
    </section>
    <div className="container-pad">
      <section className="faq-next-step faq-surface">
        <div><h2>{ui.nextTitle}</h2><p>{ui.nextBody}</p></div>
        <div className="faq-next-actions">
          <a href={docsUrl} className="faq-button faq-button-primary" data-api-docs-cta="footer"><FaqIcon name="book" />{ui.docs}<FaqIcon name="external" /></a>
          <a href={businessAppUrl} className="faq-button" data-api-portal-cta="footer">{ui.portal}<FaqIcon name="external" /></a>
        </div>
      </section>
    </div>
    <nav className="faq-quick-links" aria-label={ui.quickLinks}>
      <a href={docsUrl} className="faq-button faq-button-primary" aria-label={ui.docs} data-api-docs-cta="floating"><FaqIcon name="book" /><span>{ui.docsShort}</span></a>
      <a href={businessAppUrl} className="faq-button" aria-label={ui.portal} data-api-portal-cta="floating"><FaqIcon name="external" /><span>{ui.portalShort}</span></a>
    </nav>
    <JsonLd data={schema} /><JsonLd data={breadcrumbs} />
  </main>;
}
