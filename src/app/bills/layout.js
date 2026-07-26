import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('bills');

export default function BillsLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('bills'))}
      </script>
    </>
  );
}
