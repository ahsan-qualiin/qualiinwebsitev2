import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const ZOHO_FORM_URL = "https://forms.zohopublic.in/ahsanqua1/form/ContactUs/formperma/TzzwpFLB-U53Pw9qXy5z_RMYFIEaGdOTtqUOAAIBGXY";

const ComingSoonPage = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="min-h-screen bg-[#361274] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden flex flex-col">
            <SEO
                title="Coming Soon - Qualiin"
                description="We are working hard to bring you this page. Stay tuned for updates!"
            />
            <Navbar openContactModal={openContactModal} />

            <main className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        <span className="text-[#FF7F50]">Coming</span> Soon
                    </h1>
                    <p className="text-[#A7A3AF] text-lg md:text-xl max-w-lg mx-auto mb-8">
                        We are working hard to bring you this page. Stay tuned for updates!
                    </p>
                    <button
                        onClick={openContactModal}
                        className="bg-[#4ADE80] text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/20"
                    >
                        Contact Us For Info
                    </button>
                </div>
            </main>

            <Footer openContactModal={openContactModal} />

            {/* ================= CONTACT MODAL REUSED ================= */}
            {isContactModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={closeContactModal}
                >
                    <div
                        className="relative bg-[#EDEAF2] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeContactModal}
                            className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 transition"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        {/* Zoho Form Iframe */}
                        <iframe
                            src={ZOHO_FORM_URL}
                            aria-label="Contact Us"
                            frameBorder={0}
                            style={{ height: '500px', width: '99%', border: 'none' }}
                            title="Contact Us Form"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComingSoonPage;
