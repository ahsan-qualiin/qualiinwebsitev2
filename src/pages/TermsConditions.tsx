import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import { ContactModal } from '../components/Modals';
import { Footer } from '../components/Footer';

export default function TermsConditions() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO title="Terms & Conditions - Qualiin" description="Terms and Conditions for Qualiin services." />
            <Navbar openContactModal={openContactModal} />

            <section className="pt-32 pb-20 px-6 max-w-[800px] mx-auto">
                <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
                <p className="text-gray-400 mb-8">Last Updated: January 2024</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>Welcome to Qualiin. By accessing our website and services, you agree to be bound by these restrictions and terms of use.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">1. Services</h2>
                    <p>Qualiin provides regulatory consulting and software solutions for medical device manufacturers. All services are subject to a separate definitive agreement.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">2. Intellectual Property</h2>
                    <p>The content, trademarks, and data on this website are the property of Qualiin and protected by applicable intellectual property laws.</p>

                    <h2 className="text-2xl font-bold text-white mb-2">3. Limitation of Liability</h2>
                    <p>Qualiin shall not be held liable for any direct, indirect, or consequential damages arising out of the use or inability to use our services or website.</p>
                </div>
            </section>

            <Footer openContactModal={openContactModal} />
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
    );
}
