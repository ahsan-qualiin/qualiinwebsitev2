import { useState } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Industries } from "../components/Industries";
import { CTASection, Footer } from "../components/Footer";
import { ContactModal, ScheduleModal } from "../components/Modals";
import { LogosSection } from "../components/LogosSection";
import { FeaturesSection } from "../components/FeaturesSection";

export default function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="Qualiin - Guided by Quality, Driven by Innovation"
                description="Expert regulatory compliance and quality assurance solutions for medical device manufacturers. Launchpads, compliance, evidence, and build services."
            />
            <Navbar openContactModal={openContactModal} />
            <Hero openContactModal={openContactModal} />
            <LogosSection />
            <Services />
            <FeaturesSection />
            <Industries />
            <CTASection openScheduleModal={openScheduleModal} />
            <Footer openContactModal={openContactModal} />

            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
            <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
        </div>
    );
}
