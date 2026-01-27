import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import { ContactModal } from '../components/Modals';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Clock } from 'lucide-react';

const ZOHO_FORM_URL = "https://forms.zohopublic.in/ahsanqua1/form/ContactUs/formperma/TzzwpFLB-U53Pw9qXy5z_RMYFIEaGdOTtqUOAAIBGXY";

export default function ContactPage() {
    // Reusing modals for Navbar access
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="Contact Us - Qualiin"
                description="Get in touch with our regulatory experts. We are here to help you navigate medical device compliance."
            />
            <Navbar openContactModal={openContactModal} />

            <section className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Contact Info */}
                    <div>
                        <span className="text-[#FF7F50] font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Let's start a conversation.</h1>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Have questions about FDA submissions, CE marking, or CDSCO registration? Our team is ready to provide the answers you need.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-600 p-3 rounded-xl border border-white/10">
                                    <Mail className="w-6 h-6 text-[#FF7F50]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                                    <a href="mailto:info@qualiin.in" className="text-gray-400 hover:text-white transition-colors">info@qualiin.in</a>
                                    <p className="text-gray-500 text-sm mt-1">We usually respond within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-600 p-3 rounded-xl border border-white/10">
                                    <MapPin className="w-6 h-6 text-[#8DE5A2]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Office</h3>
                                    <p className="text-gray-400">Bangalore, India</p>
                                    <p className="text-gray-500 text-sm mt-1">Strategic Global Headquarters</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-600 p-3 rounded-xl border border-white/10">
                                    <Clock className="w-6 h-6 text-[#FC31FF]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                                    <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Embedded Form */}
                    <div className="bg-[#EDEAF2] rounded-3xl p-2 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7F50] via-[#FC31FF] to-[#8DE5A2]"></div>
                        <iframe
                            src={ZOHO_FORM_URL}
                            aria-label="Contact Us"
                            frameBorder={0}
                            style={{ height: '600px', width: '100%', border: 'none' }}
                            title="Contact Us Form"
                        />
                    </div>
                </div>
            </section>

            <Footer openContactModal={openContactModal} />

            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
    );
}
