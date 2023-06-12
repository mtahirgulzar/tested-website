import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../utils/image-resolver";
import moment from "moment";

const smallCards = ({ data }) => {
  return (
    <Link href={`${data?.attributes?.slug}`} legacyBehavior>
      <a href="" className="">
      <div>
        <div className="grid  items-center  grid-cols-2 gap-x-[8px]">
          <div>
            {/* <img
              src={imageResolver(data?.attributes?.image).path}
              alt="card image"
            /> */}
            {data?.attributes?.image?.data !== null ? (
            <img
              src={imageResolver(data?.attributes?.image).path}
              alt={data?.attributes?.image?.data?.attributes?.alternativeText}
              className='	h-[100px]   w-full'
            />
          ) : (
            <img
              src={`https://adminpwdds.vigorant.xyz/uploads/${data?.attributes?.imagePath}`}
              alt={data?.attributes?.imagePath?.data?.attributes?.alternativeText}
              className='	h-[100px]  w-full '
            />
          )}
          </div>
          <div>
            <h2 className="text-[16px] leading-[24px] font-[700] text-[#14142a] pt-[20px]">
              {data?.attributes?.title}
            </h2>
            <p className="text-[14px] leading-[24px] font-[400] text-[#4e4b66]">
              {moment(data?.attributes?.createdAt).format("LLL")}
            </p>
          </div>
        </div>
      </div>
      </a>
    </Link>
  );
};

export default smallCards;
