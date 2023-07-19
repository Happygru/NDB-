"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../../public/images/logo.svg";
import NanoLogo from "../../public/images/NanoLogo.svg";
import NDBGenerate from "../../public/images/ndb_generate_background.svg";

import NFont from "./../components/text/font";
import NButton from "./../components/button/index";

import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/Rx";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Home() {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  const toggleDrawer = (open: boolean) => {
    console.log(open);
    setMenuState(open);
  };

  const list = () => (
    <div className="w-full p-6 gap-[72px] flex-col flex">
      <div className="flex justify-between ">
        <div>
          <NButton.menuCrossIconButton onClick={() => toggleDrawer(false)}>
            <RxCross1 />
          </NButton.menuCrossIconButton>
        </div>
        <div>
          <Image
            src={NanoLogo}
            alt="logo"
            className=" display:h-16 table:h-14 phone:h-12 h-9 h-select-none"
          />
        </div>
      </div>
      <div>
        <List>
          <Divider />
          {["Home", "Technology", "Mission", "Careers", "FAQ"].map(
            (text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton className="py-4 ">
                    <p className="text-black !font-mainFont !text-[30px] !font-normal !leading-9">
                      {text}
                    </p>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            )
          )}
        </List>
      </div>
      <div>
        <Button className=" !rounded-none w-full text-start items-center object-center table:h-16 flex p-4 gap-4 border-solid border-[#FFF]  border bg-gradient-to-r from-[#F89B7D] from-[-30%] to-[#761785] to-80%">
          <p className="text-white !font-mainFont !text-[30px] !font-normal !leading-9 w-full">
            Invest Now
          </p>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-black ">
        {/* header */}
        <div className="max-w-[1728px] m-auto display:h-32 table:h-28 phone:h-24 h-[84px] flex display:px-[86px] display:py-8 p-6 items-center display:gap-8 table:gap-2 gap-8 self-stretch">
          <div className="flex flex-col items-start flex-1">
            <Image
              src={Logo}
              alt="logo"
              className="items-start w-auto display:h-16 table:h-14 phone:h-12 h-9 h-select-none"
            />
          </div>
          {["Technology", "Mission", "Careers", "FAQ"].map((text, index) => (
            <div
              className=" table:flex p-[10px] items-start gap-[10px] hidden "
              key={text}
            >
              <a href="#">
                <NFont.menuA>{text}</NFont.menuA>
              </a>
            </div>
          ))}
          <div className="">
            <Button className="!rounded-none text-center items-center object-center table:h-16 flex table:p-4 p-2 items-start gap-4 border-solid border-[#FFF]  border bg-gradient-to-r from-[#F89B7D] from-[-30%] to-[#761785] to-80%">
              <NFont.menuA>Invest Now</NFont.menuA>
            </Button>
          </div>
          <div className="flex items-center float-right mr-4 change_theme_btn table:hidden w-9">
            <span className="sr-only">Open main menu</span>
            <NButton.menuIconButton
              onClick={() => {
                toggleDrawer(true);
              }}
            >
              <FaBars />
            </NButton.menuIconButton>
          </div>
        </div>
        <Drawer
          anchor="top"
          open={menuState}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
      {/* hero section */}
      <div
        className="hidden w-full bg-center bg-cover phone:block"
        style={{
          backgroundImage: "url('images/hero_background.svg')",
        }}
      >
        <div className=" max-w-[1728px] m-auto relative h-full phone:flex items-center justify-start hidden display:px-[300px] table:px-[150px] phone:px-[75px] display:py-[256px] table:py-[128px] phone:py-[64px] ">
          <div
            className="top-0 left-0 flex flex-col items-start w-full display:gap-[64px] table:gap-[48px] phone:gap-[32px] gap-[16px] display:py-[128px] table:py-[64px] phone:py-[32px]"
            data-aos="fade-up"
          >
            <NFont.titleText color={"white"}>
              Transforming nuclear waste into
              <br /> never-recharge
              <br /> cell phones and watches
            </NFont.titleText>
            <NButton.titleGrayButton>Read more</NButton.titleGrayButton>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div className="w-full bg-white">
        <div className=" max-w-[1728px] m-auto display:p-[86px] table:p-[64px] phone:p-[32px] p-[24px]">
          <div
            className=" bg-cover relative flex items-center justify-start display:p-[128px] table:p-[92px] phone:p-[72px]  py-[72px] px-[36px] bg-center"
            style={{
              backgroundImage: "url('images/ndb_generate_background.svg')",
            }}
          >
            <div
              className="top-0 left-0 flex flex-col items-start w-full display:gap-[64px] table:gap-[48px] phone:gap-[32px] gap-[16px] display:pt-[256px] table:pt-[128px] phone:pt-[96px]  phone:pb-0 py-[78px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col">
                <NFont.titleText
                  color={"white"}
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  NDB generates electricity similar <br />
                  to a solar cell
                </NFont.titleText>
                <NFont.titleDText data-aos="fade-up" data-aos-duration="400">
                  But using radiation from decay
                  <br /> instead of sunlight
                </NFont.titleDText>
              </div>
              <NButton.titleGrayButton>Learn more</NButton.titleGrayButton>
            </div>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div className="w-full bg-white">
        <div className=" max-w-[1728px] m-auto">
          <div className=" relative flex items-center justify-start display:px-[256px] table:px-[196px] phone:px-[136px] display:py-[340px] table:py-[258px] phone:py-[166px] px-[72px] py-[72px]">
            <div
              className="top-0 left-0 flex flex-col items-start w-full display:gap-[64px] table:gap-[48px] phone:gap-[32px] gap-[16px] display:pb-[256px] table:pb-[128px] phone:pb-[96px] phone:pt-0 py-[72px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4 phone:gap-8">
                <NFont.titleText
                  color={"black"}
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  Our Technology
                </NFont.titleText>
                <p
                  className=" self-stretch text-mainColor font-mainFont font-light display:text-[36px] table:text-[30px] phone:text-[24px] text-[18px] display:leading-[40px] table:leading-[36px] phone:leading-[32px] leading-[28px]"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  Incorporating a spherical Silicon Carbide (SiC) semiconductor
                  into cell design provides unique opportunities for optimizing
                  energy conversion and enhancing the cell's durability. This
                  innovative form factor represents a significant evolution from
                  traditional flat-surface semiconductor wafers.
                </p>
              </div>
              <a
                href="#"
                className="text-white rounded-[50px] w-2/3 display:w-1/2 table:w-full phone:w-2/3 bg-black transition-all duration-200 hover:bg-white/90 display:px-[32px] table:px-[26px] phone:px-[20px] px-[14px] display:py-[12px] table:py-[10px] phone:py-[8px] py-[6px] display:text-[30px] table:text-[25px] phone:text-[20px] text-[14px] display:leading-[30px] table:leading-[25px] phone:leading-[20px] leading-[20px]"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('images/technology_background.svg')",
        }}
      >
        <div className=" max-w-[1728px] m-auto">
          <div className=" relative flex items-center justify-start display:px-[256px] table:px-[196px] phone:px-[136px] display:py-[340px] table:py-[258px] phone:py-[166px] px-[72px] py-[72px] ">
            <div
              className="top-0 left-0 flex flex-col items-start w-full display:gap-[64px] table:gap-[48px] phone:gap-[32px] gap-[16px] display:pb-[256px] table:pb-[128px] phone:pb-[96px] phone:pt-0 py-[72px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4 phone:gap-8">
                <NFont.titleText
                  color={"white"}
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  Our Technology
                </NFont.titleText>
                <p
                  className=" self-stretch text-white font-mainFont font-light display:text-[36px] table:text-[30px] phone:text-[24px] text-[18px] display:leading-[40px] table:leading-[36px] phone:leading-[32px] leading-[28px]"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  Incorporating a spherical Silicon Carbide (SiC) semiconductor
                  into cell design provides unique opportunities for optimizing
                  energy conversion and enhancing the cell's durability. This
                  innovative form factor represents a significant evolution from
                  traditional flat-surface semiconductor wafers.
                </p>
              </div>
              <a
                href="#"
                className="text-black rounded-[50px] w-2/3 display:w-1/2 table:w-full phone:w-2/3 bg-white transition-all duration-200 hover:bg-white/90 display:px-[32px] table:px-[26px] phone:px-[20px] px-[14px] display:py-[12px] table:py-[10px] phone:py-[8px] py-[6px] display:text-[30px] table:text-[25px] phone:text-[20px] text-[14px] display:leading-[30px] table:leading-[25px] phone:leading-[20px] leading-[20px]"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" max-w-[1728px] m-auto">
          <div className=" flex display:py-[86px] table:py-[66px] phone:py-[46px] py-[24px] flex-col items-center phone:gap-[10px] shrink-0 self-stretch">
            <div className=" display:p-[64px] table:p-[68px] phone:p-[70px] p-[72px] flex flex-col flex-between item-start self-stretch bg-[#FAFAFA] gap-[72px] phone:gap-[32px]">
              <div className="flex justify-center items-center display:gap-[10px] table:gap-[8px] phone:[7px] gap-[6px] self-stretch ">
                <p className=" flex-1 text-black font-mainFont display:text-[36px] table:text-[30px] phone:text-[24px] text-[18px] display:leading-[40px] table:leading-[36px] phone:leading-[32px] leading-[28px] font-medium">
                  NANO Products
                </p>
                <div className="flex display:w-[12px] display:h-[12px] table:w-[10px] table:h-[10px] phone:w-[8px] phone:h-[8px] w-[6px] h-[6px] p-[10px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor"></div>
                <p className="text-black font-mainFont display:text-[30px] table:text-[26px] phone:text-[22px] text-[18px] display:leading-[36px] table:leading-[30px] phone:leading-[25px] leading-[20px] font-medium underline">
                  Reserve
                </p>
              </div>
              <div className="items-center self-stretch justify-between hidden table:flex ">
                <div className=" flex-1 flex flex-col justify-center items-start gap-[32px] self-stretch">
                  <div className=" flex item-center gap-[32px]">
                    <div className=" flex w-[32px] h-[32px] p-[10px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor"></div>
                    <p className="flex text-mainColor font-mainFont">
                      NANO Phone
                    </p>
                  </div>
                  <div className=" flex items-center gap-[32px]">
                    <div className=" flex w-[32px] h-[32px] p-[10px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0]"></div>
                    <p className=" flex text-[#A0A0A0] font-mainFont">
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className=" flex-1 flex flex-col justify-center items-center gap-[64px]">
                  <div className="flex flex-col justify-center items-center gap-[32px] self-stretch">
                    <div className=" flex h-[448px] p-[10px] flex-col justify-center items-center gap-[10px] self-stretch bg-mainColor">
                      <p className=" text-[#FFF] font-mainFont text-[36px] leading-[40px] font-medium">
                        Coming Soon
                      </p>
                    </div>
                    <div className=" flex flex-start gap-[32px] self-stretch">
                      <div className=" flex-1 flex h-[4px] items-start rounded-[100px] bg-mainColor"></div>
                      <div className="flex-1 flex h-[4px] items-start rounded-[100px] bg-[#A0A0A0]"></div>
                      <div className="flex-1 flex h-[4px] items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className=" flex px-[32px] py-[12px] items-start gap-[16px] rounded-[200px] !bg-[#000] text-[#FFF] font-mainFont text-[30px] leading-[36px] font-normal"
                  >
                    Learn more
                  </Button>
                </div>
                <div className=" flex-1 flex flex-col justify-center items-center gap-[80px] self-stretch"></div>
              </div>
              <div className=" flex table:hidden items-center flex-col justify-center gap-[32px] self-stretch">
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <div className=" flex item-center gap-[12px]">
                    <div className=" flex w-[16px] h-[16px] p-[10px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor"></div>
                    <p className=" flex text-mainColor font-mainFont text-[18px] leading-[28px]">
                      NANO Phone
                    </p>
                  </div>
                  <div className=" flex items-center gap-[12px]">
                    <div className=" flex w-[16px] h-[16px] p-[10px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0]"></div>
                    <p className=" flex text-[#A0A0A0] font-mainFont text-[18px] leading-[28px]">
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[32px] self-stretch">
                  <div className=" flex h-[448px] p-[10px] flex-col justify-center items-center gap-[10px] self-stretch bg-mainColor">
                    <p className=" text-[#FFF] font-mainFont text-[36px] leading-[40px] font-medium">
                      Coming Soon
                    </p>
                  </div>
                  <div className=" flex flex-start gap-[32px] self-stretch">
                    <div className=" flex-1 flex h-[4px] items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex-1 flex h-[4px] items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex-1 flex h-[4px] items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className=" w-auto flex px-[32px] py-[12px] items-start gap-[16px] rounded-[200px] !bg-[#000] text-[#FFF] font-mainFont text-[30px] leading-[36px] font-normal"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white ">
        <div className=" m-w-[1728px] m-auto display:p-[86px] table:p-[64px] phone:p-[44px] px-[24px] pb-[24px] pt-0">
          <div
            className="w-full bg-center bg-cover flex display:p-[128px] table:p-[96px] phone:p-[72px] py-[64px] px-[72px] flex-col items-start gap-[64px] self-stretch"
            style={{
              backgroundImage: "url('images/early_background.svg')",
            }}
          >
            <p className="text-[#FFF] font-mainFont font-light display:text-[36px] display:leading-[40px] table:text-[30px] table:leading-[36px] phone:text-[24px] phone:leading-[32px] text-[18px] leading-[28px]">
              Investments
            </p>
            <div className="flex flex-col items-start self-stretch justify-center ">
              <NFont.titleText
                color={"white"}
                data-aos="fade-up"
                data-aos-duration="300"
              >
                For early investors{" "}
                <span>it could be lead to exciting times</span>
              </NFont.titleText>
              <p className="  text-[#A0A0A0] !font-[Suisse BP Int'l] display:text-[60px] table:text-[50px] phone:text-[40px] text-[30px] !font-light display:leading-[60px] table:leading-[52px] phone:leading-[44px] leading-[36px]  w-full">
                Whatever the future holds, this is just the beginning of an
                exciting new technology.
              </p>
            </div>
            <Button
              variant="contained"
              className=" w-auto flex display:px-[64px] display:py-[12px] table:px-[52px] table:py-[10px] phone:px-[40px] phone:py-[8px] px-[24px] py-[6px] items-start gap-[16px] rounded-[200px] !bg-white/10 text-[#FFF] font-mainFont display:text-[30px] display:leading-[36px] table:text-[30px] table:leading-[36px] text-[14px] phone:text-[30px] phone:leading-[36px] leading-[20px] font-normal"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
