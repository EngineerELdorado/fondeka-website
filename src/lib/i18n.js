'use client';
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import { createContext, useContext, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { termsLanguage } from './language';

const dict = { fr, en };
const I18nContext = createContext({ t:(k)=>k, lang:'en' });

export function I18nProvider({ children }){
  const sp = useSearchParams();
  const pathname = usePathname();
  const lang = pathname === '/end-user-agreement'
    ? termsLanguage(sp.get('lang'))
    : (sp.get('lang') || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const table = dict[lang] || dict.en;
  const t = (key) => table[key] ?? key;
  return <I18nContext.Provider value={{ t, lang }}>{children}</I18nContext.Provider>;
}
export function useI18n(){ return useContext(I18nContext); }
