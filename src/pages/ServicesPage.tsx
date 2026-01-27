import { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import { ContactModal, ScheduleModal } from '../components/Modals';
import { Footer, CTASection } from '../components/Footer';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, FileText, Settings, Award } from 'lucide-react';

export default function ServicesPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="Our Services - Qualiin"
                description="Comprehensive regulatory, compliance, and quality assurance services for medical device manufacturers."
            />
            <Navbar openContactModal={openContactModal} />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-32 overflow-hidden bg-primary-600">
                <div className="absolute inset-0 bg-gradient-to-b from-[#450793] to-primary-500 opacity-50" />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Comprehensive <span className="text-[#FF7F50]">Regulatory Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From initial concept to global market access, we provide the expertise and infrastructure you need to succeed.
                    </p>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-20 px-6 max-w-[1200px] mx-auto space-y-32">
                {/* Service 1: Launchpads */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-primary-700/50 rounded-3xl p-8 border border-white/10">
                            {/* Abstract visual/icon representation */}
                            <div className="w-16 h-16 bg-[#8DE5A2]/20 rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-[#8DE5A2]" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-[#8DE5A2]">Launchpads</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Accelerate your entry into global markets with our specialized launchpad programs. We handle the complexities of local regulations so you can focus on product launch.
                            </p>
                            <ul className="space-y-4">
                                {['US FDA 510(k) Preparation', 'EU MDR/IVDR CE Marking', 'CDSCO India Registration', 'Global Market Strategy'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle className="w-5 h-5 text-[#8DE5A2] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-4xl font-bold leading-tight">Fast-track your <br />Global Market Entry</h3>
                        <p className="text-gray-400 text-lg">
                            Navigating international regulations can be a bottleneck. Our Launchpads are designed to streamline this process, cutting down approval times by up to 40%.
                        </p>
                    </div>
                </div>

                {/* Service 2: Compliance */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold leading-tight">Rock-solid <br />Quality Management</h3>
                        <p className="text-gray-400 text-lg">
                            Compliance isn't just a checkbox; it's the foundation of your business. We build robust QMS tailored to your specific device class and target markets.
                        </p>
                    </div>
                    <div className="bg-primary-700/50 rounded-3xl p-8 border border-white/10">
                        <div className="w-16 h-16 bg-[#FF7F50]/20 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-[#FF7F50]" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#FF7F50]">Compliance</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Full-spectrum QMS implementation and maintenance to ensure you stay audit-ready at all times.
                        </p>
                        <ul className="space-y-4">
                            {['ISO 13485 Implementation', 'Internal & External Audit Support', 'CAPA Management', 'Post-Market Surveillance (PMS)'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-gray-200">
                                    <CheckCircle className="w-5 h-5 text-[#FF7F50] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Service 3: Evidence */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-primary-700/50 rounded-3xl p-8 border border-white/10">
                            <div className="w-16 h-16 bg-[#FC31FF]/20 rounded-2xl flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-[#FC31FF]" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-[#FC31FF]">Evidence</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Robust clinical and performance data is the currency of regulatory approval. We help you generate, analyze, and present your evidence effectively.
                            </p>
                            <ul className="space-y-4">
                                {['Clinical Evaluation Reports (CER)', 'Performance Evaluation (IVD)', 'Literature Reviews', 'Clinical Protocol Design'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle className="w-5 h-5 text-[#FC31FF] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-4xl font-bold leading-tight">Data-driven <br />Regulatory Success</h3>
                        <p className="text-gray-400 text-lg">
                            From literature reviews to full clinical investigations, ensure your clinical evidence supports your claims and meets the stringent requirements of MDR and IVDR.
                        </p>
                    </div>
                </div>

                {/* Service 4: Build */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold leading-tight">Infrastructure <br />& Manufacturing</h3>
                        <p className="text-gray-400 text-lg">
                            Setting up a medical device manufacturing facility requires precision. We guide you through layout, validation, and qualification.
                        </p>
                    </div>
                    <div className="bg-primary-700/50 rounded-3xl p-8 border border-white/10">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                            <Settings className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-white">Build</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            End-to-end support for setting up compliant manufacturing facilities and cleanrooms.
                        </p>
                        <ul className="space-y-4">
                            {['Cleanroom Design & Validation', 'Facility Layout Planning', 'Equipment Qualification (IQ/OQ/PQ)', 'Process Validation'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-gray-200">
                                    <CheckCircle className="w-5 h-5 text-white shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-primary-600 py-24 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-[#A7A3AF] max-w-2xl mx-auto">A transparent, partnership-driven approach to regulatory consulting.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Discovery', desc: 'Understanding your product, goals, and regulatory needs.', icon: <Award className="w-6 h-6" /> },
                            { title: 'Strategy', desc: 'Developing a tailored roadmap for compliance and market access.', icon: <ArrowRight className="w-6 h-6" /> },
                            { title: 'Execution', desc: 'Hands-on support with documentation, submissions, and implementation.', icon: <Settings className="w-6 h-6" /> },
                            { title: 'Maintenance', desc: 'Ongoing support for audits, PMS, and regulatory updates.', icon: <ShieldCheck className="w-6 h-6" /> }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-primary-700 p-8 rounded-2xl border border-white/5 relative group hover:bg-primary-500 transition-colors">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#FF7F50] rounded-full flex items-center justify-center font-bold text-black border-4 border-primary-600">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
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
