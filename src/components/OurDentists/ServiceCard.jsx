import React from "react";
import { imageResolver } from "../../../utils/helpers";
import Image from "next/image";


const ServiceCard = ({ item }) => {
  const { image, title, description } = item;
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <div className="shadow-2xl relative ">
          <Image
            src={imageResolver(image).path}
            alt={image?.data?.attributes?.alternativeText}
            loader={()=>{imageResolver(image).path}}
            className="w-full h-full"
            width={300}
            height={200}
          />
        </div>
        <div className="text-[#F5FDC1] text-[17px] font-[600] py-2">
          <h2>{title}</h2>
        </div>
        <p className="mt-8 text-[16px]  leading-[32px] text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
