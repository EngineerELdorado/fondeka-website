export const billPaymentProviders = {
  socodee: {
    slug: 'socodee',
    name: 'SOCODEE',
    displayName: 'SOCODEE',
    type: 'Electricity',
    region: 'DR Congo',
    category: 'electricity bill payment',
    h1: 'Pay SOCODEE bills online with Fondeka',
    title: 'Pay SOCODEE Bills Online in Congo | Fondeka Bill Payments',
    description:
      'Use Fondeka to pay supported SOCODEE electricity bills online in DR Congo. Enter your meter or customer details, confirm the amount, pay, and receive a transaction receipt.',
    intro:
      'Fondeka helps customers pay supported SOCODEE electricity bills from one mobile account, with clear payment status and a receipt after processing.',
    searchPhrases: [
      'pay SOCODEE online',
      'SOCODEE bill payment',
      'SOCODEE electricity payment',
      'pay SOCODEE bill Congo',
      'payer facture SOCODEE',
      'paiement SOCODEE en ligne',
    ],
    accountLabel: 'meter number or customer reference',
  },
  virunga: {
    slug: 'virunga',
    name: 'Virunga',
    displayName: 'VIRUNGA',
    type: 'Electricity',
    region: 'DR Congo',
    category: 'electricity bill payment',
    h1: 'Pay Virunga electricity bills online with Fondeka',
    title: 'Pay Virunga Electricity Bills Online in Congo | Fondeka',
    description:
      'Pay supported Virunga electricity bills online with Fondeka. Add your meter or customer details, confirm the payment, and track the transaction in the app.',
    intro:
      'For supported Virunga electricity products, Fondeka gives customers a straightforward way to pay from the app and keep a transaction record.',
    searchPhrases: [
      'pay Virunga online',
      'Virunga bill payment',
      'Virunga electricity payment',
      'pay Virunga bill Congo',
      'payer facture Virunga',
      'paiement Virunga en ligne',
    ],
    accountLabel: 'meter number or customer reference',
  },
  snel: {
    slug: 'snel',
    name: 'SNEL',
    displayName: 'SNEL',
    type: 'Electricity',
    region: 'DR Congo',
    category: 'electricity bill payment',
    h1: 'Pay SNEL bills online with Fondeka',
    title: 'Pay SNEL Bills Online in Congo | Fondeka Bill Payments',
    description:
      'Use Fondeka for supported SNEL electricity bill payments in DR Congo. Enter the required customer or meter details, pay in the app, and receive a receipt.',
    intro:
      'Fondeka brings supported SNEL electricity payments into the same app customers use for bills, airtime, cards, and everyday financial services.',
    searchPhrases: [
      'pay SNEL online',
      'SNEL bill payment',
      'SNEL electricity payment',
      'pay SNEL bill Congo',
      'payer facture SNEL',
      'paiement SNEL en ligne',
    ],
    accountLabel: 'meter number or customer reference',
  },
  'canal-plus': {
    slug: 'canal-plus',
    name: 'Canal Plus',
    displayName: 'CANAL PLUS',
    type: 'TV Subscription',
    region: 'Africa',
    category: 'TV subscription payment',
    h1: 'Pay Canal Plus bills online with Fondeka',
    title: 'Pay Canal Plus Bills Online in Africa | Fondeka TV Payments',
    description:
      'Pay supported Canal Plus and Canal+ TV subscriptions with Fondeka. Renew, change packages where supported, confirm payment, and receive a transaction receipt.',
    intro:
      'Fondeka helps customers manage supported Canal Plus TV subscription payments from the app, including renewal and package actions where available.',
    searchPhrases: [
      'pay Canal Plus online',
      'Canal Plus bill payment',
      'Canal Plus Congo payment',
      'Canal+ payment Africa',
      'payer Canal Plus en ligne',
      'paiement Canal+',
    ],
    accountLabel: 'subscription number or customer reference',
  },
};

export const billPaymentProviderSlugs = Object.keys(billPaymentProviders);

export function getBillPaymentProvider(slug) {
  return billPaymentProviders[slug];
}
