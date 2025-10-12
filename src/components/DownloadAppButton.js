'use client';
import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';

export default function DownloadAppButton({ className = '' }){
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useI18n();

  // Dummy search URLs (replace later with real store links)
  const playUrl = 'https://play.google.com/store/search?q=Fondeka&c=apps';
  const appStoreUrl = 'https://apps.apple.com/us/search?term=Fondeka';

  // Generate QR image URLs (served by a public QR service)
  const qrSize = '180x180';
  const qrPlay  = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(playUrl)}&margin=0`;
  const qrApple = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(appStoreUrl)}&margin=0`;

  useEffect(()=>{
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    setIsMobile(/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(ua));
  },[]);

  useEffect(()=>{
    const onClick = (e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return ()=>document.removeEventListener('click', onClick);
  },[]);

  if(isMobile){
    return (
        <div className={className + ' flex gap-3'}>
          <a href={playUrl} className="btn btn-primary">Google Play</a>
          <a href={appStoreUrl} className="btn btn-ghost bg-white text-fondeka-dark">App Store</a>
        </div>
    );
  }

  return (
      <div className={className + ' relative'} ref={menuRef}>
        <button
            onClick={(e)=>{ e.stopPropagation(); setOpen(v=>!v); }}
            className="btn btn-primary btn-3d"
            aria-haspopup="dialog"
            aria-expanded={open}
        >
          {t('cta.download')}
        </button>

        {open && (
            <div
                className="absolute z-50 right-0 mt-2 w-80 rounded-2xl border bg-white p-4 shadow-soft grid grid-cols-2 gap-4"
                role="dialog"
                aria-label="Download the Fondeka app"
            >
              {/* Google Play */}
              <a
                  href={playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center group"
                  onClick={()=>setOpen(false)}
              >
                <img
                    src={qrPlay}
                    alt="QR code for Google Play search: Fondeka"
                    loading="lazy"
                    className="w-full h-auto rounded-2xl border transition-transform group-hover:scale-[1.02]"
                />
                <div className="mt-2 text-xs">Google Play</div>
              </a>

              {/* App Store */}
              <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center group"
                  onClick={()=>setOpen(false)}
              >
                <img
                    src={qrApple}
                    alt="QR code for App Store search: Fondeka"
                    loading="lazy"
                    className="w-full h-auto rounded-2xl border transition-transform group-hover:scale-[1.02]"
                />
                <div className="mt-2 text-xs">App Store</div>
              </a>

              <a
                  href={playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 btn btn-ghost w-full text-center"
                  onClick={()=>setOpen(false)}
              >
                Open store page
              </a>
            </div>
        )}
      </div>
  );
}
