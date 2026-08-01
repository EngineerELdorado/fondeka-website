'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const actions = [
    { title: t('product.esim.action.buy.title'), body: t('product.esim.action.buy.body') },
    { title: t('product.esim.action.activate.title'), body: t('product.esim.action.activate.body') },
    { title: t('product.esim.action.topup.title'), body: t('product.esim.action.topup.body') },
    { title: t('product.esim.action.manage.title'), body: t('product.esim.action.manage.body') },
  ];
  const useCases = [
    t('product.esim.usecase.travel'),
    t('product.esim.usecase.business'),
    t('product.esim.usecase.students'),
    t('product.esim.usecase.backup'),
  ];
  const searchTerms = [
    'eSIM Congo',
    'eSIM RDC',
    'eSIM Africa',
    'travel eSIM Africa',
    'buy eSIM data',
    'eSIM app Congo',
    'international travel eSIM',
    'mobile data for travel Africa',
  ];

  return (
    <>
      <ProductPageTemplate
        t={t}
        title={t('product.esim.title')}
        body={t('product.esim.body')}
        status="Available"
        icon={icon}
        accent="slate"
        mode="app"
        highlights={[t('product.esim.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
        points={[t('product.esim.feature.app'), t('product.page.esim.point2'), t('product.page.esim.point3')]}
        ctaLabel={t('product.page.cta.app')}
      />

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="kicker">{t('product.esim.seo.kicker')}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark md:text-4xl">
              {t('product.esim.seo.title')}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-700 md:text-base">
              {t('product.esim.seo.body')}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <article key={action.title} className="card">
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{action.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{action.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <section className="rounded-[28px] border border-fondeka-dark/10 bg-[#f3f6f8] p-6 md:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-fondeka-dark/70">
                {t('product.esim.usecase.kicker')}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-fondeka-dark">
                {t('product.esim.usecase.title')}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">{t('product.esim.usecase.body')}</p>
              <ul className="mt-5 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                {useCases.map((item) => (
                  <li key={item} className="rounded-2xl border border-fondeka-dark/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <aside className="card">
              <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.esim.compat.title')}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">{t('product.esim.compat.body')}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {searchTerms.map((term) => (
                  <span key={term} className="rounded-full border border-fondeka-dark/10 bg-white px-3 py-1.5 text-xs font-bold text-fondeka-dark">
                    {term}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-gray-500">{t('product.esim.compat.note')}</p>
            </aside>
          </div>

          <section className="card mt-8">
            <p className="kicker">{t('product.esim.faq.kicker')}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fondeka-dark">{t('product.esim.faq.title')}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-fondeka-dark">{t('product.esim.faq.q1')}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.esim.faq.a1')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-fondeka-dark">{t('product.esim.faq.q2')}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.esim.faq.a2')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-fondeka-dark">{t('product.esim.faq.q3')}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{t('product.esim.faq.a3')}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
