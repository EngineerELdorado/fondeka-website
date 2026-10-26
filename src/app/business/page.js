import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { businessAppUrl, businessApiDocsUrl } from '@/lib/business';
import { paymentApiContent, paymentApiLanguage } from '@/lib/paymentApiContent';
import { createMetadata, createServiceSchema, siteUrl } from '@/lib/seo';

export function generateMetadata({ searchParams }) {
  return createMetadata('business', paymentApiLanguage(searchParams.lang));
}

export default function BusinessPage({ searchParams }) {
  const lang = paymentApiLanguage(searchParams.lang);
  const copy = paymentApiContent[lang];
  const canonical = `${siteUrl}/business${lang === 'fr' ? '?lang=fr' : ''}`;
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: copy.metadata.name, item: canonical },
    ],
  };

  return (
    <main lang={lang}>
      <section className="section gradient-hero">
        <div className="container-pad max-w-4xl">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{copy.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">{copy.audience}</p>
          <p className="mt-4 leading-relaxed text-gray-600">{copy.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={businessAppUrl} className="btn btn-primary">{copy.primary}</a>
            <Link href={`/docs?lang=${lang}`} className="btn btn-ghost">{copy.secondary}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-pad max-w-4xl">
          <h2 className="h">{copy.gatewayTitle}</h2>
          <p className="mt-4 leading-relaxed text-gray-700">{copy.gatewayBody}</p>
          <h2 className="h mt-12">{copy.audienceTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {copy.audiences.map((item) => (
              <article key={item.title} className="card border border-fondeka-mint/30">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-fondeka-light">
        <div className="container-pad max-w-4xl">
          <h2 className="h">{copy.featuresTitle}</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {copy.features.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-pad max-w-4xl">
          <h2 className="h">{copy.eligibilityTitle}</h2>
          <p className="mt-4 leading-relaxed text-gray-700">{copy.eligibilityBody}</p>
          <h2 className="h mt-12">{copy.stepsTitle}</h2>
          <ol className="mt-6 list-decimal space-y-4 pl-6 text-gray-700">
            {copy.steps.map((step) => <li key={step} className="pl-2 leading-relaxed">{step}</li>)}
          </ol>
        </div>
      </section>

      <section className="section border-y border-fondeka-mint/30">
        <div className="container-pad max-w-4xl">
          <h2 className="h">{copy.faqTitle}</h2>
          <div className="mt-7 divide-y divide-fondeka-mint/30">
            {copy.faqs.map((faq) => (
              <article key={faq.q} className="py-6">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-pad max-w-4xl">
          <h2 className="h">{copy.resourcesTitle}</h2>
          <p className="mt-4 leading-relaxed text-gray-700">{copy.resourcesBody}</p>
          <ul className="mt-6 space-y-3 text-fondeka-green underline">
            <li><Link href={`/docs?lang=${lang}`}>{copy.secondary}</Link></li>
            <li><a href={`${businessApiDocsUrl}/quickstart.md`}>{copy.quickstart}</a></li>
            <li><a href={`${businessApiDocsUrl}/go-live.md`}>{copy.goLive}</a></li>
            <li><Link href={`/support?lang=${lang}`}>{copy.support}</Link></li>
          </ul>
          <a href={businessAppUrl} className="btn btn-primary mt-8">{copy.primary}</a>
        </div>
      </section>

      <JsonLd data={createServiceSchema('business', lang)} />
      <JsonLd data={breadcrumbs} />
    </main>
  );
}
