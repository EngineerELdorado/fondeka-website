'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1620310194681-1a1dfbec20b8?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.crypto.title')}
      body={t('product.crypto.body')}
      status="Available"
      icon={icon}
      accent="plum"
      mode="app"
      highlights={[t('product.crypto.feature.app'), t('product.feature.supportedMethods'), t('download.proof.mobile')]}
      points={[t('product.crypto.feature.app'), t('product.page.crypto.point2'), t('product.page.crypto.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
