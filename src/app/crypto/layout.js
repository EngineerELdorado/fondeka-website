import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('crypto');

export default function CryptoLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('crypto'))}
      </script>
    </>
  );
}
