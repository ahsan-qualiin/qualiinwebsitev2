import { useState, useEffect } from 'react';
import {
  Rocket,
  ShieldCheck,
  FileText,
  Package,
  Phone,
  MessageSquare,
  Menu,
  X,
  CheckCircle,
  Search,
  Handshake,
  Lightbulb,
  ArrowRight,
  Target
} from 'lucide-react';

interface HoverContent {
  title: string;
  items: string[];
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  hoverContent: HoverContent;
}

interface ValueItemProps {
  customIcon: React.ReactNode;
  title: string;
  desc: string;
}

const ZOHO_FORM_URL = "https://forms.zohopublic.in/ahsanqua1/form/ContactUs/formperma/TzzwpFLB-U53Pw9qXy5z_RMYFIEaGdOTtqUOAAIBGXY";
const ZOHO_CALENDAR_URL = "https://calendar.zoho.in/eventreqForm/zz08021230e82267623a00a6472505c8c0829eb5861c55c25a9798dd489230ec0908778cdb4ea00b57736129c602b634bc732a6846?theme=8&l=en&tz=Asia/Kolkata";

/*
 * Color Palette (extracted from design):
 * --bg-deep: #361274 (deep brand violet - main background)
 * --brand-purple: #451b92 (mid purple - panels, overlays)
 * --card-fill: #3B1B6F (card fill purple)
 * --accent-orange: #FF7F50 (coral/orange accent)
 * --cta-green: #4ADE80 (CTA green)
 * --fab-red: #C14438 (chat/FAB red)
 * --panel-white: #EDEAF2 (off-white panel background)
 * --muted: #A7A3AF (muted/secondary text gray)
 * --text: #FFFFFF (main text & icons)
 * --pattern-overlay: #6E539E (lighter diamonds/chevrons)
 */

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);

  return (
    <div className="min-h-screen bg-[#361274] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#371376]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tighter text-white">Qualiin</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
            {['About Us', 'Services', 'Resources', 'Careers'].map((item) => (
              <a key={item} href="#" className="hover:text-[#FF7F50] transition-colors duration-200">{item}</a>
            ))}
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
          {['About Us', 'Services', 'Resources', 'Careers'].map((item) => (
            <a key={item} href="#" className="block text-2xl font-bold border-b border-white/10 pb-4">{item}</a>
          ))}
          <button
            onClick={() => { openContactModal(); setIsMobileMenuOpen(false); }}
            className="bg-[#4ADE80] text-black px-6 py-3 rounded-full font-bold w-full text-lg"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <header className="relative pt-44 pb-32 px-6 text-center bg-gradient-to-b from-[#451b92] via-[#361274] to-[#361274]">
        {/* Subtle radial glow at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6E539E]/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Decorative SVG Lines */}
        <div className="absolute top-[30%] left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-full stroke-white/20 fill-none" preserveAspectRatio="none">
            <path d="M0,100 C320,200, 420,50, 1440,100" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
            GUIDED BY <span className="text-[#FF7F50]">QUALITY</span><br />
            DRIVEN BY <span className="text-[#FF7F50]">INNOVATION</span>
          </h1>

          <p className="text-[#A7A3AF] max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-light">
            Helping companies to focus on innovation and quality, <br className="hidden md:block"/>
            by helping them navigate on A to Z regulations.
          </p>

          <button
            onClick={openContactModal}
            className="bg-[#4ADE80] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-green-400 transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(74,222,128,0.3)]"
          >
            <Phone size={18} className="fill-black" />
            Contact Us
          </button>
        </div>
      </header>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-[#451b92] px-6 py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-[#A7A3AF]">Expert regulatory compliance and quality assurance solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Launchpads */}
            <ServiceCard
              icon={<Rocket size={40} />}
              title="Qualiin Launchpads"
              hoverContent={{
                title: "Fast-track your global market entry",
                items: ["India CDSCO (Registration & Import License)", "US FDA 510(k) Accelerator", "CE Mark Navigator (MDR/IVDR)", "Global Market Access Bundle"]
              }}
            />

            {/* Card 2: Compliance */}
            <ServiceCard
              icon={<ShieldCheck size={40} />}
              title="Qualiin Compliance"
              hoverContent={{
                title: "End-to-End Compliance Solutions",
                items: ["QMS Implementation (ISO 13485)", "Audit Preparation & Support", "Post-Market Surveillance", "Risk Management (ISO 14971)"]
              }}
            />

            {/* Card 3: Evidence */}
            <ServiceCard
              icon={<FileText size={40} />}
              title="Qualiin Evidence"
              hoverContent={{
                title: "Clinical & Performance Evaluation",
                items: ["Clinical Evaluation Reports (CER)", "Performance Evaluation Plans", "Literature Reviews", "Clinical Investigation Support"]
              }}
            />

            {/* Card 4: Build */}
            <ServiceCard
              icon={<Package size={40} />}
              title="Qualiin Build"
              hoverContent={{
                title: "Manufacturing & Facility Setup",
                items: ["Cleanroom Design & Validation", "Facility Layout Planning", "Equipment Qualification (IQ/OQ/PQ)", "Process Validation"]
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-[#361274] py-24 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E539E] opacity-10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-[#A7A3AF] mb-20 max-w-2xl mx-auto">Expert regulatory compliance and quality assurance solutions tailored to your needs</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <ValueItem
              customIcon={
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-[#FF7F50] rounded-full animate-spin-slow"></div>
                  <Target size={32} className="text-white" />
                </div>
              }
              title="Precision"
              desc="Meticulous attention to regulatory details and documentation"
            />
            <ValueItem
              customIcon={<div className="w-24 h-24 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"><Search size={32} /></div>}
              title="Transparency"
              desc="Clear communication and honest guidance throughout the process"
            />
            <ValueItem
              customIcon={<div className="w-24 h-24 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"><Handshake size={32} /></div>}
              title="Partnership"
              desc="Your success is our success—we work as an extension of your team"
            />
            <ValueItem
              customIcon={<div className="w-24 h-24 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"><Lightbulb size={32} /></div>}
              title="Innovation"
              desc="Staying ahead of regulatory changes and industry trends"
            />
          </div>
        </div>
      </section>

      {/* ================= END-TO-END SOLUTIONS ================= */}
      <section className="bg-[#2E0249] px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[420px]">
              <div className="row-span-2 rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Meeting" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="absolute inset-0 bg-[#361274]/50 mix-blend-overlay"></div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1581093458791-9f302e6d8359?auto=format&fit=crop&w=400&q=80" alt="Lab" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="absolute inset-0 bg-[#361274]/50 mix-blend-overlay"></div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" alt="Work" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="absolute inset-0 bg-[#361274]/50 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="pl-0 lg:pl-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-End Regulatory Solutions</h2>
              <p className="text-[#A7A3AF] mb-10 leading-relaxed text-lg">
                From regulatory submissions to facility setup, we provide comprehensive solutions that enable companies to succeed in global markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {[
                  "Regulatory Submissions", "ISO Implementation",
                  "CE Marking", "Facility Setup",
                  "Cleanroom Design", "Quality Assurance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#FF7F50] p-1 rounded-full shrink-0">
                      <CheckCircle size={12} className="text-white fill-[#FF7F50]" />
                    </div>
                    <span className="text-base font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Banner */}
          <div className="relative w-full h-auto min-h-[180px] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D95540] to-[#4D3C92]"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white">End-to-End</h3>
              <h3 className="text-3xl font-bold text-white/90">Regulatory Solutions</h3>
            </div>
            <button
              onClick={openScheduleModal}
              className="relative z-10 mt-8 md:mt-0 bg-[#4ade80] text-black px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-400 hover:scale-105 transition-all text-lg"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#451A93] pt-20 pb-8 px-6 mt-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-white">Qualiin</h3>
            <p className="text-sm text-gray-500">Guided by quality Driven by Innovation</p>
            <div className="flex gap-4">
              {['f', 't', 'in'].map((social) => (
                <div key={social} className="w-10 h-10 bg-white hover:bg-orange-400 transition-colors rounded-full flex items-center justify-center text-[#451A93] font-bold cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h4 className="font-bold mb-6 text-lg">About</h4>
            <ul className="space-y-4 text-sm text-[#A7A3AF]">
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Our team</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Careers</a></li>
              <li><button onClick={openContactModal} className="hover:text-[#FF7F50] transition-colors">Contact us</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-[#A7A3AF]">
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Qualiin Launchpads</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Qualiin Compliance</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Qualiin Evidence</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Qualiin Build</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-sm text-[#A7A3AF]">
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Whitepapers</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-[#FF7F50] transition-colors">Industries</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-gray-500 pt-8 border-t border-white/5">
          <p>&copy;2025 Qualiin. All rights reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Condition</a>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING ACTION BUTTON ================= */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={openContactModal}
          className="bg-[#C14438] p-4 rounded-full shadow-[0_8px_30px_rgba(193,68,56,0.5)] hover:bg-[#a63a30] hover:scale-110 transition-all duration-300"
        >
          <MessageSquare size={28} className="text-white fill-white" />
        </button>
      </div>

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

// --- SUB-COMPONENTS ---

// Reusable Service Card with Hover Effect
const ServiceCard = ({ icon, title, hoverContent }: ServiceCardProps) => {
  return (
    <div className="group relative h-[340px] w-full perspective cursor-pointer">
      <div className="relative w-full h-full duration-700 preserve-3d group-hover:my-rotate-y-180 transition-all ease-out">

        {/* Front Side */}
        <div className="absolute inset-0 bg-[#3B1B6F] rounded-3xl p-8 flex flex-col justify-end overflow-hidden shadow-2xl border border-white/5">
          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(135deg, #6E539E 25%, transparent 25%), linear-gradient(225deg, #6E539E 25%, transparent 25%), linear-gradient(45deg, #6E539E 25%, transparent 25%), linear-gradient(315deg, #6E539E 25%, transparent 25%)`,
              backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E0249] to-transparent opacity-80"></div>

          <div className="relative z-10 mb-4 text-white group-hover:text-[#FF7F50] transition-colors">
            {icon}
          </div>
          <h3 className="relative z-10 text-lg font-bold mb-1 text-[#FF7F50]">Qualiin</h3>
          <h3 className="relative z-10 text-3xl font-bold">{title.replace('Qualiin ', '')}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#EDEAF2] rounded-3xl p-8 flex flex-col text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl backface-hidden my-rotate-y-180 z-20">
          <h4 className="text-[#361274] font-bold text-lg mb-6 leading-tight">
            {hoverContent.title}
          </h4>
          <ul className="space-y-3 mb-auto">
            {hoverContent.items.map((item, idx) => (
              <li key={idx} className="text-[#5a5a5a] text-sm flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-[#FF7F50] rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#" className="text-[#FF7F50] text-sm font-bold mt-4 flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight size={14}/>
          </a>
        </div>
      </div>
    </div>
  );
};

const ValueItem = ({ customIcon, title, desc }: ValueItemProps) => (
  <div className="flex flex-col items-center text-center group">
    <div className="transform group-hover:-translate-y-2 transition duration-500 ease-out">
      {customIcon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF7F50] transition-colors">{title}</h3>
    <p className="text-sm text-[#A7A3AF] leading-relaxed px-2 group-hover:text-gray-200 transition-colors">
      {desc}
    </p>
  </div>
);

export default LandingPage;
