import { createMetadata, createServiceSchema } from '@/lib/seo';

export const metadata = createMetadata('loans');

export default function LoansLayout({ children }) {
  return (
    <>
      {children}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(createServiceSchema('loans'))}
      </script>
    </>
  );
}
