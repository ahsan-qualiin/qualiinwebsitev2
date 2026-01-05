import { Eye } from "lucide-react";

const GreenPattern = () => (
  <div className="absolute left-0 bottom-0 w-[752px] h-[435px] pointer-events-none">
    <svg className="absolute left-0 top-[30px] w-[435px] h-[435px]" viewBox="0 0 435 436" fill="none">
      <path d="M434.998 0.0126873C367.558 0.0126696 363.852 -2.66415e-05 322.469 -3.74953e-05L71.1258 251.189C63.69 258.468 52.5997 262.792 41.3084 262.792C18.4503 262.792 -0.00110794 244.73 -0.00116485 222.356L-0.0012207 435.315L434.998 0.0126873Z" fill="url(#paint0_linear_green1)" fillOpacity="0.1"/>
      <defs>
        <linearGradient id="paint0_linear_green1" x1="175.837" y1="435.327" x2="175.838" y2="-1.65216" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#713EB2" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
    <svg className="absolute left-0 top-0 w-[435px] h-[435px]" viewBox="0 0 435 436" fill="none">
      <path d="M434.999 435.303C367.559 435.303 363.852 435.315 322.469 435.315L71.1267 184.126C63.691 176.848 52.6006 172.524 41.3094 172.523C18.4511 172.523 -0.00118738 190.585 -0.00118347 212.959L-0.0012207 0L434.999 435.303Z" fill="url(#paint0_linear_green2)" fillOpacity="0.1"/>
      <defs>
        <linearGradient id="paint0_linear_green2" x1="175.838" y1="-0.0117893" x2="175.838" y2="436.967" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#713EB2" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const GreenPatternRotated = () => (
  <div className="absolute right-0 bottom-0 w-[752px] h-[435px] -rotate-90 pointer-events-none">
    <svg className="absolute left-0 top-[30px] w-[435px] h-[435px]" viewBox="0 0 435 436" fill="none">
      <path d="M7.90613e-06 0.0126873C67.4396 0.0126696 71.1458 -2.66415e-05 112.529 -3.74953e-05L363.872 251.189C371.308 258.468 382.398 262.792 393.69 262.792C416.548 262.792 434.999 244.73 434.999 222.356L434.999 435.315L7.90613e-06 0.0126873Z" fill="url(#paint0_linear_green3)" fillOpacity="0.1"/>
      <defs>
        <linearGradient id="paint0_linear_green3" x1="259.16" y1="435.327" x2="259.16" y2="-1.65216" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#713EB2" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
    <svg className="absolute left-0 top-0 w-[435px] h-[435px]" viewBox="0 0 435 436" fill="none">
      <path d="M-1.50737e-05 435.303C67.4399 435.303 71.1467 435.315 112.53 435.315L363.872 184.126C371.308 176.848 382.398 172.524 393.689 172.523C416.548 172.523 435 190.585 435 212.959L435 0L-1.50737e-05 435.303Z" fill="url(#paint0_linear_green4)" fillOpacity="0.1"/>
      <defs>
        <linearGradient id="paint0_linear_green4" x1="259.161" y1="-0.0117893" x2="259.161" y2="436.967" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#713EB2" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

const IndustryCard = ({ title, description, image }: IndustryCardProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-primary-700 rounded-t-xl px-12 py-6">
        <div className="flex items-center gap-8">
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 bg-text-primary rounded-full" />
            <Eye className="absolute inset-0 m-auto w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-white text-[31px] font-medium leading-[120%]">{title}</h3>
        </div>
      </div>
      
      <div className="relative bg-primary-700 h-[527px] overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-[487px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[153px] bg-gradient-to-t from-primary-700 via-primary-700/30 to-transparent" />
        
        <div className="absolute bottom-6 left-0 px-12 py-6 max-w-[644px]">
          <p className="text-white text-base font-normal leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Industries = () => {
  return (
    <section className="relative w-full bg-primary-500 py-24 overflow-hidden">
      <GreenPattern />
      <GreenPatternRotated />
      
      <div className="max-w-[1440px] mx-auto px-[120px] relative z-10">
        <div className="flex flex-col items-center gap-12 mb-16">
          <h2 className="text-white text-[39px] font-bold leading-[180%] text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-100 text-xl font-medium leading-[30px] text-center max-w-[1168px]">
            Expert guidance through complex regulatory submission processes for global markets regulatory submission processes for global markets regulatory s
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <IndustryCard
            title="Medical Devices"
            description="Comprehensive regulatory support for medical device manufacturers, from concept to market"
            image="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&auto=format&fit=crop&q=80"
          />
          
          <IndustryCard
            title="Medical Devices"
            description="Comprehensive regulatory support for medical device manufacturers, from concept to market"
            image="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
};
