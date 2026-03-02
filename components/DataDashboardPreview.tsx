import React, { useRef, useState, useEffect } from 'react';
import { Activity, ShieldCheck, Clock, Layers, Cpu, Zap, ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';

// Custom Interactive Glass Card Component
const TiltCard = ({ children, className = "", spotlightColor = "rgba(16, 185, 129, 0.15)" }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        setRotation({ x: rotateX, y: rotateY });
        setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.01 : 1}, ${isHovering ? 1.01 : 1}, ${isHovering ? 1.01 : 1})`,
                transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transformStyle: 'preserve-3d',
            }}
            className={`relative group ${className}`}
        >
            {/* Soft Ambient Glow */}
            <div
                className={`absolute -inset-[1px] bg-gradient-to-br from-primary/30 via-transparent to-brand-gold/20 rounded-[28px] blur-xl opacity-0 transition-opacity duration-700 ${isHovering ? 'opacity-100' : ''}`}
                style={{ transform: 'translateZ(-1px)' }}
            />

            {/* Main Card Body */}
            <div
                className="relative h-full w-full bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[28px] overflow-hidden shadow-2xl flex flex-col"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Dynamic Spotlight */}
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 40%)`
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0" />

                <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col relative z-10 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const DataDashboardPreview: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-[#020202] overflow-hidden font-sans border-t border-white/5 z-10 w-full">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] mix-blend-screen pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* Refined Header Section */}
                <div className="text-center mb-16 sm:mb-24 flex flex-col items-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-lg">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-brand-muted text-xs font-semibold tracking-widest uppercase">The Ecosystem</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-[56px] font-medium text-white mb-6 tracking-tight leading-[1.05]">
                        Discover the Best Prop Firms<br />
                        <span className="text-white/50">With Infinite Clarity</span>
                    </h2>

                    <p className="text-[16px] sm:text-[18px] text-brand-muted font-light max-w-2xl leading-relaxed">
                        Say goodbye to scattered data. We've built an interconnected dashboard that centralizes real-time metrics, payouts, and trusted analytics straight to your screen.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full">

                    {/* Left Hero Card - Match AI Engine (Spans 8 cols) */}
                    <div className="xl:col-span-8 h-[550px] sm:h-[600px] w-full">
                        <TiltCard className="h-full w-full" spotlightColor="rgba(16, 185, 129, 0.1)">
                            <div className="p-8 sm:p-10 flex flex-col h-full relative overflow-hidden">

                                {/* Background Tech Gradients */}
                                <div className="absolute -left-32 -top-32 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
                                <div className="absolute -right-32 bottom-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />

                                {/* Top Badges */}
                                <div className="flex justify-between items-start relative z-20">
                                    <div className="flex items-center space-x-2 bg-black/40 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                                        <span className="text-white text-[11px] font-bold tracking-widest">SYSTEM LIVE</span>
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider flex items-center shadow-inner">
                                        <Cpu className="w-3.5 h-3.5 mr-1.5" /> MATCH AI ENGINE
                                    </div>
                                </div>

                                {/* Abstract Central Visualization */}
                                <div className="flex-grow flex items-center justify-center relative mt-6 mb-8 w-full">
                                    <div className="relative w-full max-w-md h-full flex items-center justify-center">

                                        {/* Animated Connective Lines (SVG) */}
                                        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))' }}>
                                            <path d="M 50,200 C 150,200 150,100 250,100" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
                                            <path d="M 50,200 C 150,200 150,300 250,300" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite_reverse]" />
                                            <path d="M 250,100 C 350,100 350,200 450,200" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite]" />
                                            <path d="M 250,300 C 350,300 350,200 450,200" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite_reverse]" />
                                        </svg>

                                        {/* Trader Input Card */}
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-[#161616] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl z-10 w-44 hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-brand-muted/20 flex items-center justify-center">
                                                    <BarChart3 className="w-4 h-4 text-brand-muted" />
                                                </div>
                                                <div className="text-white text-xs font-semibold">Your Profile</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="h-full bg-brand-muted/40 rounded-full w-[80%]" /></div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="h-full bg-brand-muted/40 rounded-full w-[60%]" /></div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="h-full bg-brand-muted/40 rounded-full w-[40%]" /></div>
                                            </div>
                                        </div>

                                        {/* Central Core */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                            <div className="relative">
                                                {/* Pulsing rings */}
                                                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150" style={{ animationDuration: '3s' }} />
                                                <div className="absolute inset-0 bg-primary/30 rounded-full blur-md" />
                                                {/* Core Orb */}
                                                <div className="w-20 h-20 bg-gradient-to-br from-[#111] to-[#222] border-2 border-primary/50 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                                    <Zap className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Output Cards */}
                                        <div className="absolute right-0 top-1/4 -mt-4 bg-gradient-to-br from-[#111] to-black border border-primary/30 p-3 rounded-xl shadow-2xl backdrop-blur-xl z-10 w-40 transform translate-x-4 hover:-translate-y-1 transition-transform">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-white font-bold text-xs flex items-center"><CheckCircle2 className="w-3 h-3 text-primary mr-1" /> Match 98%</div>
                                            </div>
                                            <div className="text-[10px] text-brand-muted bg-white/5 p-1.5 rounded">Payout: Bi-weekly</div>
                                        </div>

                                        <div className="absolute right-0 bottom-1/4 mb-0 bg-gradient-to-br from-[#111] to-black border border-white/10 p-3 rounded-xl shadow-2xl backdrop-blur-xl z-10 w-40 transform translate-x-12 hover:-translate-y-1 transition-transform opacity-70">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-white font-bold text-xs">Match 85%</div>
                                            </div>
                                            <div className="text-[10px] text-brand-muted bg-white/5 p-1.5 rounded">Scaling: Very Fast</div>
                                        </div>

                                    </div>
                                </div>

                                {/* Bottom Info Text */}
                                <div className="mt-auto max-w-md relative z-20">
                                    <h4 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg tracking-tight">Algorithmic Matchmaking</h4>
                                    <p className="text-brand-muted text-[15px] leading-relaxed drop-shadow-md">
                                        Our proprietary AI engine processes 50+ unique data points across global prop firms to instantly recommend the perfect trading environment for your specific style.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Right Stacked Data Cards (Spans 4 cols) */}
                    <div className="xl:col-span-4 grid grid-rows-2 gap-8 h-[550px] sm:h-[600px] w-full">

                        {/* Live Pricing Feed */}
                        <TiltCard className="h-full w-full group/card flex flex-col" spotlightColor="rgba(255, 255, 255, 0.05)">
                            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none blur-2xl" />

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <h4 className="text-white text-lg font-semibold flex items-center tracking-tight">
                                        <Clock className="w-5 h-5 mr-3 text-primary animate-pulse" /> Live Pricing
                                    </h4>
                                    <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-widest flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse" /> Live
                                    </span>
                                </div>

                                <div className="space-y-3 relative z-10">
                                    {/* Item 1 */}
                                    <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-black/60 transition-all cursor-default">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-[#0f0f0f] rounded-lg border border-white/10 flex items-center justify-center font-bold text-white text-[13px] tracking-wider shadow-inner">
                                                FT
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-[13px]">FTMO 100k</div>
                                                <div className="text-brand-muted text-[10px] uppercase tracking-wider mt-0.5">Standard</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white font-semibold text-[15px]">$540.00</div>
                                            <div className="text-primary text-[9px] uppercase font-bold mt-1 tracking-widest">Top Tier</div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-black/60 transition-all cursor-default relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 blur-xl pointer-events-none" />
                                        <div className="flex items-center space-x-3 relative z-10">
                                            <div className="w-10 h-10 bg-[#0f0f0f] rounded-lg border border-white/10 flex items-center justify-center font-bold text-white text-[13px] tracking-wider shadow-inner">
                                                FN
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-[13px]">FundedNext</div>
                                                <div className="text-brand-muted text-[10px] uppercase tracking-wider mt-0.5">100k Stellar</div>
                                            </div>
                                        </div>
                                        <div className="text-right relative z-10">
                                            <div className="text-white font-semibold text-[15px]">$519.00</div>
                                            <div className="text-brand-gold text-[9px] uppercase font-bold mt-1 tracking-widest">Trending</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Verified Analytics */}
                        <TiltCard className="h-full w-full" spotlightColor="rgba(59, 130, 246, 0.1)">
                            <div className="p-6 sm:p-8 h-full flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-white text-xl font-semibold mb-3 tracking-tight">Verified Trust Metrics</h4>
                                    <p className="text-brand-muted text-[14px] leading-relaxed mb-8">
                                        Our systems evaluate global firm payout metrics daily to ensure complete reliability for your trades.
                                    </p>

                                    <div className="space-y-3 p-4 bg-black/30 rounded-xl border border-white/5">
                                        <div className="flex justify-between items-end">
                                            <span className="text-white text-xs font-semibold tracking-wide">Platform Reliability</span>
                                            <span className="text-primary font-bold text-lg leading-none">98.5%</span>
                                        </div>
                                        <div className="w-full bg-[#111] rounded-full h-1.5 overflow-hidden border border-white/5">
                                            <div className="bg-gradient-to-r from-blue-500 to-primary h-full rounded-full w-[98.5%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                    </div>
                </div>

                {/* Custom Keyframes for Animations */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes dash {
                        to { stroke-dashoffset: -100; }
                    }
                    @keyframes dash_reverse {
                        to { stroke-dashoffset: 100; }
                    }
                `}} />
            </div>
        </section>
    );
};

