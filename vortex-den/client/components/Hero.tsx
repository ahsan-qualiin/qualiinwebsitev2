import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const DecorativeCircle = ({ className, gradient }: { className: string; gradient: string }) => (
  <div className={`absolute rounded-full blur-[11.2px] ${className}`} style={{ background: gradient }} />
);

export const Hero = () => {
  return (
    <section className="relative w-full bg-primary-600 overflow-hidden">
      {/* Decorative blurred circles */}
      <DecorativeCircle 
        className="w-[188px] h-[188px] left-0 top-[552px]"
        gradient="linear-gradient(110deg, rgba(255, 120, 56, 0.95) -1.53%, rgba(103, 27, 131, 0.95) 27.57%, rgba(69, 7, 147, 0.95) 44.7%, rgba(81, 44, 149, 0.95) 59.94%, rgba(141, 229, 162, 0.95) 94.74%)"
      />
      <DecorativeCircle 
        className="w-[85px] h-[85px] left-[315px] top-[85px]"
        gradient="linear-gradient(110deg, rgba(255, 120, 56, 0.95) -1.53%, rgba(103, 27, 131, 0.95) 27.57%, rgba(69, 7, 147, 0.95) 44.7%, rgba(81, 44, 149, 0.95) 59.94%, rgba(141, 229, 162, 0.95) 94.74%)"
      />
      <DecorativeCircle 
        className="w-[120px] h-[119px] right-[85px] top-0 opacity-83"
        gradient="linear-gradient(110deg, rgba(255, 120, 56, 0.95) -1.53%, rgba(103, 27, 131, 0.95) 27.57%, rgba(69, 7, 147, 0.95) 44.7%, rgba(81, 44, 149, 0.95) 59.94%, rgba(141, 229, 162, 0.95) 94.74%)"
      />
      <DecorativeCircle 
        className="w-[180px] h-[179px] right-[46px] bottom-[94px] opacity-79 blur-[12.95px]"
        gradient="linear-gradient(110deg, rgba(255, 120, 56, 0.95) -1.53%, rgba(103, 27, 131, 0.95) 27.57%, rgba(69, 7, 147, 0.95) 44.7%, rgba(81, 44, 149, 0.95) 59.94%, rgba(141, 229, 162, 0.95) 94.74%)"
      />

      {/* Left decorative border */}
      <svg 
        className="absolute left-[-9px] top-[140px] w-[606px] h-[722px]" 
        viewBox="0 0 598 722" 
        fill="none"
      >
        <mask id="path-1-inside-1" fill="white">
          <path d="M597.265 721.766C503.273 721.766 498.107 721.786 440.431 721.786L90.1318 305.295C79.7684 293.227 64.3112 286.058 48.5742 286.058C16.7165 286.058 -9 316.005 -9 353.103L-9 0L597.265 721.766Z"/>
        </mask>
        <path d="M597.265 721.766L597.265 722.766H599.411L598.03 721.122L597.265 721.766ZM440.431 721.786L439.665 722.43L439.965 722.786H440.431L440.431 721.786ZM90.1318 305.295L90.8972 304.651L90.8905 304.643L90.1318 305.295ZM48.5742 286.058L48.5742 285.058H48.5742L48.5742 286.058ZM-9 0L-8.23429 -0.643181L-10 -2.74529L-10 0H-9ZM597.265 721.766L597.265 720.766C550.269 720.766 525.479 720.771 505.229 720.776C484.979 720.781 469.269 720.786 440.431 720.786L440.431 721.786L440.431 722.786C469.269 722.786 484.98 722.781 505.23 722.776C525.48 722.771 550.269 722.766 597.265 722.766L597.265 721.766ZM440.431 721.786L441.196 721.142L90.8971 304.651L90.1318 305.295L89.3665 305.939L439.665 722.43L440.431 721.786ZM90.1318 305.295L90.8905 304.643C80.3401 292.358 64.6074 285.058 48.5742 285.058L48.5742 286.058L48.5742 287.058C64.0151 287.058 79.1968 294.096 89.3732 305.946L90.1318 305.295ZM48.5742 286.058L48.5742 285.058C16.0267 285.058 -10 315.601 -10 353.103H-9H-8C-8 316.409 17.4062 287.058 48.5742 287.058L48.5742 286.058ZM-9 353.103H-8L-8 0H-9H-10L-10 353.103H-9ZM-9 0L-9.76571 0.643181L596.499 722.409L597.265 721.766L598.03 721.122L-8.23429 -0.643181L-9 0Z" 
          fill="url(#paint0_linear_left)" 
          mask="url(#path-1-inside-1)"
        />
        <defs>
          <linearGradient id="paint0_linear_left" x1="27.0989" y1="160.503" x2="552.419" y2="577.27" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#450793"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Right decorative border */}
      <svg 
        className="absolute right-0 top-[146px] w-[606px] h-[722px]" 
        viewBox="0 0 606 722" 
        fill="none"
      >
        <mask id="path-1-inside-2" fill="white">
          <path d="M-3.56277e-06 721.765C93.9916 721.765 99.1572 721.786 156.834 721.786L507.133 305.294C517.496 293.226 532.953 286.057 548.689 286.057C580.547 286.057 606.265 316.004 606.265 353.102L606.265 0L-3.56277e-06 721.765Z"/>
        </mask>
        <path d="M-3.56277e-06 721.765L-3.6417e-06 722.765L-2.14594 722.765L-0.76569 721.121L-3.56277e-06 721.765ZM156.834 721.786L157.599 722.43L157.3 722.786L156.834 722.786L156.834 721.786ZM507.133 305.294L506.367 304.65L506.374 304.642L507.133 305.294ZM548.689 286.057L548.689 285.057L548.689 285.057L548.689 286.057ZM606.265 0L605.499 -0.643181L607.265 -2.74528L607.265 9.86495e-08L606.265 0ZM-3.56277e-06 721.765L-3.48384e-06 720.765C46.9959 720.765 71.7853 720.77 92.0353 720.775C112.285 720.781 127.996 720.786 156.834 720.786L156.834 721.786L156.834 722.786C127.995 722.786 112.285 722.781 92.0348 722.775C71.7849 722.77 46.9957 722.765 -3.6417e-06 722.765L-3.56277e-06 721.765ZM156.834 721.786L156.069 721.142L506.368 304.65L507.133 305.294L507.898 305.938L157.599 722.43L156.834 721.786ZM507.133 305.294L506.374 304.642C516.925 292.357 532.656 285.057 548.689 285.057L548.689 286.057L548.689 287.057C533.249 287.057 518.068 294.095 507.891 305.945L507.133 305.294ZM548.689 286.057L548.689 285.057C581.237 285.057 607.265 315.6 607.265 353.102L606.265 353.102L605.265 353.102C605.265 316.408 579.858 287.057 548.689 287.057L548.689 286.057ZM606.265 353.102L605.265 353.102L605.265 -9.86495e-08L606.265 0L607.265 9.86495e-08L607.265 353.102L606.265 353.102ZM606.265 0L607.03 0.643181L0.765682 722.408L-3.56277e-06 721.765L-0.76569 721.121L605.499 -0.643181L606.265 0Z" 
          fill="url(#paint0_linear_right)" 
          mask="url(#path-1-inside-2)"
        />
        <defs>
          <linearGradient id="paint0_linear_right" x1="570.166" y1="160.503" x2="44.8459" y2="577.27" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#450793"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Chat icon button */}
      <button className="absolute right-[97px] bottom-[0px] w-[95px] h-[95px] bg-accent-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M3.71796 40.8974V7.4359C3.71796 6.41347 4.08201 5.5382 4.8101 4.8101C5.5382 4.08201 6.41347 3.71796 7.4359 3.71796H37.1795C38.2019 3.71796 39.0772 4.08201 39.8053 4.8101C40.5334 5.5382 40.8974 6.41347 40.8974 7.4359V29.7436C40.8974 30.766 40.5334 31.6413 39.8053 32.3694C39.0772 33.0975 38.2019 33.4615 37.1795 33.4615H11.1539L3.71796 40.8974ZM9.57373 29.7436H37.1795V7.4359H7.4359V31.8349L9.57373 29.7436Z" fill="#FEF7FF"/>
        </svg>
      </button>

      <div className="max-w-[1440px] mx-auto px-0 py-[134px] flex flex-col items-center gap-7">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-white font-bold text-[64px] leading-[150%] tracking-[-1.28px] max-w-[1392px] px-4">
            GUIDED BY <span className="text-accent-500">QUALITY</span>
            <br />
            DRIVEN BY <span className="text-accent-500">INNOVATION</span>
          </h1>

          <p className="text-center text-text-primary text-xl font-medium leading-[191%] tracking-[-0.401px] max-w-[1440px] px-4">
            Helping companies to focus onnavigate on A to Z regulation on A to Z regulation
            <br />
            innovation and quality, By helping them navigate on A to Z regulations
          </p>
        </div>

        <Button className="bg-secondary-500 text-secondary-900 rounded-xl px-5 py-1 h-[47px] text-[32px] font-normal hover:bg-secondary-500/90 flex items-center gap-2">
          <Phone className="w-8 h-8" />
          Contact Us
        </Button>
      </div>
    </section>
  );
};
