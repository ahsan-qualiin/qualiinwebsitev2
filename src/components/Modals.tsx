import { X } from "lucide-react";

const ZOHO_FORM_URL = "https://forms.zohopublic.in/ahsanqua1/form/ContactUs/formperma/TzzwpFLB-U53Pw9qXy5z_RMYFIEaGdOTtqUOAAIBGXY";
const ZOHO_CALENDAR_URL = "https://calendar.zoho.in/eventreqForm/zz08021230e82267623a00a6472505c8c0829eb5861c55c25a9798dd489230ec0908778cdb4ea00b57736129c602b634bc732a6846?theme=8&l=en&tz=Asia/Kolkata";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-[#EDEAF2] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 transition"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                <iframe
                    src={ZOHO_FORM_URL}
                    aria-label="Contact Us"
                    frameBorder={0}
                    style={{ height: '500px', width: '99%', border: 'none' }}
                    title="Contact Us Form"
                />
            </div>
        </div>
    );
};

export const ScheduleModal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-[#EDEAF2] rounded-2xl shadow-2xl overflow-hidden"
                style={{ width: '432px', height: '400px' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-10 bg-white hover:bg-gray-100 rounded-full p-1.5 transition"
                >
                    <X size={20} className="text-gray-600" />
                </button>

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
    );
};
