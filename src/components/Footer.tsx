import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Logo = () => (
    <img
        src="https://iili.io/fNsZDTN.md.webp"
        alt="Qualiin"
        className="w-[180px] h-auto"
    />
);

export const CTASection = ({ openScheduleModal }: { openScheduleModal?: () => void }) => {
    return (
        <section
            className="w-full px-6 md:px-12 lg:px-[120px] py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
            style={{
                background: 'linear-gradient(117deg, rgba(255, 120, 56, 0.95) -11.68%, rgba(69, 7, 147, 0.95) 50.21%, rgba(141, 229, 162, 0.95) 136.97%), #450793'
            }}
        >
            <h2 className="text-white text-3xl md:text-[39px] font-medium leading-[180%] flex-1 text-center md:text-left">
                End-to-End
                <br />
                Regulatory Solutions
            </h2>

            <Button onClick={openScheduleModal} className="bg-secondary-500 text-secondary-900 rounded-xl px-5 py-1 h-auto md:h-[47px] text-xl md:text-[32px] font-normal hover:bg-secondary-500/90 w-full md:w-auto mt-4 md:mt-0">
                Schedule a call
            </Button>
        </section>
    );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Footer = ({ openContactModal }: { openContactModal?: () => void }) => {
    void openContactModal; // Suppress unused variable error
    return (
        <footer className="w-full bg-primary-600 px-6 md:px-12 lg:px-[120px] py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-[109px]">
                {/* Left Column - Logo and Info */}
                <div className="flex-1 flex flex-col items-start gap-5">
                    <Logo />

                    <div className="flex flex-col items-start gap-20 w-full">
                        <div className="flex flex-col items-start gap-[22px] w-full">
                            <p className="text-white font-jakarta text-base font-medium leading-[150%] tracking-[-0.32px] uppercase">
                                GUIDED BY QUALITY
                                <br />
                                DRIVEN BY INNOVATION
                            </p>

                            <div className="flex items-center gap-5">
                                {/* Facebook */}
                                <a href="#" className="w-[34px] h-[34px] bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M9.74652 0C5.47452 0 2 3.5215 2 7.8C2 12.0785 5.47452 15.6 9.74652 15.6C14.0186 15.6 17.4931 12.0785 17.4931 7.8C17.4931 3.5215 14.0186 0 9.74652 0ZM13.7233 5.6095H11.1998C10.9007 5.6095 10.5685 6.0033 10.5685 6.5265V8.35H13.725L13.2476 10.9505H10.5685V18.7573H7.5903V10.9505H4.88842V8.35H7.5903V6.8205C7.5903 4.626 9.11165 2.8428 11.1998 2.8428H13.7233V5.6095Z" fill="white" />
                                    </svg>
                                </a>

                                {/* Twitter/X */}
                                <a href="#" className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <svg width="18" height="17" viewBox="0 0 19 18" fill="none">
                                        <path d="M0.0475432 0L7.15873 9.53717L0.00262451 17.2891H1.61408L7.87743 10.5002L12.9392 17.2891H18.4193L10.9094 7.21694L17.5686 0H15.96L10.1907 6.25111L5.53043 0H0.0475432ZM2.417 1.18827H4.93526L16.0526 16.098H13.5344L2.417 1.18827Z" fill="#450793" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a href="#" className="w-[34px] h-[34px] bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M14.9185 6.8C14.9185 8.1924 14.3657 9.5277 13.3819 10.5123C12.398 11.4969 11.0635 12.05 9.6721 12.05C8.28069 12.05 6.94627 11.4969 5.96241 10.5123C4.97855 9.5277 4.4258 8.1924 4.4258 6.8C4.4258 6.5008 4.45719 6.2085 4.51146 5.925H2.67697V12.9198C2.67697 13.4063 3.07052 13.8 3.55657 13.8H15.7894C16.0224 13.7995 16.2457 13.7066 16.4102 13.5416C16.5748 13.3765 16.6673 13.1529 16.6673 12.9198V5.925H14.8328C14.887 6.2085 14.9185 6.5008 14.9185 6.8ZM9.6721 10.3C10.1315 10.2999 10.5865 10.2092 11.0109 10.0332C11.4353 9.85713 11.8209 9.59921 12.1456 9.274C12.4704 8.94879 12.728 8.56281 12.9037 8.13802C13.0794 7.71323 13.1698 7.25795 13.1697 6.79828C13.1696 6.33852 13.079 5.88333 12.9031 5.45863C12.7271 5.0339 12.4694 4.64801 12.1444 4.32303C11.8195 3.99804 11.4337 3.74024 11.0092 3.56444C10.5847 3.38864 10.1298 3.29813 9.67042 3.29828C8.74253 3.29853 7.85284 3.66746 7.19688 4.32425C6.54092 4.98104 6.17255 5.87147 6.17281 6.8C6.17307 7.72853 6.54183 8.61887 7.19812 9.27519C7.85441 9.93151 8.74433 10.2002 9.6721 10.3ZM13.8692 3.125H15.966C16.1053 3.125 16.2389 3.06973 16.3376 2.97134C16.4363 2.87295 16.4919 2.73936 16.4924 2.6V0.501751C16.4924 0.361957 16.4369 0.228112 16.3382 0.129263C16.2395 0.0304133 16.1056 -0.0250244 15.966 -0.0250244H13.8692C13.7296 -0.0250244 13.5957 0.0304133 13.497 0.129263C13.3983 0.228112 13.3428 0.361957 13.3428 0.501751V2.6C13.3446 2.8888 13.5807 3.125 13.8692 3.125Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <p className="text-white font-jakarta text-base font-semibold leading-[150%] tracking-[-0.32px]">
                            ©2026 Qualiin. All rights reserved
                        </p>
                    </div>
                </div>

                {/* Right Column - Links */}
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-[60px] w-full lg:w-auto">
                    {/* About */}
                    <div className="w-[157px] flex flex-col items-start gap-3">
                        <h3 className="text-primary-50 font-medium text-xl leading-[120%] px-4">About</h3>
                        <Link to="/our-story" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            About Us
                        </Link>
                        <Link to="/about" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Our team
                        </Link>
                        <Link to="/careers" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Careers
                        </Link>
                        <Link to="/contact" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Contact us
                        </Link>
                    </div>

                    {/* Resources */}
                    <div className="w-[182px] flex flex-col items-end gap-3">
                        <h3 className="text-primary-50 font-medium text-xl leading-[120%] px-4 self-stretch text-left">Resources</h3>
                        <Link to="/resources" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Whitepapers
                        </Link>
                        <Link to="/resources" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Blog
                        </Link>
                        <Link to="/resources" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            News & Events
                        </Link>
                        <Link to="/industries" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left">
                            Industries
                        </Link>
                    </div>

                    {/* Services */}
                    <div className="w-[179px] flex flex-col items-end gap-3">
                        <h3 className="text-primary-50 font-medium text-xl leading-[120%] px-4 self-stretch text-left">Services</h3>
                        <Link to="/services" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left underline">
                            Regulatory submissions
                        </Link>
                        <Link to="/services" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left underline">
                            ISO Implementation
                        </Link>
                        <Link to="/services" className="text-text-primary font-pt text-[17px] font-normal leading-[120%] px-4 py-1 hover:text-white transition-colors block w-full text-left underline">
                            CE Marking
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center justify-between mt-16 pt-6">
                <Link to="/privacy-policy" className="text-white font-jakarta text-base font-semibold leading-[150%] tracking-[-0.32px] hover:underline">
                    Privacy & Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-white font-jakarta text-base font-semibold leading-[150%] tracking-[-0.32px] hover:underline">
                    Terms & Conditions
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
