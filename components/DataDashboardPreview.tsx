import React, { useRef, useState } from 'react';
import { Activity, ShieldCheck, Clock, Zap } from 'lucide-react';

// Custom Interactive 3D Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (inverted for a natural, "pressing in" feel)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
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
            {/* Ambient Background Hover Glow */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-brand-gold/30 rounded-[2rem] blur-xl opacity-0 transition-opacity duration-500 ${isHovering ? 'opacity-100' : ''}`}
                style={{ transform: 'translateZ(-1px)' }}
            />

            {/* The Actual Glass Card */}
            <div
                className="relative h-full w-full bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Shiny highlight sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 mix-blend-overlay pointer-events-none" />

                {/* 3D Pop-out Content Container */}
                <div style={{ transform: 'translateZ(30px)' }} className="h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const DataDashboardPreview: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-transparent overflow-hidden font-sans border-t border-brand-border/20 z-10 w-full">

            {/* Subtle Site-wide Integration Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/5 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <h3 className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] mb-3 uppercase flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" /> Next-Gen Intelligence
                    </h3>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight drop-shadow-md">
                        Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-gold">Precision</span>
                    </h2>
                    <p className="text-[15px] sm:text-base text-brand-muted font-light max-w-2xl mx-auto leading-relaxed">
                        Navigate the prop space with absolute clarity. Our interactive ecosystem transforms raw industry data into powerful, actionable insights.
                    </p>
                </div>

                {/* Bento Box Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">

                    {/* Left Hero Card - 3D Logo Presentation (Spans 7 cols) */}
                    <div className="lg:col-span-7 h-[500px] w-full max-w-full">
                        <TiltCard className="h-full w-full">
                            <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
                                {/* Top Badges */}
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                                        <span className="text-white text-xs font-medium">System Online</span>
                                    </div>
                                    <div className="bg-primary/20 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-xs font-medium flex items-center shadow-[inset_0_1px_4px_rgba(var(--primary),0.3)]">
                                        <Activity className="w-3.5 h-3.5 mr-1.5" /> Live Engine
                                    </div>
                                </div>

                                {/* Floating 3D Logo in Center */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-4">
                                    <img
                                        src="/3d-logo.png"
                                        alt="Capital Match 3D Core"
                                        className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-110 saturate-150 transition-transform duration-1000 group-hover:scale-105"
                                        style={{ transform: 'translateZ(60px)' }} // Extreme pop-out for logo
                                    />
                                </div>

                                {/* Bottom Metrics */}
                                <div className="mt-auto grid grid-cols-2 gap-4 relative z-10 w-full pt-8">
                                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col w-full">
                                        <span className="text-brand-muted text-xs font-medium mb-1 uppercase tracking-wider line-clamp-1">Active Evaluators</span>
                                        <span className="text-white text-2xl font-semibold tracking-tight">14,392</span>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col relative overflow-hidden w-full">
                                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-gold/20 blur-xl rounded-full"></div>
                                        <span className="text-brand-muted text-xs font-medium mb-1 uppercase tracking-wider line-clamp-1">Matched Capital</span>
                                        <span className="text-brand-gold text-2xl font-semibold tracking-tight">$84.5M+</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Right Stacked Cards (Spans 5 cols) */}
                    <div className="lg:col-span-5 grid grid-rows-2 gap-6 sm:gap-8 h-[500px]">

                        {/* Top Small Card - Live Pricing */}
                        <TiltCard className="h-full w-full">
                            <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-white font-medium flex items-center drop-shadow-md whitespace-nowrap">
                                        <Clock className="w-5 h-5 mr-2 text-primary flex-shrink-0" /> Live Rates
                                    </h4>
                                    <span className="text-[#eee] text-[10px] sm:text-xs px-2 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/10 whitespace-nowrap">Updated Just Now</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-black/20 p-3 sm:p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors w-full">
                                        <div className="flex flex-col min-w-0 mr-2">
                                            <span className="text-white font-medium truncate">FTMO 100k</span>
                                            <span className="text-brand-muted text-[10px] sm:text-xs truncate">Standard Challenge</span>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-white font-semibold">$540.00</span>
                                            <span className="text-primary text-[10px] font-bold mt-0.5 whitespace-nowrap">+ Popular</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-black/20 p-3 sm:p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors w-full">
                                        <div className="flex flex-col min-w-0 mr-2">
                                            <span className="text-white font-medium truncate">FundedNext 100k</span>
                                            <span className="text-brand-muted text-[10px] sm:text-xs truncate">Stellar 1-Step</span>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-white font-semibold">$519.00</span>
                                            <span className="text-brand-gold text-[10px] font-bold mt-0.5 whitespace-nowrap">Most Funded</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Bottom Small Card - Trust Metrics */}
                        <TiltCard className="h-full w-full">
                            <div className="p-6 sm:p-8 h-full flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl opacity-50 rounded-full mix-blend-screen pointer-events-none" />

                                <ShieldCheck className="w-8 h-8 text-white mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                                <h4 className="text-white text-lg sm:text-xl font-semibold mb-2 drop-shadow-md">Verified Trust Score</h4>
                                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6">
                                    Our proprietary algorithm analyzes hundreds of data points to ensure you only trade with reliable originators.
                                </p>

                                {/* Faux Progress Bar */}
                                <div className="w-full bg-black/40 rounded-full h-2.5 border border-white/10 overflow-hidden relative">
                                    <div className="bg-gradient-to-r from-primary to-brand-gold h-2.5 rounded-full" style={{ width: '92%' }}></div>
                                    {/* Shining effect on bar */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-[10px] sm:text-xs text-brand-muted">Industry Avg 64%</span>
                                    <span className="text-[10px] sm:text-xs text-brand-gold font-bold">Capital Match 92%</span>
                                </div>
                            </div>
                        </TiltCard>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
};
