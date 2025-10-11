'use client';
import { useI18n } from '@/lib/i18n';

export default function Page() {
    const { lang } = useI18n();
    return lang === 'fr' ? <AboutFR /> : <AboutEN />;
}

/* ========================= ENGLISH ========================= */
function AboutEN() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">About Fondeka</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    We’re building a world-class payments infrastructure — designed in Africa, by Africans, for the world.
                    Our mission is to connect people and businesses to every way of moving money: Mobile Money, cards,
                    bank transfers, and digital assets.
                </p>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Who we are</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Fondeka started in the Democratic Republic of Congo with a simple belief:
                        modern financial tools should be available to everyone. We began as a registered
                        microfinance effort serving hundreds of customers with flexible, transparent credit.
                        As we grew, our focus expanded to a digital platform that unifies payments — from Mobile Money
                        to bank cards to crypto — in one reliable, compliant stack.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Where we come from</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        We chose to build from the ground up in a market where most people are unbanked. We prioritize
                        robustness, security, and compliance, and we ship fast with a deep respect for local realities.
                        Our cloud-native architecture is designed for scale, observability, and regulatory alignment with
                        the Central Bank of Congo.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">What we’ve built so far</h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="card">
                            <h3 className="font-semibold">Consumer products</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Virtual cards (3-D Secure, limits, freeze/unfreeze)</li>
                                <li>• Link & QR payments (invoicing, crowdfunding)</li>
                                <li>• Bill payments & airtime top-ups</li>
                                <li>• eSIM for instant connectivity</li>
                                <li>• Crypto on/off-ramp and custody (compliant)</li>
                                <li>• Shopping tools with better checkout acceptance</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="font-semibold">Collections & payouts</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Collect from Mobile Money, cards, bank transfer, and crypto</li>
                                <li>• Payout to Mobile Money, bank accounts, cards, and wallets</li>
                                <li>• Clear realtime status & webhooks</li>
                                <li>• Settlement procedures for normal and crisis scenarios</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Where we are now</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Today, Fondeka operates as a B2C payments aggregator in the DRC and is formalizing
                        its Payment Aggregator License with the regulator. Our apps (mobile + web) deliver a simple
                        customer experience while the platform standardizes compliance, risk controls, and settlement
                        across methods. We’re preparing our B2B layer to let merchants and fintechs plug into Fondeka directly.
                    </p>
                    <div className="card mt-4">
                        <h3 className="font-semibold">Compliance & trust</h3>
                        <p className="text-sm text-gray-700 mt-2">
                            We maintain documented KYC/AML & sanctions screening, data protection & encryption,
                            segregation of customer funds, business continuity & disaster recovery, and risk procedures
                            aligned with regulator expectations.
                        </p>
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-fondeka-green mb-4">Our Roadmap — 2025 → 2040</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2025 – 2026 · Foundation & Licensing</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Obtain Payment Aggregator License (BCC).<br/>
                                • Harden compliance (KYC/AML), data protection & risk.<br/>
                                • Launch digital platform (cards, bills, eSIM, wallets).<br/>
                                • Target: USD 300k annual revenue & first 100k users.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2027 – 2029 · Expansion & Interoperability</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Release B2B APIs (collections & payouts).<br/>
                                • Integrate regional Mobile Money & card networks (East/Central Africa).<br/>
                                • Expand to Rwanda, Burundi, Uganda, Kenya, Tanzania<br/>
                                • Crypto on/off-ramp & stablecoin settlement; reach 10M users.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2030 – 2034 · Banking Transformation</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Become a fully licensed microfinance bank.<br/>
                                • Cross-border digital banking & virtual IBANs.<br/>
                                • Scale instant settlement rails across Africa.<br/>
                                • Capital goal: USD 50M and full banking license.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2035 – 2040 · Global Infrastructure</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Regional licenses in Europe, Asia, the Americas.<br/>
                                • Launch “Fondeka Global” account for borderless payments.<br/>
                                • Multi-currency clearing + digital asset custody.<br/>
                                • Power 50M users across governments, NGOs, and enterprises.
                            </p>
                        </div>
                    </div>

                    <div className="card mt-8 bg-fondeka-light">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            We’re guided by one principle: <strong>financial inclusion through technology</strong>.
                            Every milestone brings Africa closer to a fully connected, borderless economy.
                        </p>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-fondeka-green">
                            Built in Africa. For the world.
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Join us as we build modern money movement for millions.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

/* ========================= FRANÇAIS ========================= */
function AboutFR() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">À propos de Fondeka</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Nous construisons une infrastructure de paiements de classe mondiale — conçue en Afrique,
                    par des Africains, pour le monde. Notre mission : connecter chacun à tous les moyens de paiement :
                    Mobile Money, cartes, virements bancaires et actifs numériques.
                </p>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Qui nous sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Fondeka est née en République Démocratique du Congo avec une conviction simple :
                        les outils financiers modernes doivent être accessibles à tous. Nous avons débuté
                        comme initiative de microfinance enregistrée, accompagnant des centaines de clients
                        avec des crédits flexibles et transparents. En grandissant, notre ambition a évolué :
                        bâtir une plateforme numérique unifiant les paiements — du Mobile Money aux cartes
                        bancaires jusqu’aux actifs numériques — dans un cadre sûr et conforme.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Nos origines</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Nous avons choisi de construire depuis le terrain, dans un marché où la majorité reste
                        non bancarisée. Nous privilégions la robustesse, la sécurité et la conformité, tout en
                        livrant vite avec une connaissance fine des réalités locales. Notre architecture cloud-native
                        est pensée pour la scalabilité, l’observabilité et l’alignement réglementaire avec la
                        Banque Centrale du Congo.
                    </p>
                </section>

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

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Où nous en sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Aujourd’hui, Fondeka opère comme agrégateur B2C en RDC et formalise sa licence d’agrégateur
                        auprès du régulateur. Nos applications (mobile + web) offrent une expérience simple tandis que
                        la plateforme standardise la conformité, le risque et le règlement entre les différents moyens
                        de paiement. Nous préparons notre couche B2B pour permettre aux marchands et fintechs de se
                        connecter directement.
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
                                • Expand to Rwanda, Burundi, Uganda, Kenya, Tanzania<br/>
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
                                • Lancer « Fondeka Global » pour des paiements sans frontières.<br/>
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
