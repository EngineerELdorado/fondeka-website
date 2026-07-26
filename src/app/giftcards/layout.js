import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('giftcards');

export default function GiftcardsLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('giftcards'))}
      </script>
    </>
  );
}
