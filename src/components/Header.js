'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DownloadAppButton from "@/components/DownloadAppButton";

export default function Header(){
  const [open, setOpen] = useState(false);
  const [langOpenDesk, setLangOpenDesk] = useState(false);
  const [langOpenMob, setLangOpenMob] = useState(false);
  const { t, lang } = useI18n();
  const nav = [
    { href: '/products', label: t('nav.products') },
    // { href: '/pricing', label: t('nav.pricing') },
    { href: '/compliance', label: t('nav.compliance') },
    { href: '/docs', label: t('nav.docs') },
    { href: '/business', label: t('nav.business') },
    { href: '/about', label: t('nav.about') },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const setLang = (lng) => {
    const params = new URLSearchParams(sp.toString());
    params.set('lang', lng);
    router.push(`${pathname}?${params.toString()}`);
    setLangOpenDesk(false);
    setLangOpenMob(false);
  };

  // close dropdowns on outside click
  const deskRef = useRef(null);
  const mobRef = useRef(null);
  useEffect(()=>{
    const onClick = (e)=>{
      if(deskRef.current && !deskRef.current.contains(e.target)) setLangOpenDesk(false);
      if(mobRef.current && !mobRef.current.contains(e.target)) setLangOpenMob(false);
    };
    document.addEventListener('click', onClick);
    return ()=>document.removeEventListener('click', onClick);
  },[]);

  // NEW: scroll/route handler for "Products"
  const goProducts = (e) => {
    e.preventDefault();
    const onHome = pathname === '/' || pathname === '';
    if (onHome) {
      setOpen(false); // close mobile menu if open
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // navigate to home and jump to #products
      router.push(`/?lang=${lang}#products`);
    }
  };

  return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <div className="container-pad flex items-center justify-between py-3">
          <Link href={`/?lang=${lang}`} className="flex items-center gap-3">
            <Logo className="h-8 w-auto" withWordmark />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {/* Desktop nav — intercept Products only */}
            {nav.map(i => {
              if (i.href === '/products') {
                return (
                    <a
                        key={i.href}
                        href="#products"
                        onClick={goProducts}
                        className="hover:text-fondeka-green cursor-pointer"
                    >
                      {i.label}
                    </a>
                );
              }
              return (
                  <Link key={i.href} href={`${i.href}?lang=${lang}`} className="hover:text-fondeka-green">
                    {i.label}
                  </Link>
              );
            })}

            <div className="relative" ref={deskRef}>
              <button onClick={(e)=>{e.stopPropagation(); setLangOpenDesk(v=>!v);}} className="text-xs px-3 py-1 rounded-lg border inline-flex items-center gap-2">
                {lang.toUpperCase()} ▾
              </button>
              {langOpenDesk && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl border bg-white shadow-soft p-1 z-50">
                    <button onClick={()=>setLang('en')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">English</button>
                    <button onClick={()=>setLang('fr')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">Français</button>
                  </div>
              )}
            </div>

            <DownloadAppButton />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <div className="relative" ref={mobRef}>
              <button onClick={(e)=>{e.stopPropagation(); setLangOpenMob(v=>!v);}} className="text-xs px-3 py-1 rounded-lg border">{lang.toUpperCase()} ▾</button>
              {langOpenMob && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl border bg-white shadow-soft p-1 z-50">
                    <button onClick={()=>setLang('en')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">English</button>
                    <button onClick={()=>setLang('fr')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">Français</button>
                  </div>
              )}
            </div>
            <button onClick={()=>setOpen(!open)} className="p-2 rounded-lg border">{open ? '✕' : '☰'}</button>
          </div>
        </div>

        {open && (
            <div className="md:hidden border-t bg-white">
              <div className="container-pad py-3 flex flex-col gap-3">
                {/* Mobile nav — intercept Products only */}
                {nav.map(i => {
                  if (i.href === '/products') {
                    return (
                        <a key={i.href} href="#products" onClick={goProducts} className="py-2">
                          {i.label}
                        </a>
                    );
                  }
                  return (
                      <Link key={i.href} href={`${i.href}?lang=${lang}`} className="py-2" onClick={()=>setOpen(false)}>
                        {i.label}
                      </Link>
                  );
                })}

                <Link href={`#download?lang=${lang}`} className="btn btn-primary w-full text-center">{t('cta.download')}</Link>
              </div>
            </div>
        )}
      </header>
  );
}
