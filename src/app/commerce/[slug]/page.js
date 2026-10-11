import { notFound } from 'next/navigation';
import CommerceDetailPage from '@/components/CommerceDetailPage';
import { commerceMetadata, commercePages } from '@/lib/commerce';

export function generateStaticParams() {
  return Object.keys(commercePages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const values = commerceMetadata[params.slug];
  if (!values) return {};
  return {
    title: values[0],
    description: values[1],
    alternates: { canonical: `/commerce/${params.slug}` },
    openGraph: { title: values[0], description: values[1], url: `/commerce/${params.slug}` },
  };
}

export default function CommercePage({ params }) {
  const page = commercePages[params.slug];
  if (!page) notFound();
  return <CommerceDetailPage page={page} />;
}
