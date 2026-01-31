'use client';
import { useI18n } from '@/lib/i18n';

export default function SupportPage() {
    const { lang } = useI18n();
    return lang === 'fr' ? <SupportFR /> : <SupportEN />;
}

function SupportEN() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">Fondeka Support</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Need help with the Fondeka app? We can assist with payments, virtual cards, eSIMs, mobile money,
                    and account access.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>
                                • Email: <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>
                            </li>
                            <li>
                                • Phone: <a className="underline" href="tel:+243991079097">+243 991 079 097</a>
                            </li>
                            <li>• In-app chat: Open the app → Help</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Popular help topics</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• <a className="underline" href="/payments">Payments</a></li>
                            <li>• <a className="underline" href="/cards">Virtual cards</a></li>
                            <li>• <a className="underline" href="/esim">eSIM</a></li>
                            <li>• <a className="underline" href="/collect">Mobile money</a></li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Account & access</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Password reset or login issues</li>
                            <li>• Verification or KYC status</li>
                            <li>• Update profile details</li>
                            <li>• Security or device access</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Billing & transactions</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Missing or pending transaction</li>
                            <li>• Refunds or chargebacks</li>
                            <li>• Failed payments</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Policies</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• <a className="underline" href="/privacy">Privacy Policy</a></li>
                            <li>• <a className="underline" href="/end-user-agreement">Terms of Service</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}

function SupportFR() {
    return (
        <main className="section">
            <div className="container-pad">
                <h1 className="h">Assistance Fondeka</h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Besoin d’aide avec l’application Fondeka ? Nous aidons pour les paiements, cartes virtuelles,
                    eSIMs, Mobile Money et l’accès au compte.
                </p>

                <div className="mt-8 grid gap-6">
                    <section className="card">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>
                                • Email: <a className="underline" href="mailto:info@fondeka.com">info@fondeka.com</a>
                            </li>
                            <li>
                                • Téléphone: <a className="underline" href="tel:+243991079097">+243 991 079 097</a>
                            </li>
                            <li>• Chat intégré : ouvrez l’app → Aide</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Sujets d’aide populaires</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• <a className="underline" href="/payments">Paiements</a></li>
                            <li>• <a className="underline" href="/cards">Cartes virtuelles</a></li>
                            <li>• <a className="underline" href="/esim">eSIM</a></li>
                            <li>• <a className="underline" href="/collect">Mobile Money</a></li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Compte & accès</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Réinitialisation du mot de passe ou problème de connexion</li>
                            <li>• Vérification ou statut KYC</li>
                            <li>• Mise à jour des informations de profil</li>
                            <li>• Sécurité ou accès à l’appareil</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Facturation & transactions</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Transaction manquante ou en attente</li>
                            <li>• Remboursements ou rétrofacturation</li>
                            <li>• Paiements échoués</li>
                        </ul>
                    </section>

                    <section className="card">
                        <h2 className="text-lg font-semibold">Politiques</h2>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• <a className="underline" href="/privacy">Politique de confidentialité</a></li>
                            <li>• <a className="underline" href="/end-user-agreement">Conditions d’utilisation</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
