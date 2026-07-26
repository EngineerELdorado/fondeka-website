import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('airtime');

export default function AirtimeLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('airtime'))}
      </script>
    </>
  );
}
