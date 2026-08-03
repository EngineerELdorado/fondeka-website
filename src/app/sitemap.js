import { serviceSeo, siteUrl } from '@/lib/seo';
import { cardGuideOrder } from '@/lib/cardGuides';
import { billPaymentProviderSlugs } from '@/lib/billPaymentProviders';

export default function sitemap() {
    const lastModified = new Date();
    const routes = [
        { path: '/', priority: 1 },
        { path: '/about', priority: 0.8 },
        { path: '/products', priority: 0.7 },
        { path: '/compliance', priority: 0.7 },
        { path: '/support', priority: 0.6 },
        { path: '/docs', priority: 0.55 },
        { path: '/privacy', priority: 0.35 },
        { path: '/end-user-agreement', priority: 0.35 },
    ];
    const productRoutes = Object.values(serviceSeo).map((page) => ({
        path: page.path,
        priority: page.path === '/savings' || page.path === '/loans' ? 0.95 : 0.9,
    }));
    const cardGuideRoutes = cardGuideOrder.map((platform) => ({
        path: `/cards/${platform}`,
        priority: 0.65,
    }));
    const billPaymentProviderRoutes = billPaymentProviderSlugs.map((provider) => ({
        path: `/bills/${provider}`,
        priority: 0.92,
    }));

    return [...routes, ...productRoutes, ...billPaymentProviderRoutes, ...cardGuideRoutes].map(({ path, priority }) => ({
        url: `${siteUrl}${path}`,
        lastModified,
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority,
    }));
}
