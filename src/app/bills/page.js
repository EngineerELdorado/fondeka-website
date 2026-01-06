'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function Page(){
  const { t, lang } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1554224155-3a589c0b1c60?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
      <main className="section">
        <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="h">{t('product.bills.title')}</h1>
              <ProductStatusBadge status="Available" />
            </div>
            <p className="mt-3 text-gray-700">{t('product.bills.body')}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="card">Pay your bills directly from our app</li>
              <li className="card">Or integrate our API</li>
            </ul>
            <a href={`/business?lang=${lang}`} className="btn btn-primary mt-6 w-fit">Use the API</a>
          </div>

          {/* Visual uses the passed icon */}
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border">
              <img
                  src={icon}
                  alt={t('product.bills.title')}
                  className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>
  );
}
