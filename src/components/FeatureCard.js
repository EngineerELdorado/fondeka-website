'use client';
import Image from 'next/image';
import Link from 'next/link';

function withIconInHref(href, icon) {
    if (!icon) return href;
    if (typeof href === 'object' && href !== null) {
        return { ...href, query: { ...(href.query || {}), icon } };
    }
    try {
        const hasHash = href.includes('#');
        const [beforeHash, hashPart = ''] = href.split('#');
        const [path, qs = ''] = beforeHash.split('?');
        const params = new URLSearchParams(qs);
        if (!params.has('icon')) params.set('icon', icon);
        const newQs = params.toString();
        return `${path}${newQs ? `?${newQs}` : ''}${hasHash ? `#${hashPart}` : ''}`;
    } catch {
        const sep = href.includes('?') ? '&' : '?';
        return `${href}${sep}icon=${encodeURIComponent(icon)}`;
    }
}

export default function FeatureCard({ title, text, icon, href, cta }) {
    const hrefWithIcon = withIconInHref(href, icon);

    return (
        <Link
            href={hrefWithIcon}
            className="block w-full min-w-0 card card-hover p-4 sm:p-5 md:p-6 flex flex-col focus:outline-none focus:ring-2 focus:ring-fondeka-mint"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="badge"><span className="text-fondeka-green">●</span><span>Fondeka</span></div>
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 truncate">{text}</p>

            <div className="mt-4 sm:mt-5 flex-1 min-h-0">
                {/* Aspect wrapper prevents overflow; Image uses fill and object-cover */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl border overflow-hidden">
                    <Image
                        src={icon}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                        priority={false}
                    />
                </div>
            </div>

            {cta && (
                <span className="mt-5 text-sm text-fondeka-green inline-flex items-center gap-1">
          {cta} <span aria-hidden>→</span>
        </span>
            )}
        </Link>
    );
}
