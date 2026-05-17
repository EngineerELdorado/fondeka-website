'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.esim.title')}
      body={t('product.esim.body')}
      status="Available"
      icon={icon}
      accent="slate"
      mode="app"
      highlights={[t('product.esim.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.esim.feature.app'), t('product.page.esim.point2'), t('product.page.esim.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
