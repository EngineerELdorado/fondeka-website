'use client';

import { useEffect, useState } from 'react';
import DownloadAppButton from '@/components/DownloadAppButton';
import { getDevicePlatform } from '@/lib/appStores';
import { useI18n } from '@/lib/i18n';

export default function MobileInstallBar() {
    const { t } = useI18n();
    const [platform, setPlatform] = useState('other');
    const [showBar, setShowBar] = useState(true);

    useEffect(() => {
        setPlatform(getDevicePlatform());
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const heroCta = document.querySelector('[data-download-button="hero-home-cta"]');
        if (!heroCta) {
            setShowBar(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowBar(!entry.isIntersecting);
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(heroCta);
        return () => observer.disconnect();
    }, []);

    if (platform === 'other' || !showBar) {
        return null;
    }

    return (
        <div className="mobile-install-bar md:hidden">
            <div className="mobile-install-shell">
                <div className="min-w-0">
                    <p className="mobile-install-eyebrow">
                        {t('download.sticky.eyebrow') || 'Start in the app'}
                    </p>
                    <p className="mobile-install-title">
                        {t('download.sticky.title') ||
                            'Download Fondeka before you leave'}
                    </p>
                </div>
                <DownloadAppButton
                    variant="sticky"
                    className="shrink-0"
                    ctaLabel={
                        t('download.sticky.button') || 'Install now'
                    }
                />
            </div>
        </div>
    );
}
