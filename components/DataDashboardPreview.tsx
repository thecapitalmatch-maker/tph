import React from 'react';
import { TrendingUp } from 'lucide-react';

export const DataDashboardPreview: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-[#020202] overflow-hidden font-sans border-t border-brand-border/20">

            {/* Central Light Ray Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none flex flex-col items-center">
                {/* Core sharp ray */}
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#ff6b00]/60 to-transparent blur-[1px]"></div>
                {/* Inner glow */}
                <div className="absolute top-1/4 w-[40px] h-[400px] bg-[#ff6b00]/20 blur-[24px] mix-blend-screen"></div>
                {/* Outer ambient glow */}
                <div className="absolute top-0 w-[500px] h-[600px] bg-[#ff6b00]/5 blur-[100px] rounded-[100%] mix-blend-screen"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-24 flex flex-col items-center w-full max-w-2xl">
                    <h3 className="text-[#ff6b00] text-[10px] sm:text-xs font-bold tracking-[0.25em] mb-4 uppercase">
                        Join the Revolution
                    </h3>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
                        Setting a New Standard<br />
                        <span className="text-white/95">in Digital Trading</span>
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#a0a0a0] font-light px-4 leading-relaxed max-w-lg">
                        Our innovative exchange technology delivers unmatched performance, making digital trading more effective.
                    </p>
                </div>

                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">

                    {/* Left Block - Data Table Style */}
                    {/* Outer boundary card */}
                    <div className="relative rounded-[20px] bg-[#050505] border border-white/5 flex flex-col shadow-2xl overflow-hidden group">
                        {/* The Inner Glass Card */}
                        <div className="relative m-3 sm:m-4 mb-2 flex-grow bg-gradient-to-b from-[#161616] to-[#0c0c0c] border border-white/5 rounded-[16px] p-5 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] flex flex-col">
                            <h4 className="text-white text-[15px] font-medium mb-8">Firm Pricing</h4>

                            <div className="space-y-6 flex-grow flex flex-col justify-center">
                                {/* Row 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-1.5 shadow-inner">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/ftmo-logo.png" alt="FTMO" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-[#f5f5f5] font-medium text-[15px]">FTMO</div>
                                            <div className="text-[#666] text-[12px] mt-0.5 uppercase tracking-wide">100k Challenge</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-[15px]">$540.00</div>
                                        <div className="text-[#ff6b00] text-[12px] font-medium mt-1 flex items-center justify-end">
                                            Popular <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/5 border-dashed border-b border-white/5 my-2"></div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-1.5 shadow-inner">
                                            <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/FundedNext-Logo.png" alt="FundedNext" className="w-full h-full object-contain filter brightness-200" />
                                        </div>
                                        <div>
                                            <div className="text-[#f5f5f5] font-medium text-[15px]">FundedNext</div>
                                            <div className="text-[#666] text-[12px] mt-0.5 uppercase tracking-wide">100k Stellar</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium text-[15px]">$519.00</div>
                                        <div className="text-[#ff6b00] text-[12px] font-medium mt-1 flex items-center justify-end">
                                            Trending <TrendingUp className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explanatory Text at Bottom (outside inner card) */}
                        <div className="px-5 sm:px-7 pb-6 pt-4">
                            <p className="text-[#777] text-[13px] leading-relaxed">
                                <span className="text-[#eee] font-medium">Live Data.</span> Access up-to-date pricing data and challenge metrics for efficient evaluation.
                            </p>
                        </div>

                        {/* Subtle bottom gradient sweep */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00]/10 to-transparent"></div>
                    </div>

                    {/* Right Block - Chart Style */}
                    <div className="relative rounded-[20px] bg-[#050505] border border-white/5 flex flex-col shadow-2xl overflow-hidden group">
                        {/* The Inner Glass Card */}
                        <div className="relative m-3 sm:m-4 mb-2 flex-grow bg-gradient-to-b from-[#161616] to-[#0c0c0c] border border-white/5 rounded-[16px] p-5 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] flex flex-col">

                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <div>
                                    <h4 className="text-[#777] text-[13px] font-medium mb-1.5">Total Verified Payouts</h4>
                                    <div className="text-[28px] sm:text-[34px] font-medium text-white tracking-tight leading-none">
                                        $61,493.37
                                    </div>
                                    <div className="text-[#ff6b00] text-[12px] font-medium mt-2.5 flex items-center">
                                        <TrendingUp className="w-3 h-3 mr-1" /> 1431,37$ (3,37%)
                                    </div>
                                </div>
                                <div className="px-2.5 py-1 rounded-[6px] border border-white/10 text-[#666] text-[10px] flex items-center bg-[#111]">
                                    Last 28 days <svg className="w-3 h-3 ml-1.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            {/* Faux SVG Chart mimicking the reference */}
                            <div className="w-[110%] h-[120px] relative mt-auto top-6 -ml-4 -mr-4 shrink-0 pointer-events-none">
                                {/* Y-Axis Labels */}
                                <div className="absolute inset-0 pl-6 w-full h-full z-0">
                                    <div className="absolute left-6 bottom-[25%] text-[10px] font-medium text-[rgba(255,255,255,0.15)]">50,000</div>
                                    <div className="absolute left-6 bottom-[65%] text-[10px] font-medium text-[rgba(255,255,255,0.15)]">60,000</div>

                                    <svg className="w-full h-full absolute inset-0 preserve-3d overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chart-gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgba(255, 107, 0, 0.2)" />
                                                <stop offset="100%" stopColor="rgba(255, 107, 0, 0)" />
                                            </linearGradient>
                                            <linearGradient id="line-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#4a2200" />
                                                <stop offset="40%" stopColor="#ff6b00" />
                                                <stop offset="60%" stopColor="#ff4500" />
                                                <stop offset="100%" stopColor="#6b2700" />
                                            </linearGradient>
                                            {/* Subtler Glow Filter */}
                                            <filter id="glow-right" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feMerge>
                                                    <feMergeNode in="blur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>

                                        {/* Area Fill */}
                                        <path
                                            d="M0,120 L0,100 C40,100 60,80 80,95 C100,110 140,50 160,80 C180,110 200,20 220,10 C240,0 260,60 280,50 C300,40 320,90 340,80 C360,70 380,100 400,95 L400,120 Z"
                                            fill="url(#chart-gradient-right)"
                                        />

                                        {/* Neon Line */}
                                        <path
                                            d="M0,100 C40,100 60,80 80,95 C100,110 140,50 160,80 C180,110 200,20 220,10 C240,0 260,60 280,50 C300,40 320,90 340,80 C360,70 380,100 400,95"
                                            fill="none"
                                            stroke="url(#line-gradient-right)"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            filter="url(#glow-right)"
                                        />

                                        {/* High Point Marker */}
                                        <g transform="translate(220, 10)">
                                            <circle cx="0" cy="0" r="3.5" fill="#ff6b00" />
                                            <circle cx="0" cy="0" r="9" fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeOpacity="0.5" className="animate-pulse" />
                                            <text x="0" y="-14" fill="#ddd" fontSize="10" textAnchor="middle" fontWeight="500" letterSpacing="0.5">$61,493.37</text>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Explanatory Text at Bottom */}
                        <div className="px-5 sm:px-7 pb-6 pt-4 relative z-10">
                            <p className="text-[#777] text-[13px] leading-relaxed">
                                <span className="text-[#eee] font-medium">Advanced Tools.</span> Leverage our proprietary analytics to enhance your prop firm setup.
                            </p>
                        </div>

                        {/* Subtle bottom gradient sweep */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00]/10 to-transparent"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};
