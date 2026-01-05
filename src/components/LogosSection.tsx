import { useRef, useEffect } from "react";

const logos = [
    { name: "Company 1", id: 1 },
    { name: "Company 2", id: 2 },
    { name: "Company 3", id: 3 },
    { name: "Company 4", id: 4 },
    { name: "Company 5", id: 5 },
    { name: "Company 6", id: 6 },
];

export const LogosSection = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;
        const scrollerContent = scrollerRef.current.querySelector(".scroller__inner");
        if (!scrollerContent) return;

        const scrollerContentArray = Array.from(scrollerContent.children);
        scrollerContentArray.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerContent.appendChild(duplicatedItem);
        });
    }, []);

    return (
        <section className="w-full py-10 bg-primary-600 border-b border-white/5 overflow-hidden">
            <div
                ref={scrollerRef}
                className="scroller relative max-w-[1440px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
            >
                <div className="scroller__inner flex items-center gap-16 w-max animate-scroll">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center justify-center min-w-[150px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                            {/* Placeholder for Logo Image - Updated color for dark theme */}
                            <div className="h-8 w-32 bg-white/20 rounded-md animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
