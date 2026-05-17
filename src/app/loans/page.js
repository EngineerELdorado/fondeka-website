'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductStatusBadge from '@/components/ProductStatusBadge';
import DownloadAppButton from '@/components/DownloadAppButton';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;
  const loanSteps = [
    t('product.loans.how.steps.1'),
    t('product.loans.how.steps.2'),
    t('product.loans.how.steps.3'),
    t('product.loans.how.steps.4'),
    t('product.loans.how.steps.5'),
    t('product.loans.how.steps.6'),
  ];
  const loanBenefits = [
    t('product.loans.benefits.1'),
    t('product.loans.benefits.2'),
    t('product.loans.benefits.3'),
    t('product.loans.benefits.4'),
  ];
  const loanHighlights = [
    t('product.loans.highlight.1'),
    t('product.loans.highlight.2'),
    t('product.loans.highlight.3'),
  ];

  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="h">{t('product.loans.title')}</h1>
            <ProductStatusBadge status="Available" />
          </div>
          <p className="mt-3 text-gray-700">{t('product.loans.body')}</p>
          <p className="mt-3 text-gray-700">{t('product.loans.summary')}</p>

          <div className="mt-6 rounded-[28px] border border-fondeka-dark/15 bg-gradient-to-br from-white via-fondeka-light/70 to-white p-5 shadow-[0_18px_38px_rgba(27,67,50,0.10)]">
            <div className="inline-flex items-center rounded-full border border-fondeka-dark/10 bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-fondeka-dark">
              {t('product.loans.hero.kicker')}
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.hero.title')}</h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-700">{t('product.loans.hero.body')}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {loanHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-fondeka-dark/10 bg-white/85 px-4 py-3 text-sm font-semibold text-fondeka-dark">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card mt-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.about.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.loans.about.body')}</p>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.how.title')}</h2>
            <ol className="mt-4 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {loanSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="card mt-4 border-fondeka-dark/15 bg-fondeka-dark text-white shadow-[0_14px_30px_rgba(27,67,50,0.20)]">
            <h2 className="text-xl font-extrabold tracking-tight text-white">{t('product.loans.repayment.title')}</h2>
            <p className="mt-3 text-sm text-white/85">{t('product.loans.repayment.body')}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white">{t('product.loans.repayment.panel.remaining.title')}</h3>
                <p className="mt-2 text-sm text-white/80">{t('product.loans.repayment.panel.remaining.body')}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white">{t('product.loans.repayment.panel.progress.title')}</h3>
                <p className="mt-2 text-sm text-white/80">{t('product.loans.repayment.panel.progress.body')}</p>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.benefits.title')}</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {loanBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.why.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">{t('product.loans.why.body')}</p>
          </div>

          <div className="mt-6">
            <DownloadAppButton variant="hero" ctaLabel={t('product.loans.cta')} />
            <p className="mt-4 text-xs text-gray-500">{t('product.loans.note')}</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border shadow-[0_20px_42px_rgba(27,67,50,0.12)]">
              <img
                src={icon}
                alt={t('product.loans.title')}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="card mt-6 border-fondeka-dark/15 bg-gradient-to-br from-white to-fondeka-light/50">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.tracking.title')}</h3>
            <p className="mt-3 text-sm text-gray-700">{t('product.loans.tracking.body')}</p>
            <div className="mt-4 rounded-2xl border border-fondeka-dark/10 bg-white/85 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-fondeka-dark">{t('product.loans.tracking.mock.label')}</span>
                <span className="rounded-full bg-fondeka-light px-3 py-1 text-xs font-semibold text-fondeka-dark">{t('product.loans.tracking.mock.status')}</span>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>{t('product.loans.tracking.mock.remaining')}</span>
                    <span className="font-semibold text-fondeka-dark">{t('product.loans.tracking.mock.remainingValue')}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-fondeka-light">
                    <div className="h-2 w-[62%] rounded-full bg-fondeka-dark" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{t('product.loans.tracking.mock.next')}</span>
                  <span className="font-semibold text-fondeka-dark">{t('product.loans.tracking.mock.nextValue')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.funds.title')}</h3>
            <p className="mt-3 text-sm text-gray-700">{t('product.loans.funds.body')}</p>
          </div>

          <div className="card mt-4">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.loans.faq.title')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li><span className="font-semibold text-fondeka-dark">{t('product.loans.faq.q1')}</span> {t('product.loans.faq.a1')}</li>
              <li><span className="font-semibold text-fondeka-dark">{t('product.loans.faq.q2')}</span> {t('product.loans.faq.a2')}</li>
              <li><span className="font-semibold text-fondeka-dark">{t('product.loans.faq.q3')}</span> {t('product.loans.faq.a3')}</li>
              <li><span className="font-semibold text-fondeka-dark">{t('product.loans.faq.q4')}</span> {t('product.loans.faq.a4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
