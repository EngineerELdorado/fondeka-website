import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import { Suspense } from 'react';

export const metadata = {
    title: 'Fondeka — Money without borders',
    description: 'Virtual cards, Mobile Money, Crypto on/off-ramp, link & QR payments, eSIMs, bills, airtime.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
        </html>
    );
}
