import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Logo = () => (
  <svg className="w-[110px] h-[35px] md:w-[110px] md:h-[35px]" viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77.8581 13.0741V34.6017H73.1509V13.0741H77.8581Z" fill="white"/>
    <path d="M48.482 27.4283V17.7688H53.1892V34.5965H48.6672V31.5397H48.4974C48.1116 32.5178 47.4788 33.3126 46.5837 33.9087C45.704 34.5048 44.6237 34.8104 43.3427 34.8104C42.2006 34.8104 41.2129 34.5506 40.3486 34.0462C39.4844 33.5419 38.8053 32.8082 38.3269 31.8606C37.8484 30.913 37.6015 29.7973 37.6015 28.4829V17.7688H42.3087V27.6423C42.3087 28.6357 42.5865 29.4152 43.1112 29.996C43.6359 30.5768 44.3459 30.8672 45.241 30.8672C45.812 30.8672 46.3368 30.7449 46.8306 30.4851C47.3245 30.2252 47.7258 29.8279 48.019 29.3235C48.3431 28.8191 48.4974 28.1925 48.482 27.4283Z" fill="white"/>
    <path d="M17.6711 0C7.90664 0 0 7.83011 0 17.5C0 27.1699 7.90664 35 17.6711 35C21.7284 35 25.4588 33.6459 28.4461 31.3793C29.635 30.4668 30.7051 29.4071 31.6414 28.2443C33.9748 25.286 35.357 21.5622 35.357 17.5147C35.3421 7.83011 27.4355 0 17.6711 0ZM24.7603 27.7292C22.4121 29.7603 19.3505 30.9819 15.9916 30.9819C8.63489 30.9819 2.66032 25.0652 2.66032 17.7796C2.66032 10.4941 8.63489 4.57738 15.9916 4.57738C23.3484 4.57738 29.3229 10.4941 29.3229 17.7796C29.3229 20.1346 28.6987 22.3423 27.6138 24.2557C26.8558 25.5656 25.8898 26.7431 24.7603 27.7292Z" fill="white"/>
    <path d="M27.6137 24.2558C26.8706 25.5657 25.8897 26.7431 24.7602 27.7293L17.7899 20.8264C17.3886 20.429 16.8238 20.1788 16.2145 20.1788C14.9809 20.1788 13.9852 21.1649 13.9852 22.3865V10.7591L27.6137 24.2558Z" fill="white"/>
    <path d="M38.0768 34.6173H31.7158L24.7603 27.7292C25.9047 26.7431 26.8707 25.5656 27.6138 24.2557L31.6266 28.2443L38.0768 34.6173Z" fill="white"/>
    <path d="M61.1714 34.9004C60.0911 34.9004 59.1188 34.717 58.27 34.3349C57.4211 33.9528 56.7575 33.4026 56.2636 32.6536C55.7698 31.9047 55.5383 30.9877 55.5383 29.872C55.5383 28.9396 55.708 28.1602 56.063 27.5182C56.4025 26.8763 56.881 26.3719 57.4829 25.9898C58.0848 25.6077 58.7638 25.3174 59.5201 25.1187C60.2917 24.92 61.0943 24.7824 61.9277 24.706C62.9154 24.599 63.7179 24.5073 64.3198 24.4156C64.9217 24.3239 65.3693 24.1863 65.6317 24.0029C65.9095 23.8195 66.0484 23.5444 66.0484 23.1929V23.1317C66.0484 22.444 65.8323 21.909 65.3847 21.5269C64.9526 21.1448 64.3353 20.9614 63.5327 20.9614C62.6839 20.9614 62.0048 21.1448 61.511 21.5269C61.0171 21.8937 60.6776 22.3523 60.5232 22.9025L56.171 22.551C56.3871 21.5269 56.8347 20.6405 57.4829 19.9068C58.1311 19.1579 58.9645 18.5771 59.9985 18.1797C61.0325 17.7671 62.2209 17.5684 63.579 17.5684C64.5205 17.5684 65.431 17.6754 66.2953 17.8894C67.1596 18.1033 67.9312 18.4549 68.6103 18.9134C69.2894 19.3719 69.8295 19.968 70.2154 20.6863C70.6012 21.4047 70.8018 22.2606 70.8018 23.254V34.5947H66.3416V32.2563H66.141C65.8632 32.7759 65.5082 33.2497 65.0452 33.6471C64.5822 34.0445 64.042 34.3502 63.3938 34.5794C62.7611 34.7934 62.0203 34.9004 61.1714 34.9004ZM62.5296 31.6755C63.2241 31.6755 63.8414 31.5379 64.3661 31.2628C64.8909 30.9877 65.3076 30.6056 65.6162 30.1471C65.9249 29.6733 66.0638 29.1536 66.0638 28.5575V26.7693C65.9095 26.861 65.7088 26.9527 65.4619 27.0292C65.215 27.1056 64.9217 27.1667 64.6131 27.2431C64.289 27.3043 63.9803 27.3501 63.6562 27.4113C63.3321 27.4571 63.0543 27.4877 62.7919 27.5335C62.2363 27.6099 61.7579 27.7475 61.3412 27.9156C60.9245 28.0837 60.6004 28.3283 60.3843 28.634C60.1528 28.9244 60.0448 29.2912 60.0448 29.7344C60.0448 30.3763 60.2763 30.8501 60.7393 31.1864C61.2023 31.5073 61.8042 31.6755 62.5296 31.6755Z" fill="white"/>
    <path d="M80.2072 17.7689V34.6022H84.9143V17.7689H80.2072Z" fill="white"/>
    <path d="M87.2634 17.7697V34.602H91.9706V17.7697H87.2634Z" fill="white"/>
    <path d="M99.0269 34.602V24.8814C99.0269 24.1631 99.1658 23.5364 99.459 23.0168C99.7368 22.4971 100.107 22.115 100.586 21.8399C101.08 21.5648 101.635 21.4273 102.268 21.4273C103.209 21.4273 103.95 21.7177 104.49 22.2984C105.03 22.8792 105.293 23.6893 105.293 24.7133V34.5867H110V23.8727C110 22.5583 109.768 21.4425 109.275 20.4949C108.781 19.5473 108.102 18.8137 107.222 18.3093C106.342 17.805 105.308 17.5451 104.135 17.5451C102.87 17.5451 101.789 17.8355 100.91 18.4163C100.015 18.9818 99.3818 19.7613 99.0114 20.7395H98.8108L98.8115 17.7686H94.3204L94.3197 34.602H99.0269Z" fill="white"/>
  </svg>
);

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary-500 shadow-[0_4px_45.4px_-19px_rgba(28,3,59,1)] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] py-4">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[70px]">
            <div className="flex items-center justify-between gap-0">
              <Button variant="ghost" className="text-secondary-50 text-base font-medium px-4 py-1 h-8 hover:bg-white/10">
                About Us
              </Button>
              <Button variant="ghost" className="text-secondary-50 text-base font-medium px-4 py-1 h-8 hover:bg-white/10">
                Services
              </Button>
              <Button variant="ghost" className="text-secondary-50 text-base font-medium px-4 py-1 h-8 hover:bg-white/10">
                Resources
              </Button>
              <Button variant="ghost" className="text-secondary-50 text-base font-medium px-4 py-1 h-8 hover:bg-white/10">
                Careers
              </Button>
            </div>

            <Button className="bg-secondary-500 text-secondary-900 rounded-xl px-5 py-1 h-[38px] text-xl font-medium hover:bg-secondary-500/90">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
            <Button variant="ghost" className="text-secondary-50 text-base font-medium justify-start hover:bg-white/10">
              About Us
            </Button>
            <Button variant="ghost" className="text-secondary-50 text-base font-medium justify-start hover:bg-white/10">
              Services
            </Button>
            <Button variant="ghost" className="text-secondary-50 text-base font-medium justify-start hover:bg-white/10">
              Resources
            </Button>
            <Button variant="ghost" className="text-secondary-50 text-base font-medium justify-start hover:bg-white/10">
              Careers
            </Button>
            <Button className="bg-secondary-500 text-secondary-900 rounded-xl px-5 py-2 text-lg font-medium hover:bg-secondary-500/90 mt-2">
              Contact
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
