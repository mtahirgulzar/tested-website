import React from "react";
import { imageResolver } from "../../../utils/image-resolver";

const CardsPosts = ({ data }) => {
  return (
    <div>
      <div className="cursor-pointer">
        {/* <img
          src={imageResolver(data?.attributes?.image).path}
          alt="Posts image"
        /> */}
        {data?.attributes?.image?.data !== null ? (
            <img
              src={imageResolver(data?.attributes?.image).path}
              alt={data?.attributes?.image?.data?.attributes?.alternativeText}
              className='rounded-t-xl	h-[190px]  w-full'
              loading="lazy"
            />
          ) : (
            <img
              src={`https://adminpwdds.vigorant.xyz/uploads/${data?.attributes?.imagePath}`}
              alt={data?.attributes?.imagePath?.data?.attributes?.alternativeText}
              className='rounded-t-xl	h-[200px]  w-full'
              loading="lazy"
            />
          )}
      </div>
      <h2 className="cursor-pointer text-[18px] leading-[22px] text-[#14142a] font-[700] mb-[20px] mt-[20px]">
        {data?.attributes?.title}
      </h2>
      <p className="text-[15px] leading-[23px] font-[400] text-[#4e4b66] ">
        {data?.attributes?.description}
      </p>
    </div>
  );
};

export default CardsPosts;
