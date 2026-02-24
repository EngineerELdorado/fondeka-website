'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const APP_SCHEME = 'fondeka';
const ANDROID_PACKAGE = 'com.fondeka.app';
const PLAY_STORE_BASE = 'https://play.google.com/store/apps/details?id=com.fondeka.app';
const APP_STORE_BASE = 'https://apps.apple.com/cd/app/fondeka/id6757371679';

function detectPlatform() {
    if (typeof navigator === 'undefined') return 'other';
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isAndroid) return 'android';
    if (isIOS) return 'ios';
    return 'other';
}

function normalizeTarget(rawTarget) {
    const cleaned = (rawTarget || 'home').trim().replace(/^\/+/, '');
    return cleaned || 'home';
}

function appendParams(url, params) {
    const u = new URL(url);
    params.forEach((value, key) => u.searchParams.append(key, value));
    return u.toString();
}

function buildPlayStoreUrl(params) {
    const attribution = new URLSearchParams(params.toString());
    if (!attribution.has('source')) attribution.set('source', 'smart_open');
    const referrer = attribution.toString();
    if (!referrer) return PLAY_STORE_BASE;
    return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(referrer)}`;
}

function buildAppStoreUrl(params) {
    const attributionHint =
        params.get('campaign') ||
        params.get('source') ||
        params.get('ref') ||
        params.get('transactionId');

    if (!attributionHint) return APP_STORE_BASE;
    return appendParams(APP_STORE_BASE, new URLSearchParams({ ct: attributionHint }));
}

export default function OpenLandingClient() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('Preparing link...');
    const [hasAttemptedOpen, setHasAttemptedOpen] = useState(false);
    const [platform, setPlatform] = useState('other');

    const deepLinkConfig = useMemo(() => {
        const allParams = new URLSearchParams(searchParams.toString());
        const target = normalizeTarget(allParams.get('target'));
        const query = allParams.toString();
        const deepLink = `${APP_SCHEME}://${target}${query ? `?${query}` : ''}`;
        const playStoreUrl = buildPlayStoreUrl(allParams);
        const appStoreUrl = buildAppStoreUrl(allParams);
        const intentPath = `${target}${query ? `?${query}` : ''}`;
        const intentUrl =
            `intent://${intentPath}` +
            `#Intent;scheme=${APP_SCHEME};package=${ANDROID_PACKAGE};` +
            `S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

        return { deepLink, playStoreUrl, appStoreUrl, intentUrl, target };
    }, [searchParams]);

    useEffect(() => {
        const currentPlatform = detectPlatform();
        setPlatform(currentPlatform);
        let pageHidden = false;
        let fallbackTimer = null;

        const onVisibilityChange = () => {
            if (document.hidden) pageHidden = true;
        };
        const onPageHide = () => {
            pageHidden = true;
        };

        const cleanup = () => {
            window.removeEventListener('visibilitychange', onVisibilityChange);
            window.removeEventListener('pagehide', onPageHide);
            if (fallbackTimer) window.clearTimeout(fallbackTimer);
        };

        window.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('pagehide', onPageHide);

        if (currentPlatform === 'ios') {
            setStatus('Trying to open the app on iOS...');
            window.location.href = deepLinkConfig.deepLink;
            fallbackTimer = window.setTimeout(() => {
                cleanup();
                if (!pageHidden) {
                    setStatus('App not detected. Redirecting to the App Store...');
                    window.location.href = deepLinkConfig.appStoreUrl;
                }
            }, 1500);
            setHasAttemptedOpen(true);
            return cleanup;
        }

        if (currentPlatform === 'android') {
            setStatus('Trying to open the app on Android...');
            window.location.href = deepLinkConfig.intentUrl;
            fallbackTimer = window.setTimeout(() => {
                cleanup();
                if (!pageHidden) {
                    setStatus('App not detected. Redirecting to Google Play...');
                    window.location.href = deepLinkConfig.playStoreUrl;
                }
            }, 1500);
            setHasAttemptedOpen(true);
            return cleanup;
        }

        setStatus('Open this link on your phone to continue in the app.');
        setHasAttemptedOpen(false);
        return cleanup;
    }, [deepLinkConfig]);

    const qrData = useMemo(() => {
        if (typeof window === 'undefined') return '';
        return window.location.href;
    }, []);

    const qrSrc = qrData
        ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrData)}&margin=0`
        : '';

    const openAppHref = platform === 'android' ? deepLinkConfig.intentUrl : deepLinkConfig.deepLink;

    return (
        <main className="section">
            <div className="container-pad max-w-2xl">
                <h1 className="h text-center">Open Fondeka app</h1>
                <p className="mt-3 text-center text-gray-600">
                    {status}
                </p>
                <p className="mt-2 text-center text-xs text-gray-500">
                    Target: <span className="font-mono">{deepLinkConfig.target}</span>
                </p>

                <div className="mt-8 grid gap-3">
                    <a
                        href={openAppHref}
                        className="btn btn-primary btn-3d w-full"
                    >
                        Open app
                    </a>
                    <a
                        href={deepLinkConfig.appStoreUrl}
                        className="btn btn-ghost w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Install on App Store
                    </a>
                    <a
                        href={deepLinkConfig.playStoreUrl}
                        className="btn btn-ghost w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get it on Google Play
                    </a>
                </div>

                <div className="mt-8 rounded-2xl border bg-white p-5 shadow-soft">
                    <p className="text-center text-sm text-gray-700">
                        On desktop: scan this QR with your phone.
                    </p>
                    {qrSrc && (
                        <img
                            src={qrSrc}
                            alt="QR code to open this Fondeka app link on mobile"
                            className="mx-auto mt-4 h-56 w-56 rounded-xl border"
                        />
                    )}
                </div>

                {!hasAttemptedOpen && (
                    <p className="mt-4 text-center text-xs text-gray-500">
                        If you are on mobile and nothing happens, tap "Open app".
                    </p>
                )}
            </div>
        </main>
    );
}
