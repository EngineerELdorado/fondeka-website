'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const giftCardGroups = [
    {
      title: t('product.bills.giftcards.entertainment.title'),
      items: [
        'Netflix gift card',
        'Spotify gift card',
        'Apple / App Store gift card',
        'Google Play gift card',
        'Amazon gift card',
      ],
    },
    {
      title: t('product.bills.giftcards.gaming.title'),
      items: [
        'PlayStation gift card',
        'Xbox gift card',
        'Nintendo gift card',
        'Mortal Kombat 11 Nintendo Switch US gift card',
        'Minecraft gift card',
        'Razer Gold gift card',
        'Steam gift card',
        'PUBG Mobile gift card',
        'PUBG New State gift card',
        'Roblox gift card',
        'NetDragon gift card',
      ],
    },
    {
      title: t('product.bills.giftcards.travel.title'),
      items: [
        'Uber gift card',
        'Hotels.com gift card',
        'Global Hotel Card',
        t('product.bills.giftcards.travel.airbnb'),
      ],
    },
  ];

  return (
    <>
      <ProductPageTemplate
        t={t}
        title={t('product.giftcards.title')}
        body={t('product.giftcards.body')}
        status="Available"
        icon={icon}
        accent="rose"
        mode="app"
        highlights={[t('product.giftcards.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
        points={[t('product.giftcards.feature.app'), t('product.page.giftcards.point2'), t('product.page.giftcards.point3')]}
        ctaLabel={t('product.page.cta.app')}
      />

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="kicker">{t('product.giftcards.seo.kicker')}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">
              {t('product.giftcards.seo.title')}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">
              {t('product.giftcards.seo.body')}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {giftCardGroups.map((group) => (
              <section key={group.title} className="card">
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-500">{t('product.bills.giftcards.note')}</p>
        </div>
      </section>
    </>
  );
}
