'use client';

import DownloadAppButton from '@/components/DownloadAppButton';
import { useI18n } from '@/lib/i18n';

const copy = {
  en: {
    eyebrow: 'PayPal Congo',
    title: 'Withdraw PayPal money to Mobile Money in Congo',
    body:
      'Fondeka helps people in DR Congo turn PayPal balances into local Mobile Money. If you receive money on PayPal as a freelancer, creator, online seller, remote worker, or business, Fondeka gives you a practical way to cash out to supported Mobile Money wallets.',
    proof: ['Built for DR Congo', 'PayPal to Mobile Money', 'For freelancers and sellers'],
    primary: 'Get the app',
    secondary: 'Contact support',
    introTitle: 'A PayPal withdrawal option for Congo',
    introBody:
      'Many Congolese users can receive international payments on PayPal but struggle to access the money locally. Fondeka focuses on that problem: move eligible PayPal funds into a local payout experience so the money can reach supported Mobile Money methods in Congo.',
    stepsTitle: 'How PayPal cash-out works',
    steps: [
      'Create or open your Fondeka account and complete the required verification.',
      'Submit your PayPal withdrawal request with the details requested in the app or by support.',
      'Choose a supported local payout method such as Mobile Money when available.',
      'Fondeka reviews and processes the withdrawal, then sends the payout to the selected wallet.',
    ],
    usersTitle: 'Who this is for',
    users: [
      {
        title: 'Freelancers and remote workers',
        body: 'Cash out PayPal payments from international clients into local money you can use in Congo.',
      },
      {
        title: 'Creators and online sellers',
        body: 'Move PayPal earnings from digital products, services, marketplaces, and content work to Mobile Money.',
      },
      {
        title: 'Families and small businesses',
        body: 'Receive international support or business payments and settle locally through supported payout methods.',
      },
    ],
    keywordsTitle: 'PayPal services in Congo',
    keywordsBody:
      'Fondeka is relevant for searches such as PayPal Congo, PayPal RDC, PayPal DR Congo, withdraw PayPal money in Congo, PayPal to Mobile Money, PayPal to M-Pesa, PayPal to Airtel Money, PayPal to Orange Money, and PayPal withdrawal in Kinshasa, Goma, Lubumbashi, Bukavu, and other supported areas.',
    noteTitle: 'Important note',
    note:
      'PayPal is a trademark of PayPal, Inc. Fondeka is not PayPal and does not present this page as an official PayPal partnership. Availability, timing, fees, limits, payout methods, and eligibility depend on compliance checks and supported rails.',
    faqTitle: 'PayPal withdrawal questions',
    faqs: [
      {
        q: 'Can I withdraw PayPal money in Congo?',
        a: 'Fondeka supports a PayPal cash-out flow for eligible users in Congo, with payout to supported local methods such as Mobile Money when available.',
      },
      {
        q: 'Can I send PayPal money to Mobile Money?',
        a: 'Fondeka is built to help users move eligible PayPal funds toward supported Mobile Money wallets, subject to verification, limits, and availability.',
      },
      {
        q: 'Do I need a Fondeka account?',
        a: 'Yes. You need a Fondeka account and may need to complete identity, transaction, and compliance checks before a withdrawal can be processed.',
      },
    ],
  },
  fr: {
    eyebrow: 'PayPal Congo',
    title: 'Retirer l’argent PayPal vers Mobile Money au Congo',
    body:
      'Fondeka aide les personnes en RDC à transformer un solde PayPal en argent local via Mobile Money. Si vous recevez de l’argent sur PayPal comme freelance, créateur, vendeur en ligne, travailleur à distance ou entreprise, Fondeka vous donne une option pratique pour encaisser vers les portefeuilles Mobile Money pris en charge.',
    proof: ['Conçu pour la RDC', 'PayPal vers Mobile Money', 'Pour freelances et vendeurs'],
    primary: 'Télécharger l’app',
    secondary: 'Contacter le support',
    introTitle: 'Une solution de retrait PayPal pour le Congo',
    introBody:
      'Beaucoup d’utilisateurs congolais peuvent recevoir des paiements internationaux sur PayPal mais ont du mal à accéder à cet argent localement. Fondeka répond à ce besoin: déplacer les fonds PayPal éligibles vers une expérience de retrait locale, jusqu’aux méthodes Mobile Money prises en charge au Congo.',
    stepsTitle: 'Comment fonctionne le retrait PayPal',
    steps: [
      'Créez ou ouvrez votre compte Fondeka et complétez les vérifications demandées.',
      'Soumettez votre demande de retrait PayPal avec les informations demandées dans l’app ou par le support.',
      'Choisissez une méthode de paiement locale prise en charge, comme Mobile Money quand disponible.',
      'Fondeka vérifie et traite le retrait, puis envoie le paiement vers le portefeuille choisi.',
    ],
    usersTitle: 'Pour qui',
    users: [
      {
        title: 'Freelances et travailleurs à distance',
        body: 'Encaissez les paiements PayPal de clients internationaux en argent local utilisable au Congo.',
      },
      {
        title: 'Créateurs et vendeurs en ligne',
        body: 'Déplacez vos revenus PayPal issus de produits digitaux, services, marketplaces et contenus vers Mobile Money.',
      },
      {
        title: 'Familles et petites entreprises',
        body: 'Recevez un soutien international ou des paiements business et réglez localement via les méthodes prises en charge.',
      },
    ],
    keywordsTitle: 'Services PayPal au Congo',
    keywordsBody:
      'Fondeka est pertinent pour les recherches PayPal Congo, PayPal RDC, PayPal RD Congo, retirer argent PayPal au Congo, PayPal vers Mobile Money, PayPal vers M-Pesa, PayPal vers Airtel Money, PayPal vers Orange Money, et retrait PayPal à Kinshasa, Goma, Lubumbashi, Bukavu et dans les zones prises en charge.',
    noteTitle: 'Note importante',
    note:
      'PayPal est une marque de PayPal, Inc. Fondeka n’est pas PayPal et cette page ne présente pas un partenariat officiel avec PayPal. La disponibilité, les délais, les frais, les limites, les méthodes de paiement et l’éligibilité dépendent des vérifications de conformité et des rails pris en charge.',
    faqTitle: 'Questions sur les retraits PayPal',
    faqs: [
      {
        q: 'Puis-je retirer mon argent PayPal au Congo ?',
        a: 'Fondeka prend en charge un parcours de retrait PayPal pour les utilisateurs éligibles au Congo, avec paiement vers des méthodes locales comme Mobile Money quand disponible.',
      },
      {
        q: 'Puis-je envoyer PayPal vers Mobile Money ?',
        a: 'Fondeka aide les utilisateurs à déplacer des fonds PayPal éligibles vers des portefeuilles Mobile Money pris en charge, selon la vérification, les limites et la disponibilité.',
      },
      {
        q: 'Ai-je besoin d’un compte Fondeka ?',
        a: 'Oui. Vous avez besoin d’un compte Fondeka et pouvez devoir compléter des vérifications d’identité, de transaction et de conformité avant le traitement du retrait.',
      },
    ],
  },
};

