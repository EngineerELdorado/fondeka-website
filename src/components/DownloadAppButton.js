'use client';
import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import { appStoreUrl, buildPlayStoreUrls, getDevicePlatform, openPlayStore, playUrl } from '@/lib/appStores';

const PlayIcon = () => (
    <img src="/platforms/google-play.svg" width="16" height="16" alt="" aria-hidden="true" />
);

const AppleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M16.365 13.23c.03 3.272 2.873 4.363 2.903 4.377-.024.078-.454 1.56-1.506 3.09-.906 1.315-1.85 2.626-3.326 2.652-1.45.026-1.918-.86-3.58-.86-1.661 0-2.179.83-3.548.886-1.425.056-2.576-1.42-3.487-2.73-1.9-2.727-3.358-7.71-1.407-11.082.972-1.68 2.707-2.745 4.608-2.77 1.438-.028 2.797.943 3.58.943.78 0 2.478-1.167 4.185-.995.713.03 2.716.29 3.995 2.177-.104.064-2.384 1.39-2.317 3.312zM14.23 3.98c.767-.926 1.264-2.222 1.123-3.51-1.084.044-2.39.72-3.162 1.646-.696.806-1.304 2.098-1.14 3.357 1.202.094 2.412-.61 3.179-1.493z"/>
    </svg>
);

function RunnerRotation({ animated, values }) {
    return animated ? (
        <animateTransform
            attributeName="transform"
            type="rotate"
            values={values}
            dur="800ms"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
        />
    ) : null;
}

function RunnerLeg({ animated, front }) {
    const hip = front ? '-44 22 27;32 22 27;-44 22 27' : '32 22 27;-44 22 27;32 22 27';
    const knee = front ? '12 22 35;68 22 35;12 22 35' : '68 22 35;12 22 35;68 22 35';
    return (
        <g transform={`rotate(${hip.split(';')[0]})`} opacity={front ? 1 : 0.75}>
            <RunnerRotation animated={animated} values={hip} />
            <path d="M22 27v8" stroke="#0D1F14" strokeWidth="5" />
            <g transform={`rotate(${knee.split(';')[0]})`}>
                <RunnerRotation animated={animated} values={knee} />
                <path d="M22 35v8" stroke="#C98E64" strokeWidth="3.4" />
                <path d="m21 43 5 1" stroke="currentColor" strokeWidth="3.2" />
            </g>
        </g>
    );
}

function RunnerArm({ animated, front }) {
    const swing = front ? '48 28 17;-48 28 17;48 28 17' : '-48 28 17;48 28 17;-48 28 17';
    return (
        <g transform={`rotate(${swing.split(';')[0]})`} opacity={front ? 1 : 0.75}>
            <RunnerRotation animated={animated} values={swing} />
            <path d="M28 17v6l6-3" stroke="#C98E64" strokeWidth="3.2" />
            <path d="M28 17v2" stroke="currentColor" strokeWidth="4.5" />
        </g>
    );
}

function RunningManIcon({ animated = false }) {
    return (
        <svg
            viewBox="0 0 48 48"
            className={animated ? 'app-install-runner-motion' : 'app-install-runner-still'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
        >
            <g>
                {animated && <animateTransform attributeName="transform" type="translate" values="0 0;0 -1;0 0;0 -1;0 0" dur="800ms" repeatCount="indefinite" />}
                <RunnerArm animated={animated} front={false} />
                <RunnerLeg animated={animated} front={false} />
                <RunnerLeg animated={animated} front />
                <path d="m28 11 3 2-3 4-3-2z" fill="#C98E64" />
                <path d="M25 15q4-3 6 2l-5 11-8-2z" fill="currentColor" />
                <RunnerArm animated={animated} front />
                <circle cx="30" cy="8" r="4.3" fill="#C98E64" />
                <path d="m33 7 2.5 2-2.5.5z" fill="#C98E64" />
                <path d="M25.8 8q-1-5 4.4-4.6 4 .2 4.1 3l-3.2-.7q-3-.4-5.3 2.3" fill="#0D1F14" />
                <circle cx="32.4" cy="7.6" r="0.45" fill="#0D1F14" />
            </g>
        </svg>
    );
}

export default function DownloadAppButton({
    className = '',
    variant = 'default',
    ctaLabel = '',
    trackingId = '',
}) {
    const { t } = useI18n();
    const searchParams = useSearchParams();

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
    const isInstallCta = isHero || isSticky;

    if (platform === 'android' || platform === 'ios') {
        const isAndroid = platform === 'android';
        const Icon = isAndroid ? PlayIcon : AppleIcon;
        const mobileDownloadUrl = isAndroid ? buildPlayStoreUrls(searchParams).intentUrl : appStoreUrl;
        const defaultLabel = isAndroid
            ? (t('cta.downloadAndroid') || 'Download for Android')
            : (t('cta.downloadIphone') || 'Download for iPhone');
        const mobileDownloadLabel = isInstallCta ? t('download.install.button') : ctaLabel || defaultLabel;
        const storeName = isAndroid ? 'Google Play' : 'App Store';
        const storeLabel = t(isAndroid ? 'download.install.googlePlay' : 'download.install.appStore');

        const buttonClassName = isInstallCta
            ? `app-install-cta ${isSticky ? 'mobile-install-button' : 'mobile-hero-install-button'}`
            : 'btn btn-primary btn-3d inline-flex items-center gap-2';

        return (
            <div className={className}>
                <a
                    href={mobileDownloadUrl}
                    target={isAndroid ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={buttonClassName}
                    aria-label={isInstallCta ? `${mobileDownloadLabel}, ${storeName}` : mobileDownloadLabel}
                    data-download-button={trackingId || undefined}
                    onClick={isAndroid ? (event) => {
                        event.preventDefault();
                        openPlayStore(searchParams);
                    } : undefined}
                >
                    {isInstallCta ? (
                        <>
                            <span className="app-install-cta-icon"><Icon /></span>
                            <span className="app-install-cta-copy">
                                <span className="app-install-cta-label">{mobileDownloadLabel}</span>
                                <span className="app-install-cta-store">{storeLabel}</span>
                            </span>
                            <span className="app-install-cta-runner" aria-hidden="true">
                                <RunningManIcon animated />
                                <RunningManIcon />
                            </span>
                        </>
                    ) : (
                        <><Icon /><span>{mobileDownloadLabel}</span></>
                    )}
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
                data-download-button={trackingId || undefined}
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
