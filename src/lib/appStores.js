export const playUrl =
    'https://play.google.com/store/apps/details?id=com.fondeka.app';

export const appStoreUrl =
    'https://apps.apple.com/cd/app/fondeka/id6757371679';

export function buildPlayStoreUrls(params = new URLSearchParams()) {
    const listing = new URL(playUrl);
    const referrer = params.toString();
    if (referrer) listing.searchParams.set('referrer', referrer);
    const webUrl = listing.toString();
    const intentUrl =
        `intent://details?${listing.searchParams.toString()}` +
        '#Intent;scheme=market;package=com.android.vending;' +
        `S.browser_fallback_url=${encodeURIComponent(webUrl)};end`;
    return { webUrl, intentUrl };
}

export function openPlayStore(params) {
    const { webUrl, intentUrl } = buildPlayStoreUrls(params);
    let timer;
    const cleanup = () => {
        window.clearTimeout(timer);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('pagehide', cleanup);
    };
    const onVisibilityChange = () => {
        if (document.hidden) cleanup();
    };
    const fallback = () => {
        cleanup();
        if (!document.hidden) window.location.assign(webUrl);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', cleanup);
    timer = window.setTimeout(fallback, 1200);
    try {
        window.location.assign(intentUrl);
    } catch {
        fallback();
    }
}

export function getDevicePlatform() {
    if (typeof navigator === 'undefined') {
        return 'other';
    }

    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const isAndroid = /Android/i.test(ua);
    const isiOS =
        /iPhone|iPad|iPod/i.test(ua) ||
        (platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isAndroid) {
        return 'android';
    }

    if (isiOS) {
        return 'ios';
    }

    return 'other';
}
