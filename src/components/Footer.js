'use client';
import Logo from './Logo';
import { useI18n } from '@/lib/i18n';
import DownloadAppButton from "@/components/DownloadAppButton";

export default function Footer(){
  const year = new Date().getFullYear();
  const { t, lang } = useI18n();

  return (
    <footer className="border-t bg-white">
      <div className="container-pad py-12 grid md:grid-cols-4 gap-10">
        {/* Brand / tagline */}
        <div>
          <Logo className="h-9 w-auto mb-4" />
          <p className="text-sm text-gray-600">{t('footer.tagline')}</p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3">{t('nav.products')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`/products?lang=${lang}`} className="hover:text-fondeka-green">Catalogue</a></li>
            <li><a href={`/business?lang=${lang}`} className="hover:text-fondeka-green">Business (API)</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`/about?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.about')}</a></li>
            <li><a href={`/compliance?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.compliance')}</a></li>
            <li><a href={`/docs?lang=${lang}`} className="hover:text-fondeka-green">{t('nav.docs')}</a></li>
          </ul>
        </div>

        {/* Contact & app download */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-600">
            info@fondeka.com<br/>+243 991 079 097
          </p>
          <DownloadAppButton className="mt-6" />
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t">
        <div className="container-pad py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social icons – brand colored */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/fonds-denis-kalenga/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full p-2 ring-0 transition hover:translate-y-[-1px] hover:ring-2 hover:ring-fondeka-mint/40"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" role="img">
                <path fill="#0A66C2" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.6h-4V8z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/fondeka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center rounded-full p-2 ring-0 transition hover:translate-y-[-1px] hover:ring-2 hover:ring-fondeka-mint/40"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" role="img">
                <path fill="#1877F2" d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.296h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/fondeka_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-full p-2 ring-0 transition hover:translate-y-[-1px] hover:ring-2 hover:ring-fondeka-mint/40"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" role="img">
                <defs>
                  <linearGradient id="igGradientFooter" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#F58529"/>
                    <stop offset="25%"  stopColor="#FEDA77"/>
                    <stop offset="50%"  stopColor="#DD2A7B"/>
                    <stop offset="75%"  stopColor="#8134AF"/>
                    <stop offset="100%" stopColor="#515BD4"/>
                  </linearGradient>
                </defs>
                <path fill="url(#igGradientFooter)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.063 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.063-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.053.072 5.775.13 4.6.346 3.635 1.31 2.67 2.274 2.454 3.45 2.396 4.728.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.058 1.278.274 2.454 1.238 3.418.965.964 2.14 1.18 3.418 1.238C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.947-.072 1.278-.058 2.454-.274 3.418-1.238.964-.965 1.18-2.14 1.238-3.418.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.058-1.278-.274-2.454-1.238-3.418C19.401.346 18.225.13 16.947.072 15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.316a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span>© {year} Fondeka. All rights reserved.</span>
            <span>Built in DR Congo & Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
