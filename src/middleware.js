import { NextResponse, userAgent } from 'next/server';
import { appStoreUrl } from './lib/appStores';
import { businessApiGuidesUrl } from './lib/business';
import { paymentApiLanguage } from './lib/paymentApiContent';
import { languagePreferenceCookie, preferredLanguage } from './lib/language';

// Keep app links, API Q&A, and essential legal/support pages directly accessible.
const directAccessRoutes = new Set([
    'open',
    'privacy',
    'end-user-agreement',
    'compliance',
    'support',
]);

export function middleware(request) {
    const isRead = ['GET', 'HEAD'].includes(request.method);
    const path = request.nextUrl.pathname.replace(/\/+$/, '');

    if (isRead && path === '/docs') {
        const destination = new URL(businessApiGuidesUrl);
        const { searchParams } = request.nextUrl;
        if (searchParams.has('lang')) destination.searchParams.set('lang', paymentApiLanguage(searchParams.get('lang')));
        for (const key of ['doc', 'lesson']) {
            const value = searchParams.get(key);
            if (value) destination.searchParams.set(key, value);
        }
        return NextResponse.redirect(destination, 308);
    }

    if (isRead && path === '/docs/faq') {
        // Explicit links and the language switch always override browser detection.
        if (request.nextUrl.searchParams.has('lang')) return NextResponse.next();
        const { isBot } = userAgent(request);
        const lang = isBot ? 'en' : preferredLanguage(
            request.headers.get('accept-language'),
            request.cookies.get(languagePreferenceCookie)?.value,
        );
        const destination = request.nextUrl.clone();
        destination.searchParams.set('lang', lang);
        const response = lang === 'fr'
            ? NextResponse.redirect(destination, 307)
            : NextResponse.next();
        response.headers.set('Cache-Control', 'private, no-store, max-age=0');
        response.headers.set('Vary', 'Accept-Language, Cookie, User-Agent');
        return response;
    }

    if (
        process.env.MOBILE_STORE_REDIRECT_ENABLED === 'false' ||
        !isRead ||
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
