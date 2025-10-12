'use client';

/**
 * Decorative corner art for the hero.
 * - Images are absolute, behind content, pointer-events: none.
 * - Super subtle animation; responsive sizes; respects reduced motion.
 * - Supply any image URLs; transparent PNGs/SVGs work best.
 */
export default function HeroCorners({
                                        leftSrc  = 'https://images.unsplash.com/photo-1751986416203-6f51aae09f5e?auto=format&fit=crop&q=80&w=674',   // replace with yours
                                        rightSrc = 'https://images.unsplash.com/photo-1612271648831-454f05e23039?auto=format&fit=crop&q=80&w=774',   // replace with yours
                                        leftAlt  = '',
                                        rightAlt = '',
                                    }) {
    return (
        <>
            <div className="fd-corner fd-left"  aria-hidden="true">
                <img src={leftSrc}  alt={leftAlt} />
            </div>
            <div className="fd-corner fd-right" aria-hidden="true">
                <img src={rightSrc} alt={rightAlt} />
            </div>
        </>
    );
}
