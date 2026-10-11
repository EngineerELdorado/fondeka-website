'use client';

import Link from 'next/link';
import DownloadAppButton from '@/components/DownloadAppButton';
import { useI18n } from '@/lib/i18n';
import { commerceLabels } from '@/lib/commerce';

export default function CommerceDetailPage({ page }) {
  const { lang } = useI18n();
  const l = lang === 'fr' ? 'fr' : 'en';

  return (
    <main>
      <section className="gradient-hero section">
        <div className="container-pad max-w-5xl">
          <Link href={`/commerce?lang=${l}`} className="text-sm font-semibold text-fondeka-green">
            ← Fondeka Commerce
          </Link>
          <p className="kicker mt-8">{page.kicker[l]}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{page.title[l]}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">{page.intro[l]}</p>
          <DownloadAppButton className="mt-7 w-fit" ctaLabel={l === 'fr' ? 'Installer Fondeka' : 'Install Fondeka'} trackingId="commerce-detail-cta" />
        </div>
      </section>

      <section className="section">
        <div className="container-pad">
          <h2 className="h">{l === 'fr' ? 'Comment ça marche' : 'How it works'}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {page.steps[l].map((step, index) => (
              <li key={step} className="card border border-fondeka-mint/40">
                <span className="text-sm font-extrabold text-fondeka-green">0{index + 1}</span>
                <p className="mt-3 font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-fondeka-light">
        <div className="container-pad grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="kicker">Fondeka Commerce</p>
            <h2 className="h mt-2">{l === 'fr' ? 'L’essentiel, au même endroit' : 'The essentials, in one place'}</h2>
          </div>
          <ul className="grid gap-3">
            {page.details[l].map((detail) => <li key={detail} className="card text-gray-700">✓ {detail}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-pad">
          <h2 className="text-2xl font-bold">{l === 'fr' ? 'Continuer à découvrir' : 'Keep exploring'}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {page.next.map((slug) => (
              <Link key={slug} href={`/commerce/${slug}?lang=${l}`} className="card card-hover border border-gray-100 font-semibold">
                {commerceLabels[slug][l]} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
