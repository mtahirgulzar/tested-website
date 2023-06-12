import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../utils/image-resolver";

const CommonHero = ({ data, testimonial, blog }) => {
  return (
    <>
      <div 
        style={{
          background: `url(${
            data?.image?.data !== null
              ? imageResolver(data?.image).path
              : `https://adminpwdds.vigorant.xyz/uploads/${data?.imagePath}`
          }) no-repeat center center/cover`,
        }}
        className="relative filter"
      >
        <div className="max-w-[1200px] px-4 lg:px-0 mx-auto py-[80px] z-20 block relative">
          <div className="max-w-[500px] mx-auto ">
            <h1 className="text-[50px] font-[700] leading-[58px] tracking-[-3px] text-[#14142A] text-center">
              {data?.headline || data?.title}
            </h1>
            <h2 className="text-[14px] font-[400] leading-[24px] tracking-[0.75px] text-[#14142A] mb-[23px] text-center">
              {data?.subline}
            </h2>
            <p className="text-[#4E4B66] text-[14px] font-[900] leading-[24px] tracking-[0.75px] mb-[38px] text-center">
              {data?.description}
            </p>
            {testimonial && (
              <div className="flex mb-[20px] gap-x-[16px] flex-wrap justify-center">
                {data?.socialLinks?.map((item, index) => (
                  <div key={index} className="">
                    <p className="text-[#5F2EEA] w-full cursor-pointer text-center text-[16px] leading-[24px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-center w-full">
              
                <Link href={"#blogbody"} legacyBehavior>
                  <a href="" className="">
                  <img
                    src="/images/Frame-226-2.webp"
                    alt="hero image"
                    className="cursor-pointer w-fit h-fit"
                    loading="lazy"
                  />
                  </a>
                </Link>

            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 min-w-full min-h-full bg-white bg-opacity-70 -z-1"></div>
      </div>
    </>
  );
};

export default CommonHero;
