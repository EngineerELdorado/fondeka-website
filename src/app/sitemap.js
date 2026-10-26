import { serviceSeo, siteUrl } from '@/lib/seo';
import { cardGuideOrder } from '@/lib/cardGuides';
import { billPaymentProviderSlugs } from '@/lib/billPaymentProviders';
import { commercePages } from '@/lib/commerce';

export default function sitemap() {
    const lastModified = new Date();
    const routes = [
        { path: '/', priority: 1 },
        { path: '/about', priority: 0.8 },
        { path: '/products', priority: 0.7 },
        { path: '/compliance', priority: 0.7 },
        { path: '/support', priority: 0.6 },
        { path: '/commerce', priority: 0.95 },
        { path: '/privacy', priority: 0.35 },
        { path: '/end-user-agreement', priority: 0.35 },
    ];
    const productRoutes = Object.values(serviceSeo).flatMap((page) => {
        const priority = page.path === '/savings' || page.path === '/loans' ? 0.95 : 0.9;
        if (!page.locales) return [{ path: page.path, priority }];
        const alternates = {
            languages: { en: `${siteUrl}${page.path}`, fr: `${siteUrl}${page.path}?lang=fr` },
        };
        return [
            { path: page.path, priority, alternates },
            { path: `${page.path}?lang=fr`, priority, alternates },
        ];
    });
    const cardGuideRoutes = cardGuideOrder.map((platform) => ({
        path: `/cards/${platform}`,
        priority: 0.65,
    }));
    const billPaymentProviderRoutes = billPaymentProviderSlugs.map((provider) => ({
        path: `/bills/${provider}`,
        priority: 0.92,
    }));
    const commerceRoutes = Object.keys(commercePages).map((slug) => ({
        path: `/commerce/${slug}`,
        priority: 0.85,
    }));

    return [...routes, ...productRoutes, ...commerceRoutes, ...billPaymentProviderRoutes, ...cardGuideRoutes].map(({ path, priority, alternates }) => ({
        url: `${siteUrl}${path}`,
        lastModified,
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority,
        ...(alternates ? { alternates } : {}),
    }));
}
