'use client';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';
export default function Footer(){
  const year = new Date().getFullYear();
  const { t, lang } = useI18n();
  return (
    <footer className="border-t bg-white">
      <div className="container-pad py-12 grid md:grid-cols-4 gap-10">
        <div>
          <Logo className="h-9 w-auto mb-4" />
          <p className="text-sm text-gray-600">{t('footer.tagline')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{t('nav.products')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`/products?lang=${lang}`} className="hover:text-fondeka-green">Catalogue</a></li>
            <li><a href={`/business?lang=${lang}`} className="hover:text-fondeka-green">Business (API)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`/about?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.about')}</a></li>
            <li><a href={`/compliance?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.compliance')}</a></li>
            <li><a href={`/docs?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.docs')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-600">support@fondeka.com<br/>+243 991 079 097</p>
          <a href={`#download?lang=${lang}`} className="btn btn-primary mt-4">{t('cta.download')}</a>
        </div>
      </div>
      <div className="border-t">
        <div className="container-pad py-6 text-xs text-gray-500 flex justify-between items-center">
          <span>© {year} Fondeka. All rights reserved.</span>
          <span>Built in DR Congo & Luxembourg</span>
        </div>
      </div>
    </footer>
  );
}
