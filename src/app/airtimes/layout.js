import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('airtimes');

export default function AirtimesLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('airtimes'))}
      </script>
    </>
  );
}
