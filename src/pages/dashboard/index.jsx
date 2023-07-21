import { useEffect } from "react";
import AOS from "aos";

import Button from "@mui/material/Button";

const Dashboard = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="flex w-full flex-col">
      {/* hero section */}
      <div
        className="hidden w-full bg-cover bg-center phone:block"
        style={{
          backgroundImage: "url('assets/images/hero_background.svg')",
        }}
      >
        <div className=" relative m-auto hidden h-full max-w-[1728px] items-center justify-start phone:flex phone:px-[75px] phone:py-[64px] table:px-[150px] table:py-[128px] display:px-[300px] display:py-[256px] ">
          <div
            className="left-0 top-0 flex w-full flex-col items-start gap-[16px] phone:gap-[32px] phone:py-[32px] table:gap-[48px] table:py-[64px] display:gap-[64px] display:py-[128px]"
            data-aos="fade-up"
          >
            <p className=" text-p-72-30 text-[#FFF]">
              Transforming nuclear waste into
              <br /> never-recharge
              <br /> cell phones and watches
            </p>
            <Button
              variant="contained"
              className="button-30-14-1 !bg-white/10 hover:!bg-white/25"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px] p-[24px] phone:p-[32px] table:p-[64px] display:p-[86px]">
          <div
            className=" relative flex items-center justify-start bg-cover bg-center px-[36px] py-[72px]  phone:p-[72px] table:p-[92px] display:p-[128px]"
            style={{
              backgroundImage:
                "url('assets/images/ndb_generate_background.svg')",
            }}
          >
            <div
              className="left-0 top-0 flex w-full flex-col items-start gap-[16px] py-[78px] phone:gap-[32px] phone:pb-0 phone:pt-[96px] table:gap-[48px] table:pt-[128px]  display:gap-[64px] display:pt-[256px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col">
                <p
                  className="text-p-72-30 text-[#FFF] text-[30px]"
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  NDB generates electricity similar <br />
                  to a solar cell
                </p>
                <p className=" text-p-60-24 w-full text-[24px] text-[#A0A0A0]">
                  But using radiation from decay
                  <br /> instead of sunlight
                </p>
              </div>
              <Button
                variant="contained"
                className=" button-30-14-1 !bg-white/10 hover:!bg-white/25"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" relative flex items-center justify-start px-[72px] py-[72px] phone:px-[136px] phone:py-[166px] table:px-[196px] table:py-[258px] display:px-[256px] display:py-[340px]">
            <div
              className="left-0 top-0 flex w-full flex-col items-start gap-[16px] py-[72px] phone:gap-[32px] phone:pb-[96px] phone:pt-0 table:gap-[48px] table:pb-[128px] display:gap-[64px] display:pb-[256px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4 phone:gap-8">
                <p
                  className=" text-p-72-30 text-[30px] text-[#000]"
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  Our Technology
                </p>
                <p
                  className=" text-mainColor self-stretch font-mainFont text-[18px] font-light leading-[28px] phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px]"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  Incorporating a spherical Silicon Carbide (SiC) semiconductor
                  into cell design provides unique opportunities for optimizing
                  energy conversion and enhancing the cell&apos;s durability.
                  This innovative form factor represents a significant evolution
                  from traditional flat-surface semiconductor wafers.
                </p>
              </div>
              <Button
                variant="contained"
                className=" button-30-14-2 !bg-black !text-white"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('../assets/images/technology_background.svg')",
        }}
      >
        <div className=" m-auto max-w-[1728px]">
          <div className=" relative flex items-center justify-start px-[72px] py-[72px] phone:px-[136px] phone:py-[166px] table:px-[196px] table:py-[258px] display:px-[256px] display:py-[340px] ">
            <div
              className="left-0 top-0 flex w-full flex-col items-start gap-[16px] py-[72px] phone:gap-[32px] phone:pb-[96px] phone:pt-0 table:gap-[48px] table:pb-[128px] display:gap-[64px] display:pb-[256px]"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4 phone:gap-8">
                <p
                  className=" text-p-72-30 text-[30px] text-[#FFF]"
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  Our Technology
                </p>
                <p
                  className=" self-stretch font-mainFont text-[18px] font-light leading-[28px] text-white phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px]"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  Incorporating a spherical Silicon Carbide (SiC) semiconductor
                  into cell design provides unique opportunities for optimizing
                  energy conversion and enhancing the cell&apos;s durability.
                  This innovative form factor represents a significant evolution
                  from traditional flat-surface semiconductor wafers.
                </p>
              </div>
              <Button
                variant="contained"
                className=" button-30-14-2 !bg-white !text-black"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                <span>Learn more</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex shrink-0 flex-col items-center self-stretch py-[24px] phone:gap-[10px] phone:py-[46px] table:py-[66px] display:py-[86px]">
            <div className=" flex-between item-start flex flex-col gap-[72px] self-stretch bg-[#FAFAFA] p-[72px] phone:gap-[32px] phone:p-[70px] table:p-[68px] display:p-[64px]">
              <div className="phone:[7px] flex items-center justify-center gap-[6px] self-stretch table:gap-[8px] display:gap-[10px] ">
                <p className=" flex-1 font-mainFont text-[18px] font-medium leading-[28px] text-black phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px]">
                  NANO Products
                </p>
                <div className="flex h-[6px] w-[6px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor p-[10px] phone:h-[8px] phone:w-[8px] table:h-[10px] table:w-[10px] display:h-[12px] display:w-[12px]"></div>
                <p className="font-mainFont text-[18px] font-medium leading-[20px] text-black underline phone:text-[22px] phone:leading-[25px] table:text-[26px] table:leading-[30px] display:text-[30px] display:leading-[36px]">
                  Reserve
                </p>
              </div>
              <div className="hidden items-center justify-between self-stretch table:flex ">
                <div className=" flex flex-1 flex-col items-start justify-center gap-[32px] self-stretch">
                  <div className=" item-center flex gap-[32px]">
                    <div className=" flex h-[32px] w-[32px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor p-[10px]"></div>
                    <p className="text-mainColor flex font-mainFont">
                      NANO Phone
                    </p>
                  </div>
                  <div className=" flex items-center gap-[32px]">
                    <div className=" flex h-[32px] w-[32px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0] p-[10px]"></div>
                    <p className=" flex font-mainFont text-[#A0A0A0]">
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className=" flex flex-1 flex-col items-center justify-center gap-[64px]">
                  <div className="flex flex-col items-center justify-center gap-[32px] self-stretch">
                    <div className=" flex h-[448px] flex-col items-center justify-center gap-[10px] self-stretch bg-mainColor p-[10px]">
                      <p className=" font-mainFont text-[36px] font-medium leading-[40px] text-[#FFF]">
                        Coming Soon
                      </p>
                    </div>
                    <div className=" flex-start flex gap-[32px] self-stretch">
                      <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                      <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                      <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className="button-30-14-3 !text-white !bg-black"
                  >
                    Learn more
                  </Button>
                </div>
                <div className=" flex flex-1 flex-col items-center justify-center gap-[80px] self-stretch"></div>
              </div>
              <div className=" flex flex-col items-center justify-center gap-[32px] self-stretch table:hidden">
                <div className="flex flex-col items-center gap-[6px] self-stretch">
                  <div className=" item-center flex gap-[12px]">
                    <div className=" flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-mainColor p-[10px]"></div>
                    <p className=" text-mainColor flex font-mainFont text-[18px] leading-[28px]">
                      NANO Phone
                    </p>
                  </div>
                  <div className=" flex items-center gap-[12px]">
                    <div className=" flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0] p-[10px]"></div>
                    <p className=" flex font-mainFont text-[18px] leading-[28px] text-[#A0A0A0]">
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[32px] self-stretch">
                  <div className=" flex h-[448px] flex-col items-center justify-center gap-[10px] self-stretch bg-mainColor p-[10px]">
                    <p className=" font-mainFont text-[36px] font-medium leading-[40px] text-[#FFF]">
                      Coming Soon
                    </p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="button-30-14-4 !bg-black !text-white"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px] px-[24px] pb-[24px] pt-0 phone:p-[44px] table:p-[64px] display:p-[86px]">
          <div
            className=" relative flex flex-col items-start gap-[64px] self-stretch bg-cover bg-center px-[72px] py-[64px] phone:p-[72px] table:p-[96px] display:p-[128px]"
            style={{
              backgroundImage: "url('../assets/images/early_background.svg')",
            }}
          >
            <p className="p-0 font-mainFont text-[18px] font-light leading-[28px] text-[#FFF] phone:text-[24px] phone:leading-[32px] table:pb-[128px] table:text-[30px] table:leading-[36px] display:pb-[256px] display:text-[36px] display:leading-[40px]">
              Investments
            </p>
            <div className="flex flex-col items-start justify-center self-stretch ">
              <p
                className=" text-p-72-30 text-[30px] text-[#FFF]"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                For early investors
                <span>it could be lead to exciting times</span>
              </p>
              <p className="  !font-[Suisse BP Int'l] w-full text-[30px] !font-light leading-[36px] text-[#A0A0A0] phone:text-[40px] phone:leading-[44px] table:text-[50px] table:leading-[52px] display:text-[60px]  display:leading-[60px]">
                Whatever the future holds, this is just the beginning of an
                exciting new technology.
              </p>
            </div>
            <Button
              variant="contained"
              className="button-30-14-1 !bg-white/5 hover:!bg-white/15 !text-white"
            >
              Invest now
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="mb-[32px] w-full bg-cover bg-center phone:mb-[55px] table:mb-[70px] display:mb-[86px]"
        style={{
          backgroundImage: "url('../assets/images/mission_Background.svg')",
        }}
      >
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-start justify-between gap-[258px] self-stretch p-[64px]">
            <div className=" flex items-center gap-[10px] self-stretch">
              <p className="font-mainFont text-[36px] font-light leading-[40px] text-[#FFF]">
                Sustainability
              </p>
            </div>
            <div className="flex flex-col items-start justify-center self-stretch">
              <p
                className=" text-p-72-30 text-[30px] text-[#FFF]"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                Our mission extends beyond mere words
              </p>
              <p className="!font-[Suisse BP Int'l] w-full text-[30px] !font-light leading-[36px] text-[#A0A0A0] phone:text-[40px] phone:leading-[44px] table:text-[50px] table:leading-[52px] display:text-[60px]  display:leading-[60px]">
                We are determined to protect our environment
              </p>
            </div>
            <Button
              variant="contained"
              className=" button-30-14-1 !bg-white/10 hover:!bg-white/25 !text-white"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
