'use client';
import { useI18n } from '../../lib/i18n';
export default function Page(){
  const { t, lang } = useI18n();
  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="h">{t('product.business.title')}</h1>
          <p className="mt-3 text-gray-700">{t('product.business.body')}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="card">Mobile Money, cards & crypto supported</li>
            <li className="card">Clear dashboard & controls</li>
            <li className="card">Business API available</li>
          </ul>
          <a href={`/business?lang=${lang}`} className="btn btn-primary mt-6 w-fit">Use the API</a>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" alt="" className="w-full h-80 object-cover rounded-2xl border" />
        </div>
      </div>
    </main>
  );
}
