import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";

export const FeaturesSection = () => {
    return (
        <section className="w-full bg-primary-500 py-24 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Why Choose Qualiin?</h2>
                    <p className="text-text-primary max-w-2xl mx-auto text-lg">
                        We combine regulatory expertise with technological innovation to deliver faster, smarter, and more reliable compliance solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-primary-700 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                            <Zap size={32} className="text-[#FF7F50]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Accelerated Timelines</h3>
                        <p className="text-text-primary leading-relaxed">
                            Reduce time-to-market by up to 40% with our streamlined processes and AI-driven documentation tools.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-primary-700 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                            <ShieldCheck size={32} className="text-[#FF7F50]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Guaranteed Compliance</h3>
                        <p className="text-text-primary leading-relaxed">
                            Navigate complex regulatory landscapes with confidence. Our experts ensure 100% adherence to global standards.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-primary-700 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                            <CheckCircle size={32} className="text-[#FF7F50]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">End-to-End Support</h3>
                        <p className="text-text-primary leading-relaxed">
                            From initial strategy to post-market surveillance, we partner with you at every stage of your product lifecycle.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <button className="flex items-center gap-2 text-[#FF7F50] font-bold hover:gap-3 transition-all text-lg">
                        Discover our approach <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
