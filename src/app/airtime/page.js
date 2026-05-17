'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import ProductPageTemplate from '@/components/ProductPageTemplate';

export default function Page(){
  const { t } = useI18n();
  const sp = useSearchParams();

  // Try plural keys first, then singular (in case locales use one or the other)
  const pick = (primaryKey, fallbackKey) => {
    const v = t(primaryKey);
    return v === primaryKey ? t(fallbackKey) : v;
  };

  const title = pick('product.airtimes.title', 'product.airtime.title');
  const body  = pick('product.airtimes.body',  'product.airtime.body');

  // Read icon from the URL query (?icon=...), fallback to your current image
  const fallbackIcon = 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
    <ProductPageTemplate
      t={t}
      title={title}
      body={body}
      status="Available"
      icon={icon}
      accent="blue"
      mode="app"
      highlights={[t('product.page.airtime.highlight1'), t('download.proof.mobile'), t('download.proof.instant')]}
      points={[t('product.page.airtime.point1'), t('product.page.airtime.point2'), t('product.page.airtime.point3')]}
      ctaLabel={t('product.page.cta.app')}
    />
  );
}
