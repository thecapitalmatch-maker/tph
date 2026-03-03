import React from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
            {/* Background Blobs for Premium Aesthetic */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                        Let's Connect
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6 drop-shadow-sm">Contact Us</h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        Have questions about finding the right prop firm? Our support team and community are here to help you navigate the proprietary trading landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-dark-light/40 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                        <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                        <p className="text-text-muted mb-8 text-sm">We'll get back to you as soon as possible.</p>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group/input">
                                    <label htmlFor="name" className="block text-sm font-semibold text-text-muted mb-2 group-focus-within/input:text-primary transition-colors">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group/input">
                                    <label htmlFor="email" className="block text-sm font-semibold text-text-muted mb-2 group-focus-within/input:text-primary transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="group/input">
                                <label htmlFor="message" className="block text-sm font-semibold text-text-muted mb-2 group-focus-within/input:text-primary transition-colors">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-inner"
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full group btn-primary text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(10,193,201,0.2)] hover:shadow-[0_0_30px_rgba(10,193,201,0.5)] transition-all flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Alternative Contact Info */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col justify-center h-full">
                        <div className="bg-dark-light/20 border border-white/5 rounded-2xl p-6 hover:bg-dark-light/40 transition-colors group">
                            <div className="flex items-start space-x-5">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Support</h3>
                                    <p className="text-text-muted text-sm mb-3">Reach out directly for account or technical issues.</p>
                                    <a href="mailto:support@thecapitalmatch.com" className="text-primary font-medium hover:text-white transition-colors flex items-center">
                                        support@thecapitalmatch.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="https://discord.gg/6MknbESVS6" target="_blank" rel="noopener noreferrer" className="block">
                            <div className="bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl p-6 hover:bg-[#5865F2]/20 transition-colors group">
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/20 flex items-center justify-center flex-shrink-0 border border-[#5865F2]/30 group-hover:scale-110 transition-transform duration-300">
                                        <MessageSquare className="w-7 h-7 text-[#5865F2]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Community Discord</h3>
                                        <p className="text-text-muted text-sm mb-3">Join thousands of traders to discuss firms instantly.</p>
                                        <span className="text-[#5865F2] font-medium group-hover:text-white transition-colors flex items-center">
                                            Join Server <ExternalLink className="w-3 h-3 ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="https://x.com/NovaXTrade" target="_blank" rel="noopener noreferrer" className="block">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.036z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">X (Twitter)</h3>
                                        <p className="text-text-muted text-sm mb-3">Follow us for updates, news, and flash discounts.</p>
                                        <span className="text-white/80 font-medium group-hover:text-white transition-colors flex items-center">
                                            @NovaXTrade <ExternalLink className="w-3 h-3 ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
