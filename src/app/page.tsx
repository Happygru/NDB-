"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../../public/images/logo.svg";
import NDBGenerate from "../../public/images/ndb_generate_background.svg";

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
          <p className="text-[46px] break-words text-white w-full leading-tight">
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

      {/* NDB Generate section */}
      <div className="w-full bg-white py-20">
        <div className="w-[90%] m-auto relative h-max">
          <div className="absolute w-full h-full flex flex-col justify-end items-start p-[10%] gap-20 ">
            <div className="leading-tight">
              <p
                className="text-[46px] break-words text-white w-full"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                NDB generates electricity similar <br />
                to a solar cell
              </p>
              <p
                className="text-[40px] break-words text-gray-500"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                But using radiation from decay
                <br /> instead of sunlight
              </p>
            </div>
            <a
              href="#"
              className="text-white rounded-[50px] bg-white/20 px-16 text-lg py-3 leading-none transition-all duration-200 hover:bg-white/25"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Learn more
            </a>
          </div>
          <Image
            src={NDBGenerate}
            alt="NDB Generate"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full bg-white relative h-[60vw] max-h-[calc(100vh-86px)] bg-cover flex items-center justify-center">
        <div
          className="w-[60%] top-0 left-0 flex flex-col items-start gap-10"
          data-aos="fade-up"
        >
          <p className="text-[46px] break-words text-black w-full leading-tight m-0">
            Our Technology
          </p>
          <p className="text-2xl break-words text-black w-full leading-normal m-0">
            Incorporating a spherical Silicon Carbide(SIC) semiconductor into
            cell design provides unique opportunities for optimizing energy
            conversion and enhancing the cell&lsquo;s durability. This
            innovative form factor represents a significant evolutionfrom
            traditional flat-surface semiconductor wafers.
          </p>
          <a
            href="#"
            className="text-white rounded-[50px] bg-black w-[50%] pl-16 text-lg py-3 leading-none transition-all duration-200 hover:bg-black/80"
          >
            Learn more
          </a>
        </div>
      </div>

      <div
        className="w-full bg-white relative h-[60vw] max-h-[calc(100vh-86px)] bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('images/technology_background.svg')" }}
      >
        <div
          className="w-[60%] top-0 left-0 flex flex-col items-start gap-10"
          data-aos="fade-up"
        >
          <p className="text-[46px] break-words text-white w-full leading-tight m-0">
            Our Technology
          </p>
          <p className="text-2xl break-words text-white w-full leading-normal m-0">
            Incorporating a spherical Silicon Carbide(SIC) semiconductor into
            cell design provides unique opportunities for optimizing energy
            conversion and enhancing the cell&lsquo;s durability. This
            innovative form factor represents a significant evolutionfrom
            traditional flat-surface semiconductor wafers.
          </p>
          <a
            href="#"
            className="text-black rounded-[50px] bg-white w-[50%] pl-16 text-lg py-3 leading-none transition-all duration-200 hover:bg-white/90"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
