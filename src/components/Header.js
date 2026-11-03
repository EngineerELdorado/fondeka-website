'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DownloadAppButton from "@/components/DownloadAppButton";
import { businessAppUrl } from '@/lib/business';
import { trackAppDownloadClick } from '@/lib/metaPixel';
import { languagePreferenceCookie } from '@/lib/language';

function LanguageSwitch({ lang, onChange, hrefForLanguage, compact = false }) {
  return (
    <div role="group" aria-label={lang === 'fr' ? 'Langue' : 'Language'} className="inline-flex gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1">
      {[{ value: 'en', label: 'English' }, { value: 'fr', label: 'Français' }].map(option => (
        <a
          key={option.value}
          href={hrefForLanguage(option.value)}
          hrefLang={option.value}
          lang={option.value}
          aria-label={option.label}
          aria-current={lang === option.value ? 'page' : undefined}
          title={option.label}
          onClick={(event) => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            onChange(option.value);
          }}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fondeka-green ${lang === option.value ? 'bg-fondeka-green text-white shadow-sm' : 'text-gray-600 hover:bg-white'}`}
        >
          {compact ? option.value.toUpperCase() : option.label}
        </a>
      ))}
    </div>
  );
}

export default function Header(){
  const [open, setOpen] = useState(false);
  const [langOpenDesk, setLangOpenDesk] = useState(false);
  const [langOpenMob, setLangOpenMob] = useState(false);
  const { t, lang } = useI18n();
  const nav = [
    { href: '/products', label: t('nav.products') },
    { href: '/commerce', label: 'Commerce' },
    // { href: '/pricing', label: t('nav.pricing') },
    { href: '/compliance', label: t('nav.compliance') },
    { href: '/docs', label: t('nav.docs') },
    { href: businessAppUrl, label: t('nav.business'), external: true },
    { href: '/about', label: t('nav.about') },
  ];

  const pathname = usePathname();
  const isApiFaq = pathname === '/docs/faq';
  const router = useRouter();
  const sp = useSearchParams();

  const languageHref = (lng) => {
    const params = new URLSearchParams(sp.toString());
    params.set('lang', lng);
    return `${pathname}?${params.toString()}`;
  };

  const setLang = (lng) => {
    try {
      document.cookie = `${languagePreferenceCookie}=${lng}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
    } catch { /* An explicit language URL still works if cookies are unavailable. */ }
    const hash = pathname === '/docs/faq' ? window.location.hash : '';
    router.push(`${languageHref(lng)}${hash}`);
    setLangOpenDesk(false);
    setLangOpenMob(false);
  };

  const goDownload = (e) => {
    e.preventDefault();
    trackAppDownloadClick({ action: 'view_download_section', location: 'header-menu-download-cta' });
    const onHome = pathname === '/' || pathname === '';
    setOpen(false);
    if (onHome) {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`/?lang=${lang}#download`);
    }
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
            <img src="/icon.svg" alt="Fondeka icon" className="h-8 w-8" />
            <span className="text-xl font-extrabold tracking-tight text-fondeka-dark">Fondeka</span>
          </Link>

          <nav className={`${isApiFaq ? 'hidden lg:flex' : 'hidden md:flex'} items-center gap-8 text-sm`}>
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
              if (i.external) {
                return (
                    <a key={i.href} href={i.href} className="hover:text-fondeka-green">
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

            {isApiFaq ? <LanguageSwitch lang={lang} onChange={setLang} hrefForLanguage={languageHref} /> : <div className="relative" ref={deskRef}>
              <button onClick={(e)=>{e.stopPropagation(); setLangOpenDesk(v=>!v);}} className="text-xs px-3 py-1 rounded-lg border inline-flex items-center gap-2">
                {lang.toUpperCase()} ▾
              </button>
              {langOpenDesk && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl border bg-white shadow-soft p-1 z-50">
                    <button onClick={()=>setLang('en')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">English</button>
                    <button onClick={()=>setLang('fr')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">Français</button>
                  </div>
              )}
            </div>}

            {!isApiFaq && <DownloadAppButton trackingId="header-download-cta" />}
          </nav>

          <div className={`${isApiFaq ? 'lg:hidden' : 'md:hidden'} flex items-center gap-2`}>
            {isApiFaq ? <LanguageSwitch lang={lang} onChange={setLang} hrefForLanguage={languageHref} compact /> : <div className="relative" ref={mobRef}>
              <button onClick={(e)=>{e.stopPropagation(); setLangOpenMob(v=>!v);}} className="text-xs px-3 py-1 rounded-lg border">{lang.toUpperCase()} ▾</button>
              {langOpenMob && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl border bg-white shadow-soft p-1 z-50">
                    <button onClick={()=>setLang('en')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">English</button>
                    <button onClick={()=>setLang('fr')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-fondeka-light">Français</button>
                  </div>
              )}
            </div>}
            <button onClick={()=>setOpen(!open)} className="p-2 rounded-lg border">{open ? '✕' : '☰'}</button>
          </div>
        </div>

        {open && (
            <div className={`${isApiFaq ? 'lg:hidden' : 'md:hidden'} border-t bg-white`}>
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
                  if (i.external) {
                    return (
                        <a key={i.href} href={i.href} className="py-2" onClick={()=>setOpen(false)}>
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

                {!isApiFaq && <a href="#download" onClick={goDownload} className="btn btn-primary w-full text-center">{t('cta.download')}</a>}
              </div>
            </div>
        )}
      </header>
  );
}
