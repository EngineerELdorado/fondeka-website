'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import { businessAppUrl } from '@/lib/business';

const guideOrigin = new URL(process.env.NEXT_PUBLIC_FONDEKA_GUIDES_ORIGIN || businessAppUrl).origin;
const isGuideId = (value) => typeof value === 'string' && /^[a-z][a-z0-9-]{0,79}$/.test(value);

function guideUrl(lang, doc, lesson) {
  const url = new URL('/api-guides', guideOrigin);
  url.searchParams.set('lang', lang);
  if (isGuideId(doc)) url.searchParams.set('doc', doc);
  if (isGuideId(lesson)) url.searchParams.set('lesson', lesson);
  return url;
}

export default function DocsPageClient({ doc, lesson }) {
  const { lang } = useI18n();
  const french = lang === 'fr';
  const frame = useRef(null);
  const [height, setHeight] = useState(760);
  const search = useSearchParams();
  const standaloneUrl = guideUrl(lang, search.get('doc'), search.get('lesson')).href;
  const embeddedUrl = guideUrl(lang, doc, lesson);
  embeddedUrl.searchParams.set('embed', '1');
  const frameUrl = embeddedUrl.href;

  useEffect(() => {
    const receive = (event) => {
      if (event.origin !== guideOrigin || event.source !== frame.current?.contentWindow) return;
      const data = event.data;
      if (data?.type !== 'fondeka:public-api-guides') return;
      if (Number.isFinite(data.height) && data.height > 0) setHeight(Math.ceil(data.height));
      const url = new URL(window.location.href);
      for (const key of ['doc', 'lesson']) {
        if (isGuideId(data[key])) url.searchParams.set(key, data[key]);
        else if (data[key] === null) url.searchParams.delete(key);
      }
      if (url.href !== window.location.href) window.history.replaceState(null, '', url.href);
    };
    window.addEventListener('message', receive);
    frame.current?.contentWindow?.postMessage('fondeka:public-api-guides:measure', guideOrigin);
    return () => window.removeEventListener('message', receive);
  }, [frameUrl]);

  return (
    <main className="mx-auto max-w-[1328px] px-4 py-8 md:px-6 md:py-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-fondeka-dark">
          {french ? 'Guides API' : 'API guides'}
        </h1>
        <Link href={`/docs/faq?lang=${lang}`} className="btn btn-secondary">
          {french ? 'FAQ de l’API' : 'API FAQ'}
        </Link>
      </div>
      <iframe
        ref={frame}
        src={frameUrl}
        title={french ? 'Guides de l’API Business Fondeka' : 'Fondeka Business API guides'}
        className="block w-full rounded-2xl border-0 bg-fondeka-light"
        style={{ height }}
        referrerPolicy="origin"
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
      />
      <a href={standaloneUrl} target="_blank" rel="noopener" className="mt-4 inline-block text-sm text-fondeka-green underline">
        {french ? 'Ouvrir les guides dans un nouvel onglet' : 'Open the guides in a new tab'}
      </a>
    </main>
  );
}
