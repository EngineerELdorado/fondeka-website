export const siteUrl = 'https://fondeka.com';

export const seoKeywords = [
  'Fondeka',
  'neobank Congo',
  'neobank DR Congo',
  'neobank RDC',
  'fintech Congo',
  'fintech Africa',
  'digital banking Congo',
  'mobile money Congo',
  'instant loans Congo',
  'virtual cards Africa',
  'savings app Congo',
  'Likelemba digital',
  'AVEC savings app',
  'bill payments Africa',
  'airtime top-up Africa',
  'payment links Africa',
  'crypto Mobile Money Africa',
];

export const serviceSeo = {
  loans: {
    path: '/loans',
    name: 'Instant Loans',
    title: 'Instant Loans in Congo and Africa | Fondeka Neobank',
    description:
      'Apply for flexible digital loans with Fondeka, the neobank built in DR Congo for Africa. Borrow, track repayment, and repay with Mobile Money and supported payment methods.',
    keywords: ['instant loans Congo', 'digital loans Africa', 'microcredit Congo', 'Mobile Money loan repayment'],
  },
  cards: {
    path: '/cards',
    name: 'Virtual Cards',
    title: 'Virtual Cards in Congo and Africa | Fondeka',
    description:
      'Create Fondeka virtual cards for online payments, subscriptions, shopping, travel, Google Play, Apple, Spotify, and international platforms from Congo and Africa.',
    keywords: ['virtual card Congo', 'Mastercard virtual card Africa', 'online payment card RDC', 'virtual card for subscriptions'],
  },
  savings: {
    path: '/savings',
    name: 'Savings',
    title: 'Savings App in Congo: Open, Locked, Likelemba and AVEC | Fondeka',
    description:
      'Save money with Fondeka personal savings, locked savings, Likelemba, and AVEC group savings. A digital savings platform built for DR Congo and African communities.',
    keywords: ['savings app Congo', 'digital savings Africa', 'Likelemba app', 'AVEC savings', 'locked savings Congo', 'open savings'],
  },
  bills: {
    path: '/bills',
    name: 'Bill Payments',
    title: 'Bill Payments in Congo and Africa | Fondeka',
    description:
      'Pay electricity, water, TV, internet, airtime, data, gaming, travel, and digital subscriptions with Fondeka from Congo and supported African countries.',
    keywords: ['bill payments Congo', 'pay SNEL online', 'pay Regideso online', 'Canal Plus Congo payment', 'utility payments Africa'],
  },
  airtimes: {
    path: '/airtimes',
    name: 'Airtime Top-Up',
    title: 'Airtime Top-Up in Congo and Africa | Fondeka',
    description:
      'Buy airtime, data, and mobile bundles for yourself or family with Fondeka across DR Congo and supported African markets.',
    keywords: ['airtime top-up Congo', 'buy data Africa', 'mobile recharge RDC', 'send airtime Africa'],
  },
  airtime: {
    path: '/airtime',
    name: 'Airtime Top-Up',
    title: 'Airtime Top-Up in Congo and Africa | Fondeka',
    description:
      'Buy airtime, data, and mobile bundles for yourself or family with Fondeka across DR Congo and supported African markets.',
    keywords: ['airtime top-up Congo', 'buy data Africa', 'mobile recharge RDC', 'send airtime Africa'],
  },
  payments: {
    path: '/payments',
    name: 'Payment Links, QR Payments and Invoices',
    title: 'Payment Links, QR Payments and Invoices in Africa | Fondeka',
    description:
      'Create payment links, QR payments, invoices, and crowdfunding pages with Fondeka. Accept Mobile Money, cards, and crypto for businesses in Africa.',
    keywords: ['payment links Africa', 'QR payments Congo', 'invoice payments Africa', 'crowdfunding payments Congo'],
  },
  crypto: {
    path: '/crypto',
    name: 'Crypto',
    title: 'Crypto and Mobile Money in Africa | Fondeka',
    description:
      'Buy, sell, hold, and move crypto with Fondeka where supported. Connect digital assets with Mobile Money, cards, and local payment methods in Africa.',
    keywords: ['crypto Congo', 'crypto Mobile Money Africa', 'buy crypto Africa', 'sell crypto to Mobile Money'],
  },
  giftcards: {
    path: '/giftcards',
    name: 'Gift Cards',
    title: 'Gift Cards in Congo and Africa | Fondeka',
    description:
      'Buy and sell gift cards with Fondeka. Access digital products, gaming cards, subscriptions, and payouts through Mobile Money or crypto where supported.',
    keywords: ['gift cards Congo', 'sell gift cards Africa', 'buy Google Play card Congo', 'gaming gift cards Africa'],
  },
  shopping: {
    path: '/shopping',
    name: 'Online Shopping',
    title: 'Online Shopping Payments in Congo and Africa | Fondeka',
    description:
      'Shop online with Fondeka using virtual cards and supported payment methods for subscriptions, marketplaces, travel, apps, and digital services.',
    keywords: ['online shopping Congo', 'pay online Africa', 'shopping card Congo', 'virtual card for online shopping'],
  },
  esim: {
    path: '/esim',
    name: 'eSIM',
    title: 'eSIM for Congo, Africa and Travel | Fondeka',
    description:
      'Buy and activate eSIM data with Fondeka for travel, business, and everyday connectivity across supported countries.',
    keywords: ['eSIM Congo', 'eSIM Africa', 'travel eSIM Africa', 'buy eSIM data'],
  },
  business: {
    path: '/business',
    name: 'Business API',
    title: 'Fintech Payment API for Congo and Africa | Fondeka Business',
    description:
      'Fondeka Business API helps merchants and fintechs collect and pay out with Mobile Money, cards, bank transfers, crypto, payment links, and QR payments.',
    keywords: ['payment API Africa', 'fintech API Congo', 'Mobile Money API Congo', 'collections payouts Africa'],
  },
  collect: {
    path: '/collect',
    name: 'Collections',
    title: 'Collect Payments in Congo and Africa | Fondeka',
    description:
      'Collect customer payments through Mobile Money, cards, bank transfers, crypto, payment links, and QR codes with Fondeka.',
    keywords: ['collect payments Africa', 'Mobile Money collections Congo', 'payment collection API', 'merchant payments Congo'],
  },
  payout: {
    path: '/payout',
    name: 'Payouts',
    title: 'Payouts to Mobile Money, Banks and Cards in Africa | Fondeka',
    description:
      'Send payouts to Mobile Money, banks, cards, wallets, and crypto rails with Fondeka business infrastructure for African markets.',
    keywords: ['payouts Africa', 'Mobile Money payouts Congo', 'bulk payouts Africa', 'fintech payouts API'],
  },
  pricing: {
    path: '/pricing',
    name: 'Pricing',
    title: 'Fondeka Pricing for Fintech Services in Congo and Africa',
    description:
      'Review Fondeka pricing for cards, Mobile Money, crypto, payment links, collections, payouts, and business API services.',
    keywords: ['fintech pricing Africa', 'Fondeka fees', 'Mobile Money fees Congo', 'payment API pricing Africa'],
  },
};

export function createMetadata(slug) {
  const page = serviceSeo[slug];
  const url = `${siteUrl}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [...seoKeywords, ...page.keywords],
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'Fondeka',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${page.name} by Fondeka` }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/og-image.jpg'],
    },
  };
}

export function createServiceSchema(slug) {
  const page = serviceSeo[slug];
  const url = `${siteUrl}${page.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.name,
    url,
    description: page.description,
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

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Fondeka',
  url: siteUrl,
  logo: `${siteUrl}/logo-icon.svg`,
  description:
    'Fondeka is a neobank and fintech platform built in DR Congo for Africa, offering loans, savings, virtual cards, bill payments, airtime, crypto, payment links, and business APIs.',
  slogan: 'The neobank for instant loans',
  areaServed: [
    { '@type': 'Country', name: 'Democratic Republic of the Congo' },
    { '@type': 'Place', name: 'Africa' },
  ],
  knowsAbout: seoKeywords,
  sameAs: [siteUrl],
};
