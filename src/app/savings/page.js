'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function Page(){
  const { t, lang } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://plus.unsplash.com/premium_photo-1676679689999-bee60ae55f1f?q=80&w=2532';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="h">{t('product.savings.title')}</h1>
            <ProductStatusBadge status="Pending license" />
          </div>

          <p className="mt-3 text-gray-700">{t('product.savings.body')}</p>
          <p className="mt-3 text-gray-700">{t('product.savings.summary')}</p>

          <div className="card mt-6">
            <h2 className="text-lg font-semibold">{t('product.savings.group.title')}</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• {t('product.savings.group.i1')}</li>
              <li>• {t('product.savings.group.i2')}</li>
              <li>• {t('product.savings.group.i3')}</li>
              <li>• {t('product.savings.group.i4')}</li>
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-lg font-semibold">{t('product.savings.rollout.title')}</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• {t('product.savings.rollout.i1')}</li>
              <li>• {t('product.savings.rollout.i2')}</li>
            </ul>
          </div>

          <div className="card mt-4">
            <h2 className="text-lg font-semibold">{t('product.savings.why.title')}</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• {t('product.savings.why.i1')}</li>
              <li>• {t('product.savings.why.i2')}</li>
              <li>• {t('product.savings.why.i3')}</li>
            </ul>
          </div>

          <a href={`/?lang=${lang}`} className="btn btn-primary mt-6 w-fit">
            {t('product.savings.cta')}
          </a>
        </div>

        <div className="min-w-0">
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border">
              <img
                src={icon}
                alt={t('product.savings.title')}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="font-semibold">{t('product.savings.chat.title')}</h3>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.chat.body')}</p>
          </div>

          <div className="card mt-4">
            <h3 className="font-semibold">{t('product.savings.trust.title')}</h3>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.trust.body')}</p>
          </div>

          <div className="card mt-4">
            <h3 className="font-semibold">{t('product.savings.crypto.title')}</h3>
            <p className="mt-2 text-sm text-gray-700">{t('product.savings.crypto.body')}</p>
          </div>

          <p className="mt-4 text-xs text-gray-500">{t('product.savings.note')}</p>
        </div>
      </div>
    </main>
  );
}
