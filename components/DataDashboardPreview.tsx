import React from 'react';
import { TrendingUp } from 'lucide-react';

export const DataDashboardPreview: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-transparent overflow-hidden font-sans border-t border-brand-border/20">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none flex flex-col items-center">
                <div className="absolute top-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse-slow"></div>
                <div className="absolute top-0 w-[1000px] h-[800px] bg-brand-gold/10 blur-[150px] rounded-[100%] mix-blend-screen opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-24 flex flex-col items-center w-full max-w-2xl">
                    <h3 className="text-brand-gold text-xs sm:text-sm font-bold tracking-[0.2em] mb-4 uppercase">
                        Join the Revolution
                    </h3>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
                        Setting a New Standard<br />
                        <span className="text-white/90">in Prop Trading</span>
                    </h2>
                    <p className="text-[15px] sm:text-base text-brand-muted font-light px-4 leading-relaxed max-w-lg">
                        Our innovative AI exchange technology delivers unmatched performance data, making your trading journey more effective.
                    </p>
                </div>

                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl">

                    {/* Left Block - Data Table Style */}
                    <div className="group relative flex flex-col transition-all duration-700 hover:-translate-y-2">
                        {/* Outer Glow on Hover */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-brand-gold/30 to-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                        {/* The Glass Card */}
                        <div className="relative flex-grow bg-white/[0.02] backdrop-blur-3xl border border-white/10 group-hover:border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-500">

                            {/* Inner Top Highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                            {/* Animated Background Gradient Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <h4 className="text-white text-lg sm:text-xl font-medium mb-8 relative z-10">Firm Pricing</h4>

                            <div className="space-y-6 flex-grow flex flex-col justify-center relative z-10">
                                {/* Row 1 */}
                                <div className="flex items-center justify-between group/row">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 group-hover/row:border-primary/50 transition-colors flex items-center justify-center p-2 shadow-inner">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/ftmo-logo.png" alt="FTMO" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-base">FTMO</div>
                                            <div className="text-brand-muted text-xs mt-0.5 uppercase tracking-wide">100k Challenge</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-base">$540.00</div>
                                        <div className="text-brand-gold text-xs font-medium mt-1 flex items-center justify-end">
                                            Popular <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/5 border-dashed border-b border-white/5 my-2"></div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-between group/row">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 group-hover/row:border-primary/50 transition-colors flex items-center justify-center p-2 shadow-inner">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/FundedNext-Logo.png" alt="FundedNext" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-base">FundedNext</div>
                                            <div className="text-brand-muted text-xs mt-0.5 uppercase tracking-wide">100k Stellar</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-base">$519.00</div>
                                        <div className="text-primary text-xs font-medium mt-1 flex items-center justify-end">
                                            Trending <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explanatory Text */}
                        <div className="mt-6 px-4">
                            <p className="text-brand-muted text-sm leading-relaxed">
                                <span className="text-white font-medium drop-shadow-md">Live Data.</span> Access up-to-date pricing data and challenge metrics for efficient evaluation.
                            </p>
                        </div>
                    </div>

                    {/* Right Block - Chart Style */}
                    <div className="group relative flex flex-col transition-all duration-700 hover:-translate-y-2 hover:translate-x-1 md:translate-y-8">
                        {/* Outer Glow on Hover */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-gold/30 via-primary/30 to-brand-gold/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                        {/* The Glass Card */}
                        <div className="relative flex-grow bg-white/[0.02] backdrop-blur-3xl border border-white/10 group-hover:border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-500">

                            {/* Inner Top Highlight */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                            {/* Animated Background Gradient Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div>
                                    <h4 className="text-brand-muted text-sm font-medium mb-1.5">Total Verified Payouts</h4>
                                    <div className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-none drop-shadow-lg">
                                        $84,493.37
                                    </div>
                                    <div className="text-primary text-sm font-medium mt-3 flex items-center bg-primary/10 px-2.5 py-1 rounded-md w-max border border-primary/20">
                                        <TrendingUp className="w-3.5 h-3.5 mr-1.5" /> 14.3% (30d)
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 rounded-lg border border-white/10 text-brand-muted text-xs flex items-center bg-black/40 shadow-inner">
                                    Last 28 days
                                    <div className="w-2 h-2 ml-2 bg-brand-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(var(--brand-gold),0.8)]"></div>
                                </div>
                            </div>

                            {/* SVG Chart mimicking the reference */}
                            <div className="w-[110%] h-[140px] relative mt-auto top-6 -ml-4 -mr-4 shrink-0 pointer-events-none">
                                {/* Horizontal Grid Lines */}
                                <div className="absolute bottom-1/4 w-full border-b border-white/5 border-dashed"></div>
                                <div className="absolute bottom-2/4 w-full border-b border-white/5 border-dashed"></div>

                                {/* Y-Axis Labels */}
                                <div className="absolute inset-0 pl-6 w-full h-full z-0">
                                    <div className="absolute left-6 bottom-[22%] text-[10px] font-medium text-brand-muted/50">60k</div>
                                    <div className="absolute left-6 bottom-[47%] text-[10px] font-medium text-brand-muted/50">80k</div>

                                    <svg className="w-full h-full absolute inset-0 preserve-3d overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chart-gradient-glass" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgba(var(--primary), 0.3)" />
                                                <stop offset="100%" stopColor="rgba(var(--primary), 0)" />
                                            </linearGradient>
                                            <linearGradient id="line-gradient-glass" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="rgba(var(--primary), 0.5)" />
                                                <stop offset="50%" stopColor="rgba(var(--primary), 1)" />
                                                <stop offset="100%" stopColor="rgba(var(--brand-gold), 1)" />
                                            </linearGradient>
                                            <filter id="glow-glass" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="6" result="blur" />
                                                <feMerge>
                                                    <feMergeNode in="blur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>

                                        {/* Area Fill */}
                                        <path
                                            d="M0,120 L0,90 C40,90 60,60 80,85 C100,110 140,40 160,70 C180,100 200,20 220,10 C240,0 260,70 280,60 C300,50 320,100 340,90 C360,80 380,110 400,105 L400,120 Z"
                                            fill="url(#chart-gradient-glass)"
                                        />

                                        {/* Neon Line */}
                                        <path
                                            d="M0,90 C40,90 60,60 80,85 C100,110 140,40 160,70 C180,100 200,20 220,10 C240,0 260,70 280,60 C300,50 320,100 340,90 C360,80 380,110 400,105"
                                            fill="none"
                                            stroke="url(#line-gradient-glass)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            filter="url(#glow-glass)"
                                            className="group-hover:stroke-brand-gold transition-colors duration-1000"
                                        />

                                        {/* High Point Marker */}
                                        <g transform="translate(220, 10)">
                                            <circle cx="0" cy="0" r="4" fill="#fff" className="shadow-lg" />
                                            <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(var(--primary), 1)" strokeWidth="2" strokeOpacity="0.8" className="animate-ping" />
                                            <text x="0" y="-16" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold" className="drop-shadow-lg">$84,493</text>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Explanatory Text */}
                        <div className="mt-6 px-4">
                            <p className="text-brand-muted text-sm leading-relaxed">
                                <span className="text-white font-medium drop-shadow-md">Advanced Tools.</span> Leverage our proprietary analytics to enhance your prop firm setup.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