export default function Page() {
  const { lang } = useI18n();
  const content = copy[lang] || copy.en;

  return (
    <main>
      <section className="section overflow-hidden bg-white">
        <div className="container-pad grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="min-w-0">
            <p className="kicker">{content.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-fondeka-dark md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
              {content.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.proof.map((item) => (
                <span key={item} className="rounded-full border border-fondeka-dark/10 bg-fondeka-light px-4 py-2 text-sm font-bold text-fondeka-dark">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <DownloadAppButton variant="hero" ctaLabel={content.primary} />
              <a href={`mailto:info@fondeka.com?subject=PayPal%20withdrawal%20to%20Mobile%20Money`} className="btn btn-secondary w-fit">
                {content.secondary}
              </a>
            </div>
          </div>

          <div className="elevate-hero min-w-0">
            <div className="hero-sheen rounded-2xl border border-fondeka-dark/10 bg-gradient-to-br from-white via-fondeka-light to-[#eef6ff] p-5 shadow-[0_20px_42px_rgba(27,67,50,0.12)]">
              <div className="rounded-2xl bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-fondeka-green">PayPal</p>
                    <p className="mt-1 text-sm font-semibold text-gray-600">Withdrawal request</p>
                  </div>
                  <span className="rounded-full bg-fondeka-light px-3 py-1 text-xs font-bold text-fondeka-dark">Congo</span>
                </div>
                <div className="space-y-4 py-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">From</p>
                    <p className="text-lg font-extrabold text-fondeka-dark">PayPal balance</p>
                  </div>
                  <div className="h-2 rounded-full bg-fondeka-light">
                    <div className="h-2 w-3/4 rounded-full bg-fondeka-green" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">To</p>
                    <p className="text-lg font-extrabold text-fondeka-dark">Mobile Money wallet</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-fondeka-dark">
                  <span className="rounded-xl bg-gray-50 px-2 py-3">M-Pesa</span>
                  <span className="rounded-xl bg-gray-50 px-2 py-3">Airtel</span>
                  <span className="rounded-xl bg-gray-50 px-2 py-3">Orange</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-pad grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card">
            <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">{content.introTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">{content.introBody}</p>
          </article>
          <article className="card">
            <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">{content.stepsTitle}</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-gray-700 md:grid-cols-2">
              {content.steps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-fondeka-dark/10 bg-white px-4 py-3">
                  <span className="mr-2 font-extrabold text-fondeka-green">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="kicker">Mobile Money</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">{content.usersTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.users.map((item) => (
              <article key={item.title} className="card">
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-pad grid gap-4 lg:grid-cols-2">
          <article className="card">
            <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">{content.keywordsTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">{content.keywordsBody}</p>
          </article>
          <article className="card border-fondeka-green/25 bg-fondeka-light/50">
            <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">{content.noteTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">{content.note}</p>
          </article>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">{content.faqTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.faqs.map((item) => (
              <article key={item.q} className="card">
                <h3 className="text-lg font-extrabold tracking-tight text-fondeka-dark">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
