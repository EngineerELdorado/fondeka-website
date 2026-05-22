'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DownloadAppButton from '@/components/DownloadAppButton';
import { getDevicePlatform } from '@/lib/appStores';

export default function MobileInstallBar() {
    const pathname = usePathname();
    const [platform, setPlatform] = useState('other');
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        setPlatform(getDevicePlatform());
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        let frameId = null;

        const syncVisibility = () => {
            const heroCta = document.querySelector('[data-download-button="hero-home-cta"]');
            if (!heroCta) {
                setShowBar(false);
                return;
            }

            const rect = heroCta.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const isVisible = rect.bottom > 0 && rect.top < viewportHeight;
            setShowBar(!isVisible);
        };

        const startSync = () => {
            syncVisibility();
            window.addEventListener('scroll', syncVisibility, { passive: true });
            window.addEventListener('resize', syncVisibility);
        };

        frameId = window.requestAnimationFrame(startSync);

        return () => {
            if (frameId) window.cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', syncVisibility);
            window.removeEventListener('resize', syncVisibility);
        };
    }, [pathname]);

    if (platform === 'other' || !showBar) {
        return null;
    }

    return (
        <div className="mobile-install-bar md:hidden">
            <div className="mobile-install-shell">
                <DownloadAppButton
                    variant="sticky"
                    className="w-full"
                    ctaLabel="Install now"
                />
            </div>
        </div>
    );
}
