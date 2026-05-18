'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductStatusBadge from '@/components/ProductStatusBadge';
import DownloadAppButton from '@/components/DownloadAppButton';

export default function Page(){
  const { t, lang } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://plus.unsplash.com/premium_photo-1676679689999-bee60ae55f1f?q=80&w=2532';
  const icon = sp.get('icon') || fallbackIcon;
  const personalOpenedSteps = [
    t('product.savings.personal.opened.steps.1'),
    t('product.savings.personal.opened.steps.2'),
    t('product.savings.personal.opened.steps.3'),
    t('product.savings.personal.opened.steps.4'),
  ];
  const personalOpenedBenefits = [
    t('product.savings.personal.opened.benefits.1'),
    t('product.savings.personal.opened.benefits.2'),
    t('product.savings.personal.opened.benefits.3'),
    t('product.savings.personal.opened.benefits.4'),
  ];
  const personalLockedSteps = [
    t('product.savings.personal.locked.steps.1'),
    t('product.savings.personal.locked.steps.2'),
    t('product.savings.personal.locked.steps.3'),
    t('product.savings.personal.locked.steps.4'),
  ];
  const personalLockedBenefits = [
    t('product.savings.personal.locked.benefits.1'),
    t('product.savings.personal.locked.benefits.2'),
    t('product.savings.personal.locked.benefits.3'),
    t('product.savings.personal.locked.benefits.4'),
  ];
  const likelembaSteps = [
    t('product.savings.likelemba.steps.1'),
    t('product.savings.likelemba.steps.2'),
    t('product.savings.likelemba.steps.3'),
    t('product.savings.likelemba.steps.4'),
    t('product.savings.likelemba.steps.5'),
  ];
  const likelembaBenefits = [
    t('product.savings.likelemba.benefits.1'),
    t('product.savings.likelemba.benefits.2'),
    t('product.savings.likelemba.benefits.3'),
    t('product.savings.likelemba.benefits.4'),
  ];
  const avecSteps = [
    t('product.savings.avec.steps.1'),
    t('product.savings.avec.steps.2'),
    t('product.savings.avec.steps.3'),
    t('product.savings.avec.steps.4'),
    t('product.savings.avec.steps.5'),
  ];
  const avecBenefits = [
    t('product.savings.avec.benefits.1'),
    t('product.savings.avec.benefits.2'),
    t('product.savings.avec.benefits.3'),
    t('product.savings.avec.benefits.4'),
  ];
  const avecGovernancePoints = [
    t('product.savings.avec.governance.point.1'),
    t('product.savings.avec.governance.point.2'),
    t('product.savings.avec.governance.point.3'),
    t('product.savings.avec.governance.point.4'),
  ];
  const videoLinks = {
    personal: 'https://youtube.com/shorts/E7HvzMzB7tQ',
    likelemba: 'https://youtube.com/shorts/PQrA-T3u2Kg',
    avec: 'https://youtube.com/shorts/XWqJGPvtCyw',
  };
  const toEmbedUrl = (url) => url.replace('https://youtube.com/shorts/', 'https://www.youtube.com/embed/');
  const videos = {
    personal: toEmbedUrl(videoLinks.personal),
    likelemba: toEmbedUrl(videoLinks.likelemba),
    avec: toEmbedUrl(videoLinks.avec),
  };

  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="h">{t('product.savings.title')}</h1>
            <ProductStatusBadge status="Coming soon" />
          </div>

          <p className="mt-3 text-gray-700">{t('product.savings.body')}</p>
          <p className="mt-3 text-gray-700">{t('product.savings.summary')}</p>

          <div className="card mt-6">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.categories.title')}</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li><span className="font-extrabold uppercase tracking-[0.14em] text-fondeka-dark">{t('product.savings.categories.label.personal')}</span> {t('product.savings.categories.i1')}</li>
              <li><span className="font-extrabold uppercase tracking-[0.14em] text-fondeka-dark">{t('product.savings.categories.label.opened')}</span> {t('product.savings.categories.i2')}</li>
              <li><span className="font-extrabold uppercase tracking-[0.14em] text-fondeka-dark">{t('product.savings.categories.label.locked')}</span> {t('product.savings.categories.i3')}</li>
              <li><span className="font-extrabold uppercase tracking-[0.14em] text-fondeka-dark">{t('product.savings.categories.label.group')}</span> {t('product.savings.categories.i4')}</li>
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.personal.title')}</h2>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.personal.body')}</p>
          </div>

          <div className="card mt-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.personal.video.title')}</h3>
                <p className="mt-2 text-sm text-gray-700">{t('product.savings.personal.video.body')}</p>
              </div>
              <a
                href={videoLinks.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-fondeka-dark underline underline-offset-4"
              >
                {t('product.savings.video.watchOnYoutube')}
              </a>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border bg-black aspect-[9/16] max-w-xs">
              <iframe
                src={videos.personal}
                title={t('product.savings.personal.video.title')}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.personal.opened.title')}</h2>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.personal.opened.subtitle')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.personal.opened.about')}</p>
            <h3 className="mt-4 font-semibold text-sm">{t('product.savings.common.how')}</h3>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {personalOpenedSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h3 className="mt-4 font-semibold text-sm">{t('product.savings.common.benefits')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {personalOpenedBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-700">{t('product.savings.personal.opened.interest')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.personal.opened.withdrawal')}</p>
          </div>

          <div className="card mt-4">
            <h2 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.personal.locked.title')}</h2>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.personal.locked.subtitle')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.personal.locked.about')}</p>
            <h3 className="mt-4 font-semibold text-sm">{t('product.savings.common.how')}</h3>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {personalLockedSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h3 className="mt-4 font-semibold text-sm">{t('product.savings.common.benefits')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {personalLockedBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-700">{t('product.savings.personal.locked.interest')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.personal.locked.withdrawal')}</p>
          </div>
          <DownloadAppButton className="mt-6 hidden md:block" variant="hero" ctaLabel={t('product.savings.cta')} />
        </div>

        <div className="min-w-0">
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border">
              <img
                src={icon}
                alt={t('product.savings.title')}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.likelemba.title')}</h3>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.likelemba.subtitle')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.likelemba.about')}</p>
            <div className="mt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-fondeka-dark">{t('product.savings.likelemba.video.title')}</h4>
                  <p className="mt-1 text-sm text-gray-700">{t('product.savings.likelemba.video.body')}</p>
                </div>
                <a
                  href={videoLinks.likelemba}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-fondeka-dark underline underline-offset-4"
                >
                  {t('product.savings.video.watchOnYoutube')}
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border bg-black aspect-[9/16] max-w-xs">
                <iframe
                  src={videos.likelemba}
                  title={t('product.savings.likelemba.video.title')}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <h4 className="mt-4 font-semibold text-sm">{t('product.savings.common.how')}</h4>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {likelembaSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h4 className="mt-4 font-semibold text-sm">{t('product.savings.common.benefits')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {likelembaBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card mt-4 border-fondeka-dark/20 bg-gradient-to-br from-fondeka-light via-white to-fondeka-light/50 shadow-[0_18px_40px_rgba(27,67,50,0.10)]">
            <div className="inline-flex items-center rounded-full border border-fondeka-dark/15 bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-fondeka-dark">
              {t('product.savings.avec.highlight')}
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.avec.title')}</h3>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.avec.subtitle')}</p>
            <p className="mt-3 text-sm text-gray-700">{t('product.savings.avec.about')}</p>
            <div className="mt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-fondeka-dark">{t('product.savings.avec.video.title')}</h4>
                  <p className="mt-1 text-sm text-gray-700">{t('product.savings.avec.video.body')}</p>
                </div>
                <a
                  href={videoLinks.avec}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-fondeka-dark underline underline-offset-4"
                >
                  {t('product.savings.video.watchOnYoutube')}
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-fondeka-dark/20 bg-black aspect-[9/16] max-w-xs shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                <iframe
                  src={videos.avec}
                  title={t('product.savings.avec.video.title')}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <h4 className="mt-4 font-semibold text-sm">{t('product.savings.common.how')}</h4>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {avecSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h4 className="mt-4 font-semibold text-sm">{t('product.savings.common.benefits')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {avecBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-fondeka-dark/15 bg-fondeka-dark p-4 text-white shadow-[0_14px_32px_rgba(27,67,50,0.24)]">
              <h4 className="text-lg font-extrabold tracking-tight text-white">{t('product.savings.avec.governance.title')}</h4>
              <p className="mt-2 text-sm text-white/85">{t('product.savings.avec.governance.body')}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {avecGovernancePoints.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <h5 className="font-semibold text-white">{t('product.savings.avec.governance.admin.title')}</h5>
                  <p className="mt-2 text-sm text-white/80">{t('product.savings.avec.governance.admin.body')}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <h5 className="font-semibold text-white">{t('product.savings.avec.governance.member.title')}</h5>
                  <p className="mt-2 text-sm text-white/80">{t('product.savings.avec.governance.member.body')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <h3 className="text-xl font-extrabold tracking-tight text-fondeka-dark">{t('product.savings.compare.title')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• {t('product.savings.compare.i1')}</li>
              <li>• {t('product.savings.compare.i2')}</li>
              <li>• {t('product.savings.compare.i3')}</li>
              <li>• {t('product.savings.compare.i4')}</li>
            </ul>
          </div>

          <p className="mt-4 text-xs text-gray-500">{t('product.savings.note')}</p>
        </div>
      </div>
    </main>
  );
}
