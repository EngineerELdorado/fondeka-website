'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const rawTagIds = process.env.NEXT_PUBLIC_GOOGLE_TAG_IDS || '';

const googleTagIds = rawTagIds
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean);

const primaryTagId = googleTagIds[0];

export default function GoogleTag() {
    const pathname = usePathname();

    useEffect(() => {
        if (!googleTagIds.length || typeof window.gtag !== 'function') {
            return;
        }

        const search = window.location.search;
        const pagePath = search ? `${pathname}?${search}` : pathname;

        googleTagIds.forEach((tagId) => {
            window.gtag('config', tagId, { page_path: pagePath });
        });
    }, [pathname]);

    if (!primaryTagId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-tag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        window.gtag = gtag;
                        gtag('js', new Date());
                        ${googleTagIds
                            .map((tagId) => `gtag('config', '${tagId}');`)
                            .join('\n')}
                    `,
                }}
            />
        </>
    );
}
