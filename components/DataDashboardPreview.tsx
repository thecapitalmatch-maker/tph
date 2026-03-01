import React, { useRef, useState, Suspense } from 'react';
import { Activity, ShieldCheck, Clock, Layers } from 'lucide-react';
import { ThreeDLogoWidget } from './ThreeDLogoWidget'; // Import the new 3D responsive widget

// Custom Interactive Glass Card Component
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

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

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
            <div
                className={`absolute -inset-[1px] bg-gradient-to-br from-primary/30 to-brand-gold/30 rounded-[24px] blur-xl opacity-0 transition-opacity duration-700 ${isHovering ? 'opacity-100' : ''}`}
                style={{ transform: 'translateZ(-1px)' }}
            />

            <div
                className="relative h-full w-full bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 rounded-[24px] overflow-hidden shadow-2xl flex flex-col"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* Refined Header Section */}
                <div className="text-center mb-16 sm:mb-24 flex flex-col items-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-brand-muted text-xs font-medium tracking-widest uppercase">Ecosystem</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-[56px] font-medium text-white mb-6 tracking-tight leading-[1.05]">
                        Discover the Best Prop Firms<br />
                        <span className="text-white/60">With Infinite Clarity</span>
                    </h2>

                    <p className="text-[16px] sm:text-[18px] text-brand-muted font-light max-w-2xl leading-relaxed">
                        Say goodbye to scattered data. We've built an interconnected dashboard that centralizes real-time metrics, payouts, and trusted analytics straight to your screen.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full">

                    {/* Left Hero Card - Fully Interactive 3D Widget (Spans 7 cols) */}
                    <div className="lg:col-span-7 h-[450px] sm:h-[550px] w-full">
                        <TiltCard className="h-full w-full">
                            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between h-full pointer-events-none z-20">
                                {/* Top Badges */}
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center space-x-2 bg-black/40 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                                        <span className="text-white text-[11px] font-medium tracking-wide">SYSTEM LIVE</span>
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center shadow-inner">
                                        <Activity className="w-3.5 h-3.5 mr-1.5" /> 3D INTERACTIVE
                                    </div>
                                </div>

                                {/* Bottom Info Text */}
                                <div className="mt-auto max-w-xs">
                                    <h4 className="text-white text-xl font-medium mb-1 drop-shadow-lg">Capital Match Core</h4>
                                    <p className="text-brand-muted text-sm leading-relaxed drop-shadow-md">
                                        Interact with our responsive 3D widget. Drag to rotate and explore our algorithmic foundation.
                                    </p>
                                </div>
                            </div>

                            {/* The Real 3D Canvas (pointer events enabled here!) */}
                            <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing flex items-center justify-center pt-8">
                                <Suspense fallback={<div className="text-primary animate-pulse">Loading Core Engine...</div>}>
                                    <div className="w-full h-full scale-125 md:scale-150">
                                        <ThreeDLogoWidget />
                                    </div>
                                </Suspense>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Right Stacked Data Cards (Spans 5 cols) */}
                    <div className="lg:col-span-5 grid grid-rows-2 gap-6 sm:gap-8 h-[450px] sm:h-[550px]">

                        {/* Live Pricing Feed */}
                        <TiltCard className="h-full w-full group/card flex flex-col">
                            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="text-white text-lg font-medium flex items-center">
                                        <Clock className="w-5 h-5 mr-3 text-primary" /> Live Pricing Feed
                                    </h4>
                                    <span className="text-[#a0a0a0] text-[10px] font-medium px-2 py-1 rounded bg-white/5 border border-white/5 uppercase tracking-wider">Live</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-[#111] p-4 rounded-2xl border border-white/5 group-hover/card:border-white/10 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-black rounded-lg border border-white/10 p-1 flex items-center justify-center">
                                                <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/ftmo-logo.png" alt="FTMO" className="w-full h-full object-contain filter brightness-200" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">FTMO 100k</div>
                                                <div className="text-brand-muted text-[11px] uppercase tracking-wide mt-0.5">Standard</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white font-medium">$540.00</div>
                                            <div className="text-primary text-[10px] uppercase font-bold mt-0.5 tracking-wider">Top Tier</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between bg-[#111] p-4 rounded-2xl border border-white/5 group-hover/card:border-white/10 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-black rounded-lg border border-white/10 p-1 flex items-center justify-center">
                                                <img src="https://thecapitalmatch.com/wp-content/uploads/2024/11/FundedNext-Logo.png" alt="FundedNext" className="w-full h-full object-contain filter brightness-200" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">FundedNext 100k</div>
                                                <div className="text-brand-muted text-[11px] uppercase tracking-wide mt-0.5">Stellar</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white font-medium">$519.00</div>
                                            <div className="text-brand-gold text-[10px] uppercase font-bold mt-0.5 tracking-wider">Trending</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Verified Analytics */}
                        <TiltCard className="h-full w-full">
                            <div className="p-6 sm:p-8 h-full flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

                                <ShieldCheck className="w-8 h-8 text-primary mb-5" />
                                <h4 className="text-white text-xl font-medium mb-3">Verified Trust Metrics</h4>
                                <p className="text-[#a0a0a0] text-[14px] leading-relaxed mb-8">
                                    Our proprietary algorithm constantly evaluates global prop firm payout metrics to ensure complete reliability for your trades.
                                </p>

                                <div className="space-y-2 relative z-10">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-white">Reliability Score</span>
                                        <span className="text-brand-gold">98.5%</span>
                                    </div>
                                    <div className="w-full bg-[#111] rounded-full h-2 overflow-hidden border border-white/5">
                                        <div className="bg-gradient-to-r from-primary to-brand-gold h-full rounded-full w-[98.5%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                    </div>
                </div>
            </div>
        </section>
    );
};
