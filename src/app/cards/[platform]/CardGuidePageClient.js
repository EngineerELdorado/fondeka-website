'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { cardGuideOrder, cardGuides } from '@/lib/cardGuides';
import DownloadAppButton from '@/components/DownloadAppButton';

const accentClasses = {
  emerald: {
    hero: 'from-fondeka-light/80 via-white to-[#e7f5ec] border-fondeka-green/15',
    pill: 'bg-white text-fondeka-green border-fondeka-green/15',
    active: 'bg-fondeka-green text-white border-fondeka-green',
    index: 'bg-fondeka-light text-fondeka-green',
  },
  gold: {
    hero: 'from-[#fff7e8] via-white to-[#fff1cc] border-[#d9b562]/20',
    pill: 'bg-white text-[#7a5a10] border-[#d9b562]/20',
    active: 'bg-[#7a5a10] text-white border-[#7a5a10]',
    index: 'bg-[#fff1cc] text-[#7a5a10]',
  },
  slate: {
    hero: 'from-[#f3f6f8] via-white to-[#e8eef2] border-[#486173]/15',
    pill: 'bg-white text-[#2f495a] border-[#486173]/15',
    active: 'bg-[#2f495a] text-white border-[#2f495a]',
    index: 'bg-[#e8eef2] text-[#2f495a]',
  },
  blue: {
    hero: 'from-[#eef6ff] via-white to-[#dfefff] border-[#2c6cb0]/15',
    pill: 'bg-white text-[#1d4f86] border-[#2c6cb0]/15',
    active: 'bg-[#1d4f86] text-white border-[#1d4f86]',
    index: 'bg-[#dfefff] text-[#1d4f86]',
  },
};

export default function CardGuidePageClient({ platform }) {
  const { lang, t } = useI18n();
  const guide = cardGuides[platform] || cardGuides.twitter;
  const copy = guide[lang] || guide.en;
  const theme = accentClasses[guide.accent] || accentClasses.gold;
  const platformLabel = (slug) => ({
    twitter: 'Twitter/X',
    spotify: 'Spotify',
    apple: 'Apple',
    alibaba: 'Alibaba',
  }[slug] || slug);

  return (
    <main className="section">
      <div className="container-pad">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/cards?lang=${lang}`} className="rounded-full border border-fondeka-mint bg-white px-4 py-2 font-semibold text-fondeka-green">
            {lang === 'fr' ? 'Cartes' : 'Cards'}
          </Link>
          {cardGuideOrder.map((slug) => {
            const item = cardGuides[slug][lang] || cardGuides[slug].en;
            const active = slug === platform;
            return (
              <Link
                key={slug}
                href={`/cards/${slug}?lang=${lang}`}
                className={`rounded-full border px-4 py-2 font-semibold transition ${
                  active ? theme.active : 'border-fondeka-mint bg-white text-gray-700 hover:text-fondeka-green'
                }`}
              >
                {platformLabel(slug)}
              </Link>
            );
          })}
        </nav>

        <section className={`rounded-[28px] border bg-gradient-to-br p-6 md:p-9 ${theme.hero} shadow-[0_18px_38px_rgba(27,67,50,0.08)]`}>
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-widest ${theme.pill}`}>
                {copy.eyebrow}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-fondeka-dark md:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                {copy.summary}
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-soft">
              <img src={guide.icon} alt="" className="mx-auto h-36 w-full object-contain" />
              <p className="mt-4 text-sm leading-6 text-gray-700">{copy.intro}</p>
            </div>
          </div>
        </section>

        {(copy.address || copy.addressGroups) && (
          <section className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.address && (
              <AddressCard title={copy.addressTitle} lines={copy.address} />
            )}
            {(copy.addressGroups || []).map((group) => (
              <AddressCard key={group.title} title={group.title} lines={group.lines} />
            ))}
          </section>
        )}

        <section className="mt-8 space-y-6">
          {copy.sections.map((section) => (
            <GuideSection key={section.title} section={section} theme={theme} />
          ))}
        </section>

        <section className="card mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">
              {lang === 'fr' ? 'Besoin de votre carte Fondeka ?' : 'Need your Fondeka card?'}
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              {lang === 'fr'
                ? "Créez et gérez vos cartes virtuelles depuis l'app Fondeka."
                : 'Create and manage your virtual cards from the Fondeka app.'}
            </p>
          </div>
          <DownloadAppButton variant="hero" ctaLabel={t('cta.download')} />
        </section>
      </div>
    </main>
  );
}

function AddressCard({ title, lines }) {
  return (
    <div className="card">
      <h2 className="text-lg font-extrabold tracking-tight text-fondeka-dark">{title}</h2>
      <dl className="mt-4 space-y-2 text-sm text-gray-700">
        {lines.map((line) => {
          const [label, ...value] = line.split(':');
          return (
            <div key={line} className="flex gap-2">
              <dt className="min-w-24 font-semibold text-fondeka-dark">{value.length ? `${label}:` : ''}</dt>
              <dd>{value.length ? value.join(':').trim() : line}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

function GuideSection({ section, theme }) {
  return (
    <article className="card">
      <h2 className="text-2xl font-extrabold tracking-tight text-fondeka-dark">{section.title}</h2>
      {section.description && <p className="mt-3 text-sm leading-6 text-gray-700">{section.description}</p>}
      <div className="mt-6 space-y-5">
        {section.steps.map((step, index) => (
          <div key={`${section.title}-${index}`} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.6fr)] md:items-start">
            <div className="flex gap-4">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${theme.index}`}>
                {index + 1}
              </div>
              <div className="min-w-0">
                <p className="pt-1 text-sm leading-6 text-gray-700">{step.text}</p>
                {step.details && (
                  <dl className="mt-3 space-y-2 rounded-2xl border border-fondeka-mint/60 bg-fondeka-light/40 p-4 text-sm text-gray-700">
                    {step.details.map((line) => {
                      const [label, ...value] = line.split(':');
                      return (
                        <div key={line} className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                          <dt className="min-w-32 font-semibold text-fondeka-dark">{value.length ? `${label}:` : ''}</dt>
                          <dd>{value.length ? value.join(':').trim() : line}</dd>
                        </div>
                      );
                    })}
                  </dl>
                )}
              </div>
            </div>
            {step.image && (
              <div className="overflow-hidden rounded-2xl border border-fondeka-mint/60 bg-white">
                <img src={step.image} alt="" loading="lazy" className="h-auto max-h-[520px] w-full object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
