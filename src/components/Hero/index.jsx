import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../utils/image-resolver";

const Hero = ({ data }) => {
  return (
    <div
      style={{
        background: `url(${
          imageResolver(data?.hero?.background).path
        }) no-repeat center center/cover`,
      }}
      className="relative w-full overflow-visible"
    >
      <div className="max-w-[1200px] px-4 lg:px-0 mx-auto pt-[58px]  z-10">
        <div className="flex flex-col md:flex-row ">
          <div className="mt-[102px] lg:max-w-[543px] md:pt-0 sm:pt-[620px] pt-[520px] order-2 md:order-none ">
            <div className="">
              <h1 className="md:text-[48px] sm:text-4xl text-[32px] leading-[37.2px] font-[600] md:leading-[56px] text-[#4E4B66] mb-[16px]">
                {data?.hero?.headline}
              </h1>
            </div>
            <p className="md:text-[18px] sm:text-base text-[14px] leading-[24px] tracking-wider md:leading-[34px] font-[400] text-[#4E4B66]">
              {data?.hero?.description}
            </p>
            <div className="mt-[52px] gap-x-[20px] flex md:flex-row flex-col md:gap-0 gap-[10px]  items-center md:pb-[304px] pb-0">
              <div className="w-full md:w-auto">
                <Link href={(data?.hero && data?.hero.cta && data?.hero.cta[0].link) || "/"} legacyBehavior>
                  <a href="" className="" title={data?.hero && data?.hero.cta && data?.hero.cta[0].name}>
                  <button className="lg:px-[50px] px-3 w-full md:w-auto   py-[13px] bg-[#5F2EEA] rounded-[40px] text-[16px] leading-[28px]  font-[600] text-white ">
                    {data?.hero && data?.hero.cta && data?.hero.cta[0].name}
                  </button>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-auto">
                <div className="w-full md:w-auto pl-[11px] pr-[36px] py-[6px] bg-[#fbfbfe] rounded-[40px]  text-white flex items-center md:justify-start justify-center border border-white gap-x-[19px]  ">
                  <a
                    href={`tel:+${
                      data?.hero && data?.hero.cta && data?.hero.cta[1]?.name
                    }`}
                    className="flex space-x-5"
                  >
                    <div className="">
                      <img
                        src={
                          imageResolver(
                            data?.hero &&
                              data?.hero.cta &&
                              data?.hero?.cta[1]?.img
                          ).path
                        }
                        alt="image"
                        className=""
                      />
                    </div>

                    <div className="flex flex-col items-center ">
                      <p className="text-[10px] leading-[18px] font-[600] text-[#14142B] w-full text-left">
                        {data?.hero &&
                          data?.hero?.cta &&
                          data?.hero?.cta[1]?.name}
                      </p>
                      <p className="text-[#4E4B66] text-[10px] leading-[18px] font-[500] w-full">
                        {data?.hero &&
                          data?.hero?.cta &&
                          data?.hero?.cta[1]?.link}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 w-full md:p-0 md:order-none">
            <div className="absolute top-0 md:left-0 -left-[200px] z-10">
              <img
                src={imageResolver(data?.hero?.image).path}
                alt="image"
                className=""
              />
            </div>
            <div className="md:px-[25px] px-4 py-[15px] flex gap-x-[25px] max-w-[280px] sm:max-w-xs  absolute sm:top-0 -top-8  right-0 xl:left-0 lg:-left-10 md:-left-40 bg-white bg-opacity-70 rounded-[12px] z-10">
              <div className="flex items-center">
                <Link
                  href={
                    "https://www.google.com/maps/place/2229+Olympic+Blvd,+Walnut+Creek,+CA+94595,+USA/@37.8853168,-122.0783427,17z/data=!3m1!4b1!4m6!3m5!1s0x808561fa69d04041:0xdc8060ec44af91bb!8m2!3d37.8853168!4d-122.076154!16s%2Fg%2F11b8v416ps"
                  }
                  legacyBehavior
                >
                  <a href="https://www.google.com/maps/place/2229+Olympic+Blvd,+Walnut+Creek,+CA+94595,+USA/@37.8853168,-122.0783427,17z/data=!3m1!4b1!4m6!3m5!1s0x808561fa69d04041:0xdc8060ec44af91bb!8m2!3d37.8853168!4d-122.076154!16s%2Fg%2F11b8v416ps">
                    <img
                      src={imageResolver(data?.hero.card?.img).path}
                      alt={
                        data?.hero?.card?.img?.data?.attributes?.alternativeText
                      }
                      className="w-fit h-fit"
                    />
                  </a>
                </Link>
              </div>
              <div className="flex  flex-col items-center max-w-[189px]">
                <p className="lg:text-[14px] lg:leading-[24px] sm:text-xs text-[10px]  font-[500] text-[#4E4B66] w-full text-left">
                  {data?.hero.card?.name}
                </p>
                <Link
                  href={
                    "https://www.google.com/maps/place/2229+Olympic+Blvd,+Walnut+Creek,+CA+94595,+USA/@37.8853168,-122.0783427,17z/data=!3m1!4b1!4m6!3m5!1s0x808561fa69d04041:0xdc8060ec44af91bb!8m2!3d37.8853168!4d-122.076154!16s%2Fg%2F11b8v416ps"
                  }
                  legacyBehavior
                >
                  <p className="text-[#14142B] lg:text-[14px] lg:leading-[24px] text-[10px] font-[600] w-full">
                    <a href="https://www.google.com/maps/place/2229+Olympic+Blvd,+Walnut+Creek,+CA+94595,+USA/@37.8853168,-122.0783427,17z/data=!3m1!4b1!4m6!3m5!1s0x808561fa69d04041:0xdc8060ec44af91bb!8m2!3d37.8853168!4d-122.076154!16s%2Fg%2F11b8v416ps">
                      {data?.hero?.card?.link}
                    </a>
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-60 rounded-[12px] z-20 absolute md:top-[32%] top-[200px] right-0 xl:-right-[28px] px-[25px] pt-[25px] pb-[5px] min-w-[284px] backdrop-blur-2xl shadow-md">
              <div className="flex flex-col">
                <div className="flex gap-x-[25px] mb-[25px] items-center">
                  <div className="">
                    <img
                      src={imageResolver(data?.hero?.hours?.image).path}
                      alt={
                        data?.hero?.hours?.image?.data?.attributes
                          ?.alternativeText
                      }
                      className=""
                      loading="lazy"
                    />
                  </div>
                  <div className="">
                    <p className="lg:text-[14px] sm:text-xs text-[10px] font-[500] tracking-wider lg:leading-[24px] text-[#4E4B66]">
                      {data?.hero?.hours?.title}
                    </p>
                  </div>
                </div>
                {data?.hero?.hours?.timings?.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between pb-[10px] border-b border-[#EFF0F7] mb-[10px] "
                  >
                    <div className="">
                      <p className="md:text-[14px] sm:text-xs text-[9.2px] font-[600] tracking-wider md:leading-[24px] text-[#14142B]">
                        {item.name}
                      </p>
                    </div>
                    <div className="">
                      <p className="md:text-[14px] sm:text-xs text-[9.2px] font-[600] tracking-wider md:leading-[24px] text-[#6E7191]">
                        {item.link}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={imageResolver(data?.background).path} alt="" className="absolute top-0 left-0 z-0 w-full h-fit" /> */}
      {/* <OurServices/> */}
      {/* <OurServices data={pageData?.blogTitle} cardsData={cutServices}/> */}
      <div className="flex sm:flex-row flex-col items-center justify-center gap-[25px] md:mt-30 mt-15 pt-17 pb-20">
        <p className="text-[24px] leading-[38px] text-[#4e4b66] ">
          {data?.blogTitle?.tagline}
        </p>
        <div>
          {data?.blogTitle?.image?.data !== null ? (
            <img
              src={imageResolver(data?.blogTitle?.image).path}
              alt={data?.blogTitle?.image?.data?.attributes?.alternativeText}
              className=""
              loading="lazy"
            />
          ) : (
            <img
              src={`https://adminpwdds.vigorant.xyz/uploads/${pathImage}`}
              alt={pathImage?.attributes?.alternativeText}
              className=""
              loading="lazzy"
            />
          )}
        </div>

        <h2 className="text-[#14142B] font-[600] text-[32px] leading-[34px] ">
          {data?.blogTitle?.headline}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
