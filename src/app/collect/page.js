'use client';
import { useI18n } from '../../lib/i18n';
import ProductPageTemplate from '@/components/ProductPageTemplate';
export default function Page(){
  const { t, lang } = useI18n();
  return (
    <ProductPageTemplate
      t={t}
      title={t('product.collect.title')}
      body={t('product.collect.body')}
      status="Coming soon"
      icon="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200"
      accent="emerald"
      mode="business"
      highlights={[t('product.feature.supportedMethods'), t('product.feature.dashboardControls'), t('product.feature.businessApi')]}
      points={[t('product.feature.supportedMethods'), t('product.page.collect.point2'), t('product.page.collect.point3')]}
      ctaHref={`/business?lang=${lang}`}
      ctaLabel={t('common.cta.useApi')}
      visualFit="contain"
    />
  );
}
