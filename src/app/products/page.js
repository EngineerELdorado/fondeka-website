// server file (no 'use client')
export const metadata = {
  title: 'Products — Fondeka',
  // point SEO signals to the homepage to avoid duplicate content
  alternates: { canonical: '/' },
};

import ProductsRedirect from './redirect';

export default function Page() {
  return <ProductsRedirect />;
}
