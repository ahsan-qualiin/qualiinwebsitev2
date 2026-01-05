import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ZOHO_FORM_URL = "https://forms.zohopublic.in/ahsanqua1/form/ContactUs/formperma/TzzwpFLB-U53Pw9qXy5z_RMYFIEaGdOTtqUOAAIBGXY";
const ZOHO_CALENDAR_URL = "https://calendar.zoho.in/eventreqForm/zz08021230e82267623a00a6472505c8c0829eb5861c55c25a9798dd489230ec0908778cdb4ea00b57736129c602b634bc732a6846?theme=8&l=en&tz=Asia/Kolkata";

export type LayoutContextType = {
    openContactModal: () => void;
    openScheduleModal: () => void;
};

const Layout = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    const contextValue: LayoutContextType = {
        openContactModal,
        openScheduleModal
    };

    return (
        <div className="min-h-screen bg-[#361274] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden flex flex-col">
            <Navbar openContactModal={openContactModal} />

            <main className="flex-grow">
                <Outlet context={contextValue} />
            </main>

            <Footer openContactModal={openContactModal} />

            {/* ================= CONTACT MODAL ================= */}
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

            {/* ================= SCHEDULE CALL MODAL ================= */}
            {isScheduleModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={closeScheduleModal}
                >
                    <div
                        className="relative bg-[#EDEAF2] rounded-2xl shadow-2xl overflow-hidden"
                        style={{ width: '432px', height: '400px' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeScheduleModal}
                            className="absolute top-2 right-2 z-10 bg-white hover:bg-gray-100 rounded-full p-1.5 transition"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        {/* Zoho Calendar Iframe */}
                        <iframe
                            src={ZOHO_CALENDAR_URL}
                            title="Schedule appointment"
                            frameBorder={0}
                            scrolling="no"
                            className="w-full h-[350px] mt-[50px]"
                            style={{ border: '0px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
