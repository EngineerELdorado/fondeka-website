import { NextResponse, userAgent } from 'next/server';
import { appStoreUrl } from './lib/appStores';

// Keep app links and essential legal/support pages directly accessible.
const directAccessRoutes = new Set([
    'open',
    'privacy',
    'end-user-agreement',
    'compliance',
    'support',
]);

export function middleware(request) {
    if (
        process.env.MOBILE_STORE_REDIRECT_ENABLED === 'false' ||
        !['GET', 'HEAD'].includes(request.method) ||
        directAccessRoutes.has(request.nextUrl.pathname.split('/')[1])
    ) {
        return NextResponse.next();
    }

    const { device, os, isBot } = userAgent(request);
    if (isBot || device.type !== 'mobile') {
        return NextResponse.next();
    }

    let destination;
    if (os.name === 'Android') {
        destination = new URL('/install/android', request.url);
        destination.search = request.nextUrl.search;
    } else if (os.name === 'iOS') {
        destination = new URL(appStoreUrl);
    } else {
        return NextResponse.next();
    }

    // Temporary and uncached so devices never share a redirect and rollback is immediate.
    const response = NextResponse.redirect(destination, 307);
    response.headers.set('Cache-Control', 'private, no-store, max-age=0');
    response.headers.set('Vary', 'User-Agent');
    return response;
}

export const config = {
    matcher: ['/((?!api(?:/|$)|_next(?:/|$)|_vercel(?:/|$)|install/android(?:/|$)|apple-app-site-association(?:/|$)|.*\\.).*)'],
};
