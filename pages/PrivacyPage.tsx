import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4 mb-12 border-b border-white/10 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                        <ShieldCheck className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
                        <p className="text-text-muted">Last updated: March 1, 2026</p>
                    </div>
                </div>

                <div className="space-y-12 text-text-muted leading-relaxed">
                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            At Capital Match, we prioritize your privacy. The information we collect helps us provide a hyper-personalized
                            experience, particularly when using our Match AI engine. We collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Account Information:</strong> Name, email address, and authentication credentials when you register.</li>
                            <li><strong>Usage Data:</strong> How you interact with our platform, firms you compare, and your quiz preferences.</li>
                            <li><strong>Verification Data:</strong> If you submit payout proofs for our verified leaderboards, we collect the submitted documentation (which is redacted for sensitive personal info).</li>
                        </ul>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the collected information for various core platform purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and maintain the Capital Match ecosystem.</li>
                            <li>To operate our AI Match engine, processing your inputs to output accurate prop firm recommendations.</li>
                            <li>To maintain the integrity of our Verified Reviews and Competition leaderboards.</li>
                            <li>To send critical platform updates and notifications.</li>
                        </ul>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security and Third Parties</h2>
                        <p className="mb-4">
                            We implement cutting-edge security measures to maintain the safety of your personal information. Your data is
                            encrypted at rest and in transit. We do not sell, trade, or otherwise transfer your Personally Identifiable Information
                            (PII) to outside parties without explicit consent, except to trusted third parties who assist us in operating our
                            website (such as our database providers or analytics partners).
                        </p>
                        <p>
                            When our Match AI processes your data, it uses secure API endpoints (e.g., Groq/LLaMA 3) ensuring strict data isolation
                            and ephemerality during analysis.
                        </p>
                    </section>

                    <section className="bg-dark-light/20 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Your Data Rights</h2>
                        <p>
                            You have the right to access, update, or delete your personal information at any time. You can manage your account
                            data directly from your user dashboard. For complete data deletion requests, please reach out to our support team.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
