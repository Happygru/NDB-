"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../../public/images/logo.svg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

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
      <div
        className="w-full relative h-[60vw] max-h-[calc(100vh-86px)] bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('images/hero_background.svg')",
        }}
      >
        <div
          className="w-[60%] top-0 left-0 flex flex-col items-start gap-10"
          data-aos="fade-up"
        >
          <p className="text-[46px] break-words text-white w-full leading-tight ">
            Transforming nuclear waste into
            <br /> never-recharge
            <br /> cell phones and watches
          </p>
          <a
            href="#"
            className="text-white rounded-[50px] bg-white/20 px-16 text-lg py-3 leading-none transition-all duration-200 hover:bg-white/25"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
