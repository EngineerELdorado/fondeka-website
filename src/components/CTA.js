import DownloadAppButton from "@/components/DownloadAppButton";
import { useI18n } from "@/lib/i18n";

export default function CTA(){
  const { t } = useI18n();

  return (
    <section id="download" className="section bg-fondeka-dark text-white">
      <div className="container-pad grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="badge bg-white/10 text-white">{t('download.section.kicker') || 'Download the app'}</div>
          <h2 className="h mt-4">{t('download.section.title') || 'Put Fondeka in their pocket, not just their browser'}</h2>
          <p className="mt-3 text-white/80">{t('download.section.body') || 'Cards, bills, crypto, airtime, loans and payments convert better when the next step is install, not more scrolling.'}</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{t('download.section.point1') || 'Open your account free'}</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{t('download.section.point2') || 'Best mobile experience'}</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{t('download.section.point3') || 'Start in minutes'}</div>
          </div>
        </div>
        <div className="flex gap-3 md:justify-end">
          <DownloadAppButton variant="hero" ctaLabel={t('download.section.cta') || 'Download Fondeka now'} />
        </div>
      </div>
    </section>
  );
}
