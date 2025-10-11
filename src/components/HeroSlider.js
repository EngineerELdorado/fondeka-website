// src/components/HeroSlider.js
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSlider({
                                       images = [],
                                       alt = 'Fondeka app preview',
                                       intervalMs = 5500,
                                       className = '',
                                   }) {
    const [idx, setIdx] = useState(0);
    const timerRef = useRef(null);
    const hoverRef = useRef(false);
    const containerRef = useRef(null);

    const reducedMotion = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
        []
    );

    // Autoplay (pauses if user hovers)
    useEffect(() => {
        if (reducedMotion || images.length <= 1) return;
        timerRef.current = setInterval(() => {
            if (!hoverRef.current) setIdx((i) => (i + 1) % images.length);
        }, intervalMs);
        return () => clearInterval(timerRef.current);
    }, [images.length, intervalMs, reducedMotion]);

    const onEnter = () => (hoverRef.current = true);
    const onLeave = () => (hoverRef.current = false);

    // Keyboard arrows still work (invisible controls)
    useEffect(() => {
        const onKey = (e) => {
            if (!containerRef.current) return;
            if (!containerRef.current.matches(':focus, :focus-within')) return;
            if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length);
            if (e.key === 'ArrowLeft')  setIdx((i) => (i - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [images.length]);

    // Basic swipe
    const startX = useRef(null);
    const onPointerDown = (e) => (startX.current = e.clientX);
    const onPointerUp = (e) => {
        if (startX.current == null) return;
        const dx = e.clientX - startX.current;
        if (dx > 40)  setIdx((i) => (i - 1 + images.length) % images.length);
        if (dx < -40) setIdx((i) => (i + 1) % images.length);
        startX.current = null;
    };

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Fondeka hero slider"
            className={`relative isolate ${className}`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
        >
            {/* Visual wrapper: elevation + sheen + rounded border */}
            <div className="elevate-hero">
                <div className="hero-sheen rounded-2xl border">
                    <div className="relative w-full h-80">
                        {images.map((src, i) => (
                            <Image
                                key={src}
                                src={src}
                                alt={`${alt} — slide ${i + 1}`}
                                fill
                                sizes="(min-width: 1024px) 560px, 100vw"
                                priority={i === 0}
                                className={`absolute inset-0 object-cover rounded-2xl transition-opacity duration-700 ease-in-out
                  ${i === idx ? 'opacity-100 float-hero shadow-breathe' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* No arrows, no dots */}
        </div>
    );
}
