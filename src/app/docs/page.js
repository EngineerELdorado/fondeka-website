import DocsPageClient from './DocsPageClient';
import { paymentApiContent, paymentApiLanguage } from '@/lib/paymentApiContent';
import { createMetadata } from '@/lib/seo';

export function generateMetadata({ searchParams }) {
  return createMetadata('docs', paymentApiLanguage(searchParams.lang));
}

export default function DocsPage({ searchParams }) {
  const lang = paymentApiLanguage(searchParams.lang);
  return <DocsPageClient audience={paymentApiContent[lang].audience} />;
}
