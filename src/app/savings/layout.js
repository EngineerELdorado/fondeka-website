import { createMetadata, createSavingsFaqSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('savings');

export default function SavingsLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('savings'))}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createSavingsFaqSchema())}
      </script>
    </>
  );
}
