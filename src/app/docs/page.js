'use client';
import { useI18n } from '../../lib/i18n';
const Code = ({ children }) => (
  <pre className="mt-3 p-4 bg-gray-900 text-white rounded-xl overflow-auto text-xs"><code>{children}</code></pre>
);
export default function Docs(){
  const { t } = useI18n();
  return (
    <main className="section">
      <div className="container-pad">
        <h1 className="h">{t('docs.title')}</h1>
        <p className="mt-2 text-gray-600">{t('docs.subtitle')}</p>
        <div className="card mt-8">
          <h2 className="text-lg font-semibold">{t('docs.auth')}</h2>
          <p className="text-sm text-gray-600 mt-1">Use API keys (test & live). Pass via Authorization: Bearer.</p>
          <Code>{`curl -X GET https://api.fondeka.com/v1/me \
  -H "Authorization: Bearer <YOUR_API_KEY>"`}</Code>
        </div>
        <div className="card mt-6">
          <h2 className="text-lg font-semibold">{t('docs.collect')}</h2>
          <Code>{`curl -X POST https://api.fondeka.com/v1/paylinks \
  -H "Authorization: Bearer <KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 25.00,
    "currency": "USD",
    "methods": ["MOBILE_MONEY","CARD","CRYPTO"],
    "reference": "INV-2025-1001",
    "callbackUrl": "https://merchant.com/webhooks/fondeka"
  }'`}</Code>
          <Code>{`// Node fetch
const res = await fetch('https://api.fondeka.com/v1/paylinks',{
  method:'POST',
  headers:{'Authorization':'Bearer '+KEY,'Content-Type':'application/json'},
  body: JSON.stringify({ amount:25, currency:'USD', methods:['MOBILE_MONEY','CARD','CRYPTO'] })
});
const link = await res.json();`}</Code>
        </div>
        <div className="card mt-6">
          <h2 className="text-lg font-semibold">{t('docs.payout')}</h2>
          <Code>{`curl -X POST https://api.fondeka.com/v1/payouts \
  -H "Authorization: Bearer <KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100.00,
    "currency": "USD",
    "method": "MOBILE_MONEY",
    "destination": { "msisdn":"+243970000000","network":"MPESA_CD" },
    "reference": "PAY-001"
  }'`}</Code>
        </div>
      </div>
    </main>
  );
}
