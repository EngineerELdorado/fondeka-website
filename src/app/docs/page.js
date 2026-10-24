'use client';
import Image from 'next/image';
import { useI18n } from '../../lib/i18n';
import { businessAppUrl } from '@/lib/business';

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 shrink-0">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ type }) {
  const paths = {
    connect: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
    collect: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18m-13 5h4" /></>,
    payout: <><path d="M14 4h6v6m0-6-9 9" /><path d="M10 5H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-3" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-fondeka-green">
      {paths[type]}
    </svg>
  );
}

export default function Docs(){
  const { t } = useI18n();
  return (
    <main>
      <section className="gradient-hero py-14 md:py-20">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="kicker font-semibold">{t('docs.title')}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-fondeka-dark sm:text-5xl">
              {t('docs.hero.title')}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">{t('docs.subtitle')}</p>
            <a href={businessAppUrl} className="btn btn-primary mt-7 gap-3 px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fondeka-green">
              {t('common.cta.useApi')}
              <ArrowRight />
            </a>
          </div>
          <div className="min-w-0 rounded-[28px] border border-fondeka-mint/25 bg-white p-2 shadow-[0_20px_60px_rgba(13,31,20,0.08)]">
            <Image
              src="/illustrations/docs-developers.jpg"
              alt={t('docs.hero.alt')}
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 580px, (min-width: 768px) 720px, 100vw"
              priority
              className="h-auto w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-pad">
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">{t('docs.features.title')}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {['connect', 'collect', 'payout'].map((feature) => (
              <article key={feature} className="border-t border-fondeka-mint/30 pt-6">
                <FeatureIcon type={feature} />
                <h3 className="mt-4 text-lg font-semibold">{t(`docs.${feature}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t(`docs.${feature}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-pad">
          <div className="grid overflow-hidden rounded-[28px] bg-fondeka-dark md:grid-cols-2">
            <div className="flex items-center bg-fondeka-light">
              <Image
                src="/illustrations/docs-integration.jpg"
                alt={t('docs.integration.alt')}
                width={1536}
                height={1024}
                sizes="(min-width: 768px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-7 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-fondeka-mint">{t('docs.cta.kicker')}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{t('docs.cta.title')}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{t('docs.cta.body')}</p>
              <a href={businessAppUrl} className="btn mt-6 gap-3 bg-white px-6 text-fondeka-dark hover:bg-fondeka-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {t('common.cta.useApi')}
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
