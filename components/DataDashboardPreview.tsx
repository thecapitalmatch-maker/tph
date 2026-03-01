import React from 'react';
import { TrendingUp, Activity, BarChart3 } from 'lucide-react';

export const DataDashboardPreview: React.FC = () => {
    return (
        <section className="relative py-32 bg-brand-dark overflow-hidden font-sans border-t border-brand-border/50">
            {/* Background Glow Effects to match reference */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-[100%] blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute top-[30%] left-1/3 w-[400px] h-[400px] bg-brand-gold/5 rounded-[100%] blur-[100px] mix-blend-screen"></div>

                {/* Subtle vertical light ray effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60px] h-[300px] bg-primary/10 blur-[30px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <h3 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4 uppercase">
                        Join the Revolution
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                        Setting a New Standard<br className="hidden md:block" />
                        <span className="text-white/90">in Prop Trading</span>
                    </h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto font-light">
                        Our innovative AI technology delivers unmatched performance data, making your funding journey more effective.
                    </p>
                </div>

                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

                    {/* Left Block - Data Table Style */}
                    <div className="flex flex-col h-full group">
                        <div className="bg-[#111214]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex-grow transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden">
                            {/* Subtle inner top highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            <h4 className="text-white font-medium text-xl mb-8 flex items-center">
                                Top Performing Firms
                            </h4>

                            <div className="space-y-6">
                                {/* Row 1 */}
                                <div className="flex items-center justify-between group/row">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover/row:border-primary/30 transition-colors">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/ftmo-logo.png" alt="FTMO" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-lg">FTMO</div>
                                            <div className="text-brand-muted text-sm">Max Allocation</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-lg">$400,000</div>
                                        <div className="text-brand-gold text-sm flex items-center justify-end font-medium">
                                            90% Split <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent border-dashed border-b border-white/5"></div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-between group/row">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover/row:border-primary/30 transition-colors">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/FundedNext-Logo.png" alt="FundedNext" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-lg">FundedNext</div>
                                            <div className="text-brand-muted text-sm">Max Allocation</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-lg">$300,000</div>
                                        <div className="text-brand-gold text-sm flex items-center justify-end font-medium">
                                            95% Split <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Explanatory Text */}
                        <div className="mt-6 px-4">
                            <p className="text-brand-muted text-sm leading-relaxed">
                                <span className="text-white font-medium">Live Data.</span> Access up-to-date firm allocations and profit split limits for efficient decision-making.
                            </p>
                        </div>
                    </div>

                    {/* Right Block - Chart Style */}
                    <div className="flex flex-col h-full group">
                        <div className="bg-[#111214]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex-grow transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
                            {/* Subtle inner top highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-brand-muted font-medium text-sm mb-2">Total Verified Payouts</h4>
                                    <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                                        $84,493.37
                                        <span className="text-brand-gold text-sm font-medium ml-3 inline-flex items-center bg-brand-gold/10 px-2 py-1 rounded-md">
                                            <TrendingUp className="w-3 h-3 mr-1" /> 14.3% (30d)
                                        </span>
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 rounded-full border border-white/10 text-brand-muted text-xs flex items-center bg-white/5 backdrop-blur-md">
                                    Last 28 days <div className="w-2 h-2 ml-2 bg-brand-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Faux SVG Chart mimicking the reference */}
                            <div className="w-full h-48 relative mt-auto border-b border-brand-border/30">
                                {/* Horizontal Grid Lines */}
                                <div className="absolute bottom-1/3 w-full border-b border-white/5 border-dashed"></div>
                                <div className="absolute bottom-2/3 w-full border-b border-white/5 border-dashed"></div>

                                {/* Y-Axis Labels */}
                                <div className="absolute left-0 bottom-[30%] text-[10px] text-brand-muted">60,000</div>
                                <div className="absolute left-0 bottom-[60%] text-[10px] text-brand-muted">80,000</div>

                                <svg className="w-full h-full absolute inset-0 preserve-3d" viewBox="0 0 400 150" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(255, 215, 0, 0.4)" />
                                            <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
                                        </linearGradient>
                                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#8c7a31" />
                                            <stop offset="50%" stopColor="#ffd700" />
                                            <stop offset="100%" stopColor="#d4af37" />
                                        </linearGradient>
                                        {/* Glow Filter */}
                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="4" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Area Fill */}
                                    <path
                                        d="M0,150 L0,120 C40,120 60,90 80,110 C100,130 140,80 160,100 C180,120 200,40 220,30 C240,20 260,80 280,70 C300,60 320,110 340,100 C360,90 380,120 400,110 L400,150 Z"
                                        fill="url(#chart-gradient)"
                                    />

                                    {/* Neon Line */}
                                    <path
                                        d="M0,120 C40,120 60,90 80,110 C100,130 140,80 160,100 C180,120 200,40 220,30 C240,20 260,80 280,70 C300,60 320,110 340,100 C360,90 380,120 400,110"
                                        fill="none"
                                        stroke="url(#line-gradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        filter="url(#glow)"
                                    />

                                    {/* High Point Marker */}
                                    <g transform="translate(220, 30)">
                                        <circle cx="0" cy="0" r="4" fill="#ffd700" className="animate-pulse" />
                                        <circle cx="0" cy="0" r="10" fill="none" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" />
                                        <rect x="-30" y="-25" width="60" height="18" rx="4" fill="#222" stroke="#444" strokeWidth="1" />
                                        <text x="0" y="-13" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">$84,493</text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        {/* Explanatory Text */}
                        <div className="mt-6 px-4">
                            <p className="text-brand-muted text-sm leading-relaxed">
                                <span className="text-white font-medium">Advanced Tools.</span> Leverage our proprietary analytics to enhance your prop firm strategy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
