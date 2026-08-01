import { createEsimFaqSchema, createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('esim');

export default function EsimLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('esim'))}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createEsimFaqSchema())}
      </script>
    </>
  );
}
