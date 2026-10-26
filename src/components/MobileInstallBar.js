'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DownloadAppButton from '@/components/DownloadAppButton';
import { getDevicePlatform } from '@/lib/appStores';
import { useI18n } from '@/lib/i18n';

export default function MobileInstallBar() {
    const pathname = usePathname();
    const { t } = useI18n();
    const [platform, setPlatform] = useState('other');
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        setPlatform(getDevicePlatform());
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        let frameId = null;

        const syncVisibility = () => {
            frameId = null;
            const heroCta = document.querySelector('[data-download-button="hero-home-cta"]');
            if (!heroCta) {
                setShowBar(window.scrollY > 120);
                return;
            }

            const rect = heroCta.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            // Use the viewport: the header can scroll away with its overflow container.
            const heroIsVisible = rect.bottom > 0 && rect.top < viewportHeight;
            setShowBar(!heroIsVisible);
        };

        const scheduleSync = () => {
            if (frameId === null) frameId = window.requestAnimationFrame(syncVisibility);
        };

        scheduleSync();
        window.addEventListener('scroll', scheduleSync, { passive: true });
        window.addEventListener('resize', scheduleSync);

        return () => {
            if (frameId !== null) window.cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', scheduleSync);
            window.removeEventListener('resize', scheduleSync);
        };
    }, [pathname]);

    if (platform === 'other' || !showBar || pathname === '/open') {
        return null;
    }

    return (
        <aside className="mobile-install-bar md:hidden" aria-label={t('download.sticky.title')}>
            <div className="mobile-install-shell">
                <div className="flex w-full items-center gap-3">
                    <img src="/icon.svg" alt="" width="40" height="40" className="h-10 w-10 shrink-0 rounded-xl bg-white p-1" />
                    <div className="min-w-0">
                        <p className="text-base font-bold leading-snug text-white">{t('download.sticky.title')}</p>
                        <p className="mt-1 text-xs leading-snug text-fondeka-light">{t('download.sticky.body')}</p>
                    </div>
                </div>
                <DownloadAppButton
                    variant="sticky"
                    className="w-full"
                    ctaLabel={t('download.install.button')}
                    trackingId="sticky-install-cta"
                />
            </div>
        </aside>
    );
}
