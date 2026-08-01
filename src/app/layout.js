import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleTag from '../components/GoogleTag';
import LinkedInInsightTag from '../components/LinkedInInsightTag';
import MetaPixel from '../components/MetaPixel';
import MobileInstallBar from '../components/MobileInstallBar';
import { I18nProvider } from '../lib/i18n';
import { organizationSchema, seoKeywords } from '../lib/seo';
import { Suspense } from 'react';

export const metadata = {
    metadataBase: new URL('https://fondeka.com'),
    title: 'Fondeka | Digital Bank, Neobank and Fintech in Congo and Africa',
    description:
        'Fondeka is a digital bank, neobank and fintech platform built in DR Congo for Africa, offering instant loans, savings, Likelemba, AVEC, virtual cards, prepaid cards, gift cards, bill payments, airtime, crypto, payment links, and business APIs.',
    keywords: seoKeywords,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Fondeka | Digital Bank, Neobank and Fintech in Congo and Africa',
        description:
            'Instant loans, savings, Likelemba, AVEC, virtual cards, prepaid cards, gift cards, bill payments, airtime, crypto, payment links, and business APIs for Congo and Africa.',
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
        title: 'Fondeka | Digital Bank, Neobank and Fintech in Congo and Africa',
        description:
            'A DR Congo-born digital bank and neobank for loans, savings, virtual cards, prepaid cards, gift cards, bill payments, airtime, crypto, payment links, and business APIs across Africa.',
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
                <script type="application/ld+json" suppressHydrationWarning>
                    {JSON.stringify(organizationSchema)}
                </script>
                <Analytics />
            </body>
        </html>
    );
}
