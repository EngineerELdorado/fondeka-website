import { NextResponse, userAgent } from 'next/server';
import { buildPlayStoreUrls } from '@/lib/appStores';

export const dynamic = 'force-dynamic';

export function GET(request) {
    const { device, os, isBot } = userAgent(request);
    const headers = {
        'Cache-Control': 'private, no-store, max-age=0',
        Vary: 'User-Agent',
        'X-Robots-Tag': 'noindex, nofollow',
    };

    if (isBot || device.type !== 'mobile' || os.name !== 'Android') {
        return NextResponse.redirect(new URL('/', request.url), { status: 307, headers });
    }

    const { webUrl, intentUrl } = buildPlayStoreUrls(request.nextUrl.searchParams);
    const isFrench = (request.nextUrl.searchParams.get('lang') || '').toLowerCase().startsWith('fr');
    const status = isFrench ? 'Ouverture de Google Play…' : 'Opening Google Play…';
    const label = isFrench ? 'Continuer vers Google Play' : 'Continue to Google Play';
    // URLs are built from fixed store hosts and URL-encoded query parameters.
    const escapedWebUrl = webUrl.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

    return new NextResponse(`<!doctype html>
<html lang="${isFrench ? 'fr' : 'en'}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="no-referrer">
    <title>${status}</title>
    <noscript><meta http-equiv="refresh" content="0;url=${escapedWebUrl}"></noscript>
    <script>
        (function () {
            var fallback = ${JSON.stringify(webUrl)};
            var timer = window.setTimeout(function () {
                if (!document.hidden) window.location.replace(fallback);
            }, 1200);
            function cancelFallback() { window.clearTimeout(timer); }
            document.addEventListener('visibilitychange', function () {
                if (document.hidden) cancelFallback();
            });
            window.addEventListener('pagehide', cancelFallback);
            try {
                window.location.replace(${JSON.stringify(intentUrl)});
            } catch (error) {
                cancelFallback();
                window.location.replace(fallback);
            }
        })();
    </script>
</head>
<body>
    <p>${status}</p>
    <a href="${escapedWebUrl}">${label}</a>
</body>
</html>`, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
}
