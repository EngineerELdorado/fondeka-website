'use client';
import { useI18n } from '../../lib/i18n';
import ProductPageTemplate from '@/components/ProductPageTemplate';
export default function Page(){
  const { t, lang } = useI18n();
  return (
    <ProductPageTemplate
      t={t}
      title={t('product.payments.title')}
      body={t('product.payments.body')}
      status="Available"
      icon="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200"
      accent="rose"
      mode="business"
      highlights={[t('product.feature.supportedMethods'), t('product.feature.dashboardControls'), t('product.feature.businessApi')]}
      points={[t('product.feature.supportedMethods'), t('product.page.payments.point2'), t('product.page.payments.point3')]}
      ctaHref={`/business?lang=${lang}`}
      ctaLabel={t('common.cta.useApi')}
    />
  );
}
