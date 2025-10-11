'use client';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
export default function ProductsPage(){
  const { t, lang } = useI18n();
  const slugs = ['loans','cards','bills','esim','crypto','payments','giftcards','airtimes','shopping'];
  const items = slugs.map(slug => ({ slug, title: t(`product.${slug}.title`), body: t(`product.${slug}.body`), icon: `/${slug}.svg` }));
  return (
    <main className="section">
      <div className="container-pad">
        <h1 className="h">{t('products.title')}</h1>
        <p className="mt-2 text-gray-600">{t('products.subtitle')}</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map(x => (
            <Link key={x.slug} href={`/${x.slug}?lang=${lang}`} className="card card-hover transition focus:outline-none focus:ring-2 focus:ring-fondeka-mint">
              <img src={x.icon} alt="" className="h-32 w-full object-contain mb-4" />
              <h3 className="text-lg font-semibold truncate-1">{x.title}</h3>
              <p className="text-sm text-gray-600 mt-2 truncate-1">{x.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
