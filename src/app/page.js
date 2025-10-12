'use client';
import Image from 'next/image';
import Link from 'next/link';
import FeatureCard from '../components/FeatureCard';
import CTA from '../components/CTA';
import DownloadAppButton from '../components/DownloadAppButton';
import Metrics from '../components/Metrics';
import HeroSlider from '@/components/HeroSlider';
import { useI18n } from '@/lib/i18n';

export default function Home() {
    const { t, lang } = useI18n();

    // helper to shorten href object creation (pass icon to target page)
    const withIcon = (pathname, icon) => ({ pathname, query: { lang, icon } });

    return (
        <main className="overflow-x-hidden">
            {/* HERO */}
            <section className="gradient-hero">
                <div className="container-pad py-12 md:py-28 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div className="min-w-0">
                        <div className="kicker">{t('hero.kicker')}</div>
                        <h1 className="display">{t('hero.title')}</h1>
                        <p className="mt-4 text-gray-700 max-w-lg">{t('hero.body')}</p>

                        <DownloadAppButton className="mt-6" />
                        <div className="mt-3">
                            <a
                                href="#products"
                                className="text-sm underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById('products');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                {t('hero.secondary')}
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            Born in DRC, built in Africa, by africans, for the world
                        </p>
                    </div>

                    <div className="card card-tight">
                        <div className="relative">
                            {/* soft rotating halo, sits behind the media, contained by this relative box */}
                            <div className="halo -z-10" aria-hidden="true" />

                            <div className="depth-frame">
                                <HeroSlider
                                    alt={t('hero.title')}
                                    images={[
                                        'https://images.unsplash.com/photo-1581417660521-38f0fbf18592?auto=format&fit=crop&q=80&w=1592',
                                        'https://images.unsplash.com/photo-1572454023715-ecdc5a221437?auto=format&fit=crop&q=80&w=1550',
                                        'https://images.unsplash.com/photo-1681597108168-353c13e8e7a5?auto=format&fit=crop&q=80&w=1262',
                                    ]}
                                    intervalMs={5500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="section">
                <div className="container-pad">
                    <h2 className="h text-center">{t('products.title') || 'Our products'}</h2>
                    <p className="mt-2 text-gray-600 text-center">
                        {t('products.subtitle') || 'Everything you need to pay and get paid.'}
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {/* 1) Loans */}
                        <FeatureCard
                            title={t('product.loans.title')}
                            text={t('product.loans.body')}
                            icon="https://plus.unsplash.com/premium_photo-1672660509832-0c749dbd82eb?auto=format&fit=crop&q=80&w=1915"
                            href={withIcon('/loans', 'https://plus.unsplash.com/premium_photo-1672660509832-0c749dbd82eb?auto=format&fit=crop&q=80&w=1915')}
                            cta="Explore"
                        />

                        {/* 2) Cards */}
                        <FeatureCard
                            title={t('product.cards.title')}
                            text={t('product.cards.body')}
                            icon="https://plus.unsplash.com/premium_photo-1728735030984-fef628ee1929?auto=format&fit=crop&q=80&w=1895"
                            href={withIcon('/cards', 'https://plus.unsplash.com/premium_photo-1728735030984-fef628ee1929?auto=format&fit=crop&q=80&w=1895')}
                            cta="Explore"
                        />

                        {/* 3) Bill payments */}
                        <FeatureCard
                            title={t('product.bills.title')}
                            text={t('product.bills.body')}
                            icon="https://images.unsplash.com/photo-1692158962133-6c97ee651ab9?auto=format&fit=crop&q=80&w=1160"
                            href={withIcon('/bills', 'https://images.unsplash.com/photo-1692158962133-6c97ee651ab9?auto=format&fit=crop&q=80&w=1160')}
                            cta="Explore"
                        />

                        {/* 4) eSIM */}
                        <FeatureCard
                            title={t('product.esim.title')}
                            text={t('product.esim.body')}
                            icon="https://images.unsplash.com/photo-1718631919973-ca9f02f46534?auto=format&fit=crop&q=80&w=1740"
                            href={withIcon('/esim', 'https://images.unsplash.com/photo-1718631919973-ca9f02f46534?auto=format&fit=crop&q=80&w=1740')}
                            cta="Explore"
                        />

                        {/* 5) Crypto */}
                        <FeatureCard
                            title={t('product.crypto.title')}
                            text={t('product.crypto.body')}
                            icon="https://plus.unsplash.com/premium_photo-1676998623020-2640a850bdc0?auto=format&fit=crop&q=80&w=870"
                            href={withIcon('/crypto', 'https://plus.unsplash.com/premium_photo-1676998623020-2640a850bdc0?auto=format&fit=crop&q=80&w=870')}
                            cta="Explore"
                        />

                        {/* 6) Payments (QR/Link, Invoice, Crowdfunding) */}
                        <FeatureCard
                            title={t('product.payments.title')}
                            text={t('product.payments.body')}
                            icon="https://plus.unsplash.com/premium_photo-1682339496371-d71e65e3e42d?auto=format&fit=crop&q=80&w=1548"
                            href={withIcon('/payments', 'https://plus.unsplash.com/premium_photo-1682339496371-d71e65e3e42d?auto=format&fit=crop&q=80&w=1548')}
                            cta="Explore"
                        />

                        {/* 7) Giftcards */}
                        <FeatureCard
                            title={t('product.giftcards.title')}
                            text={t('product.giftcards.body')}
                            icon="https://plus.unsplash.com/premium_photo-1728398068094-d3d30740000f?auto=format&fit=crop&q=80&w=1895"
                            href={withIcon('/giftcards', 'https://plus.unsplash.com/premium_photo-1728398068094-d3d30740000f?auto=format&fit=crop&q=80&w=1895')}
                            cta="Explore"
                        />

                        {/* 8) Airtimes */}
                        <FeatureCard
                            title={t('product.airtimes.title')}
                            text={t('product.airtimes.body')}
                            icon="https://plus.unsplash.com/premium_vector-1711987903052-36a37d18bb6b?auto=format&fit=crop&q=80&w=1160"
                            href={withIcon('/airtimes', 'https://plus.unsplash.com/premium_vector-1711987903052-36a37d18bb6b?auto=format&fit=crop&q=80&w=1160')}
                            cta="Explore"
                        />

                        {/* 9) Shopping */}
                        <FeatureCard
                            title={t('product.shopping.title')}
                            text={t('product.shopping.body')}
                            icon="https://plus.unsplash.com/premium_vector-1746177997582-cd5296a66658?auto=format&fit=crop&q=80&w=1800"
                            href={withIcon('/shopping', 'https://plus.unsplash.com/premium_vector-1746177997582-cd5296a66658?auto=format&fit=crop&q=80&w=1800')}
                            cta="Explore"
                        />
                    </div>
                </div>
            </section>

            {/* BUSINESS / TRUST */}
            <section className="section bg-fondeka-light">
                <div className="container-pad grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div className="min-w-0">
                        <h2 className="h">{t('section.peopleGoingPlaces')}</h2>
                        <p className="mt-3 text-gray-700">
                            Mobile Money, cards and crypto at the core of our products.
                        </p>
                        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                            <li className="card">Clear rates & instant</li>
                            <li className="card">Human support</li>
                            <li className="card">KYC/AML compliance</li>
                            <li className="card">3-D Secure</li>
                        </ul>
                    </div>
                    <div className="card mt-6 md:mt-0">
                        <h3 className="text-xl font-semibold">{t('section.businessTitle')}</h3>
                        <p className="text-gray-600 mt-2">{t('section.businessBody')}</p>
                        <Link href={`/business?lang=${lang}`} className="btn btn-primary mt-6 w-fit">
                            Get started
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
            <Metrics />

            {/* COVERAGE */}
            <section className="section">
                <div className="container-pad text-center">
                    <h2 className="h">{t('section.coverageTitle')}</h2>
                    <p className="mt-2 text-gray-600">{t('section.coverageBody')}</p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm">
                        {['DRC', 'Rwanda', 'Burundi', 'Uganda', 'Kenya', 'Tanzania'].map((x) => (
                            <div key={x} className="card py-4">{x}</div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
