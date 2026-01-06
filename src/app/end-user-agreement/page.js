'use client';
import { useI18n } from '@/lib/i18n';

export default function EndUserAgreementPage() {
    const { lang } = useI18n();
    return lang === 'fr' ? <EndUserAgreementFR /> : <EndUserAgreementEN />;
}

function EndUserAgreementEN() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">End User Agreement</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    This End User Agreement (“Agreement”) governs your use of Fondeka’s website, mobile apps, and
                    related services (“Services”). By using the Services, you agree to these terms.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Eligibility & account</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            You must provide accurate information, keep your credentials secure, and notify us of
                            unauthorized access. We may require identity verification and KYC/AML checks.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Acceptable use</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Do not use the Services for illegal activity, fraud, or sanctions evasion.</li>
                            <li>• Do not attempt to access or interfere with systems or data you do not own.</li>
                            <li>• Use payment and crypto features only where legally permitted.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Payments, wallets, and cards</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Transactions may be subject to limits, fees, and compliance checks. You are responsible for
                            ensuring payment details and recipient information are correct. Settlement timing can vary
                            based on method and network availability.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Crypto services</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Digital asset services may involve volatility and network risk. You understand that crypto
                            transactions can be irreversible, and you accept the applicable market and technical risks.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Suspension & termination</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            We may suspend or close accounts to protect users, comply with laws, or address misuse.
                            You can request closure by contacting support.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Liability</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Services are provided “as is.” We are not liable for indirect damages or losses from third‑party
                            networks, outages, or user errors, to the extent allowed by law.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Changes</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            We may update this Agreement as our services evolve. The latest version will be posted here.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Questions? Email <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

function EndUserAgreementFR() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">Contrat utilisateur final</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Le présent contrat régit l’utilisation du site, des applications et des services Fondeka
                    (« Services »). En utilisant les Services, vous acceptez ces conditions.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Éligibilité & compte</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Vous devez fournir des informations exactes, protéger vos identifiants et nous informer de tout
                            accès non autorisé. Des vérifications KYC/AML peuvent être requises.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Utilisation acceptable</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Ne pas utiliser les Services pour des activités illégales ou frauduleuses.</li>
                            <li>• Ne pas tenter d’accéder à des systèmes ou données non autorisés.</li>
                            <li>• Utiliser les services de paiement/crypto uniquement là où la loi le permet.</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Paiements, wallets et cartes</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Les transactions peuvent être soumises à des limites, frais et contrôles de conformité.
                            Vous êtes responsable de l’exactitude des informations de paiement et des destinataires.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Services crypto</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Les actifs numériques comportent des risques de volatilité et de réseau. Les transactions
                            crypto peuvent être irréversibles.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Suspension & résiliation</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Nous pouvons suspendre ou fermer un compte pour protéger les utilisateurs, respecter la loi
                            ou prévenir les abus. Vous pouvez demander la fermeture via le support.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Responsabilité</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Les Services sont fournis « en l’état ». Nous ne sommes pas responsables des dommages indirects
                            ou pertes dues à des tiers, interruptions ou erreurs utilisateur, dans la limite de la loi.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Modifications</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Nous pouvons mettre à jour ce contrat à mesure que les services évoluent. La version la plus
                            récente sera publiée ici.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p className="mt-3 text-sm text-gray-700">
                            Des questions ? Écrivez à <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
