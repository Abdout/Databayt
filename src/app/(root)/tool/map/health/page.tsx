"use client";
import Hospital from '@/components/hospital';
import Map from '@/components/try/Map'
import React from 'react'

// const Health = () => {
//   return (
//     <div>
//       {/* <Map />
//       <Hospital /> */}
      import type { NextPage } from "next";
import { useCallback } from "react";

const HomePC: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className="relative bg-gray-100 w-full h-[4555px] overflow-hidden text-right text-31xl text-black font-rubik">
      <div className="absolute top-[47px] left-[123px] w-[1266px] h-[66px] overflow-hidden text-left text-[49.72px]">
        <div className="absolute top-[0px] left-[0px] w-[1264px] flex flex-row items-center justify-center gap-[277px]">
          <div className="flex flex-row items-center justify-center p-[9.423076629638672px]">
            <div className="relative tracking-[0.04em]">Databayt</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[84px] text-[34.08px] font-inter">
            <div className="flex flex-row items-start justify-start gap-[36.51px]">
              <div
                className="relative tracking-[0.07em] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </div>
              <div className="relative tracking-[0.07em] opacity-[0.5]">
                Tool
              </div>
              <div className="relative tracking-[0.07em] opacity-[0.5]">
                Club
              </div>
              <div className="relative tracking-[0.07em] opacity-[0.5]">
                Community
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[15.01px]">
              <img
                className="relative w-[33.4px] h-[33.4px]"
                alt=""
                src="/vector.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start relative gap-[22px]">
                  <img
                    className="absolute my-0 mx-[!important] top-[22.2px] left-[14.5px] w-[37px] h-1 z-[0]"
                    alt=""
                    src="/line-21.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[39.8px] left-[14.5px] w-[37px] h-1 z-[1]"
                    alt=""
                    src="/line-22.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[926px] left-[129.4px] w-[1253.2px] h-[139px] overflow-hidden text-[47.58px]">
        <div className="absolute top-[0px] left-[359.4px] tracking-[0.07em] leading-[67.97px] font-medium inline-block w-[893.8px]">
          <p className="m-0">داتابيت Databayt</p>
          <p className="m-0 text-[40.78px]">مشروع تقني حول أتمتة الأعمال</p>
        </div>
      </div>
      <div className="absolute top-[1296.5px] left-[129.4px] w-[1253.2px] h-[68px] overflow-hidden text-[40.78px]">
        <div className="absolute top-[0px] left-[359.4px] tracking-[0.07em] leading-[67.97px] inline-block w-[893.8px] opacity-[0.3]">
          لبناء أدوات من الصفر.
        </div>
      </div>
      <div className="absolute top-[1593px] left-[563px] w-[386px] h-[74px] overflow-hidden">
        <div className="absolute top-[0px] left-[9px] tracking-[0.07em] leading-[73.29px]">
          Meet the team
        </div>
      </div>
      <div className="absolute top-[1756px] left-[55px] w-[1402px] h-[318.1px] overflow-hidden text-center text-[28.06px]">
        <div className="absolute top-[0px] left-[0px] w-[693px] overflow-x-auto flex flex-row items-start justify-start py-0 px-[70.16099548339844px] box-border gap-[80px]">
          <div className="relative bg-gray-100 box-border w-[264.3px] h-[318.1px] shrink-0 border-[0.9px] border-solid border-gray-200">
            <img
              className="absolute h-[27.51%] w-[33.48%] top-[23.2%] right-[33.71%] bottom-[49.29%] left-[32.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[208.7px] left-[22.2px] tracking-[0.07em] leading-[35.08px] font-light inline-block w-[217.5px]">
              <p className="m-0">Osman</p>
              <p className="m-0">Abdout</p>
            </div>
          </div>
          <div className="relative bg-gray-100 box-border w-[264.3px] h-[318.1px] shrink-0 border-[0.9px] border-solid border-gray-200">
            <img
              className="absolute h-[27.51%] w-[33.48%] top-[23.2%] right-[33.71%] bottom-[49.29%] left-[32.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[208.7px] left-[22.2px] tracking-[0.07em] leading-[35.08px] font-light inline-block w-[217.5px]">
              <p className="m-0">Osman</p>
              <p className="m-0">Abdout</p>
            </div>
          </div>
          <div className="relative bg-gray-100 box-border w-[264.3px] h-[318.1px] shrink-0 border-[0.9px] border-solid border-gray-200">
            <img
              className="absolute h-[27.51%] w-[33.48%] top-[23.2%] right-[33.71%] bottom-[49.29%] left-[32.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[208.7px] left-[22.2px] tracking-[0.07em] leading-[35.08px] font-light inline-block w-[217.5px]">
              <p className="m-0">Osman</p>
              <p className="m-0">Abdout</p>
            </div>
          </div>
          <div className="relative bg-gray-100 box-border w-[264.3px] h-[318.1px] shrink-0 border-[0.9px] border-solid border-gray-200">
            <img
              className="absolute h-[27.51%] w-[33.48%] top-[23.2%] right-[33.71%] bottom-[49.29%] left-[32.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[208.7px] left-[22.2px] tracking-[0.07em] leading-[35.08px] font-light inline-block w-[217.5px]">
              <p className="m-0">Osman</p>
              <p className="m-0">Abdout</p>
            </div>
          </div>
          <div className="relative bg-gray-100 box-border w-[264.3px] h-[318.1px] shrink-0 border-[0.9px] border-solid border-gray-200">
            <img
              className="absolute h-[26.09%] w-[31.78%] top-[23.89%] right-[34.54%] bottom-[50.02%] left-[33.67%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[208.7px] left-[22.2px] tracking-[0.07em] leading-[35.08px] font-light inline-block w-[217.5px]">
              <p className="m-0">Osman</p>
              <p className="m-0">Abdout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2163px] left-[639px] w-[234px] h-20 overflow-hidden">
        <div className="absolute top-[0px] left-[19px] tracking-[0.07em] leading-[79.33px]">
          Sponsor
        </div>
      </div>
      <div className="absolute top-[2538px] left-[615px] tracking-[0.07em] leading-[20px]">
        Contribute
      </div>
      <div className="absolute top-[3053px] left-[637px] w-[238px] h-10 overflow-hidden text-left">
        <div className="absolute top-[0px] left-[0px] tracking-[0.07em] leading-[20px]">
          <p className="m-0">Donation</p>
        </div>
      </div>
      <div className="absolute top-[2628px] left-[241px] w-[1030px] h-[144.3px] overflow-hidden">
        <div className="absolute top-[0px] left-[2px] w-[1028px] flex flex-row items-center justify-start gap-[30px]">
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-48.svg"
          />
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-71.svg"
          />
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-70.svg"
          />
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-69.svg"
          />
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-67.svg"
          />
          <img
            className="relative w-[144.2px] h-[144.3px]"
            alt=""
            src="/group-68.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2295px] left-[243px] w-[1026px] h-[146px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[30px]">
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-481.svg"
          />
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-711.svg"
          />
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-701.svg"
          />
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-691.svg"
          />
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-671.svg"
          />
          <img
            className="relative w-[146px] h-[146px]"
            alt=""
            src="/group-681.svg"
          />
        </div>
      </div>
      <div className="absolute top-[3239px] left-[553px] w-[406px] h-[90px] overflow-hidden text-left text-[39.86px]">
        <div className="absolute top-[0px] left-[0px] h-[90px] flex flex-row items-center justify-center gap-[22.5px]">
          <img
            className="relative w-[126.2px] h-[126.2px] object-cover"
            alt=""
            src="/coffee-1@2x.png"
          />
          <div className="relative tracking-[0.07em] leading-[42.71px] font-light">
            <p className="m-0">Buy</p>
            <p className="m-0">me coffee</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[3131px] left-[583px] w-[346px] h-5 overflow-hidden text-left text-[40px]">
        <div className="absolute top-[0px] left-[0px] tracking-[0.07em] leading-[20px] font-light">
          Is appreciated at
        </div>
      </div>
      <div className="absolute top-[164px] left-[0px] bg-whitesmoke w-[1512px] h-[701px] overflow-hidden text-left text-[168.86px]">
        <div className="absolute top-[167px] left-[89px] font-medium inline-block w-[625.3px] h-[205.8px]">
          داتابيت
        </div>
        <div className="absolute top-[112px] left-[323px] text-[31.66px]">
          القلم اقوى من الذاكرة
        </div>
        <div className="absolute top-[473px] left-[140px] bg-gold w-[366.3px] h-[110px] flex flex-col items-center justify-start py-[42.24492645263672px] px-0 box-border text-right text-[35px] text-gray-200 font-inter">
          <div className="relative tracking-[0.07em] leading-[42.86px] font-semibold inline-block w-[217.5px] h-[25.5px] shrink-0">
            Get started
          </div>
        </div>
        <div className="absolute top-[83px] left-[801px] rounded-[50%] bg-black w-[500px] h-[500px]" />
      </div>
      <div className="absolute top-[1092.2px] left-[129px] w-[1254px] h-[203.6px] overflow-hidden text-[40.78px]">
        <div className="absolute top-[0px] left-[72px] w-[1182px] h-[203.6px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] tracking-[0.07em] leading-[67.97px] inline-block w-[1182px]">{`داتابيت معنية بتقديم أدوات تساعد على أتمتة الأعمال، وتسعى داتابيت لتكون جسرا يوصل بالأدوات المتاحة بالفعل في السوق  `}</div>
          <div className="absolute top-[135.6px] left-[0px] tracking-[0.07em] leading-[67.97px] inline-block w-[1182px] opacity-[0.4]">
            العالمي، المجانية منها والمدفوعة الثمن، وتسعى كذلك
          </div>
        </div>
      </div>
      <div className="absolute top-[1411.6px] left-[129.4px] w-[1253.2px] h-[68px] overflow-hidden text-[40.78px] text-midnightblue">
        <div className="absolute top-[0px] left-[359.4px] w-[893.8px] h-[68px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] tracking-[0.07em] leading-[67.97px] inline-block w-[893.8px]">
            أقرا المزيد
          </div>
          <img
            className="absolute h-[24.41%] w-[3.28%] top-[50.59%] right-[24.54%] bottom-[25%] left-[72.19%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2800px] left-[243px] w-[1026px] h-[144.1px] overflow-hidden text-left text-[40.89px] text-midnightblue">
        <div className="absolute top-[0px] left-[0px] w-[886px] h-[144.1px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[680px] flex flex-row items-center justify-start gap-[30px]">
            <img
              className="relative w-[144.1px] h-[144.1px]"
              alt=""
              src="/group-672.svg"
            />
            <img
              className="relative w-[144.1px] h-[144.1px]"
              alt=""
              src="/group-482.svg"
            />
            <img
              className="relative w-[144.1px] h-[144.1px]"
              alt=""
              src="/group-682.svg"
            />
            <img
              className="relative w-[144.1px] h-[144.1px]"
              alt=""
              src="/group-692.svg"
            />
          </div>
          <div className="absolute top-[51px] left-[715px] tracking-[0.1em] leading-[68.16px] inline-block w-[122px]">
            More
          </div>
          <img
            className="absolute h-[11.1%] w-[3.39%] top-[60.37%] right-[0%] bottom-[28.52%] left-[96.61%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[3432px] left-[0px] bg-gold w-[1512px] h-[1123px] overflow-hidden text-[39.62px]">
        <div className="absolute top-[1006.6px] left-[541.4px] flex flex-row items-center justify-center gap-[19.81px] text-left text-[33.96px] font-inter">
          <img
            className="relative w-[41px] h-[41px] object-cover"
            alt=""
            src="/copyright-1@2x.png"
          />
          <div className="relative tracking-[0.07em] font-medium">
            Databayt, All rights free
          </div>
        </div>
        <div className="absolute top-[829px] left-[335px] w-[842.7px] flex flex-row items-center justify-start gap-[18.66px]">
          <div className="relative w-[741.2px] h-[118.1px]">
            <img
              className="absolute top-[11.5px] left-[0px] w-[95.9px] h-[95.2px] object-cover"
              alt=""
              src="/github-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[127px] w-[118.1px] h-[118.1px] overflow-hidden"
              alt=""
              src="/icbaselinediscord.svg"
            />
            <img
              className="absolute top-[16.7px] left-[276.2px] w-[95.8px] h-[84.6px] object-cover"
              alt=""
              src="/email-1@2x.png"
            />
            <img
              className="absolute top-[12.4px] left-[403.1px] w-[93.4px] h-[93.4px] object-cover"
              alt=""
              src="/whatsapp-1@2x.png"
            />
            <img
              className="absolute top-[14.2px] left-[527.6px] w-[89.7px] h-[89.7px] object-cover"
              alt=""
              src="/messenger-1@2x.png"
            />
            <img
              className="absolute top-[12.6px] left-[648.4px] w-[92.9px] h-[92.9px] object-cover"
              alt=""
              src="/twitter-1@2x.png"
            />
          </div>
          <img
            className="relative w-[107.6px] h-[107.6px] object-cover"
            alt=""
            src="/coffee-11@2x.png"
          />
        </div>
        <div className="absolute top-[73px] left-[958px] w-[266.1px] h-[188.2px] flex flex-col items-start justify-start gap-[5.66px]">
          <div className="relative tracking-[0.07em] leading-[56.61px]">
            Head office
          </div>
          <div className="relative text-[36.79px] tracking-[0.07em] leading-[62.27px] font-light text-left">
            <p className="m-0">Arkwit, Sudan</p>
            <p className="m-0">Box: 1470</p>
          </div>
        </div>
        <div className="absolute top-[398.7px] left-[219px] tracking-[0.07em] leading-[56.61px]">
          Databayt
        </div>
        <div className="absolute top-[73px] left-[280px] tracking-[0.07em] leading-[56.61px]">
          English
        </div>
        <div className="absolute top-[485.4px] left-[233.6px] text-[36.79px] tracking-[0.07em] leading-[62.27px] font-light text-left">
          <p className="m-0">Roadmap</p>
          <p className="m-0">Skills set</p>
          <p className="m-0">Documentation</p>
          <p className="m-0">Contribute</p>
        </div>
        <img
          className="absolute top-[81.9px] left-[226.6px] w-[36.8px] h-[36.8px] object-cover"
          alt=""
          src="/web-1@2x.png"
        />
        <div className="absolute top-[151.3px] left-[279.1px] tracking-[0.07em] leading-[56.61px]">
          Light
        </div>
        <img
          className="absolute top-[156.4px] left-[220.7px] w-[46.5px] h-[46.5px]"
          alt=""
          src="/vector3.svg"
        />
        <div className="absolute top-[251.2px] left-[221.6px] tracking-[0.07em] leading-[56.61px]">
          Sudan
        </div>
        <div className="absolute top-[308.3px] left-[223.2px] text-[36.79px] tracking-[0.07em] leading-[56.61px] font-light">
          Khartoum
        </div>
        <img
          className="absolute top-[308.3px] left-[959.9px] w-[325px] h-[265.7px] object-cover"
          alt=""
          src="/screenshot-20231014-201223-1@2x.png"
        />
        <div className="absolute top-[456px] left-[224px] box-border w-[186.4px] h-[1.4px] border-t-[1.4px] border-solid border-black" />
      </div>
    </div>
  );
};

export default HomePC;


//     </div>
    
//   )
// }

// export default Health