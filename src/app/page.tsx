import Image from "next/image";

import Logo from "@/assets/images/logo.svg";
import HeroImage from "@/assets/images/hero_background.svg";

export default function Home() {
  return (
    <div className="w-full">
      {/* header */}
      <div className="h-[86px] w-full bg-black">
        <div className="w-[90%] h-full m-auto flex justify-between items-center">
          <Image src={Logo} alt="logo" className="h-[50%] select-none" />
          <div className="menubar flex items-center gap-8">
            <a href="#" className="text-white text-base font-bold">
              Technology
            </a>
            <a href="#" className="text-white text-base font-bold">
              Mission
            </a>
            <a href="#" className="text-white text-base font-bold">
              Careers
            </a>
            <a href="#" className="text-white text-base font-bold">
              FAQ
            </a>
            <button className="text-white border bg-gradient-to-r from-[#F89B7D] from-[-30%] to-[#761785] to-80% px-4 py-2 font-bold">
              {"Invest Now"}
            </button>
          </div>
        </div>
      </div>
      {/* hero section */}
      <div className="w-full bg-black relative">
        <Image src={HeroImage} className="w-full" alt="HeroImage" />
        <div className="w-[70%] absolute h-full top-0 left-0 flex items-center justify-center"></div>
      </div>
    </div>
  );
}
