import React from 'react';
import { Target, Shield, Users } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">About Capital Match</h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto relative z-10">
                        We are building the definitive ecosystem for proprietary trading discovery, analytics, and verification.
                    </p>
                </div>

                <div className="space-y-16">
                    <section className="bg-dark-light/30 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-text-muted leading-relaxed text-lg">
                            The proprietary trading industry is expanding rapidly, bringing both incredible opportunities and significant risks.
                            Our mission is to bring radical transparency to the ecosystem. We empower traders with unbiased, real-time data,
                            verified payout proofs, and AI-driven matching algorithms to ensure you partner with firms that accelerate your success rather than hinder it.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-dark-light/20 border border-white/5 p-8 rounded-2xl text-center hover:border-primary/30 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Precision</h3>
                            <p className="text-text-muted">
                                Our AI Match engine analyzes thousands of data points to find the exact firm suited for your specific trading style and budget.
                            </p>
                        </div>

                        <div className="bg-dark-light/20 border border-white/5 p-8 rounded-2xl text-center hover:border-secondary/30 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Trust</h3>
                            <p className="text-text-muted">
                                We independently verify payout claims, track spreads, and monitor firm health metrics so you can trade with confidence.
                            </p>
                        </div>

                        <div className="bg-dark-light/20 border border-white/5 p-8 rounded-2xl text-center hover:border-white/20 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                            <p className="text-text-muted">
                                Built by traders, for traders. We cultivate a strong community where members share legitimate feedback and insights.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
