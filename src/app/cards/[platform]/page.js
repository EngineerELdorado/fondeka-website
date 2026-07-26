import { notFound } from 'next/navigation';
import { cardGuideOrder, cardGuides } from '@/lib/cardGuides';
import { siteUrl } from '@/lib/seo';
import CardGuidePageClient from './CardGuidePageClient';

export function generateStaticParams() {
  return cardGuideOrder.map((platform) => ({ platform }));
}

export function generateMetadata({ params }) {
  const guide = cardGuides[params.platform];
  if (!guide) return {};
  const title = `${guide.en.title} | Fondeka`;
  const description = guide.en.summary;
  const path = `/cards/${params.platform}`;

  return {
    title,
    description,
    keywords: [
      'Fondeka virtual card',
      'virtual card Congo',
      'virtual card Africa',
      `${params.platform} payment card`,
      guide.en.title,
    ],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Fondeka',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: guide.en.title }],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function Page({ params }) {
  if (!cardGuides[params.platform]) notFound();
  return <CardGuidePageClient platform={params.platform} />;
}
