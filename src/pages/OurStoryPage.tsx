import { useState } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LogosSection } from "../components/LogosSection";
import { StorySection } from "../components/StorySection";
import { FeaturesSection } from "../components/FeaturesSection";
import { CTASection, Footer } from "../components/Footer";
import { ContactModal, ScheduleModal } from "../components/Modals";

export default function OurStoryPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    const openScheduleModal = () => setIsScheduleModalOpen(true);
    const closeScheduleModal = () => setIsScheduleModalOpen(false);

    return (
        <div className="min-h-screen bg-primary-500 text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <SEO
                title="Our Story - Qualiin"
                description="Qualiin is dedicated to helping companies navigate complex regulations with ease, ensuring compliance and fostering innovation."
            />
            <Navbar openContactModal={openContactModal} />
            <Hero openContactModal={openContactModal} />
            <LogosSection />
            <StorySection />
            <FeaturesSection />
            <CTASection openScheduleModal={openScheduleModal} />
            <Footer openContactModal={openContactModal} />

            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
            <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
        </div>
    );
}
