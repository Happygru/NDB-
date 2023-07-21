import { useEffect, useState } from "react";
import AOS from "aos";

import { menuList } from "./menu";

import FooterNanoLogo from "../assets/images/FooterNanoLogo.svg";
import NorthArrow from "../assets/images/gisNorthArrow0.svg";

import TwitterIcon from "../assets/images/twitter.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import EmailIcon from "../assets/images/email.svg";

import { FaArrowRightLong } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const Footer = () => {
  const [emailDrawerFlag, setEmailDrawerFlag] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  const toggleEmailDrawer = (open) => {
    setEmailDrawerFlag(open);
  };

  return (
    <div className="w-full bg-white ">
      <div className=" m-auto max-w-[1728px]">
        <div className=" hidden flex-col items-start gap-[32px] p-[64px] table:flex">
          <div className="flex items-start gap-[10px] self-stretch">
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="font-mainFont text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Menu
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {menuList.map((element) => (
                  <a
                    key={element.title}
                    href={element.to}
                    className="!px-0 !font-mainFont !text-[30px] !font-normal !normal-case !leading-9 !text-black"
                  >
                    {element.title}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="font-mainFont text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Legal
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                  <Button
                    key={index}
                    className="!px-0 !font-mainFont !text-[30px] !font-normal !normal-case !leading-9 !text-black"
                  >
                    {text}
                  </Button>
                ))}
              </div>
            </div>
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="font-mainFont text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Connect
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {["Instagram", "LinkedIn", "Twitter", "Contact"].map(
                  (text, index) => (
                    <Button
                      key={index}
                      className="!px-0 !font-mainFont !text-[30px] !font-normal !normal-case !leading-9 !text-black"
                    >
                      {text}
                    </Button>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-between self-stretch ">
              <div className=" flex flex-col items-start gap-[32px] self-stretch">
                <p className="font-mainFont text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                  Newsletter
                </p>
                <Button
                  onClick={() => {
                    toggleEmailDrawer(true);
                  }}
                  variant="contained"
                  className=" w-full items-start !rounded-[200px] !bg-[#C4C4C4] !px-[32px] !py-[12px] !normal-case"
                >
                  <p className="flex w-full items-center justify-between text-start font-mainFont text-[24px] font-medium leading-[32px] text-[#F2F2F2]">
                    <span>Email Address</span>
                    <FaArrowRightLong />
                  </p>
                </Button>
              </div>
              <div className=" bottom-0 flex flex-col items-end gap-[10px] self-stretch">
                <img
                  src={FooterNanoLogo}
                  alt="logo"
                  className=" h-select-none h-[64px]"
                />
              </div>
            </div>
          </div>
          <div className=" flex content-end items-end gap-[10px] self-stretch py-[16px]">
            <div className="flex flex-1 items-center ">
              <img
                src={NorthArrow}
                alt="logo"
                className=" h-select-none h-[32px]"
              />
            </div>
            <div className="flex flex-1 flex-col items-end justify-center gap-[32px] self-stretch">
              <div className=" flex flex-col content-end gap-[10px] self-stretch">
                <p className="text-end font-mainFont text-[20px] font-normal leading-[28px] text-[#000]">
                  © NANO DIAMOND BATTERY INC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-[64px] bg-[#FAFAFA] p-[72px] table:hidden">
          <div className=" flex flex-col items-start gap-[32px] self-stretch">
            <Button
              onClick={() => {
                toggleEmailDrawer(true);
              }}
              variant="contained"
              className=" w-full items-start !rounded-[200px] !bg-[#C4C4C4] !px-[32px] !py-[12px] !normal-case"
            >
              <p className="flex w-full items-center justify-between text-start font-mainFont text-[14px] font-medium leading-[20px] text-[#F2F2F2]">
                <span>Email Address</span>
                <FaArrowRightLong />
              </p>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-[32px] self-stretch">
            <div className=" flex flex-col items-center gap-[16px] self-stretch">
              <p className=" text-center font-mainFont text-[14px] font-medium leading-[20px] text-[#A0A0A0]">
                Menu
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-[10px]">
                {menuList.map((element) => (
                  <a
                    key={element.title}
                    href={element.to}
                    className=" !w-full !px-0 !font-mainFont !text-[14px] !text-center !font-normal !normal-case !leading-[20px] !text-black"
                  >
                    {element.title}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex flex-col items-center gap-[16px] self-stretch">
              <p className=" text-center font-mainFont text-[14px] font-medium leading-[20px] text-[#A0A0A0]">
                Legal
              </p>
              <div className=" flex w-full flex-col items-center justify-center gap-[10px]">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                  <Button
                    key={index}
                    className=" !w-full !px-0 !font-mainFont !text-[14px] !font-normal !normal-case !leading-[20px] !text-black"
                  >
                    {text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-center gap-[64px] self-stretch">
            <div className=" flex items-start justify-center gap-[24px] self-stretch">
              <div className="flex flex-col items-center justify-center gap-[10px] px-[2px] py-[3px]">
                <img
                  src={TwitterIcon}
                  alt="icon"
                  className=" h-select-none h-[17px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] px-[2px] py-[3px]">
                <img
                  src={InstagramIcon}
                  alt="icon"
                  className=" h-select-none h-[17px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] px-[2px] py-[3px]">
                <img
                  src={LinkedinIcon}
                  alt="icon"
                  className=" h-select-none h-[17px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] px-[2px] py-[3px]">
                <img
                  src={EmailIcon}
                  alt="icon"
                  className=" h-select-none h-[17px]"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-[12px] self-stretch">
            <div className=" bottom-0 flex  flex-col items-center gap-[10px] self-stretch">
              <img
                src={FooterNanoLogo}
                alt="logo"
                className=" h-select-none h-[32px]"
              />
            </div>
            <div className=" flex flex-col content-end items-end gap-[10px] self-stretch">
              <div className=" flex flex-col items-center justify-center gap-[32px] self-stretch">
                <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
                  <p className="self-stretch text-center font-mainFont text-[12px] font-normal leading-[16px] text-[#000]">
                    © NANO DIAMOND BATTERY INC.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center self-stretch ">
            <img
              src={NorthArrow}
              alt="logo"
              className=" h-select-none h-[32px]"
            />
          </div>
        </div>
      </div>
      <Drawer
        anchor="bottom"
        open={emailDrawerFlag}
        onClose={() => toggleEmailDrawer(false)}
      >
        <div className=" w-[100vw]">
          <div className=" m-auto max-w-[768px] flex-col items-start">
            <div className=" flex w-full flex-col items-start gap-[32px] bg-[#FFF] p-[32px]">
              <div className=" flex w-full items-start gap-[10px]">
                <div className=" flex flex-1 items-start gap-[10px]">
                  <p className=" font-mainFont phone:text-[36px] font-light phone:leading-[40px] text-[20px] leading-[24px] text-[#000]">
                    Be the first to know
                    <br />
                    NANO&apos;s next steps
                  </p>
                </div>
                <Button
                  className=" phone:!text-[24px] !normal-case !text-black !text-[18px]"
                  onClick={() => toggleEmailDrawer(false)}
                >
                  <ImCross />
                </Button>
              </div>
              <div className="flex w-full items-center gap-[16px] phone:px-[32px] phone:py-[12px] p-0">
                <input
                  placeholder="Email Address"
                  type="email"
                  className="flex-1 rounded-[200px] !border !border-gray-500 bg-[#F2F2F2] phone:px-[32px] phone:py-[12px] phone:text-[24px] phone:leading-[32px] px-[20px] py-[10px] text-[20px] leading-[20px] focus-visible:border-none"
                ></input>
                <Button
                  onClick={() => {
                    toggleEmailDrawer(true);
                  }}
                  className=" !items-start !rounded-[200px] !bg-transparent phone:!px-[32px] phone:!py-[12px] !px-[20px] !py-0"
                >
                  <p className="flex w-full items-center justify-between text-start font-mainFont phone:text-[24px] font-medium phone:leading-[24px] text-[20px] leading-[20px] text-[#A0A0A0]">
                    <FaArrowRightLong />
                  </p>
                </Button>
              </div>
            </div>
            <div className=" border-t-1 border-t-solid flex items-start justify-between gap-[32px] self-stretch border border-t-[#000] bg-[#FFF] px-[32px] py-[16px]">
              <p className="font-mainFont text-[18px] font-light leading-[28px] text-[#000]">
                We use cookies to make things better
              </p>
              <div className="flex phone:flex-row flex-col items-center gap-[12px]">
                <div className=" flex items-center gap-[12px]">
                  <div className="flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-[#000] p-[10px]"></div>
                  <p className="font-mainFont text-[20px] font-normal leading-[28px] text-[#000]">
                    Accept
                  </p>
                </div>
                <div className=" flex items-center gap-[12px]">
                  <div className="flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0] p-[10px]"></div>
                  <p className="font-mainFont text-[20px] font-normal leading-[28px] text-[#A0A0A0]">
                    Decline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Footer;
