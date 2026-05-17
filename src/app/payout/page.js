'use client';
import { useI18n } from '../../lib/i18n';
import ProductPageTemplate from '@/components/ProductPageTemplate';
export default function Page(){
  const { t, lang } = useI18n();
  return (
    <ProductPageTemplate
      t={t}
      title={t('product.payout.title')}
      body={t('product.payout.body')}
      status="Coming soon"
      icon="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1200"
      accent="slate"
      mode="business"
      highlights={[t('product.feature.supportedMethods'), t('product.feature.dashboardControls'), t('product.feature.businessApi')]}
      points={[t('product.feature.supportedMethods'), t('product.page.payout.point2'), t('product.page.payout.point3')]}
      ctaHref={`/business?lang=${lang}`}
      ctaLabel={t('common.cta.useApi')}
      visualFit="contain"
    />
  );
}
