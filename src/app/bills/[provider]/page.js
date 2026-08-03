import Link from 'next/link';
import { notFound } from 'next/navigation';
import DownloadAppButton from '@/components/DownloadAppButton';
import {
  billPaymentProviderSlugs,
  getBillPaymentProvider,
} from '@/lib/billPaymentProviders';
import { seoKeywords, siteUrl } from '@/lib/seo';

export function generateStaticParams() {
  return billPaymentProviderSlugs.map((provider) => ({ provider }));
}

export function generateMetadata({ params }) {
  const provider = getBillPaymentProvider(params.provider);
  if (!provider) return {};

  const url = `${siteUrl}/bills/${provider.slug}`;
  const keywords = [
    ...seoKeywords,
    ...provider.searchPhrases,
    `${provider.displayName} payment app`,
    `${provider.displayName} bill app`,
    `${provider.displayName} ${provider.category}`,
    `best app to pay ${provider.displayName}`,
  ];

  return {
    title: provider.title,
    description: provider.description,
    keywords,
    alternates: { canonical: `/bills/${provider.slug}` },
    openGraph: {
      title: provider.title,
      description: provider.description,
      url,
      siteName: 'Fondeka',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${provider.displayName} payments with Fondeka` }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: provider.title,
      description: provider.description,
      images: ['/og-image.jpg'],
    },
  };
}

function createProviderServiceSchema(provider) {
  const url = `${siteUrl}/bills/${provider.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${provider.displayName} bill payment`,
    serviceType: provider.category,
    url,
    description: provider.description,
    areaServed: [
      { '@type': 'Country', name: 'Democratic Republic of the Congo' },
      { '@type': 'Place', name: 'Africa' },
    ],
    provider: {
      '@type': 'FinancialService',
      name: 'Fondeka',
      url: siteUrl,
      logo: `${siteUrl}/logo-icon.svg`,
    },
  };
}

function createProviderFaqSchema(provider) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Can I pay ${provider.displayName} with Fondeka?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Fondeka supports ${provider.displayName} ${provider.category}s where the product is available in the app and active for your country.`,
        },
      },
      {
        '@type': 'Question',
        name: `What details do I need for a ${provider.displayName} payment?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You may be asked for a ${provider.accountLabel}, plus the amount or package details required for that payment.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do I get a receipt after paying ${provider.displayName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fondeka creates a transaction record with payment status, reference details, and receipt information after processing.',
        },
      },
    ],
  };
}

export default function BillPaymentProviderPage({ params }) {
  const provider = getBillPaymentProvider(params.provider);
  if (!provider) notFound();

  const steps = [
    `Open Fondeka and choose bill payments.`,
    `Select ${provider.displayName} or the matching ${provider.type.toLowerCase()} product where available.`,
    `Enter the required ${provider.accountLabel}.`,
    `Review the account, amount, or package details when verification is supported.`,
    `Confirm the payment and keep the receipt in your transaction history.`,
  ];
  const serviceSchema = createProviderServiceSchema(provider);
  const faqSchema = createProviderFaqSchema(provider);

  return (
    <main className="section">
      <div className="container-pad">
        <Link href="/bills" className="text-sm font-semibold text-fondeka-green hover:text-fondeka-accent">
          Bill payments
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section className="min-w-0">
            <div className="inline-flex items-center rounded-full border border-[#2c6cb0]/15 bg-[#eef6ff] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1d4f86]">
              {provider.type} payments
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-fondeka-dark md:text-5xl">
              {provider.h1}
            </h1>
            <p className="mt-5 text-lg text-gray-700">{provider.intro}</p>
            <p className="mt-4 text-gray-700">
              Use Fondeka to start a supported {provider.displayName} bill payment, confirm the required details, and track the result from one app.
            </p>
            <DownloadAppButton className="mt-7" variant="hero" ctaLabel="Download Fondeka" />
          </section>

          <aside className="rounded-2xl border border-fondeka-dark/10 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">
              {provider.displayName} payment details
            </h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-bold text-fondeka-dark">Provider</dt>
                <dd className="mt-1 text-gray-700">{provider.displayName}</dd>
              </div>
              <div>
                <dt className="font-bold text-fondeka-dark">Payment type</dt>
                <dd className="mt-1 text-gray-700">{provider.category}</dd>
              </div>
              <div>
                <dt className="font-bold text-fondeka-dark">Typical reference</dt>
                <dd className="mt-1 text-gray-700">{provider.accountLabel}</dd>
              </div>
              <div>
                <dt className="font-bold text-fondeka-dark">Availability</dt>
                <dd className="mt-1 text-gray-700">Depends on country, provider support, and active products in the app.</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-fondeka-dark/10 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">
              How to pay {provider.displayName}
            </h2>
            <ol className="mt-5 space-y-3 text-sm text-gray-700 list-decimal list-inside">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-[#2c6cb0]/15 bg-[#eef6ff] p-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">
              Why use Fondeka for {provider.displayName}?
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li>One account for bill payments, airtime, cards, crypto, and everyday financial services.</li>
              <li>Clear transaction status for payments that are processing, completed, or failed.</li>
              <li>Receipt and reference details after the provider completes the payment.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">
            Popular {provider.displayName} searches
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-fondeka-dark">
            {provider.searchPhrases.map((phrase) => (
              <li key={phrase} className="rounded-full border border-fondeka-dark/10 bg-fondeka-light/35 px-3 py-1.5">
                {phrase}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 max-w-3xl text-xs text-gray-500">
          Fondeka is not presented as the utility or TV provider. Product names belong to their respective owners. Payment availability can vary by country, provider configuration, and product activation.
        </p>
      </div>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(faqSchema)}
      </script>
    </main>
  );
}
