'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1515165562835-c3b8c0f0a4a1?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.shopping.title')}
      body={t('product.shopping.body')}
      status="Available"
      icon={icon}
      accent="gold"
      mode="app"
      highlights={[t('product.shopping.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.shopping.feature.app'), t('product.page.shopping.point2'), t('product.page.shopping.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
