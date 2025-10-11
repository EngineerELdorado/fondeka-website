'use client';
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import { createContext, useContext } from 'react';
import { useSearchParams } from 'next/navigation';

const dict = { fr, en };
const I18nContext = createContext({ t:(k)=>k, lang:'en' });

export function I18nProvider({ children }){
  const sp = useSearchParams();
  const lang = (sp.get('lang') || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const table = dict[lang] || dict.en;
  const t = (key) => table[key] ?? key;
  return <I18nContext.Provider value={{ t, lang }}>{children}</I18nContext.Provider>;
}
export function useI18n(){ return useContext(I18nContext); }
