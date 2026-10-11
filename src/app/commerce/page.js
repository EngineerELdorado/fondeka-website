'use client';

import Link from 'next/link';
import DownloadAppButton from '@/components/DownloadAppButton';
import { useI18n } from '@/lib/i18n';
import { commerceLabels } from '@/lib/commerce';

export default function CommercePage() {
  const { lang } = useI18n();
  const fr = lang === 'fr';
  const copy = fr ? {
    kicker: 'Vendre et gérer',
    title: 'Votre boutique et votre caisse dans Fondeka',
    body: 'Créez une boutique en ligne, acceptez les paiements pris en charge et gérez ventes, stocks et clients depuis un espace conçu pour les commerçants africains.',
    store: 'Créer une boutique en ligne', storeBody: 'Ajoutez vos produits, partagez votre lien et recevez des commandes.',
    pos: 'Gérer mon commerce avec un POS', posBody: 'Enregistrez vos ventes et suivez stocks et clients depuis votre téléphone.',
    learn: 'Découvrir', explore: 'Explorer Commerce', local: 'Pensé pour les paiements locaux',
    localBody: 'Mobile Money relie l’expérience d’achat aux moyens de paiement familiers, selon les réseaux disponibles dans chaque pays.',
  } : {
    kicker: 'Sell and manage',
    title: 'Your online store and POS in Fondeka',
    body: 'Create an online store, accept supported payments and manage sales, inventory and customers in one space built for African merchants.',
    store: 'Create an online store', storeBody: 'Add products, share your link and receive customer orders.',
    pos: 'Run my business with a POS', posBody: 'Record sales and follow inventory and customers from your phone.',
    learn: 'Learn more', explore: 'Explore Commerce', local: 'Designed around local payments',
    localBody: 'Mobile Money connects the shopping journey to familiar payment methods, depending on the networks available in each country.',
  };

  return (
    <main>
      <section className="gradient-hero section">
        <div className="container-pad grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="kicker">{copy.kicker}</p>
            <h1 className="display mt-3">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">{copy.body}</p>
            <DownloadAppButton className="mt-7 w-fit" ctaLabel={fr ? 'Installer Fondeka' : 'Install Fondeka'} trackingId="commerce-landing-cta" />
          </div>
          <div className="grid gap-4">
            <Link href={`/commerce/boutique-en-ligne?lang=${lang}`} className="card card-hover border border-fondeka-mint/50">
              <span className="text-2xl" aria-hidden="true">🛒</span>
              <h2 className="mt-4 text-xl font-bold">{copy.store}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{copy.storeBody}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-fondeka-green">{copy.learn} →</span>
            </Link>
            <Link href={`/commerce/logiciel-de-caisse?lang=${lang}`} className="card card-hover border border-fondeka-mint/50">
              <span className="text-2xl" aria-hidden="true">📱</span>
              <h2 className="mt-4 text-xl font-bold">{copy.pos}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{copy.posBody}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-fondeka-green">{copy.learn} →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-pad">
          <div className="rounded-3xl bg-fondeka-dark p-7 text-white md:p-10">
            <p className="kicker text-fondeka-mint">Mobile Money</p>
            <h2 className="mt-2 text-2xl font-bold md:text-4xl">{copy.local}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/75">{copy.localBody}</p>
            <Link href={`/commerce/paiement-mobile-money?lang=${lang}`} className="mt-6 inline-flex font-semibold text-fondeka-mint">{copy.learn} →</Link>
          </div>
          <h2 className="h mt-14">{copy.explore}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(commerceLabels).map(([slug, label]) => (
              <Link key={slug} href={`/commerce/${slug}?lang=${lang}`} className="card card-hover border border-gray-100 font-semibold">
                {label[fr ? 'fr' : 'en']} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
