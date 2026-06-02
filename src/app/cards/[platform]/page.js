import { notFound } from 'next/navigation';
import { cardGuideOrder, cardGuides } from '@/lib/cardGuides';
import CardGuidePageClient from './CardGuidePageClient';

export function generateStaticParams() {
  return cardGuideOrder.map((platform) => ({ platform }));
}

export function generateMetadata({ params }) {
  const guide = cardGuides[params.platform];
  if (!guide) return {};

  return {
    title: `${guide.en.title} | Fondeka`,
    description: guide.en.summary,
  };
}

export default function Page({ params }) {
  if (!cardGuides[params.platform]) notFound();
  return <CardGuidePageClient platform={params.platform} />;
}

