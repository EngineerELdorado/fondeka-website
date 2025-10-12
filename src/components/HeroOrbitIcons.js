'use client';
import { useEffect, useRef } from 'react';

/**
 * HeroOrbitIcons (constant circle)
 * - Orbits by rotating a single `.orbit-ring` (constant, smooth).
 * - Icons are positioned at fixed angles; no per-icon animations.
 */
export default function HeroOrbitIcons({
                                           side = 'left',              // 'left' | 'right'
                                           icons = [],                 // [{ src }]
                                           radius = 80,                // px (ring radius)
                                           duration = 32,              // seconds per full rotation
                                       }) {
    const anchorRef = useRef(null);

    useEffect(() => {
        const el = anchorRef.current;
        if (!el) return;
        el.style.setProperty('--orbit-radius', `${radius}px`);
        el.style.setProperty('--orbit-duration', `${duration}s`);
    }, [radius, duration]);

    return (
        <div
            ref={anchorRef}
            className={`orbit-anchor ${side === 'right' ? 'orbit-right' : 'orbit-left'}`}
        >
            <div className="orbit-ring">
                {icons.map((icon, i) => (
                    <div
                        key={i}
                        className="orbit-icon"
                        style={{ '--angle': `${(i / icons.length) * 360}deg` }}
                    >
                        <img src={icon.src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}
