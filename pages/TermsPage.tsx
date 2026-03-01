import React from 'react';
import { ScrollText } from 'lucide-react';

const TermsPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4 mb-12 border-b border-white/10 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <ScrollText className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
                        <p className="text-text-muted">Last updated: March 1, 2026</p>
                    </div>
                </div>

                <div className="space-y-12 text-text-muted leading-relaxed">
                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using Capital Match ("the Platform"), you agree to be bound by these Terms of Service.
                            If you do not agree with any part of these terms, you are prohibited from using or accessing our website and
                            services.
                        </p>
                        <p>
                            Capital Match is a data aggregator, analytics engine, and community hub for proprietary trading evaluation platforms.
                            We are not a financial institution, broker-dealer, or proprietary trading firm ourselves.
                        </p>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Platform Services & Disclaimer</h2>
                        <p className="mb-4">
                            The information provided on Capital Match is for educational and informational purposes only. We aggregate data,
                            pricing, and rulesets from various third-party proprietary trading firms. While we strive to ensure the utmost
                            accuracy through our automated aggregation tools and manual reviews, we do not guarantee the completeness,
                            reliability, or accuracy of this information.
                        </p>
                        <p>
                            Firm rules, profit splits, and evaluation metrics are subject to change by the respective firms at any time without notice.
                        </p>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct & Artificial Intelligence</h2>
                        <p className="mb-4">
                            When utilizing our Match AI features, you understand that the AI recommendations are algorithmic suggestions based
                            solely on the data you provide compared against our aggregated database. These recommendations do not constitute
                            financial advice.
                        </p>
                        <p>
                            Users are strictly prohibited from attempting to scrape, reverse engineer, or manipulate the Match AI engine, our
                            verified review system, or the competition leaderboards.
                        </p>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>
                            Under no circumstances shall Capital Match, its operators, or affiliates be liable for any direct, indirect,
                            incidental, consequential, or punitive damages arising from your use of the Platform or your engagement with any
                            third-party proprietary trading firm listed on our site. Purchasing evaluation challenges from third-party firms
                            is done entirely at your own risk.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
