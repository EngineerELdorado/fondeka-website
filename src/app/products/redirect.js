'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function ProductsRedirect() {
    const { lang } = useI18n();
    const router = useRouter();

    // Send users to the products section on Home
    useEffect(() => {
        router.replace(`/?lang=${lang}#products`);
    }, [lang, router]);

    // Fallback content (brief, indexable, with a link)
    return (
        <main className="section">
            <div className="container-pad text-center">
                <h1 className="h">Our products</h1>
                <p className="mt-2 text-gray-600">
                    Redirecting you to the products section…
                </p>
                <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-700">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <ProductStatusBadge status="Available" />
                        <span>eSIM, Bill payments, Virtual cards, Gift cards, Airtimes, Shopping</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <ProductStatusBadge status="Waiting for license" />
                        <span>Loans, Crypto, Payments, Collect, Payout, Business API</span>
                    </div>
                </div>
                <a
                    href={`/?lang=${lang}#products`}
                    className="btn btn-primary mt-6 inline-block"
                >
                    Go to products
                </a>
                <noscript>
                    <p className="mt-4 text-sm text-gray-500">
                        JavaScript is disabled. Use the button above to view our products.
                    </p>
                </noscript>
            </div>
        </main>
    );
}
