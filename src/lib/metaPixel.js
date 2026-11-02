import { getDevicePlatform } from './appStores';

export function trackAppDownloadClick({
    action = 'open_store',
    store,
    location = 'download-cta',
} = {}) {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
        return;
    }

    try {
        window.fbq('trackCustom', 'AppDownloadClick', {
            action,
            cta_location: location,
            platform: getDevicePlatform(),
            page_path: window.location.pathname,
            ...(store ? { store } : {}),
        });
    } catch {
        // Tracking must never prevent the visitor from opening the store.
    }
}
