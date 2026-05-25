'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

/**
 * Decorative corner art for the hero.
 * - Images are absolute, behind content, pointer-events: none.
 * - Super subtle animation; responsive sizes; respects reduced motion.
 * - Supply any image URLs; transparent PNGs/SVGs work best.
 */
export default function HeroCorners({
                                    }) {
    const { lang } = useI18n();
    const isFrench = lang === 'fr';
    const leftSrc = isFrench ? '/left_fr.png' : '/welcome-portrait.png';
    const rightSrc = isFrench ? '/right_fr.png' : '/fondeka-portrait.png';

    return (
        <>
            <div className="fd-corner fd-left"  aria-hidden="true">
                <Image
                    src={leftSrc}
                    alt=""
                    width={1419}
                    height={2796}
                    sizes="(min-width: 1024px) 240px, 180px"
                    className="h-auto w-full rounded-2xl object-cover"
                    priority
                />
            </div>
            <div className="fd-corner fd-right" aria-hidden="true">
                <Image
                    src={rightSrc}
                    alt=""
                    width={1419}
                    height={2796}
                    sizes="(min-width: 1024px) 240px, 180px"
                    className="h-auto w-full rounded-2xl object-cover"
                />
            </div>
        </>
    );
}
