import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import { Suspense } from 'react';

export const metadata = {
    metadataBase: new URL('https://fondeka.com'), // ✅ add this line
    title: 'Fondeka — Money and Payments without Borders',
    description:
        'Fondeka connects Africa to global finance: Mobile Money, cards, crypto, QR payments, eSIMs, airtime & more.',
    openGraph: {
        title: 'Fondeka — Money and Payments without Borders',
        description:
            'All your payments and financial services in one super-app.',
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
        title: 'Fondeka — Money and Payments without Borders',
        description:
            'All your payments and financial services in one super-app.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <link rel="canonical" href="https://fondeka.com" />
        <meta name="robots" content="index, follow" />
        <body>
        {/* IMPORTANT: I18nProvider uses useSearchParams() -> wrap it in Suspense */}
        <Suspense fallback={null}>
            <I18nProvider>
                <Header />
                {children}
                <Footer />
            </I18nProvider>
        </Suspense>
        </body>
        <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FinancialService',
                name: 'Fondeka',
                url: 'https://fondeka.com',
                logo: 'https://fondeka.com/logo-icon.svg',
                description:
                    'Digital payments and microfinance platform offering cards, Mobile Money, crypto, and APIs.',
                areaServed: 'Africa',
            })}
        </script>
        </html>
    );
}
