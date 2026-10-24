'use client';
import { useI18n } from '@/lib/i18n';
import { businessAppUrl } from '@/lib/business';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function Page(){
  const { t } = useI18n();

  return (
      <main className="section">
        <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="h">{t('product.business.title')}</h1>
              <ProductStatusBadge status="Available" />
            </div>
            <p className="mt-3 text-gray-700">{t('product.business.body')}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="card">{t('product.feature.supportedMethods')}</li>
              <li className="card">{t('product.feature.dashboardControls')}</li>
              <li className="card">{t('product.feature.businessApi')}</li>
            </ul>

            <a href={businessAppUrl} className="btn btn-primary mt-6 w-fit">
              {t('common.cta.useApi')}
            </a>
          </div>

          <div className="card">
            <img
                src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
                alt=""
                className="w-full h-80 object-cover rounded-2xl border"
            />
          </div>
        </div>

      </main>
  );
}
