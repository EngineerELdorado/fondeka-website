'use client';
import { useEffect, useState, useRef } from 'react';

export default function DownloadAppButton({ className = '' }){
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(()=>{
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const mobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(ua);
    setIsMobile(mobile);
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
        <a href="https://play.google.com/store/apps/details?id=com.fondeka.app" className="btn btn-primary">Google Play</a>
        <a href="https://apps.apple.com/app/id000000000" className="btn btn-ghost bg-white text-fondeka-dark">App Store</a>
      </div>
    );
  }

  return (
    <div className={className + ' relative'} ref={menuRef}>
      <button onClick={(e)=>{e.stopPropagation(); setOpen(v=>!v);}} className="btn btn-primary">Get the app ▾</button>
      {open && (
        <div className="absolute z-50 right-0 mt-2 w-72 rounded-2xl border bg-white p-4 shadow-soft grid grid-cols-2 gap-4">
          <div className="text-center">
            <img src="/qr-google.svg" alt="Google Play QR" className="w-full h-auto rounded-2xl border" />
            <div className="mt-2 text-xs">Google Play</div>
          </div>
          <div className="text-center">
            <img src="/qr-apple.svg" alt="App Store QR" className="w-full h-auto rounded-2xl border" />
            <div className="mt-2 text-xs">App Store</div>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.fondeka.app" className="col-span-2 btn btn-ghost w-full text-center">Open store page</a>
        </div>
      )}
    </div>
  );
}
