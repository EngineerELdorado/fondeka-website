'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  const fallbackIcon = 'https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={t('product.cards.title')}
      body={t('product.cards.body')}
      status="Available"
      icon={icon}
      accent="gold"
      mode="app"
      highlights={[t('product.cards.feature.app'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.cards.feature.app'), t('product.page.cards.point2'), t('product.page.cards.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
