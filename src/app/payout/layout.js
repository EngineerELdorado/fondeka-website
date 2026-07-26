import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('payout');

export default function PayoutLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('payout'))}
      </script>
    </>
  );
}
