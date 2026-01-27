import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import { ContactModal } from '../components/Modals';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO title="Privacy Policy - Qualiin" description="Privacy Policy for Qualiin services." />
            <Navbar openContactModal={openContactModal} />

            <section className="pt-32 pb-20 px-6 max-w-[800px] mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-8">Last Updated: January 2024</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>At Qualiin, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">1. Information We Collect</h2>
                    <p>We may collect personal identification information such as name, email address, phone number, and company name when you fill out forms on our site.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">2. How We Use Your Information</h2>
                    <p>We use the data collected to provide regulatory consulting services, improve our website, and communicate with you regarding your inquiries.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">3. Data Security</h2>
                    <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.</p>
                </div>
            </section>

            <Footer openContactModal={openContactModal} />
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
    );
}
