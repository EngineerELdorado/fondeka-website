'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.airtimes.title')}
      body={t('product.airtimes.body')}
      status="Available"
      icon={icon}
      accent="blue"
      mode="app"
      highlights={[t('product.airtimes.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.page.airtime.point1'), t('product.page.airtime.point2'), t('product.page.airtime.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
