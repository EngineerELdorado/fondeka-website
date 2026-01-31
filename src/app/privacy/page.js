'use client';
import { useI18n } from '@/lib/i18n';

export default function PrivacyPage() {
    const { lang } = useI18n();
    return lang === 'fr' ? <PrivacyFR /> : <PrivacyEN />;
}

function PrivacyEN() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">Privacy Policy</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    This policy explains how Fondeka collects, uses, and shares information across our website,
                    consumer apps, and business APIs. We build regulated financial services for payments, mobile money,
                    cards, eSIMs, and airtime.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Information we collect</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Identity & account data: name, phone, email, date of birth, address, and login credentials.</li>
                            <li>• KYC/AML data: ID documents, selfies, sanctions screening results, and verification status.</li>
                            <li>• Transaction data: amounts, balances, payment method identifiers, and merchant details.</li>
                            <li>• Device & usage data: IP address, device identifiers, browser/app version, logs, and performance data.</li>
                            <li>• Business API data: merchant profile details, API keys, webhook events, and support tickets.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">How we use information</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Provide and operate accounts, wallets, cards, payments, payouts, eSIMs, and airtime.</li>
                            <li>• Verify identity, prevent fraud, and meet regulatory obligations (KYC/AML, sanctions).</li>
                            <li>• Monitor reliability, improve products, and troubleshoot issues.</li>
                            <li>• Communicate about transactions, security alerts, and support requests.</li>
                            <li>• Comply with applicable laws and respond to lawful requests.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">How we share information</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Payment networks and mobile money operators to execute transactions.</li>
                            <li>• Verification, risk, and compliance partners to confirm identity and prevent fraud.</li>
                            <li>• Infrastructure vendors (cloud hosting, communications, QR code generation) to run the service.</li>
                            <li>• Regulators or law enforcement when legally required.</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-700">
                            We do not sell personal data.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">International transfers & retention</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Fondeka operates from the DRC and may process data in other countries where our partners and
                            infrastructure providers are located. We retain information for as long as needed to provide
                            services and to meet legal, accounting, and compliance requirements.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Security</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            We use encryption, access controls, and monitoring to protect data. No system is perfectly
                            secure, but we continuously improve our safeguards.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Your choices</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            You may request access, correction, or deletion of your data where applicable. Business
                            customers can manage API keys and webhook settings in their integrations. To make a request,
                            contact us at <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Questions about privacy? Email <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

function PrivacyFR() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">Politique de confidentialité</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Cette politique explique comment Fondeka collecte, utilise et partage les informations sur notre site,
                    nos applications et nos API Business. Nous construisons des services financiers réglementés pour les
                    paiements, Mobile Money, cartes, eSIM et recharges.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Informations collectées</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Données d’identité et de compte : nom, téléphone, email, date de naissance, adresse.</li>
                            <li>• Données KYC/AML : pièces d’identité, selfies, résultats de filtrage et statut de vérification.</li>
                            <li>• Données de transaction : montants, soldes, identifiants de paiement, détails marchands.</li>
                            <li>• Données techniques : adresse IP, identifiants d’appareil, version app/navigateur, journaux.</li>
                            <li>• Données API Business : profil marchand, clés API, événements webhook, tickets support.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Utilisation des informations</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Fournir et opérer les comptes, wallets, cartes, paiements, eSIM et recharges.</li>
                            <li>• Vérifier l’identité, prévenir la fraude et respecter les obligations (KYC/AML, sanctions).</li>
                            <li>• Surveiller la fiabilité, améliorer les produits et résoudre les incidents.</li>
                            <li>• Communiquer sur les transactions, alertes de sécurité et demandes support.</li>
                            <li>• Se conformer aux lois et répondre aux requêtes légales.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Partage des informations</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Réseaux de paiement et opérateurs Mobile Money.</li>
                            <li>• Partenaires de vérification, risque et conformité pour l’identification.</li>
                            <li>• Prestataires d’infrastructure (cloud, communications, QR codes) pour opérer le service.</li>
                            <li>• Régulateurs ou autorités quand la loi l’exige.</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-700">
                            Nous ne vendons pas vos données personnelles.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Transferts internationaux & conservation</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Fondeka opère depuis la RDC et peut traiter les données dans d’autres pays où se trouvent
                            nos partenaires et fournisseurs. Nous conservons les informations aussi longtemps que
                            nécessaire pour fournir le service et respecter les exigences légales et réglementaires.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Sécurité</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Nous utilisons le chiffrement, des contrôles d’accès et la surveillance pour protéger les données.
                            Aucun système n’est parfait, mais nous améliorons continuellement nos protections.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Vos choix</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Vous pouvez demander l’accès, la correction ou la suppression de vos données selon les règles
                            applicables. Les clients Business gèrent leurs clés API et webhooks côté intégration. Pour toute
                            demande, contactez-nous à <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Questions sur la confidentialité ? Écrivez à <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
