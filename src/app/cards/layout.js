import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('cards');

export default function CardsLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('cards'))}
      </script>
    </>
  );
}
