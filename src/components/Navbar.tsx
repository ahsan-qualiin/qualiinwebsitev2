import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    openContactModal: () => void;
}

const Navbar = ({ openContactModal }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#371376]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
                <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="block">
                            <img src="https://iili.io/fNsZDTN.md.webp" alt="Qualiin" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
                        {/* 
               The original code mapped ['About Us', 'Services', 'Resources', 'Careers'] 
               to '#' hrefs. We map them to their respective routes now.
            */}
                        <Link to="/our-story" className="hover:text-[#FF7F50] transition-colors duration-200">Our Story</Link>
                        <Link to="/services" className="hover:text-[#FF7F50] transition-colors duration-200">Services</Link>
                        <Link to="/resources" className="hover:text-[#FF7F50] transition-colors duration-200">Resources</Link>
                        <Link to="/careers" className="hover:text-[#FF7F50] transition-colors duration-200">Careers</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={openContactModal}
                            className="bg-[#4ADE80] text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/20"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#371376] pt-24 px-6 space-y-6">
                    <Link to="/our-story" className="block text-2xl font-bold border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                    <Link to="/services" className="block text-2xl font-bold border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link to="/resources" className="block text-2xl font-bold border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
                    <Link to="/careers" className="block text-2xl font-bold border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                    <button
                        onClick={() => { openContactModal(); setIsMobileMenuOpen(false); }}
                        className="bg-[#4ADE80] text-black px-6 py-3 rounded-full font-bold w-full text-lg"
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
