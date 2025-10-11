'use client';
import Image from 'next/image';
import FeatureCard from '../components/FeatureCard';
import CTA from '../components/CTA';
import DownloadAppButton from '../components/DownloadAppButton';
import Metrics from '../components/Metrics';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';

export default function Home(){
  const { t, lang } = useI18n();

  return (
      <main>
        <section className="gradient-hero">
          <div className="container-pad py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="kicker">{t('hero.kicker')}</div>
              <h1 className="display">{t('hero.title')}</h1>
              <p className="mt-4 text-gray-700 max-w-lg">{t('hero.body')}</p>

              <DownloadAppButton className="mt-6" />
              <div className="mt-3">
                <Link href={`/products?lang=${lang}`} className="text-sm underline">
                  {t('hero.secondary')}
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500">Mobile Money · Cards · Crypto</p>
            </div>

            <div className="card /* hero-sheen */">
              <Image
                  src="https://images.unsplash.com/photo-1613876215075-276fd62c89a4?auto=format&fit=crop&q=80&w=1200"
                  alt={t('hero.title')}
                  width={1200}
                  height={640}
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-80 object-cover rounded-2xl border float-hero shadow-breathe"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-pad grid md:grid-cols-3 gap-6">
            <FeatureCard title={t('product.loans.title')}    text={t('product.loans.body')}    icon="https://plus.unsplash.com/premium_photo-1672660509832-0c749dbd82eb?auto=format&fit=crop&q=80&w=1915" href={`/loans?lang=${lang}`}    cta="Explore" />
            <FeatureCard title={t('product.cards.title')}    text={t('product.cards.body')}    icon="https://plus.unsplash.com/premium_photo-1728735030984-fef628ee1929?auto=format&fit=crop&q=80&w=1895" href={`/cards?lang=${lang}`}    cta="Explore" />
            <FeatureCard title={t('product.bills.title')}    text={t('product.bills.body')}    icon="https://images.unsplash.com/photo-1692158962133-6c97ee651ab9?auto=format&fit=crop&q=80&w=1160" href={`/bills?lang=${lang}`}    cta="Explore" />
            <FeatureCard title={t('product.esim.title')}     text={t('product.esim.body')}     icon="https://images.unsplash.com/photo-1718631919973-ca9f02f46534?auto=format&fit=crop&q=80&w=1740" href={`/esim?lang=${lang}`}     cta="Explore" />
            <FeatureCard title={t('product.crypto.title')}   text={t('product.crypto.body')}   icon="https://plus.unsplash.com/premium_photo-1676998623020-2640a850bdc0?auto=format&fit=crop&q=80&w=870"  href={`/crypto?lang=${lang}`}   cta="Explore" />
            <FeatureCard title={t('product.payments.title')} text={t('product.payments.body')} icon="https://plus.unsplash.com/premium_photo-1682339496371-d71e65e3e42d?auto=format&fit=crop&q=80&w=1548" href={`/payments?lang=${lang}`} cta="Explore" />
            <FeatureCard title={t('product.giftcards.title')}text={t('product.giftcards.body')}icon="https://plus.unsplash.com/premium_photo-1728398068094-d3d30740000f?auto=format&fit=crop&q=80&w=1895" href={`/giftcards?lang=${lang}`} cta="Explore" />
            <FeatureCard title={t('product.airtimes.title')} text={t('product.airtimes.body')} icon="https://plus.unsplash.com/premium_vector-1711987903052-36a37d18bb6b?auto=format&fit=crop&q=80&w=1160" href={`/airtimes?lang=${lang}`} cta="Explore" />
            <FeatureCard title={t('product.shopping.title')} text={t('product.shopping.body')} icon="https://plus.unsplash.com/premium_vector-1746177997582-cd5296a66658?auto=format&fit=crop&q=80&w=1800" href={`/shopping?lang=${lang}`}  cta="Explore" />
          </div>
        </section>

        <section className="section bg-fondeka-light">
          <div className="container-pad grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="h">{t('section.peopleGoingPlaces')}</h2>
              <p className="mt-3 text-gray-700">Mobile Money, cards and crypto at the core of our products.</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <li className="card">Clear rates & instant</li>
                <li className="card">Human support</li>
                <li className="card">KYC/AML compliance</li>
                <li className="card">3-D Secure</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">{t('section.businessTitle')}</h3>
              <p className="text-gray-600 mt-2">{t('section.businessBody')}</p>
              <Link href={`/business?lang=${lang}`} className="btn btn-primary mt-6 w-fit">Get started</Link>
            </div>
          </div>
        </section>

        <CTA />
        <Metrics />

        <section className="section">
          <div className="container-pad text-center">
            <h2 className="h">{t('section.coverageTitle')}</h2>
            <p className="mt-2 text-gray-600">{t('section.coverageBody')}</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-3 text-sm">
              {['DRC','Rwanda','Kenya','Uganda','Zambia','South Africa'].map(x => (
                  <div key={x} className="card py-4">{x}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
