'use client';
import { useI18n } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';

export default function Page(){
  const { t, lang } = useI18n();
  const sp = useSearchParams();

  // Try plural keys first, then singular (in case locales use one or the other)
  const pick = (primaryKey, fallbackKey) => {
    const v = t(primaryKey);
    return v === primaryKey ? t(fallbackKey) : v;
  };

  const title = pick('product.airtimes.title', 'product.airtime.title');
  const body  = pick('product.airtimes.body',  'product.airtime.body');

  // Read icon from the URL query (?icon=...), fallback to your current image
  const fallbackIcon = 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200';
  const icon = sp.get('icon') || fallbackIcon;

  return (
      <main className="section">
        <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="h">{title}</h1>
            <p className="mt-3 text-gray-700">{body}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="card">Mobile Money, cards & crypto supported</li>
              <li className="card">Clear dashboard & controls</li>
              <li className="card">Business API available</li>
            </ul>
            <a href={`/business?lang=${lang}`} className="btn btn-primary mt-6 w-fit">Use the API</a>
          </div>

          {/* Visual: elevation + sheen + rounded border, using the passed icon */}
          <div className="elevate-hero">
            <div className="hero-sheen rounded-2xl border">
              <img
                  src={icon}
                  alt={title}
                  className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>
  );
}
