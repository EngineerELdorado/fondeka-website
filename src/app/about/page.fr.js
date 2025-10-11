export const metadata = { title: 'À propos — Fondeka' };

export default function Page() {
    return (
        <main className="section">
            <div className="container-pad">
                {/* HERO */}
                <h1 className="h">À propos de Fondeka</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Nous construisons une infrastructure de paiements de classe mondiale — conçue en Afrique,
                    par des Africains, pour le monde. Notre mission : connecter chacun à tous les moyens de paiement :
                    Mobile Money, cartes, virements bancaires et actifs numériques.
                </p>

                {/* QUI NOUS SOMMES */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Qui nous sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Fondeka est née en République Démocratique du Congo avec une conviction simple :
                        les outils financiers modernes doivent être accessibles à tous. Nous avons débuté
                        comme initiative de microfinance enregistrée, accompagnant des centaines de clients
                        avec des crédits flexibles et transparents. En grandissant, notre ambition a évolué :
                        bâtir une plateforme numérique unifiant les paiements — du Mobile Money aux cartes
                        bancaires, jusqu’aux actifs numériques — dans un cadre sûr et conforme.
                    </p>
                </section>

                {/* ORIGINES & PRINCIPES */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Nos origines</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Nous sommes des ingénieurs et des opérateurs qui ont choisi de construire depuis le terrain,
                        dans un marché où plus de 80&nbsp;% de la population est non bancarisée. Nous privilégions la
                        robustesse, la sécurité et la conformité, tout en livrant vite avec une compréhension fine
                        des réalités locales. Notre architecture cloud-native est pensée pour la scalabilité, l’observabilité
                        et l’alignement réglementaire avec la Banque Centrale du Congo.
                    </p>
                </section>

                {/* CE QUE NOUS AVONS CONSTRUIT */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Ce que nous avons construit</h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="card">
                            <h3 className="font-semibold">Produits grand public</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Cartes virtuelles (3-D Secure, plafonds, gel/dégel)</li>
                                <li>• Paiements par lien & QR (facturation, crowdfunding)</li>
                                <li>• Paiement de factures & recharges</li>
                                <li>• eSIM pour une connectivité instantanée</li>
                                <li>• On/Off-ramp crypto et conservation (conforme)</li>
                                <li>• Outils Shopping pour de meilleurs paiements en ligne</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="font-semibold">Encaissements & décaissements</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Encaissez via Mobile Money, cartes, virement et crypto</li>
                                <li>• Payez vers Mobile Money, banques, cartes et wallets</li>
                                <li>• Statuts en temps réel & webhooks</li>
                                <li>• Procédures de règlement en mode normal et crise</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ÉTAT ACTUEL */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Où nous en sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Aujourd’hui, Fondeka opère comme agrégateur B2C en RDC et formalise sa licence d’agrégateur
                        auprès du régulateur. Nos applications (mobile + web) offrent une expérience simple tandis que
                        la plateforme standardise la conformité, le risque et le règlement entre les différents moyens de paiement.
                        Nous préparons notre couche B2B pour permettre aux marchands et fintechs de se connecter directement.
                    </p>
                    <div className="card mt-4">
                        <h3 className="font-semibold">Confiance & conformité</h3>
                        <p className="text-sm text-gray-700 mt-2">
                            Nous maintenons des politiques documentées de KYC/AML & sanctions, de protection des données
                            et chiffrement, de ségrégation des fonds clients, de continuité d’activité & reprise après sinistre,
                            ainsi que des procédures de gestion des risques conformes aux attentes du régulateur.
                        </p>
                    </div>
                </section>

                {/* FEUILLE DE ROUTE 2025–2040 */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-fondeka-green mb-4">Notre Feuille de route — 2025 → 2040</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2025 – 2026 · Fondation & agrément</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Obtenir la licence d’agrégateur (BCC).<br/>
                                • Renforcer la conformité (KYC/AML), la protection des données & le risque.<br/>
                                • Lancer la plateforme (cartes, factures, eSIM, portefeuilles).<br/>
                                • Objectif : 300&nbsp;000&nbsp;USD de revenus annuels & 100&nbsp;000 premiers utilisateurs.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2027 – 2029 · Expansion & interopérabilité</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Lancer des API B2B (collecte & payout).<br/>
                                • Intégrer les réseaux Mobile Money & cartes (Afrique centrale/orientale).<br/>
                                • S’étendre au Rwanda, Kenya, Zambie.<br/>
                                • On/Off-ramp crypto & règlement stablecoin ; atteindre 10&nbsp;M d’utilisateurs.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2030 – 2034 · Transformation bancaire</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Devenir une banque de microfinance agréée.<br/>
                                • Banque numérique transfrontalière & IBAN virtuels.<br/>
                                • Étendre des rails de règlement instantané à l’échelle africaine.<br/>
                                • Objectif de capital : 50&nbsp;M&nbsp;USD et licence bancaire complète.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2035 – 2040 · Infrastructure mondiale</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Licences régionales en Europe, Asie, Amériques.<br/>
                                • Lancer «&nbsp;Fondeka Global&nbsp;» pour des paiements sans frontières.<br/>
                                • Compensation multidevises & conservation d’actifs numériques.<br/>
                                • Servir 50&nbsp;M d’utilisateurs (gouvernements, ONG, entreprises).
                            </p>
                        </div>
                    </div>

                    <div className="card mt-8 bg-fondeka-light">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Notre boussole : <strong>l’inclusion financière par la technologie</strong>.
                            Chaque étape rapproche l’Afrique d’une économie connectée et sans frontières.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="mt-12">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-fondeka-green">
                            Construit en Afrique. Pour le monde.
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Rejoignez-nous pour bâtir une nouvelle génération de paiements pour des millions de personnes.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
