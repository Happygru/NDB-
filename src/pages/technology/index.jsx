import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@mui/material/Button";

const Technology = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="flex w-full flex-col">
      <div
        className="w-full bg-cover bg-center mt-[-1px]"
        style={{
          backgroundImage:
            "url('../assets/images/ndb_generate_background.svg')",
        }}
      >
        <div className=" m-auto max-w-[1728px] p-[72px] phone:px-[75px] phone:py-[72px] table:px-[150px] table:py-[128px] display:px-[300px] display:py-[256px]">
          <div className="relative flex items-center justify-start py-[288px] phone:py-[228px] table:py-[178px] display:py-[128px]">
            <p className=" text-p-72-30 text-[30px] text-[#FFF]">
              NDB generates electricity similar
              <br />
              to a&nbsp;
              <span className="text-underline-4">solar cell</span>
              <br />
              but using radiation from&nbsp;
              <span className="text-underline-4">decay</span>
              <br />
              instead of sunlight.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col items-center justify-start gap-[10px] self-stretch px-[72px] py-[72px] phone:px-[76px] phone:py-[70px] table:px-[81px] table:py-[68px] display:px-[86px] display:py-[64px]">
            <div className="phone:[64px] flex flex-col items-start gap-[32px] self-stretch p-0 phone:gap-[42px] phone:py-[42px] table:gap-[52px] table:py-[80px] table:pr-[128px] display:gap-[64px] display:py-[118px] display:pr-[256px]">
              <div className=" flex flex-col items-start justify-center gap-[32px] self-stretch">
                <p className=" text-p-72-30 text-[30px] text-[#000]">
                  Our Technology
                </p>
                <p className=" text-p-60-24 text-[24px] text-[#000]">
                  NDB cell relies on beta-emitting radioisotopes coupled with an
                  energy conversion technology, converting the energy from beta
                  particle emissions of a radioactive source into electrical
                  power. The decay process result in the emission of a
                  high-energy beta particle (electron), which is efficiently
                  captured by the betavoltaic cell.
                </p>
              </div>
              <p className=" text-p-36-18 text-mainColor text-[18px]">
                The energetic electron partakes in inelastic scattering within
                the SiC semiconductor, sparking the creation of electron-hole
                pairs at the p-n junction. The inherent electric field within
                this junction disentangles these charge carriers (electrons and
                holes), consequently generating a potential difference and
                ultimately electricity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full border-t-2 border-t-black bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" item-start flex gap-0 self-stretch p-[16px] phone:px-[36px] phone:py-[21px] table:px-[56px] table:py-[26px] display:gap-[128px] display:px-[86px] display:py-[32px]">
            <div className=" hidden flex-col items-start justify-center gap-[32px] display:flex">
              <p className=" self-stretch font-mainFont text-[30px] font-light leading-[36px] text-[#000]">
                Features
              </p>
            </div>
            <div className="flex flex-1 items-start justify-between gap-[8px] phone:gap-0">
              <div className=" flex flex-1 items-center gap-[8px]">
                <div className="gao-[10px] flex flex-col items-start self-stretch">
                  <div className="flex flex-1 items-center gap-[10px]">
                    <div className="flex h-[6px] w-[6px] flex-col items-center justify-center phone:h-[3px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                  </div>
                  <div className=" flex w-[16px] flex-1 flex-col items-center"></div>
                </div>
                <div className="justify-content flex flex-col items-start gap-[8px]">
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">01</p>
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">
                    Power Source
                  </p>
                </div>
              </div>
              <div className=" flex flex-1 items-center gap-[8px]">
                <div className="gao-[10px] flex flex-col items-start self-stretch">
                  <div className="flex flex-1 items-center gap-[10px]">
                    <div className="flex h-[6px] w-[6px] flex-col items-center justify-center phone:h-[3px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                  </div>
                  <div className=" flex w-[16px] flex-1 flex-col items-center"></div>
                </div>
                <div className="justify-content flex flex-col items-start gap-[8px]">
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">02</p>
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">
                    Thin-Film
                  </p>
                </div>
              </div>
              <div className=" flex flex-1 items-center gap-[8px]">
                <div className="gao-[10px] flex flex-col items-start self-stretch">
                  <div className="flex flex-1 items-center gap-[10px]">
                    <div className="flex h-[6px] w-[6px] flex-col items-center justify-center phone:h-[3px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                  </div>
                  <div className=" flex w-[16px] flex-1 flex-col items-center"></div>
                </div>
                <div className="justify-content flex flex-col items-start gap-[8px]">
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">03</p>
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">
                    rcRE System
                  </p>
                </div>
              </div>
              <div className=" flex flex-1 items-center gap-[8px]">
                <div className="gao-[10px] flex flex-col items-start self-stretch">
                  <div className="flex flex-1 items-center gap-[10px]">
                    <div className=" flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] bg-[#000] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                  </div>
                  <div className=" flex w-[16px] flex-1 flex-col items-center"></div>
                </div>
                <div className="justify-content flex flex-col items-start gap-[8px] ">
                  <p className="text-p-30-12 text-[12px] text-[#000]">04</p>
                  <p className="text-p-30-12 text-[12px] text-[#000]">
                    TransducerX
                  </p>
                </div>
              </div>
              <div className=" flex flex-1 items-center gap-[8px]">
                <div className="gao-[10px] flex flex-col items-start self-stretch">
                  <div className="flex flex-1 items-center gap-[10px]">
                    <div className="flex h-[6px] w-[6px] flex-col items-center justify-center phone:h-[3px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                  </div>
                  <div className=" flex w-[16px] flex-1 flex-col items-center"></div>
                </div>
                <div className="justify-content flex flex-col items-start gap-[8px]">
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">05</p>
                  <p className="text-p-30-12 text-[12px] text-[#A0A0A0]">
                    Recycling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 01 */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
              <p className="text-mainColor text-p-128-72 text-[72px]">01</p>
              <div className="flex flex-col items-start justify-center gap-[32px]">
                <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                  Power Source
                </p>
                <p className=" text-mainColor text-p-36-18 self-stretch text-[18px]">
                  NDB&apos;s innovative technology capitalizes on a broad
                  spectrum of radiation types and radioisotopes to power its
                  advanced nuclear voltaic cells. This process transforms
                  nuclear waste or radioisotopes into a long-lasting electricity
                  source, positioning NDB as a market-responsive champion in
                  eco-friendly, sustainable power solutions.
                </p>
              </div>
            </div>
            <div
              className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
              style={{
                backgroundImage: "url('../assets/images/01Media.png')",
              }}
            ></div>
            <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/* 02 */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
              <p className="text-mainColor text-p-128-72 text-[72px]">02</p>
              <div className="flex flex-col items-start justify-center gap-[32px]">
                <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                  Thin-Film
                </p>
                <p className=" text-mainColor text-p-36-18 self-stretch text-[18px]">
                  In NDB&apos;s technology, cell thickness is key to
                  &apos;internal absorption,&apos; the process where energy is
                  stored within the radioisotope region. By utilizing a
                  thin-film design, NDB effectively reduces self-absorption,
                  thereby maximizing radiation collection and energy conversion.
                  Moreover, the flexible design allows for tailoring of the
                  technology to suit a range of applications, underscoring its
                  adaptability as an energy solution
                </p>
              </div>
            </div>
            <div
              className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
              style={{
                backgroundImage: "url('../assets/images/02Media.png')",
              }}
            ></div>
            <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
              <p className="text-mainColor text-p-128-72 text-[72px]">03</p>
              <div className="flex flex-col items-start justify-center gap-[32px]">
                <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                  rcRE System
                </p>
                <p className=" text-mainColor text-p-36-18 self-stretch text-[18px]">
                  Each radioisotope generates significant heat. NDB&apos;s
                  technology, with its strategic placement of the source and
                  cells, enables optimal inelastic scattering within chosen
                  materials in the nuclear voltaic cell. This ingenious
                  arrangement captures not only heat but also light created from
                  radioisotope&apos;s electron ionization. This process paves
                  the way for a rapid and efficient transformation into
                  practical electricity.
                </p>
              </div>
            </div>
            <div
              className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
              style={{
                backgroundImage: "url('../assets/images/03Media.svg')",
              }}
            ></div>
            <div className="hidden w-full items-start justify-center gap-[64px] self-stretch table:flex">
              <div
                className="flex w-full bg-cover bg-center table:h-[427px] display:h-[746px]"
                style={{
                  backgroundImage: "url('../assets/images/03Media_1.svg')",
                }}
              ></div>
              <div
                className="flex w-full bg-cover bg-center table:h-[427px] display:h-[746px]"
                style={{
                  backgroundImage: "url('../assets/images/03Media_2.svg')",
                }}
              ></div>
            </div>
            <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/* 04 */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
              <p className="text-mainColor text-p-128-72 text-[72px]">04</p>
              <div className="flex flex-col items-start justify-center gap-[32px]">
                <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                  TransducerX
                </p>
                <p className=" text-mainColor text-p-36-18 self-stretch text-[18px]">
                  Each radioisotope produces significant heat. NDB&apos;s
                  technology strategically places the source and cells to
                  optimize inelastic scattering within specific materials in the
                  nuclear voltaic cell. This innovative arrangement not only
                  traps heat but also light from the radioisotope&apos;s
                  electron ionization, allowing for a rapid and effective
                  transformation into functional electricity.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[64px] self-stretch table:flex-row ">
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[327px] table:h-[427px] display:h-[746px]"
                style={{
                  backgroundImage: "url('../assets/images/04Media_1.svg')",
                }}
              ></div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[327px] table:h-[427px] display:h-[746px]"
                style={{
                  backgroundImage: "url('../assets/images/04Media_2.svg')",
                }}
              ></div>
            </div>
            <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/* 05 */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[128px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
              <p className="text-mainColor text-p-128-72 text-[72px]">05</p>
              <div className="flex flex-col items-start justify-center gap-[32px]">
                <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                  Recycling
                </p>
                <p className=" text-mainColor text-p-36-18 self-stretch text-[18px]">
                  At NANO, we are actively exploring the potential of
                  radioactive waste utilization. Our dialogue focuses on
                  repurposing nuclear fuel through innovative reprocessing and
                  recycling methods. This commitment not only bolsters
                  sustainability but also fosters a safe, secure environment for
                  harnessing clean energy.
                </p>
              </div>
            </div>
            <div
              className="flex h-[143px] w-full bg-cover bg-center phone:h-[228px] table:h-[313px] display:h-[400px]"
              style={{
                backgroundImage: "url('../assets/images/05Media.svg')",
              }}
            ></div>
            <div className=" flex flex-col items-start justify-center display:gap-[64px] table:gap-[52px] phone:gap-[42px] gap-[32px] self-stretch display:pr-[256px] table:pr-[128px] phone:pr-[64px] pr-0px">
              <p className=" text-p-72-30 text-[30px] text-[#141414]">
                Carbon Utilization at Scale
              </p>
              <p className="text-p-60-24 text-[24px] text-[#141414]">
                By expanding the application of our technology across various
                sectors, we aim to significantly reduce global CO2 emissions.
              </p>
              <p className=" text-36-18 display:w-3/5 table:w-4/5 phone:w-5/6 w-full text-[18px] text-[#141414]">
                As we expand our global footprint, we are commercializing our
                technology and products. At the same time, we aim to ensure fair
                distribution of our systems to communities that are
                disproportionately impacted by climate change.
              </p>
            </div>
            <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[128px] display:px-[86px]">
            <div className=" flex flex-col items-start gap-[8px] self-stretch">
              <p className=" text-mainColor text-p-72-30 self-stretch text-[30px]">
                NDB Facilities
              </p>
              <p className=" text-p-60-24 text-[#A0A0A0] text-[24px]">
                Where sustainable
                <br />
                innovation is made
              </p>
            </div>
            <div className="flex flex-col items-center self-stretch">
              <div className=" w-full grid grid-cols-1 table:grid-cols-2 display:gap-[128px] table:gap-[78px] phone:gap-[54px] gap-[32px]">
                <div className=" flex justify-center items-start gap-[10px] flex-1 w-full">
                  <div className="flex flex-col items-center gap-[32px] w-full">
                    <div
                      className="flex h-[287px] w-full bg-cover bg-center phone:h-[300px] table:h-[350px] display:h-[400px]"
                      style={{
                        backgroundImage: "url('assets/images/06Media_1.svg')",
                      }}
                    ></div>
                    <div className=" flex justify-start items-end self-stretch text-start">
                      <p className="text-p-36-18-500 text-mainColor">ORNL</p>
                      <p className="text-p-30-14 text-mainColor">
                        &nbsp;(CONTRACT TERMINATED)
                      </p>
                    </div>
                    <p className="text-p-36-18 text-mainColor">
                      The Oak Ridge National Laboratory (ORNL), located in
                      Tennessee, is the largest U.S. science and energy lab.
                      Funded by the Department of Energy, ORNL is renowned for
                      its research in materials, neutron science, and energy,
                      and houses world-leading supercomputers and neutron
                      sources.
                    </p>
                    <div className=" w-full justify-between flex py-[8px] justify-center items-start gap-[10px] border-t-[1px] border-t-[#C4C4C4] border-b-[1px] border-b-[#C4C4C4]">
                      <p className=" text-[#A0A0A0] text-p-20-14">Location</p>
                      <p className=" text-[#141414] text-p-24-14">
                        Oak Ridge, TN{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-start gap-[10px] flex-1 w-full h-full">
                  <div className="flex flex-col items-center gap-[32px] w-full h-full justify-between">
                    <div className="flex flex-col items-center gap-[32px] w-full h-full justify-start">
                      <div
                        className="flex h-[287px] w-full bg-cover bg-center phone:h-[300px] table:h-[350px] display:h-[400px]"
                        style={{
                          backgroundImage: "url('assets/images/06Media_2.svg')",
                        }}
                      ></div>
                      <div className=" flex justify-start items-end self-stretch text-start">
                        <p className="text-p-36-18-500 text-mainColor">
                          Horologe
                        </p>
                      </div>
                      <p className="text-p-36-18 text-mainColor">
                        Production Horlogère is a Swiss company that specializes
                        in assembling watches of various ranges and styles. It
                        has been in the business since 1974 and has a team of
                        experienced and skilled workers who can produce more
                        than 3,000 watches per week.
                      </p>
                    </div>
                    <div className=" w-full justify-between flex py-[8px] items-start gap-[10px] border-t-[1px] border-t-[#C4C4C4] border-b-[1px] border-b-[#C4C4C4]">
                      <p className=" text-[#A0A0A0] text-p-20-14">Location</p>
                      <p className=" text-[#141414] text-p-24-14">
                        Sion, Switzerland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden table:flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col table:flex-row justify-center items-start display:p-[86px] table:p-[42px] phone:p-[21px] py-[72px] display:gap-[86px] table:gap-[64px] phone:gap-[44px] gap-[36px] self-stretch">
            <div className=" items-center w-full flex-col flex p-[72px] phone:p-[68px]  table:p-[66px] display:p-[64px] gap-[64px]">
              <div className=" flex-1 flex items-center gap-[10px] self-stretch">
                <p className="flex-1 text-black text-p-36-18-500">NANO Phone</p>
                <div className=" flex w-[24px] h-[24px] p-[10px] flex-col items-center gap-[10px] rounded-full bg-black"></div>
                <p className="text-p-30-14 text-black underline">Reserve</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-[64px]">
                <div className="w-full flex flex-col justify-center gap-[32px]">
                  <div className="flex display:h-[448px] table:h-[377px] phone:h-[327px] h-[287px] bg-black flex-col justify-center items-center gap-[10px]">
                    <p className="text-p-36 text-white">Coming Soon</p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                className="button-30-14-3 !text-white !bg-black"
              >
                Learn more
              </Button>
            </div>
            <div className=" items-center w-full flex-col flex p-[72px] phone:p-[68px]  table:p-[66px] display:p-[64px] gap-[64px]">
              <div className=" flex-1 flex items-center gap-[10px] self-stretch">
                <p className="flex-1 text-black text-p-36-18-500">NANO Watch</p>
                <div className=" flex w-[24px] h-[24px] p-[10px] flex-col items-center gap-[10px] rounded-full bg-black"></div>
                <p className="text-p-30-14 text-black underline">Reserve</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-[64px]">
                <div className="w-full flex flex-col justify-center gap-[32px]">
                  <div className="flex display:h-[448px] table:h-[377px] phone:h-[327px] h-[287px] bg-black flex-col justify-center items-center gap-[10px]">
                    <p className="text-p-36 text-white">Coming Soon</p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                className="button-30-14-3 !text-white !bg-black"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
