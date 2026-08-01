'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { cardGuideOrder, cardGuides } from '@/lib/cardGuides';

export default function Page(){
  const { t, lang } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const platformLabel = (slug) => ({
    twitter: 'Twitter/X',
    'google-play': 'Google Play',
    spotify: 'Spotify',
    apple: 'Apple',
    alibaba: 'Alibaba',
  }[slug] || slug);
  const cardSeo = {
    en: {
      kicker: 'Online payment cards',
      title: 'Virtual cards, prepaid cards, Visa and Mastercard payment options',
      body:
        'Fondeka helps users in Congo and supported African markets create virtual cards for online payments, app stores, subscriptions, shopping, travel, and digital services. Use the app to manage supported prepaid card controls, Mastercard virtual cards, and Visa or Mastercard payment options where available.',
      items: [
        {
          title: 'Virtual card for subscriptions',
          body: 'Pay for services such as Google Play, Apple, Spotify, Twitter/X Premium, Alibaba, and other international platforms where card payments are accepted.',
        },
        {
          title: 'Prepaid card controls',
          body: 'Manage card limits, freeze or unfreeze cards, and keep a clearer view of online card spending from the Fondeka app.',
        },
        {
          title: 'Visa and Mastercard searches',
          body: 'Fondeka is relevant for people looking for a Visa card, Mastercard, virtual prepaid card, or digital bank card experience in Congo and Africa.',
        },
      ],
    },
    fr: {
      kicker: 'Cartes de paiement en ligne',
      title: 'Cartes virtuelles, cartes prépayées, Visa et Mastercard',
      body:
        "Fondeka aide les utilisateurs au Congo et dans les marchés africains pris en charge à créer des cartes virtuelles pour les paiements en ligne, app stores, abonnements, shopping, voyage et services digitaux. Depuis l'app, vous pouvez gérer les contrôles de cartes prépayées prises en charge, les cartes virtuelles Mastercard et les options Visa ou Mastercard quand elles sont disponibles.",
      items: [
        {
          title: 'Carte virtuelle pour abonnements',
          body: 'Payez des services comme Google Play, Apple, Spotify, Twitter/X Premium, Alibaba et d’autres plateformes internationales quand les paiements par carte sont acceptés.',
        },
        {
          title: 'Contrôles de carte prépayée',
          body: "Gérez les limites, gelez ou dégelez vos cartes, et gardez une vue plus claire de vos dépenses en ligne depuis l'app Fondeka.",
        },
        {
          title: 'Recherches Visa et Mastercard',
          body: 'Fondeka est pertinent pour les personnes qui cherchent une carte Visa, Mastercard, carte virtuelle prépayée ou carte de banque digitale au Congo et en Afrique.',
        },
      ],
    },
  };
  const seo = cardSeo[lang] || cardSeo.en;

  return (
    <>
      <ProductPageTemplate
        t={t}
        title={t('product.cards.title')}
        body={t('product.cards.body')}
        status="Available"
        icon={icon}
        accent="gold"
        mode="app"
        highlights={[t('product.cards.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
        points={[t('product.cards.feature.app'), t('product.page.cards.point2'), t('product.page.cards.point3')]}
        ctaLabel={t('product.page.cta.app')}
      />
      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="kicker">{seo.kicker}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">
              {seo.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">{seo.body}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {seo.items.map((item) => (
              <section key={item.title} className="card">
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="mb-6 max-w-2xl">
            <p className="kicker">{lang === 'fr' ? 'Guides cartes' : 'Card guides'}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">
              {lang === 'fr'
                ? 'Utiliser votre carte Fondeka sur vos plateformes'
                : 'Use your Fondeka card on popular platforms'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {lang === 'fr'
                ? 'Des guides localisés pour configurer et payer avec votre carte virtuelle Fondeka.'
                : 'Localized guides for setting up and paying with your Fondeka virtual card.'}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cardGuideOrder.map((slug) => {
              const guide = cardGuides[slug];
              const copy = guide[lang] || guide.en;
              return (
                <Link key={slug} href={`/cards/${slug}?lang=${lang}`} className="card card-hover block">
                  <img src={guide.logo || guide.icon} alt={`${platformLabel(slug)} logo`} className="h-16 w-16 rounded-2xl object-contain" />
                  <h3 className="mt-4 text-xl font-extrabold tracking-tight text-fondeka-dark">
                    {platformLabel(slug)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.summary}</p>
                  <span className="mt-4 inline-flex text-sm font-bold text-fondeka-green">
                    {lang === 'fr' ? 'Voir le guide' : 'View guide'}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
