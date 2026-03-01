import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Have questions about finding the right prop firm? Our support team is here to help you navigate the proprietary trading landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-dark-light/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full btn-primary text-white font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(10,193,201,0.4)] transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                                <p className="text-text-muted mb-2">Our team typically responds within 24 hours.</p>
                                <a href="mailto:support@thecapitalmatch.com" className="text-primary hover:text-white transition-colors">support@thecapitalmatch.com</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                                <MessageSquare className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Community Discord</h3>
                                <p className="text-text-muted mb-2">Join thousands of traders to discuss firms and ask questions instantly.</p>
                                <a href="#" className="text-secondary hover:text-white transition-colors">Join our Discord server</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                                <p className="text-text-muted mb-2">Capital Match HQ</p>
                                <p className="text-text-muted">Global Operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
