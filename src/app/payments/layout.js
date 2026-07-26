import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('payments');

export default function PaymentsLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('payments'))}
      </script>
    </>
  );
}
