'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1620310194681-1a1dfbec20b8?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const actions = [
    {
      title: t('product.crypto.action.buy.title'),
      body: t('product.crypto.action.buy.body'),
    },
    {
      title: t('product.crypto.action.sell.title'),
      body: t('product.crypto.action.sell.body'),
    },
    {
      title: t('product.crypto.action.swap.title'),
      body: t('product.crypto.action.swap.body'),
    },
    {
      title: t('product.crypto.action.send.title'),
      body: t('product.crypto.action.send.body'),
    },
    {
      title: t('product.crypto.action.receive.title'),
      body: t('product.crypto.action.receive.body'),
    },
    {
      title: t('product.crypto.action.hold.title'),
      body: t('product.crypto.action.hold.body'),
    },
  ];
  const mobileMoneyPoints = [
    t('product.crypto.mobileMoney.point1'),
    t('product.crypto.mobileMoney.point2'),
    t('product.crypto.mobileMoney.point3'),
    t('product.crypto.mobileMoney.point4'),
  ];
  const countryTerms = [
    'crypto app Congo',
    'cryptos app RDC',
    'buy crypto with Mobile Money',
    'sell crypto to Mobile Money',
    'crypto Mobile Money Africa',
    'buy Bitcoin Congo',
    'buy USDT Congo',
    'send crypto Africa',
  ];

  return (
    <>
      <ProductPageTemplate
        t={t}
        title={t('product.crypto.title')}
        body={t('product.crypto.body')}
        status="Available"
        icon={icon}
        accent="plum"
        mode="app"
        highlights={[t('product.crypto.feature.app'), t('product.feature.supportedMethods'), t('download.proof.mobile')]}
        points={[t('product.crypto.feature.app'), t('product.page.crypto.point2'), t('product.page.crypto.point3')]}
        ctaLabel={t('product.page.cta.app')}
      />

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="kicker">{t('product.crypto.seo.kicker')}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">
              {t('product.crypto.seo.title')}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">
              {t('product.crypto.seo.body')}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {actions.map((action) => (
              <article key={action.title} className="card">
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{action.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{action.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[28px] border border-fondeka-dark/10 bg-fondeka-dark p-6 text-white md:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
                {t('product.crypto.mobileMoney.kicker')}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-4xl">
                {t('product.crypto.mobileMoney.title')}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/80 md:text-base">
                {t('product.crypto.mobileMoney.body')}
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                {mobileMoneyPoints.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <aside className="card">
              <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">
                {t('product.crypto.search.title')}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {t('product.crypto.search.body')}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {countryTerms.map((term) => (
                  <span key={term} className="rounded-full border border-fondeka-dark/10 bg-white px-3 py-1.5 text-xs font-bold text-fondeka-dark">
                    {term}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-gray-500">
                {t('product.crypto.search.note')}
              </p>
            </aside>
          </div>

          <section className="mt-8">
            <div className="card">
              <p className="kicker">{t('product.crypto.faq.kicker')}</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark">
                {t('product.crypto.faq.title')}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="font-semibold text-fondeka-dark">{t('product.crypto.faq.q1')}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.crypto.faq.a1')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-fondeka-dark">{t('product.crypto.faq.q2')}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.crypto.faq.a2')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-fondeka-dark">{t('product.crypto.faq.q3')}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.crypto.faq.a3')}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
