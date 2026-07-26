import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('shopping');

export default function ShoppingLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('shopping'))}
      </script>
    </>
  );
}
