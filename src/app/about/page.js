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
                    Our mission is to connect people and businesses to every way of moving money: Loans, Mobile Money, cards,
                    bank transfers, cryptos, airtime, giftcards, etc.
                </p>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Who we are</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Fondeka started in the Democratic Republic of Congo with a simple belief:
                        modern financial tools should be available to everyone. We began as a registered
                        microcredit/microfinance effort serving hundreds of customers with flexible, transparent credit and flexible repayment options.
                        As we grew, our focus expanded to a digital platform that unifies payments — from Mobile Money
                        to bank cards to crypto and much more— in one reliable, compliant stack.
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
                                <li>• Loans processing instantly</li>
                                <li>• Virtual cards (VISA & MASTERCARD)</li>
                                <li>• Crypto on/off-ramp and custody (compliant)</li>
                                <li>• Link & QR payments (invoicing, crowdfunding)</li>
                                <li>• Bill payments & airtime top-ups </li>
                                <li>• eSIM for instant connectivity</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="font-semibold">Collections & payouts</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Collect from Mobile Money, cards, bank transfer, and crypto</li>
                                <li>• Payout to Mobile Money, bank, cards, e-wallets, cryptos</li>
                                <li>• Payout any gift card to Cash(mobile money, card, bank</li>
                                <li>• Spend even when your don't have money in your account</li>
                                <li>• Clear realtime status & notification</li>
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
                    <h2 className="text-2xl font-bold text-fondeka-green mb-4">Our Roadmap — 2022 → 2040</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2022 – 2024 · Registration & Starting</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • We registered the company and opened the office in Goma.<br/>
                                • Obtained all documents<br/>
                                • Started serving loans from our office to our initial first 200 customers.<br/>
                                • Target: 1000 loan requests per month and a stable growth.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2025 – 2028 · Going Digital (B2C) & Licensing</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Obtain Payment Aggregator License (BCC).<br/>
                                • Integrate with local payment service providers<br/>
                                • Launch digital platform .<br/>
                                • Target: first 1M users & USD 10M annual revenue
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2029 – 2030 · B2B, Expansion & Interoperability</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Release B2B APIs (collections & payouts).<br/>
                                • Integrate regional payment service providers (East Africa).<br/>
                                • Expand to Rwanda, Burundi, Uganda, Kenya, Tanzania<br/>
                                • Target: Reach 10M users & USD 100M annual revenu
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
                            <h3 className="text-lg font-semibold text-fondeka-green">2035 – 2040 · Global expansion</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Regional licenses in Europe, Asia, the Americas.<br/>
                                • Launch “Fondeka Global” account for borderless payments.<br/>
                                • Multi-currency clearing + digital asset custody.<br/>
                                • Power 50M users worldwide
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2040 – Future · IPO</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • We’ll go public as a profitable, diversified financial group.<br/>
                                • We’ll have the trust of regulators across multiple jurisdictions.<br/>
                                • We'll be listed on major stock exchanges.<br/>
                                • An African fintech that became a pan-African and global bank.
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
                    par des Africains, pour le monde. Notre mission est de connecter les particuliers et les entreprises
                    à tous les moyens de déplacer de l’argent : crédits, Mobile Money, cartes, virements bancaires,
                    monnaies numériques, recharges, cartes cadeaux, et bien plus encore.
                </p>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Qui nous sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Fondeka est née en République Démocratique du Congo d’une conviction simple :
                        les outils financiers modernes doivent être accessibles à tous. Nous avons commencé
                        comme une initiative de microcrédit/microfinance enregistrée, servant des centaines
                        de clients avec des prêts flexibles, transparents et des plans de remboursement adaptés.
                        En grandissant, notre mission s’est élargie vers la création d’une plateforme numérique
                        unifiant les paiements. Du Mobile Money aux cartes bancaires jusqu’aux cryptos
                        dans un écosystème fiable et conforme.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Nos origines</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Nous avons choisi de construire depuis le terrain, dans un marché où la majorité de la population
                        reste non bancarisée. Nous privilégions la robustesse, la sécurité et la conformité,
                        tout en livrant rapidement avec une profonde compréhension des réalités locales.
                        Notre architecture cloud-native est conçue pour la scalabilité, l’observabilité et
                        l’alignement réglementaire avec la Banque Centrale du Congo.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Ce que nous avons construit jusqu’ici</h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="card">
                            <h3 className="font-semibold">Produits grand public</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Traitement instantané des prêts</li>
                                <li>• Cartes virtuelles (VISA & MASTERCARD)</li>
                                <li>• Conversion et conservation de monnaies numériques (conforme)</li>
                                <li>• Paiements par lien & QR (facturation, dons, crowdfunding)</li>
                                <li>• Paiement de factures & recharges téléphoniques</li>
                                <li>• eSIM pour une connectivité instantanée</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="font-semibold">Encaissements & décaissements</h3>
                            <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                <li>• Encaissez depuis Mobile Money, cartes, banque our cryptos</li>
                                <li>• Payez vers Mobile Money, comptes bancaires, cartes et portefeuilles</li>
                                <li>• Convertissez toute carte cadeau en espèces </li>
                                <li>• Dépensez même lorsque votre solde est insuffisant</li>
                                <li>• Statuts et notifications en temps réel</li>
                                <li>• Procédures de règlement en mode normal et en situation de crise</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-fondeka-green">Où nous en sommes</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Aujourd’hui, Fondeka opère comme agrégateur de paiements B2C en République Démocratique du Congo
                        et formalise sa licence d’agrégateur auprès du régulateur. Nos applications (mobile et web)
                        offrent une expérience fluide aux clients tandis que la plateforme unifie la conformité,
                        le contrôle du risque et les processus de règlement entre les différents moyens de paiement.
                        Nous préparons actuellement notre couche B2B pour permettre aux marchands et fintechs
                        de se connecter directement à Fondeka.
                    </p>
                    <div className="card mt-4">
                        <h3 className="font-semibold">Conformité & confiance</h3>
                        <p className="text-sm text-gray-700 mt-2">
                            Nous maintenons des politiques documentées de KYC/AML et de filtrage des sanctions,
                            de protection et chiffrement des données, de ségrégation des fonds clients,
                            ainsi que des plans de continuité d’activité et de reprise après sinistre.
                            Toutes nos procédures de gestion des risques sont alignées sur les attentes du régulateur.
                        </p>
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-fondeka-green mb-4">Notre Feuille de route — 2022 → 2040</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2022 – 2024 · Enregistrement & démarrage</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Enregistrement de la société et ouverture du bureau à Goma.<br/>
                                • Obtention de tous les documents légaux<br/>
                                • Activités de microcrédit depuis le bureau, avec plus de 200 clients.<br/>
                                • Objectif : 1000 demandes de prêts par mois et croissance stable.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2025 – 2028 · Digitalisation (B2C) & agrément</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Obtenir la licence d’agrégateur de paiements (BCC).<br/>
                                • Intégration avec les prestataires de services de paiement locaux.<br/>
                                • Lancement de la plateforme numérique complète.<br/>
                                • Objectif : 1M d’utilisateurs & 10M&nbsp;USD de revenus annuels
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2029 – 2030 · B2B, expansion & interopérabilité</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Lancement des API B2B (collecte & paiement).<br/>
                                • Intégration de prestataires régionaux (Afrique de l’Est).<br/>
                                • Expansion vers le Rwanda, le Burundi, l’Ouganda, le Kenya et la Tanzanie.<br/>
                                • Objectif : 10M d’utilisateurs et 100M&nbsp;USD de revenus annuels.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2030 – 2034 · Transformation bancaire</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Devenir une banque de microfinance pleinement agréée.<br/>
                                • Banque numérique transfrontalière & IBAN virtuels.<br/>
                                • Étendre des rails de règlement instantané à l’échelle africaine.<br/>
                                • Objectif de capital : 50M&nbsp;USD et licence bancaire complète.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2035 – 2040 · Expansion mondiale</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Licences régionales en Europe, Asie et Amériques.<br/>
                                • Lancement du compte « Fondeka Global » <br/>
                                • Compensation multidevises & conservation d’actifs numériques.<br/>
                                • Objectif : 50M d’utilisateurs mondialement.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-lg font-semibold text-fondeka-green">2040 – Futur · Introduction en bourse (IPO)</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                • Entrée en bourse en tant que groupe financier rentable et diversifié.<br/>
                                • Reconnaissance et confiance des régulateurs .<br/>
                                • Cotation sur les principales places boursières internationales.<br/>
                                • Une fintech africaine devenue banque panafricaine et mondiale.
                            </p>
                        </div>
                    </div>

                    <div className="card mt-8 bg-fondeka-light">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Nous sommes guidés par un principe : <strong>l’inclusion financière par la technologie</strong>.
                            Chaque étape rapproche l’Afrique d’une économie pleinement connectée et sans frontières.
                        </p>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-fondeka-green">
                            Construit en Afrique. Pour le monde.
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Rejoignez-nous dans la construction d’une infrastructure moderne pour le mouvement de l’argent,
                            au service de millions de personnes.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

