'use client';
import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { appStoreUrl, getDevicePlatform, playUrl } from '@/lib/appStores';

const PlayIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#3DDC84" d="M1.5 3.5v17l10-8.5z"/>
        <path fill="#0F9D58" d="M21 12L11.5 3.5v17z"/>
        <path fill="#FFCD40" d="M21 12l-4.5 2.9L11.5 12l4.9-2.9z"/>
        <path fill="#4285F4" d="M1.5 3.5l10 8.5-2 1.5-8-7z"/>
    </svg>
);

const AppleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M16.365 13.23c.03 3.272 2.873 4.363 2.903 4.377-.024.078-.454 1.56-1.506 3.09-.906 1.315-1.85 2.626-3.326 2.652-1.45.026-1.918-.86-3.58-.86-1.661 0-2.179.83-3.548.886-1.425.056-2.576-1.42-3.487-2.73-1.9-2.727-3.358-7.71-1.407-11.082.972-1.68 2.707-2.745 4.608-2.77 1.438-.028 2.797.943 3.58.943.78 0 2.478-1.167 4.185-.995.713.03 2.716.29 3.995 2.177-.104.064-2.384 1.39-2.317 3.312zM14.23 3.98c.767-.926 1.264-2.222 1.123-3.51-1.084.044-2.39.72-3.162 1.646-.696.806-1.304 2.098-1.14 3.357 1.202.094 2.412-.61 3.179-1.493z"/>
    </svg>
);

export default function DownloadAppButton({
    className = '',
    variant = 'default',
    ctaLabel = '',
}) {
    const { t } = useI18n();

    const [platform, setPlatform] = useState('other');
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // QR images for desktop dropdown
    const qrSize = '180x180';
    const qrPlay  = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(playUrl)}&margin=0`;
    const qrApple = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(appStoreUrl)}&margin=0`;

    useEffect(() => {
        setPlatform(getDevicePlatform());
    }, []);

    useEffect(() => {
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const isHero = variant === 'hero';
    const isSticky = variant === 'sticky';

    if (platform === 'android' || platform === 'ios') {
        const isAndroid = platform === 'android';
        const Icon = isAndroid ? PlayIcon : AppleIcon;
        const mobileDownloadUrl = isAndroid ? playUrl : appStoreUrl;
        const defaultLabel = isAndroid
            ? (t('cta.downloadAndroid') || 'Download for Android')
            : (t('cta.downloadIphone') || 'Download for iPhone');
        const mobileDownloadLabel = ctaLabel || defaultLabel;

        const buttonClassName = isSticky
            ? 'btn btn-primary btn-3d mobile-install-button'
            : isHero
              ? 'btn btn-primary btn-3d hero-download-pulse w-full sm:w-auto min-h-[60px] px-5 text-base shadow-[0_14px_30px_rgba(79,128,92,0.22)]'
              : 'btn btn-primary btn-3d inline-flex items-center gap-2';

        return (
            <div className={className}>
                <a
                    href={mobileDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName}
                    aria-label={mobileDownloadLabel}
                >
                    <Icon />
                    <span>{mobileDownloadLabel}</span>
                </a>
            </div>
        );
    }

    return (
        <div className={className + ' relative'} ref={menuRef}>
            <button
                onClick={(e)=>{ e.stopPropagation(); setOpen(v=>!v); }}
                className={`btn btn-primary btn-3d inline-flex items-center gap-2 ${isHero ? 'hero-download-pulse min-h-[60px] px-5 text-base shadow-[0_14px_30px_rgba(79,128,92,0.22)]' : ''}`}
                aria-haspopup="dialog"
                aria-expanded={open}
            >
                <span>{ctaLabel || t('cta.download')}</span>
            </button>

            {open && (
                <div
                    className="absolute z-50 right-0 mt-2 w-80 rounded-3xl border bg-white p-4 shadow-soft grid grid-cols-2 gap-4"
                    role="dialog"
                    aria-label="Download the Fondeka app"
                >
                    <div className="col-span-2 rounded-2xl bg-fondeka-light px-4 py-3">
                        <p className="text-sm font-semibold text-fondeka-dark">
                            {t('download.desktop.title') ||
                                'Scan and install Fondeka'}
                        </p>
                        <p className="mt-1 text-xs text-gray-600">
                            {t('download.desktop.body') ||
                                'Use the app for cards, bills, airtime, crypto, payments and more.'}
                        </p>
                    </div>
                    {/* Google Play */}
                    <a
                        href={playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center group"
                        onClick={()=>setOpen(false)}
                    >
                        <img
                            src={qrPlay}
                            alt="QR code for Google Play search: Fondeka"
                            loading="lazy"
                            className="w-full h-auto rounded-2xl border transition-transform group-hover:scale-[1.02]"
                        />
                        <div className="mt-2 text-xs inline-flex items-center gap-1">
                            <PlayIcon /> Google Play
                        </div>
                    </a>

                    {/* App Store */}
                    <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center group"
                        onClick={()=>setOpen(false)}
                    >
                        <img
                            src={qrApple}
                            alt="QR code for App Store search: Fondeka"
                            loading="lazy"
                            className="w-full h-auto rounded-2xl border transition-transform group-hover:scale-[1.02]"
                        />
                        <div className="mt-2 text-xs inline-flex items-center gap-1">
                            <AppleIcon /> App Store
                        </div>
                    </a>

                    <a
                        href={playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-2 btn btn-ghost w-full text-center"
                        onClick={()=>setOpen(false)}
                    >
                        {t('download.desktop.cta') || 'Open store page'}
                    </a>
                </div>
            )}
        </div>
    );
}
