'use client';
import { useI18n } from '../lib/i18n';
import clsx from 'clsx';
function Plan({ name, price, features, best }){
  const { t } = useI18n();
  return (
    <div className={clsx("card relative", best && "ring-2 ring-fondeka-green")}>
      {best && <span className="absolute -top-3 right-4 badge">Best</span>}
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="mt-2 text-3xl font-extrabold">${price}<span className="text-base text-gray-500">/{t('pricing.month')}</span></div>
      <ul className="mt-4 space-y-2 text-sm">{features.map((f,i)=> <li key={i}>✅ {f}</li>)}</ul>
      <button className="btn btn-primary mt-6">{t('pricing.btn')}</button>
    </div>
  );
}
export default function PriceTable(){
  const { t } = useI18n();
  const F = (k)=>t(k);
  const featuresBase = [F('pricing.feature.cards'), F('pricing.feature.links'), F('pricing.feature.mobilemoney')];
  const featuresGrow = [...featuresBase, F('pricing.feature.crypto'), F('pricing.feature.settlement')];
  const featuresScale = [...featuresGrow, F('pricing.feature.api')];
  return (
    <section className="section">
      <div className="container-pad">
        <h1 className="h">{t('pricing.title')}</h1>
        <p className="mt-2 text-gray-600">{t('pricing.subtitle')}</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Plan name={t('pricing.free')} price="0" features={featuresBase} />
          <Plan name={t('pricing.grow')} price="19" features={featuresGrow} best />
          <Plan name={t('pricing.scale')} price="99" features={featuresScale} />
        </div>
      </div>
    </section>
  );
}
