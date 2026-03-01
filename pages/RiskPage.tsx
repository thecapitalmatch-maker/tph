import React from 'react';
import { AlertCircle } from 'lucide-react';

const RiskPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4 mb-12 border-b border-warning/10 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center border border-warning/20">
                        <AlertCircle className="w-8 h-8 text-warning" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">High-Risk Disclosure</h1>
                        <p className="text-text-muted">Important Notice Before Proceeding</p>
                    </div>
                </div>

                <div className="space-y-12 text-text-muted leading-relaxed">
                    <section className="bg-warning/5 p-8 rounded-2xl border border-warning/10">
                        <h2 className="text-2xl font-bold text-white mb-4">CRITICAL WARNING</h2>
                        <p className="mb-4 text-white/90 font-medium">
                            Trading Foreign Exchange (Forex), Contracts for Differences (CFDs), Equities, Options, and Cryptocurrencies
                            is highly speculative, carries a high level of risk, and may not be suitable for all investors.
                        </p>
                        <p>
                            You may sustain a loss of some or all of your initial investment and should not invest money that you cannot afford
                            to lose. You should be aware of all the risks associated with margin trading and seek advice from an independent
                            financial advisor if you have any doubts.
                        </p>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">Proprietary Trading Firms</h2>
                        <p className="mb-4">
                            The proprietary trading (or "prop") firms listed, reviewed, or advertised on Capital Match are independent third
                            parties. While we strive to provide accurate, AI-driven match analysis and community-verified data, we do not
                            guarantee the solvency, reliability, or business practices of any listed firm.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Purchasing an evaluation or challenge fee is non-refundable in most cases.</li>
                            <li>Passing an evaluation does not guarantee long-term funding.</li>
                            <li>Firms may change their trading rules, platform availability, or profit splits at any time.</li>
                        </ul>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">No Financial Advice</h2>
                        <p className="mb-4">
                            Nothing contained on our site, in our Match AI recommendations, or in our educational materials constitutes
                            solicitation, recommendation, endorsement, or offer by Capital Match or any third-party service provider to buy
                            or sell any financial instruments in any jurisdiction.
                        </p>
                        <p>
                            Capital Match is a data curation and analytics tool, not a registered investment advisor or broker-dealer. Your
                            trading decisions are entirely your own responsibility.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RiskPage;
