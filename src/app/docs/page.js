import DocsPageClient from './DocsPageClient';
import { paymentApiLanguage } from '@/lib/paymentApiContent';
import { createMetadata } from '@/lib/seo';

export function generateMetadata({ searchParams }) {
  return createMetadata('docs', paymentApiLanguage(searchParams.lang));
}

export default function DocsPage({ searchParams }) {
  return <DocsPageClient doc={searchParams.doc} lesson={searchParams.lesson} />;
}
