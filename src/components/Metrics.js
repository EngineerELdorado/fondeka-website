'use client';
import { useEffect, useRef } from 'react';
import { useI18n } from '../lib/i18n';

function Counter({ target, label }){
  const ref = useRef(null);
  useEffect(()=>{
    let n = 0; const end = Number(target);
    const step = Math.max(1, Math.floor(end / 120));
    const id = setInterval(()=>{ n+=step; if(n>=end){n=end; clearInterval(id);} if(ref.current) ref.current.textContent = n.toLocaleString(); },20);
    return ()=>clearInterval(id);
  }, [target]);
  return (
    <div className="card text-center">
      <div className="text-3xl font-extrabold" ref={ref}>0</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
export default function Metrics(){
  const { t } = useI18n();
  return (
    <section className="section bg-fondeka-light">
      <div className="container-pad">
        <h2 className="h mb-6">{t('metrics.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Counter target={12000} label={t('metrics.users')} />
          <Counter target={6} label={t('metrics.countries')} />
          <Counter target={99} label={t('metrics.uptime') + ' %'} />
        </div>
      </div>
    </section>
  );
}
