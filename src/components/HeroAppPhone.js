'use client';

import Image from 'next/image';

export default function HeroAppPhone() {
    return (
        <div className="hero-phone-shell float-hero shadow-breathe">
            <div className="hero-phone-device">
                <div className="hero-phone-notch" aria-hidden="true" />

                <div className="hero-app-screen">
                    <div className="hero-app-topbar">
                        <div>
                            <p className="hero-app-label">Fondeka</p>
                            <h3 className="hero-app-greeting">Good morning</h3>
                        </div>
                        <div className="hero-app-avatar" aria-hidden="true">
                            F
                        </div>
                    </div>

                    <div className="hero-balance-card">
                        <div className="hero-balance-copy">
                            <p className="hero-section-label">Available balance</p>
                            <p className="hero-balance-value">$2,480.00</p>
                            <p className="hero-balance-foot">Loans at 0% interest, cards, crypto and bill pay.</p>
                        </div>
                        <div className="hero-card-chip" aria-hidden="true" />
                    </div>

                    <div className="hero-quick-actions">
                        <div className="hero-action-pill">Loan</div>
                        <div className="hero-action-pill">Card</div>
                        <div className="hero-action-pill">Bills</div>
                    </div>

                    <div className="hero-feature-grid">
                        <div className="hero-feature-card">
                            <div className="hero-feature-icon">
                                <Image src="/loans.svg" alt="" width={18} height={18} />
                            </div>
                            <div>
                                <p className="hero-feature-title">Loan ready</p>
                                <p className="hero-feature-meta">Up to $500 available</p>
                            </div>
                        </div>

                        <div className="hero-feature-card">
                            <div className="hero-feature-icon">
                                <Image src="/cards.svg" alt="" width={18} height={18} />
                            </div>
                            <div>
                                <p className="hero-feature-title">Virtual card</p>
                                <p className="hero-feature-meta">Tap to manage spending</p>
                            </div>
                        </div>

                        <div className="hero-feature-card hero-feature-card-wide">
                            <div className="hero-feature-icon">
                                <Image src="/bills.svg" alt="" width={18} height={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="hero-feature-title">Recent payment</p>
                                <div className="hero-payment-row">
                                    <span>Electricity</span>
                                    <strong>$24.50</strong>
                                </div>
                                <div className="hero-payment-progress" aria-hidden="true">
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-app-bottomnav" aria-hidden="true">
                        <span className="is-active" />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </div>
    );
}
