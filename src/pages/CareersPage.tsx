import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import { ContactModal, ScheduleModal } from '../components/Modals';
import { Footer, CTASection } from '../components/Footer';
import { Heart, Users, Zap, Coffee, Globe, Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="Careers - Join Qualiin"
                description="Join our team of regulatory experts and innovators. Build the future of MedTech compliance."
            />
            <Navbar openContactModal={openContactModal} />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-32 overflow-hidden bg-primary-600">
                <div className="absolute inset-0 bg-gradient-to-r from-[#450793] via-[#361274] to-[#2E0249] opacity-80" />
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                    alt="Team collaboration"
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 mix-blend-overlay"
                />

                <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[#FF7F50] text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                        We are hiring
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                        Do your best work <br /> at <span className="text-[#FF7F50]">Qualiin</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                        Join a team dedicated to simplifying regulatory complexities and accelerating medical innovation.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-[#361274]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Qualiin?</h2>
                        <p className="text-[#A7A3AF] text-lg">More than just a job—it's a mission.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Heart className="w-8 h-8 text-[#FF7F50]" />, title: "Impact Driven", desc: "Every project we accelerate helps bring life-saving medical devices to patients faster." },
                            { icon: <Zap className="w-8 h-8 text-[#8DE5A2]" />, title: "Innovation First", desc: "We challenge traditional consulting models with technology and smarter processes." },
                            { icon: <Users className="w-8 h-8 text-[#FC31FF]" />, title: "Collaborative Culture", desc: "Hierarchy doesn't matter here. Ideas do. We grow together." }
                        ].map((perk, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-default group">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {perk.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 px-6 bg-primary-500">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Positions</h2>

                    <div className="space-y-4">
                        {[
                            { title: "Senior Regulatory Affairs Specialist", dept: "Compliance", loc: "Remote / Hybrid", type: "Full-time" },
                            { title: "QMS Consultant (ISO 13485)", dept: "Quality", loc: "Remote", type: "Contract" },
                            { title: "Clinical Evaluation Writer", dept: "Evidence", loc: "Remote", type: "Full-time" },
                            { title: "Business Development Manager", dept: "Sales", loc: "New York / Hybrid", type: "Full-time" }
                        ].map((job, idx) => (
                            <div key={idx} className="bg-primary-600 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#FF7F50]/50 transition-colors group cursor-pointer" onClick={() => window.location.href = `mailto:info@qualiin.in?subject=Application for ${job.title}`}>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF7F50] transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><Globe size={14} /> {job.loc}</span>
                                        <span className="flex items-center gap-1"><Coffee size={14} /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="bg-white/10 px-6 py-2 rounded-full font-semibold hover:bg-[#FF7F50] hover:text-black transition-all whitespace-nowrap">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-6">Don't see a role that fits? We're always looking for talent.</p>
                        <a href="mailto:info@qualiin.in?subject=General Application" className="text-[#FF7F50] font-bold hover:gap-2 gap-1 inline-flex items-center transition-all">
                            Send us your resume <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <CTASection openScheduleModal={openScheduleModal} />
            <Footer openContactModal={openContactModal} />

            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
            <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
        </div>
    );
}
