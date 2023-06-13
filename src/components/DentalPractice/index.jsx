import Link from "next/link";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { imageResolver } from "../../../utils/image-resolver";
import Image from "next/image";

const DentalPractice = ({ data }) => {
  return (
    <>
      <div className="">
        <div className="max-w-[1200px] px-4 xl:px-0 mx-auto md:py-[50px]  py-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[38px]">
            <div className="relative rounded-md mb-[200px] md:mb-[0px]">
              <Image
                src={imageResolver(data?.image).path}
                alt={data?.image?.data?.attributes?.alternativeText}
               loading="lazy"
               width={565}
               height={416}
               loader={()=>imageResolver(data?.image).path}
                className="w-full h-full rounded-md"
              />
              <div className="absolute bottom-[0px] lg:bottom-[55%]  sm:bottom-[-30px] right-0  left-0 lg:-left-20 lg:right-40 rounded-[16px]	flex justify-between  sm:gap-[15px] lg:gap-[25px] text-[#ffff] items-center w-30  saturate-200 backdrop-blur-[22.5px] bg-[#0b072473] sm:p-[8px] lg:p-[24px] ">
                <span className="text-[#fff] text-4xl">
                  <IoMdNotificationsOutline />
                </span>
                <div>
                  {" "}
                  Friendly Reminder! fask mask is required before entering our
                  dental office. we are protecting our community together{" "}
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="md:text-[24px] sm:text-xl text-[16px] leading-[28px] tracking-wider md:leading-[38px] text-[#4E4B66] mb-[5px]">
                {data?.tagline}
              </p>
              <h2 className="md:text-[32px] sm:text-xl text-[24px] leading-[38px] font-[600] tracking-wider md:leading-[34px] text-[#14142B] ">
                {data?.title}
              </h2>
              <h2 className="mb-[25px] text-[#4e4b66] text-[17px] leading-[24px]">
                {data?.smallText}
              </h2>
              <p className="text-[14px] font-[500] tracking-wider leading-[24px] text-justify text-[#4E4B66] mb-[25px]">
                {data?.description}
              </p>
              <p className="text-[14px] font-[500] tracking-wider leading-[24px] text-justify text-[#4E4B66]">
                {data?.text}
              </p>
              <div className="mt-[25px]"></div>
              <Link href={"/our-practice"} legacyBehavior>
                <a
                  title="go to our practice"
                  className="cursor-pointer font-[600] text-[14px] leading-[24px] text-[#5F2EEA] rounded-full border-2 w-50	 border-[#5F2EEA]  py-[10px] px-[20px]"
                >
                  More info
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DentalPractice;
