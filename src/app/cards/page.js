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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
