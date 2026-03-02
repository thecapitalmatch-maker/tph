import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Clock, Layers, Cpu, Zap, TrendingUp, Users, DollarSign, ArrowUpRight, BarChart3, CheckCircle2, Globe } from 'lucide-react';

/* ─── Animated Counter Hook ─── */
const useCounter = (target: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [hasStarted, target, duration]);

    return { count, ref };
};

/* ─── Sparkline Mini Chart ─── */
const Sparkline = ({ data, color = '#10b981', className = '' }: { data: number[], color?: string, className?: string }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const w = 120; const h = 40;
    const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');
    return (
        <svg width={w} height={h} className={className} viewBox={`0 0 ${w} ${h}`}>
            <defs>
                <linearGradient id={`spark-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={`0,${h} ${points} ${w},${h}`} fill={`url(#spark-${color.replace('#', '')})`} />
            <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

/* ─── Interactive Glass TiltCard ─── */
const TiltCard = ({ children, className = '', spotlightColor = 'rgba(16, 185, 129, 0.12)' }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRotation({ x: ((y - rect.height / 2) / (rect.height / 2)) * -3, y: ((x - rect.width / 2) / (rect.width / 2)) * 3 });
        setMousePos({ x, y });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setRotation({ x: 0, y: 0 }); }}
            style={{
                transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.015 : 1})`,
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transformStyle: 'preserve-3d',
            }}
            className={`relative group ${className}`}
        >
            {/* Ambient border glow */}
            <div className={`absolute -inset-px bg-gradient-to-br from-primary/40 via-transparent to-brand-gold/20 rounded-3xl blur-lg opacity-0 transition-opacity duration-500 ${isHovering ? 'opacity-100' : ''}`} />

            {/* Glass body */}
            <div className="relative h-full w-full bg-[#080808]/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Cursor spotlight */}
                <div className="absolute inset-0 transition-opacity duration-300 pointer-events-none" style={{ opacity: isHovering ? 1 : 0, background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 40%)` }} />
                {/* Subtle top-left sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div style={{ transform: 'translateZ(25px)' }} className="h-full flex flex-col relative z-10">{children}</div>
            </div>
        </div>
    );
};

/* ─── Stat Pill Component ─── */
const StatPill = ({ icon: Icon, label, value, change, color = 'text-primary' }: { icon: any, label: string, value: string, change: string, color?: string }) => (
    <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default group/stat">
        <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover/stat:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
                <div className="text-white/50 text-[11px] font-medium uppercase tracking-wider">{label}</div>
                <div className="text-white font-bold text-lg leading-tight mt-0.5">{value}</div>
            </div>
        </div>
        <div className="flex items-center space-x-1 bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide">
            <ArrowUpRight className="w-3 h-3" />{change}
        </div>
    </div>
);

/* ─── Main Section ─── */
export const DataDashboardPreview: React.FC = () => {
    const counter1 = useCounter(12847);
    const counter2 = useCounter(284);
    const counter3 = useCounter(97);

    return (
        <section className="relative py-28 sm:py-36 bg-[#020202] overflow-hidden font-sans border-t border-white/5 z-10 w-full">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/[0.07] blur-[180px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-blue-500/[0.04] blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold/[0.03] blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* ─── Header ─── */}
                <div className="text-center mb-20 flex flex-col items-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-md">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">The Ecosystem</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-[58px] font-semibold text-white mb-7 tracking-[-0.02em] leading-[1.08]">
                        Discover the Best Prop Firms<br />
                        <span className="bg-gradient-to-r from-white/50 to-white/30 bg-clip-text text-transparent">With Infinite Clarity</span>
                    </h2>

                    <p className="text-[16px] sm:text-[17px] text-white/40 font-normal max-w-xl leading-[1.7]">
                        An interconnected dashboard that centralizes real-time metrics, payouts, and trusted analytics — straight to your screen.
                    </p>
                </div>

                {/* ─── Bento Grid ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full auto-rows-auto">

                    {/* ━━━ Card 1: AI Match Engine (Large, spans 7 cols on first row) ━━━ */}
                    <div className="lg:col-span-7 min-h-[480px]">
                        <TiltCard className="h-full" spotlightColor="rgba(16, 185, 129, 0.08)">
                            <div className="p-7 sm:p-9 flex flex-col h-full relative overflow-hidden">
                                {/* Decorative blurs */}
                                <div className="absolute -left-20 -top-20 w-72 h-72 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
                                <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/8 blur-[80px] rounded-full pointer-events-none" />

                                {/* Top: Title Area */}
                                <div className="relative z-20 mb-5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)] animate-pulse" />
                                            <span className="text-white text-[10px] font-bold tracking-[0.15em]">SYSTEM LIVE</span>
                                        </div>
                                        <div className="bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] flex items-center">
                                            <Cpu className="w-3.5 h-3.5 mr-1.5" /> MATCH AI
                                        </div>
                                    </div>
                                    <h4 className="text-white text-[22px] font-bold tracking-tight leading-tight">Find Your Perfect Prop Firm</h4>
                                    <p className="text-white/35 text-[13px] leading-relaxed mt-1.5">Our AI processes your unique trading profile across 50+ data points to deliver instant, precision-matched recommendations.</p>
                                </div>

                                {/* 3-Column Flow Visualization */}
                                <div className="flex-grow grid grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 items-center relative z-10">

                                    {/* Column 1: YOUR PREFERENCES */}
                                    <div className="space-y-2.5">
                                        <div className="text-[9px] text-white/25 font-bold uppercase tracking-[0.2em] text-center mb-1">Your Preferences</div>

                                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-3.5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                                            <div className="flex items-center space-x-2.5 mb-2.5">
                                                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-white text-[11px] font-bold">Experience</div>
                                                    <div className="text-white/30 text-[9px]">Intermediate</div>
                                                </div>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full w-[75%] shadow-[0_0_6px_rgba(16,185,129,0.4)]" /></div>
                                        </div>

                                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-3.5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                                            <div className="flex items-center space-x-2.5 mb-2.5">
                                                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                    <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-white text-[11px] font-bold">Budget</div>
                                                    <div className="text-white/30 text-[9px]">$200 - $600</div>
                                                </div>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[55%] shadow-[0_0_6px_rgba(59,130,246,0.4)]" /></div>
                                        </div>

                                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-3.5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                                            <div className="flex items-center space-x-2.5 mb-2.5">
                                                <div className="w-7 h-7 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                                    <BarChart3 className="w-3.5 h-3.5 text-brand-gold" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-white text-[11px] font-bold">Instruments</div>
                                                    <div className="text-white/30 text-[9px]">Forex Majors</div>
                                                </div>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full w-[90%] shadow-[0_0_6px_rgba(245,158,11,0.4)]" /></div>
                                        </div>
                                    </div>

                                    {/* Column 2: AI CORE (Center) */}
                                    <div className="flex flex-col items-center justify-center space-y-3 px-1 sm:px-3">
                                        <div className="flex items-center text-primary/30">
                                            <div className="w-5 sm:w-8 h-px bg-gradient-to-r from-primary/40 to-primary/10" />
                                            <ArrowUpRight className="w-3 h-3 text-primary/50 rotate-45 animate-pulse" style={{ animationDuration: '2s' }} />
                                        </div>

                                        <div className="relative">
                                            <div className="absolute -inset-5 bg-primary/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                                            <div className="absolute -inset-3 bg-primary/15 rounded-full blur-md" />
                                            <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-[#0a0a0a] to-[#151515] border-2 border-primary/40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2),inset_0_1px_1px_rgba(255,255,255,0.08)] relative">
                                                <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.9)]" />
                                            </div>
                                        </div>

                                        <div className="text-[8px] sm:text-[9px] text-primary font-bold tracking-[0.15em] uppercase text-center">AI Engine</div>

                                        <div className="flex items-center text-primary/30">
                                            <ArrowUpRight className="w-3 h-3 text-primary/50 rotate-45 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                                            <div className="w-5 sm:w-8 h-px bg-gradient-to-l from-primary/40 to-primary/10" />
                                        </div>
                                    </div>

                                    {/* Column 3: MATCHED RESULTS */}
                                    <div className="space-y-2.5">
                                        <div className="text-[9px] text-white/25 font-bold uppercase tracking-[0.2em] text-center mb-1">Best Matches</div>

                                        {/* Top Match */}
                                        <div className="bg-white/[0.03] border border-primary/20 rounded-2xl p-3.5 relative overflow-hidden hover:bg-white/[0.05] transition-all duration-300">
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-xl rounded-full pointer-events-none" />
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className="flex items-center space-x-1.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-white font-bold text-[12px]">98% Match</span>
                                                </div>
                                                <span className="text-[7px] bg-primary/15 text-primary px-1.5 py-0.5 rounded-full font-bold tracking-wider">TOP PICK</span>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Firm</span><span className="text-white font-semibold">FTMO</span></div>
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Payout</span><span className="text-white font-semibold">Bi-weekly</span></div>
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Profit Split</span><span className="text-primary font-bold">90%</span></div>
                                            </div>
                                        </div>

                                        {/* Second Match */}
                                        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-3.5 hover:bg-white/[0.05] transition-all duration-300 opacity-80">
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className="flex items-center space-x-1.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                                                    <span className="text-white font-bold text-[12px]">92% Match</span>
                                                </div>
                                                <span className="text-[7px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-full font-bold tracking-wider">#2</span>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Firm</span><span className="text-white font-semibold">FundedNext</span></div>
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Scaling</span><span className="text-white font-semibold">Very Fast</span></div>
                                                <div className="flex justify-between text-[10px]"><span className="text-white/35">Profit Split</span><span className="text-blue-400 font-bold">95%</span></div>
                                            </div>
                                        </div>

                                        {/* Third Match (faded) */}
                                        <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-2.5 opacity-40">
                                            <div className="flex items-center space-x-1.5">
                                                <CheckCircle2 className="w-3 h-3 text-white/40" />
                                                <span className="text-white/70 font-bold text-[11px]">85% Match</span>
                                                <span className="text-[7px] bg-white/5 text-white/40 px-1.5 py-0.5 rounded-full font-bold">#3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* ━━━ Card 2: Live Stats (Spans 5 cols on first row) ━━━ */}
                    <div className="lg:col-span-5 min-h-[420px]" ref={counter1.ref}>
                        <TiltCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.08)">
                            <div className="p-7 sm:p-9 flex flex-col h-full relative">
                                <div className="absolute -right-16 -top-16 w-52 h-52 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <h4 className="text-white text-xl font-bold flex items-center tracking-tight">
                                        <Globe className="w-5 h-5 mr-3 text-blue-400" /> Platform Overview
                                    </h4>
                                    <div className="flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider border border-emerald-500/20">
                                        <ArrowUpRight className="w-3 h-3" /> +24%
                                    </div>
                                </div>

                                {/* Big Stat Number */}
                                <div className="mb-8 relative z-10">
                                    <div className="text-white/30 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Active Traders This Month</div>
                                    <div className="flex items-end space-x-3">
                                        <span className="text-white text-5xl font-bold tracking-tight leading-none">{counter1.count.toLocaleString()}</span>
                                        <Sparkline data={[20, 35, 28, 45, 38, 55, 48, 62, 58, 72, 65, 80]} color="#3b82f6" className="mb-1.5" />
                                    </div>
                                </div>

                                {/* Stats grid */}
                                <div className="space-y-3 flex-grow relative z-10">
                                    <StatPill icon={DollarSign} label="Total Paid Out" value={`$${counter2.count}M+`} change="+18%" color="text-emerald-400" />
                                    <StatPill icon={ShieldCheck} label="Firms Verified" value={`${counter3.count}+`} change="+6" color="text-blue-400" />
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* ━━━ Card 3: Live Pricing Feed (Spans 5 cols on second row) ━━━ */}
                    <div className="lg:col-span-5 min-h-[340px]">
                        <TiltCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.04)">
                            <div className="p-7 sm:p-9 flex flex-col h-full relative">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 rounded-bl-[80px] pointer-events-none blur-3xl" />

                                <div className="flex items-center justify-between mb-7 relative z-10">
                                    <h4 className="text-white text-xl font-bold flex items-center tracking-tight">
                                        <Clock className="w-5 h-5 mr-3 text-primary" /> Live Pricing Feed
                                    </h4>
                                    <span className="flex items-center space-x-1.5 bg-red-500/15 text-red-400 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider border border-red-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE
                                    </span>
                                </div>

                                <div className="space-y-3 flex-grow relative z-10">
                                    {/* FTMO */}
                                    <div className="flex items-center justify-between bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/item cursor-default">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-11 h-11 bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-xl border border-white/[0.08] flex items-center justify-center font-black text-white text-[14px] tracking-wider group-hover/item:scale-110 transition-transform">
                                                FT
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-[14px]">FTMO</div>
                                                <div className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5 font-medium">100k Standard</div>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center space-x-4">
                                            <Sparkline data={[540, 535, 538, 540, 542, 540, 540]} color="#10b981" />
                                            <div>
                                                <div className="text-white font-bold text-[16px]">$540</div>
                                                <div className="text-primary text-[9px] uppercase font-bold mt-1 tracking-[0.15em]">Top Tier</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FundedNext */}
                                    <div className="flex items-center justify-between bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/item cursor-default relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/[0.03] to-transparent pointer-events-none" />
                                        <div className="flex items-center space-x-4 relative z-10">
                                            <div className="w-11 h-11 bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-xl border border-white/[0.08] flex items-center justify-center font-black text-white text-[14px] tracking-wider group-hover/item:scale-110 transition-transform">
                                                FN
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-[14px]">FundedNext</div>
                                                <div className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5 font-medium">100k Stellar</div>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center space-x-4 relative z-10">
                                            <Sparkline data={[515, 519, 517, 520, 518, 519, 519]} color="#f59e0b" />
                                            <div>
                                                <div className="text-white font-bold text-[16px]">$519</div>
                                                <div className="text-brand-gold text-[9px] uppercase font-bold mt-1 tracking-[0.15em]">Trending</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* The5ers */}
                                    <div className="flex items-center justify-between bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/item cursor-default">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-11 h-11 bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-xl border border-white/[0.08] flex items-center justify-center font-black text-white text-[14px] tracking-wider group-hover/item:scale-110 transition-transform">
                                                T5
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-[14px]">The5%ers</div>
                                                <div className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5 font-medium">100k Hyper Growth</div>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center space-x-4">
                                            <Sparkline data={[450, 460, 455, 462, 458, 460, 460]} color="#8b5cf6" />
                                            <div>
                                                <div className="text-white font-bold text-[16px]">$460</div>
                                                <div className="text-purple-400 text-[9px] uppercase font-bold mt-1 tracking-[0.15em]">Popular</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* ━━━ Card 4: Verified Trust Metrics (Spans 7 cols on second row) ━━━ */}
                    <div className="lg:col-span-7 min-h-[340px]">
                        <TiltCard className="h-full" spotlightColor="rgba(16, 185, 129, 0.06)">
                            <div className="p-7 sm:p-9 flex flex-col h-full relative overflow-hidden">
                                <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-xl font-bold tracking-tight">Verified Trust Metrics</h4>
                                            <p className="text-white/30 text-[11px] mt-0.5">Updated every 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-white/60 text-[10px] font-bold tracking-wide">ALL CHECKS PASSING</span>
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow relative z-10">
                                    {/* Reliability */}
                                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
                                        <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Reliability</div>
                                        <div className="flex items-end justify-between mb-3">
                                            <span className="text-white text-3xl font-bold">98.5%</span>
                                            <Sparkline data={[95, 96, 97, 96, 98, 97, 98, 98, 99, 98]} color="#10b981" />
                                        </div>
                                        <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-emerald-400 h-full rounded-full w-[98.5%] shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                                        </div>
                                    </div>

                                    {/* Payout Speed */}
                                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
                                        <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Avg. Payout Time</div>
                                        <div className="flex items-end justify-between mb-3">
                                            <span className="text-white text-3xl font-bold">1.2<span className="text-lg text-white/40 ml-1">days</span></span>
                                            <Sparkline data={[3, 2.5, 2, 1.8, 1.5, 1.3, 1.2, 1.2, 1.1, 1.2]} color="#3b82f6" />
                                        </div>
                                        <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full w-[92%] shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                                        </div>
                                    </div>

                                    {/* User Satisfaction */}
                                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
                                        <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">User Satisfaction</div>
                                        <div className="flex items-end justify-between mb-3">
                                            <span className="text-white text-3xl font-bold">4.9<span className="text-lg text-white/40 ml-1">/5.0</span></span>
                                            <Sparkline data={[4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.9, 4.9, 4.9, 4.9]} color="#f59e0b" />
                                        </div>
                                        <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-gradient-to-r from-brand-gold to-yellow-400 h-full rounded-full w-[98%] shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                </div >
            </div >

            {/* Animation Keyframes */}
            < style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dash { to { stroke-dashoffset: -80; } }
                @keyframes dashRev { to { stroke-dashoffset: 80; } }
            `}} />
        </section >
    );
};
