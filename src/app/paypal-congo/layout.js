import { createMetadata, createPaypalCongoFaqSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('paypalCongo');

export default function PaypalCongoLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('paypalCongo'))}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createPaypalCongoFaqSchema())}
      </script>
    </>
  );
}
