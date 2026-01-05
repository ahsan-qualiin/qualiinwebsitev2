
export const StorySection = () => {
    return (
        <section className="w-full bg-primary-600 py-24 relative overflow-hidden">
            {/* Decorative background element similar to Hero/Services */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E539E] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center feature-story relative z-10">

                {/* Left: Content */}
                <div>
                    <span className="text-[#FF7F50] font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Bridging Innovation <br /> and Regulation
                    </h2>
                    <div className="space-y-6 text-text-primary leading-relaxed text-lg font-light">
                        <p>
                            Qualiin was founded with a single mission: to simplify the complex journey of medical device regulation. We believe that innovation shouldn't be stifled by red tape.
                        </p>
                        <p>
                            Our team of experts brings together decades of experience in regulatory affairs, quality assurance, and clinical strategy to help you navigate global markets with ease.
                        </p>
                        <p>
                            Whether you are a startup looking to launch your first product or an established company expanding into new territories, we are your trusted partner in compliance.
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team collaboration"
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#FF7F50] rounded-3xl -z-0 opacity-50"></div>
                </div>
            </div>
        </section>
    );
};
