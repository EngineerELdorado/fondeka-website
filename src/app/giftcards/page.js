'use client';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.giftcards.title')}
      body={t('product.giftcards.body')}
      status="Available"
      icon={icon}
      accent="rose"
      mode="app"
      highlights={[t('product.giftcards.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.giftcards.feature.app'), t('product.page.giftcards.point2'), t('product.page.giftcards.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
