'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1554224155-3a589c0b1c60?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.bills.title')}
      body={t('product.bills.body')}
      status="Available"
      icon={icon}
      accent="blue"
      mode="app"
      highlights={[t('product.bills.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.bills.feature.app'), t('product.page.bills.point2'), t('product.page.bills.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
