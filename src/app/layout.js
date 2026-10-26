import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleTag from '../components/GoogleTag';
import LinkedInInsightTag from '../components/LinkedInInsightTag';
import MetaPixel from '../components/MetaPixel';
import MobileInstallBar from '../components/MobileInstallBar';
import JsonLd from '../components/JsonLd';
import { I18nProvider } from '../lib/i18n';
import { organizationSchema, seoKeywords } from '../lib/seo';
import { Suspense } from 'react';

export const metadata = {
    metadataBase: new URL('https://fondeka.com'),
    title: 'Fondeka | Digital Bank and Payment API for Congo and Africa',
    description:
        'Fondeka combines digital banking with a payment API for small businesses, students and early-stage startups in DR Congo and supported African markets.',
    keywords: seoKeywords,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Fondeka | Digital Bank and Payment API for Congo and Africa',
        description:
            'Digital banking, cards, savings and a payment API for small businesses, students and startups building with Mobile Money and crypto in supported African markets.',
        url: 'https://fondeka.com',
        siteName: 'Fondeka',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Fondeka platform preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fondeka | Digital Bank and Payment API for Congo and Africa',
        description:
            'Digital banking, cards, savings and a payment API for small businesses, students and startups building with Mobile Money and crypto in supported African markets.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="robots" content="index, follow" />
            </head>
            <body className="pb-28 md:pb-0">
                <MetaPixel />
                <GoogleTag />
                <LinkedInInsightTag />
                {/* I18nProvider uses useSearchParams(), so it must be inside Suspense. */}
                <Suspense fallback={null}>
                    <I18nProvider>
                        <Header />
                        {children}
                        <Footer />
                        <MobileInstallBar />
                    </I18nProvider>
                </Suspense>
                <JsonLd data={organizationSchema} />
                <Analytics />
            </body>
        </html>
    );
}
