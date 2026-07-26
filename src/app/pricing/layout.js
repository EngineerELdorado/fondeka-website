import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('pricing');

export default function PricingLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('pricing'))}
      </script>
    </>
  );
}
