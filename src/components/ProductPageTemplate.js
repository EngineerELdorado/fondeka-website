'use client';
import DownloadAppButton from '@/components/DownloadAppButton';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function ProductPageTemplate({
  t,
  title,
  body,
  status,
  icon,
  accent = 'emerald',
  mode = 'app',
  highlights = [],
  points = [],
  ctaHref = '',
  ctaLabel = '',
  visualFit = 'cover',
}){
  const themes = {
    emerald: {
      hero: 'from-white via-fondeka-light/70 to-white border-fondeka-dark/15',
      chip: 'text-fondeka-dark bg-white border-fondeka-dark/10',
      point: 'text-fondeka-dark bg-white/85 border-fondeka-dark/10',
      visual: 'shadow-[0_20px_42px_rgba(27,67,50,0.12)]',
    },
    gold: {
      hero: 'from-[#fff7e8] via-white to-[#fff1cc] border-[#d9b562]/20',
      chip: 'text-[#7a5a10] bg-white border-[#d9b562]/20',
      point: 'text-[#7a5a10] bg-white/90 border-[#d9b562]/20',
      visual: 'shadow-[0_20px_42px_rgba(157,113,9,0.14)]',
    },
    blue: {
      hero: 'from-[#eef6ff] via-white to-[#dfefff] border-[#2c6cb0]/15',
      chip: 'text-[#1d4f86] bg-white border-[#2c6cb0]/15',
      point: 'text-[#1d4f86] bg-white/90 border-[#2c6cb0]/15',
      visual: 'shadow-[0_20px_42px_rgba(29,79,134,0.14)]',
    },
    rose: {
      hero: 'from-[#fff1f3] via-white to-[#ffe3e8] border-[#b84d65]/15',
      chip: 'text-[#8c2d47] bg-white border-[#b84d65]/15',
      point: 'text-[#8c2d47] bg-white/90 border-[#b84d65]/15',
      visual: 'shadow-[0_20px_42px_rgba(140,45,71,0.14)]',
    },
    slate: {
      hero: 'from-[#f3f6f8] via-white to-[#e8eef2] border-[#486173]/15',
      chip: 'text-[#2f495a] bg-white border-[#486173]/15',
      point: 'text-[#2f495a] bg-white/90 border-[#486173]/15',
      visual: 'shadow-[0_20px_42px_rgba(47,73,90,0.14)]',
    },
    plum: {
      hero: 'from-[#f8f0ff] via-white to-[#eee2ff] border-[#6e43a3]/15',
      chip: 'text-[#5b348d] bg-white border-[#6e43a3]/15',
      point: 'text-[#5b348d] bg-white/90 border-[#6e43a3]/15',
      visual: 'shadow-[0_20px_42px_rgba(91,52,141,0.14)]',
    },
  };
  const theme = themes[accent] || themes.emerald;
  const visualClass = visualFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="h">{title}</h1>
            <ProductStatusBadge status={status} />
          </div>
          <p className="mt-3 text-gray-700">{body}</p>

          <div className={`mt-6 rounded-[28px] border bg-gradient-to-br p-5 ${theme.hero} shadow-[0_18px_38px_rgba(27,67,50,0.08)]`}>
            <div className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] ${theme.chip}`}>
              {mode === 'app' ? t('product.page.app.kicker') : t('product.page.business.kicker')}
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-fondeka-dark">
              {mode === 'app' ? t('product.page.app.title') : t('product.page.business.title')}
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              {mode === 'app' ? t('product.page.app.body') : t('product.page.business.body')}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${theme.point}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card mt-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.page.points.title')}</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {points.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.page.next.title')}</h2>
            <p className="mt-3 text-sm text-gray-700">
              {mode === 'app' ? t('product.page.next.app') : t('product.page.next.business')}
            </p>
            {mode === 'app' ? (
              <DownloadAppButton className="mt-5" variant="hero" ctaLabel={ctaLabel || t('product.page.cta.app')} />
            ) : (
              <a href={ctaHref} className="btn btn-primary mt-5 w-fit">{ctaLabel || t('product.page.cta.business')}</a>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <div className="elevate-hero">
            <div className={`hero-sheen rounded-2xl border ${theme.visual}`}>
              <img
                src={icon}
                alt={title}
                className={`w-full h-80 ${visualClass} rounded-2xl`}
              />
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.page.experience.title')}</h3>
            <p className="mt-3 text-sm text-gray-700">
              {mode === 'app' ? t('product.page.experience.app') : t('product.page.experience.business')}
            </p>
          </div>

          <div className="card mt-4">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.page.fit.title')}</h3>
            <p className="mt-3 text-sm text-gray-700">
              {mode === 'app' ? t('product.page.fit.app') : t('product.page.fit.business')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
