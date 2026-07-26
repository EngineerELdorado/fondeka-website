import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('business');

export default function BusinessLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('business'))}
      </script>
    </>
  );
}
