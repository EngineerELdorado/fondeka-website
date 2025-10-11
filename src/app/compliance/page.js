'use client';
import { useI18n } from '../../lib/i18n';
export default function Compliance(){
  const { t } = useI18n();
  return (
    <main className="section">
      <div className="container-pad grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="h">{t('compliance.title')}</h1>
          <p className="mt-2 text-gray-700">Security-first, regulator-friendly.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="card">{t('compliance.k1')}</li>
            <li className="card">{t('compliance.k2')}</li>
            <li className="card">{t('compliance.k3')}</li>
            <li className="card">{t('compliance.k4')}</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Documents</h3>
          <ul className="mt-3 text-sm list-disc pl-6 text-gray-700">
            <li>KYC/AML & Sanctions policy</li>
            <li>Business continuity & disaster recovery</li>
            <li>Settlement procedures (normal/crisis)</li>
            <li>Wallet terms of use</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
