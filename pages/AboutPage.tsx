import React from 'react';
import { Target, Shield, Users, ArrowRight, Zap, Trophy, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-24 relative">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium tracking-widest uppercase shadow-sm">
                        Changing the Game
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 mb-8 tracking-tight">
                        About Capital Match
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                        We are building the definitive ecosystem for proprietary trading <span className="text-white font-medium">discovery</span>, <span className="text-white font-medium">analytics</span>, and <span className="text-white font-medium">verification</span>.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="mb-24 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <section className="relative bg-dark-light/60 border border-white/10 rounded-[2rem] p-10 md:p-16 backdrop-blur-xl shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
                            <p className="text-text-muted leading-relaxed text-lg md:text-xl font-light">
                                The proprietary trading industry is expanding rapidly, bringing both incredible opportunities and significant risks.
                                Our mission is to bring <strong className="text-white font-semibold">radical transparency</strong> to the ecosystem. We empower traders with unbiased, real-time data,
                                verified payout proofs, and AI-driven matching algorithms to ensure you partner with firms that accelerate your success rather than hinder it.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Core Pillars */}
                <div className="mb-24 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">The Pillars of Our Platform</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-dark/40 border border-white/5 p-10 rounded-[2rem] hover:bg-dark-light/40 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(10,193,201,0.15)]">
                                <Target className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Precision Match</h3>
                            <p className="text-text-muted leading-relaxed">
                                Our AI Match engine analyzes thousands of dynamic data points to find the exact firm suited for your specific trading style, risk tolerance, and budget.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-dark/40 border border-white/5 p-10 rounded-[2rem] hover:bg-dark-light/40 hover:border-secondary/30 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-8 border border-secondary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,107,0.15)]">
                                <Shield className="w-10 h-10 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Unshakeable Trust</h3>
                            <p className="text-text-muted leading-relaxed">
                                We independently verify user payout claims, rigorously track live spreads, and monitor comprehensive firm health metrics so you can trade with absolute confidence.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-dark/40 border border-white/5 p-10 rounded-[2rem] hover:bg-dark-light/40 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Trader Community</h3>
                            <p className="text-text-muted leading-relaxed">
                                Built by traders, for traders. We cultivate a robust community where members share legitimate feedback, setups, and insights without the noise.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-primary/10 via-dark to-secondary/5 rounded-[2rem] border border-white/10 p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find your edge?</h2>
                        <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
                            Stop guessing which firm is right for you. Use our tools to compare, analyze, and get funded faster.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => navigate('/firms')} className="btn-primary text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(10,193,201,0.3)] hover:shadow-[0_0_30px_rgba(10,193,201,0.5)] transition-all flex items-center group w-full sm:w-auto justify-center">
                                <Globe className="w-5 h-5 mr-2" />
                                Browse Top Firms
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => navigate('/quiz')} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center group w-full sm:w-auto justify-center">
                                <Zap className="w-5 h-5 mr-2 text-primary" />
                                Take AI Match Quiz
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
