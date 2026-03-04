import Script from 'next/script';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import { Suspense } from 'react';

export const metadata = {
    metadataBase: new URL('https://fondeka.com'),
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
            <head>
                <link rel="canonical" href="https://fondeka.com" />
                <meta name="robots" content="index, follow" />
                <Script
                    id="meta-pixel-base"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1661830491640331');
                            fbq('track', 'PageView');
                        `,
                    }}
                />
            </head>
            <body>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1661830491640331&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {/* I18nProvider uses useSearchParams(), so it must be inside Suspense. */}
                <Suspense fallback={null}>
                    <I18nProvider>
                        <Header />
                        {children}
                        <Footer />
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
            </body>
        </html>
    );
}
