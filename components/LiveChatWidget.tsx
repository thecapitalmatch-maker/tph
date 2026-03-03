import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/6MknbESVS6';
const X_URL = 'https://x.com/NovaXTrade';

export const LiveChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Popup Card */}
            <div
                className={`fixed bottom-24 right-6 z-[9999] w-[320px] transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-5 pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-white font-bold text-[15px] tracking-tight">Get in Touch</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <X className="w-3.5 h-3.5 text-white/50" />
                            </button>
                        </div>
                        <p className="text-white/40 text-[12px] leading-relaxed">
                            Connect with our community or send us a message.
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="p-4 space-y-2.5">
                        {/* Discord */}
                        <a
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#5865F2]/[0.08] border border-[#5865F2]/20 hover:bg-[#5865F2]/[0.15] hover:border-[#5865F2]/40 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <div className="text-white font-semibold text-[13px]">Join our Discord</div>
                                <div className="text-white/35 text-[11px] mt-0.5">Chat with the community</div>
                            </div>
                            <svg className="w-4 h-4 text-white/20 ml-auto flex-shrink-0 group-hover:text-[#5865F2] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a
                            href={X_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <div className="text-white font-semibold text-[13px]">Follow us on X</div>
                                <div className="text-white/35 text-[11px] mt-0.5">Latest updates & news</div>
                            </div>
                            <svg className="w-4 h-4 text-white/20 ml-auto flex-shrink-0 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="px-4 pb-4 pt-1">
                        <div className="text-center text-white/20 text-[10px]">
                            We typically respond within a few hours
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen
                        ? 'bg-white/10 border border-white/20 backdrop-blur-xl rotate-0'
                        : 'bg-gradient-to-br from-primary to-emerald-500 border border-primary/50'
                    }`}
                aria-label="Open live chat"
            >
                {isOpen ? (
                    <X className="w-5 h-5 text-white" />
                ) : (
                    <>
                        <MessageCircle className="w-6 h-6 text-white" />
                        {/* Ping Animation */}
                        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#020202] animate-pulse" />
                    </>
                )}
            </button>

            {/* Backdrop on mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[9998] sm:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default LiveChatWidget;
