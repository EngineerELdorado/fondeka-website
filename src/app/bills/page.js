'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductStatusBadge from '@/components/ProductStatusBadge';
import DownloadAppButton from '@/components/DownloadAppButton';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1554224155-3a589c0b1c60?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const steps = [
    t('product.bills.how.1'),
    t('product.bills.how.2'),
    t('product.bills.how.3'),
    t('product.bills.how.4'),
    t('product.bills.how.5'),
    t('product.bills.how.6'),
    t('product.bills.how.7'),
  ];
  const catalog = [
    { title: t('product.bills.catalog.tv.title'), body: t('product.bills.catalog.tv.body') },
    { title: t('product.bills.catalog.internet.title'), body: t('product.bills.catalog.internet.body') },
    { title: t('product.bills.catalog.electricity.title'), body: t('product.bills.catalog.electricity.body') },
    { title: t('product.bills.catalog.water.title'), body: t('product.bills.catalog.water.body') },
    { title: t('product.bills.catalog.mobile.title'), body: t('product.bills.catalog.mobile.body') },
    { title: t('product.bills.catalog.digital.title'), body: t('product.bills.catalog.digital.body') },
    { title: t('product.bills.catalog.gaming.title'), body: t('product.bills.catalog.gaming.body') },
    { title: t('product.bills.catalog.travel.title'), body: t('product.bills.catalog.travel.body') },
    { title: t('product.bills.catalog.utilities.title'), body: t('product.bills.catalog.utilities.body') },
  ];
  const tvFeatures = [
    t('product.bills.tv.1'),
    t('product.bills.tv.2'),
    t('product.bills.tv.3'),
    t('product.bills.tv.4'),
    t('product.bills.tv.5'),
  ];
  const trustPoints = [
    t('product.bills.trust.1'),
    t('product.bills.trust.2'),
    t('product.bills.trust.3'),
  ];

  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="h">{t('product.bills.title')}</h1>
            <ProductStatusBadge status="Available" />
          </div>
          <p className="mt-3 text-gray-700">{t('product.bills.body')}</p>
          <p className="mt-3 text-gray-700">{t('product.bills.intro')}</p>

          <div className="mt-6 rounded-[28px] border border-[#2c6cb0]/15 bg-gradient-to-br from-[#eef6ff] via-white to-[#dfefff] p-5 shadow-[0_18px_38px_rgba(29,79,134,0.10)]">
            <div className="inline-flex items-center rounded-full border border-[#2c6cb0]/15 bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1d4f86]">
              {t('product.bills.hero.kicker')}
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.hero.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.hero.body')}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#2c6cb0]/15 bg-white/90 px-4 py-3 text-sm font-semibold text-[#1d4f86]">
                {t('product.bills.highlight.1')}
              </div>
              <div className="rounded-2xl border border-[#2c6cb0]/15 bg-white/90 px-4 py-3 text-sm font-semibold text-[#1d4f86]">
                {t('product.bills.highlight.2')}
              </div>
              <div className="rounded-2xl border border-[#2c6cb0]/15 bg-white/90 px-4 py-3 text-sm font-semibold text-[#1d4f86]">
                {t('product.bills.highlight.3')}
              </div>
            </div>
          </div>

          <div className="card mt-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.how.title')}</h2>
            <ol className="mt-4 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.catalog.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.catalog.body')}</p>
            <div className="mt-5 grid gap-3">
              {catalog.map((item) => (
                <div key={item.title} className="rounded-2xl border border-fondeka-dark/10 bg-white p-4">
                  <h3 className="font-semibold text-fondeka-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">{t('product.bills.catalog.note')}</p>
          </div>

          <DownloadAppButton className="mt-6 hidden md:block" variant="hero" ctaLabel={t('product.page.cta.app')} />
        </div>

        <div className="min-w-0">
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border shadow-[0_20px_42px_rgba(29,79,134,0.14)]">
              <img
                src={icon}
                alt={t('product.bills.title')}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="card mt-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.tv.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.tv.body')}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {tvFeatures.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.mobile.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.mobile.body')}</p>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.digital.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.digital.body')}</p>
          </div>

          <div className="card mt-4 border-[#2c6cb0]/15 bg-[#eef6ff]">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.bills.trust.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.bills.trust.body')}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {trustPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
