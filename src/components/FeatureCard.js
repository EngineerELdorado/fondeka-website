// src/components/FeatureCard.js
'use client';
import Image from 'next/image';
import Link from 'next/link';

function withIconInHref(href, icon) {
    if (!icon) return href;

    // Object form: merge query
    if (typeof href === 'object' && href !== null) {
        return {
            ...href,
            query: { ...(href.query || {}), icon },
        };
    }

    // String form: append/merge ?icon=...
    try {
        const hasHash = href.includes('#');
        const [beforeHash, hashPart = ''] = href.split('#');
        const [path, qs = ''] = beforeHash.split('?');
        const params = new URLSearchParams(qs);
        if (!params.has('icon')) params.set('icon', icon);
        const newQs = params.toString();
        return `${path}${newQs ? `?${newQs}` : ''}${hasHash ? `#${hashPart}` : ''}`;
    } catch {
        // Fallback: just tack it on
        const sep = href.includes('?') ? '&' : '?';
        return `${href}${sep}icon=${encodeURIComponent(icon)}`;
    }
}

export default function FeatureCard({ title, text, icon, href, cta }) {
    const hrefWithIcon = withIconInHref(href, icon);

    return (
        <Link
            href={hrefWithIcon}
            className="card card-hover flex flex-col focus:outline-none focus:ring-2 focus:ring-fondeka-mint"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="badge"><span className="text-fondeka-green">●</span><span>Fondeka</span></div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold truncate-1">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 truncate-1">{text}</p>

            <div className="mt-5 flex-1">
                <Image
                    width={800}
                    height={500}
                    src={icon}
                    alt=""
                    className="rounded-2xl border w-full h-44 object-cover"
                />
            </div>

            {cta && (
                <span className="mt-5 text-sm text-fondeka-green inline-flex items-center gap-1">
          {cta} <span aria-hidden>→</span>
        </span>
            )}
        </Link>
    );
}
