import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleTag from '../components/GoogleTag';
import LinkedInInsightTag from '../components/LinkedInInsightTag';
import MetaPixel from '../components/MetaPixel';
import MobileInstallBar from '../components/MobileInstallBar';
import { I18nProvider } from '../lib/i18n';
import { Suspense } from 'react';

export const metadata = {
    metadataBase: new URL('https://fondeka.com'),
    title: 'The mobile bank that offers you 0% interest loans. | La banque mobile qui vous offre des prêts à 0% d’intérêt.',
    description:
        'Loans, MasterCard, crypto, payment links, savings, and bill payments. | Prêts, MasterCard, cryptos, liens de paiements, épargnes et paiement des factures.',
    openGraph: {
        title: 'The mobile bank that offers you 0% interest loans. | La banque mobile qui vous offre des prêts à 0% d’intérêt.',
        description:
            'Loans, MasterCard, crypto, payment links, savings, and bill payments. | Prêts, MasterCard, cryptos, liens de paiements, épargnes et paiement des factures.',
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
        title: 'The mobile bank that offers you 0% interest loans. | La banque mobile qui vous offre des prêts à 0% d’intérêt.',
        description:
            'Loans, MasterCard, crypto, payment links, savings, and bill payments. | Prêts, MasterCard, cryptos, liens de paiements, épargnes et paiement des factures.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://fondeka.com" />
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
                <Analytics />
            </body>
        </html>
    );
}
