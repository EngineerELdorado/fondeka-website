'use client';
import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';

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

export default function DownloadAppButton({ className = '' }){
    const { t } = useI18n();

    // Platform detection
    const [platform, setPlatform] = useState('other');
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Store URLs (replace with real app links when live)
    const playUrl = 'https://play.google.com/store/apps/details?id=com.fondeka.app';
    const appStoreUrl = 'https://apps.apple.com/cd/app/fondeka/id6757371679';

    // QR images for desktop dropdown
    const qrSize = '180x180';
    const qrPlay  = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(playUrl)}&margin=0`;
    const qrApple = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(appStoreUrl)}&margin=0`;

    useEffect(() => {
        const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
        const plt = typeof navigator !== 'undefined' ? (navigator).platform : '';
        const isAndroid = /Android/i.test(ua);
        const isiOS = /iPhone|iPad|iPod/i.test(ua) || (plt === 'MacIntel' && (navigator).maxTouchPoints > 1); // iPadOS Safari
        setPlatform(isAndroid ? 'android' : isiOS ? 'ios' : 'other');
    }, []);

    useEffect(() => {
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    // MOBILE (android/ios): single "Download the app" button with icon
    if (platform === 'android' || platform === 'ios') {
        const isAndroid = platform === 'android';
        const href = isAndroid ? playUrl : appStoreUrl;
        const Icon = isAndroid ? PlayIcon : AppleIcon;

        return (
            <div className={className}>
                <a
                    href={href}
                    className="btn btn-primary btn-3d inline-flex items-center gap-2"
                    aria-label="Download the app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon />
                    <span>{t('cta.download') || 'Download the app'}</span>
                </a>
            </div>
        );
    }

    // DESKTOP: dropdown with QR codes for both stores
    return (
        <div className={className + ' relative'} ref={menuRef}>
            <button
                onClick={(e)=>{ e.stopPropagation(); setOpen(v=>!v); }}
                className="btn btn-primary btn-3d inline-flex items-center gap-2"
                aria-haspopup="dialog"
                aria-expanded={open}
            >
                <span>{t('cta.download')}</span>
            </button>

            {open && (
                <div
                    className="absolute z-50 right-0 mt-2 w-80 rounded-2xl border bg-white p-4 shadow-soft grid grid-cols-2 gap-4"
                    role="dialog"
                    aria-label="Download the Fondeka app"
                >
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
                        Open store page
                    </a>
                </div>
            )}
        </div>
    );
}
