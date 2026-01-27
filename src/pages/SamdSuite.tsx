import { useState } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { CTASection, Footer } from "../components/Footer";
import { ContactModal, ScheduleModal } from "../components/Modals";
import { Button } from "../components/ui/button";
import { Layers, FileText, Activity, Shield, Database, Cloud, Code } from "lucide-react";

export default function SamdSuite() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="SaMD Suite - Qualiin"
                description="Qualiin SaMD Suite: comprehensive solution for medical device manufacturers to manage and submit regulatory compliance documentation for SaMD products."
            />
            <Navbar openContactModal={openContactModal} />

            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#450793] via-[#361274] to-primary-500 -z-10" />
                {/* Decorative Orb */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#6E539E] opacity-20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF7F50] font-semibold text-sm tracking-wider uppercase mb-6 backdrop-blur-sm">
                        Product
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Qualiin SaMD Suite
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                        Turn medical software into <span className="text-[#FF7F50] font-semibold">regulated, production-ready devices</span> — fast.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            onClick={openScheduleModal}
                            className="bg-secondary-500 text-secondary-900 rounded-xl px-8 py-6 text-xl font-medium hover:bg-secondary-500/90 shadow-[0_0_30px_rgba(255,120,56,0.3)] transition-all hover:scale-105"
                        >
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="w-full py-20 bg-primary-500 border-t border-b border-white/5">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
                        "Qualiin SaMD Suite is a comprehensive solution for medical device manufacturers to manage and submit regulatory compliance documentation for SaMD products."
                    </p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="w-full py-24 bg-primary-500">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
                        <p className="text-gray-400">Everything you need to accelerate compliance</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-primary-600/50 border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 bg-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Activity className="text-[#FF7F50] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">General SaMD Support</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Support for diagnostic, monitoring, decision-support, and connected-device software — not limited to just imaging.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-primary-600/50 border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 bg-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="text-[#8DE5A2] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Regulatory Playbooks</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Pre-built roadmaps for Q-Sub, 510(k), De Novo, CE technical files, and CDSCO submissions.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-primary-600/50 border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 bg-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="text-[#FC31FF] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Full DHF Management</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Integrated SRS, SDD, traceability matrices, and change control for complete design history files.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-primary-600/50 border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 bg-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="text-[#FF7838] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">V&V & Risk Management</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Automated V&V reports (unit → integration → system → clinical) and ISO 14971 risk management.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-primary-600/50 border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 bg-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircleIcon className="text-[#8DE5A2] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">ISO 13485 Starter</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Jumpstart your compliance with QMS + eQMS templates and audit-ready Standard Operating Procedures (SOPs).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs Section */}
            <section className="w-full py-24 bg-[#300f63] relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FF7F50] font-bold tracking-wider uppercase text-sm mb-4 block">Compliance-Ready Infrastructure</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Technical & Deployment Specifications</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Database className="text-secondary-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Data Connectors & APIs</h4>
                                    <p className="text-gray-300">
                                        HL7/FHIR, DICOM/PACS (if needed), CSV, REST. Available as an embeddable viewer or API-first integration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Cloud className="text-secondary-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Flexible Deployment</h4>
                                    <p className="text-gray-300">
                                        Deploy on-premise, private cloud (BAA supported), or hybrid. Includes enterprise-grade security and audit trails.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual placeholder for Tech Specs (e.g., code snippet or architecture diagram) */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] to-[#FC31FF] rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative bg-[#1E0B36] border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <Code className="text-gray-400 w-5 h-5" />
                                <span className="text-gray-400 font-mono text-sm">integration_config.json</span>
                            </div>
                            <pre className="font-mono text-xs md:text-sm text-green-400 overflow-x-auto p-2 md:p-0">
                                {`{
  "integration": {
    "type": "api",
    "standard": "FHIR_R4",
    "connectors": [
      "HL7", 
      "DICOM",
      "REST"
    ]
  },
  "compliance": {
    "audit_trail": true,
    "encryption": "AES-256",
    "baa_mode": "active"
  }
}`}
                            </pre>
                        </div>
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

// Simple internal icon for this file
const CheckCircleIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
)
