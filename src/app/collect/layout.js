import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('collect');

export default function CollectLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('collect'))}
      </script>
    </>
  );
}
