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
                            <li>• Identity & account data: name, email, phone number, account number, user ID, address, date of birth, and login credentials.</li>
                            <li>• KYC/AML data: ID numbers, ID documents, selfies, sanctions screening results, and verification status.</li>
                            <li>• Financial data: balances, transaction history, payment method identifiers, and merchant details.</li>
                            <li>• Contacts: address book entries and phone numbers, only if you grant permission in the app.</li>
                            <li>• Device & identifiers: IP address, device identifiers, device name, platform, locale, country, app/browser version, and security keys.</li>
                            <li>• Notifications data: push tokens and notification interaction data (sent/received/opened).</li>
                            <li>• Support data: support chats, tickets, and related correspondence.</li>
                            <li>• Business API data: merchant profile details, API keys, webhook events, and support tickets.</li>
                            <li>• Diagnostics: app performance logs and crash data where enabled.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Face data (TrueDepth API): collection, use, disclosure, sharing, and retention</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            For identity verification and fraud prevention, our iOS app may request camera access and use
                            Apple TrueDepth camera capabilities during selfie capture and liveness checks.
                        </p>
                        <p className="mt-3 text-sm text-gray-700">
                            We do not directly collect, store, or process raw TrueDepth biometric templates (for example:
                            depth maps, face mesh, or facial geometry templates). When Face ID is used for app
                            unlock/re-authentication, authentication is performed by iOS on-device and our app receives
                            only a success/failure result.
                        </p>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Collection: selfie images, short liveness video frames, and depth-derived facial measurements required to confirm a real person is present.</li>
                            <li>• Use: account onboarding (KYC), re-verification where required, fraud/risk controls, and account security (biometric unlock/re-authentication before sensitive actions).</li>
                            <li>• Disclosure and sharing: disclosed only to contracted identity verification and compliance providers acting on our instructions (including Smile Identity), and to approved infrastructure processors needed to operate the service. Face data is not sold, not shared for advertising, not used for profiling/marketing, and not shared with data brokers.</li>
                            <li>• Storage: encrypted in transit and at rest in controlled infrastructure operated by Fondeka and approved processors (including AWS services and Cloudinary secure uploads, where applicable).</li>
                            <li>• Retention: retained only as long as necessary for verification and legal/regulatory obligations, then deleted or anonymized according to our retention controls.</li>
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
                            <li>• Personalize language, location, and regional compliance settings.</li>
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
                        <h2 className="text-lg font-semibold">Key third‑party processors</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Intercom (customer support).</li>
                            <li>• Smile Identity (identity verification).</li>
                            <li>• Cloudinary (secure document uploads).</li>
                            <li>• AWS Cognito / Amplify (authentication and account management).</li>
                        </ul>
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
                            <li>• Données d’identité et de compte : nom, email, numéro de téléphone, numéro de compte, ID utilisateur, adresse, date de naissance, identifiants de connexion.</li>
                            <li>• Données KYC/AML : numéros d’identité, pièces d’identité, selfies, résultats de filtrage et statut de vérification.</li>
                            <li>• Données financières : soldes, historique des transactions, identifiants de paiement, détails marchands.</li>
                            <li>• Contacts : entrées du carnet d’adresses et numéros de téléphone, uniquement avec votre autorisation.</li>
                            <li>• Données appareil & identifiants : adresse IP, identifiants d’appareil, nom d’appareil, plateforme, langue, pays, version app/navigateur, clés de sécurité.</li>
                            <li>• Données de notifications : tokens push et interactions (envoyées/reçues/ouvertes).</li>
                            <li>• Données support : chats, tickets et échanges associés.</li>
                            <li>• Données API Business : profil marchand, clés API, événements webhook, tickets support.</li>
                            <li>• Diagnostics : journaux de performance et crashs si activés.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Donnees faciales (API TrueDepth) : collecte, utilisation, divulgation, partage et conservation</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Pour la verification d'identite et la prevention de la fraude, notre application iOS peut
                            demander l'acces camera et utiliser les capacites TrueDepth d'Apple pendant la capture selfie
                            et les controles de vivacite.
                        </p>
                        <p className="mt-3 text-sm text-gray-700">
                            Nous ne collectons, stockons ni traitons directement de modeles biométriques TrueDepth bruts
                            (par exemple : cartes de profondeur, maillage facial ou geometrie faciale). Lorsque Face ID est
                            utilise pour le deverrouillage/la re-authentification, l'authentification est effectuee par iOS
                            sur l'appareil et notre application recoit uniquement un resultat succes/echec.
                        </p>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Collecte : selfies, courtes frames video de vivacite et mesures faciales derivees de la profondeur necessaires pour confirmer la presence d'une personne reelle.</li>
                            <li>• Utilisation : onboarding de compte (KYC), reverification si requise, controles de risque/fraude et securite du compte (deverrouillage/re-authentification biométrique avant actions sensibles).</li>
                            <li>• Divulgation et partage : divulgation uniquement a des prestataires contractuels de verification d'identite et de conformite, selon nos instructions (y compris Smile Identity), ainsi qu'aux sous-traitants d'infrastructure approuves necessaires au service. Ces donnees ne sont jamais vendues, ni partagees a des fins publicitaires, ni utilisees pour le profilage/marketing, ni partagees avec des courtiers en donnees.</li>
                            <li>• Stockage : chiffrees en transit et au repos dans une infrastructure controlee exploitee par Fondeka et des sous-traitants approuves (y compris les services AWS et les televersements securises Cloudinary, le cas echeant).</li>
                            <li>• Conservation : conservees uniquement pendant la duree necessaire a la verification et aux obligations legales/reglementaires, puis supprimees ou anonymisees selon nos regles de conservation.</li>
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
                            <li>• Adapter la langue, la localisation et les exigences régionales.</li>
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
                        <h2 className="text-lg font-semibold">Principaux sous‑traitants</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Intercom (support client).</li>
                            <li>• Smile Identity (vérification d’identité).</li>
                            <li>• Cloudinary (téléversement sécurisé de documents).</li>
                            <li>• AWS Cognito / Amplify (authentification et gestion de compte).</li>
                        </ul>
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
