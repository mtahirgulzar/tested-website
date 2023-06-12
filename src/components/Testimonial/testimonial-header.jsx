import React from "react";

const header = ({title,img,review,subtitle,starimg,totalReviews,subimg,On}) => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="text-center">
          <h2 className="lg:text-[50px] lg:leading-[24px] md:text-[42px] md:leading-[22px] text-[36px] leading-[20px]  font-[700] tracking-[0.7px] text-[#14142A]">
            {title}
          </h2>
          <div className="flex justify-center gap-2 mt-3 sm:mt-5">
            <div className="md:w-[152px] sm:w-[125px] w-[100px] ">
              <img src={img} alt={img?.data?.attributes?.alternativeText} loading="lazy" className="w-full" />
            </div>
            <p className="self-end text-[16px] leading-[24px] tracking-[0.75px] text-[#4e4b66]">{review}</p>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-[7px] py-[13px] sm:mt-[50px] mt-6">
            <p className="sm:text-[13px] text-[11px]">{subtitle}</p>
            <div className="flex items-center">
              <div className="sm:w-[16px] w-[14px]">
                <img src={starimg} alt="star" className="w-full" />
              </div>
              <div className="sm:w-[16px] w-[14px]">
                <img src={starimg} alt="star" className="w-full" />
              </div>
              <div className="sm:w-[16px] w-[14px]">
                <img src={starimg} alt="star" className="w-full" />
              </div>
              <div className="sm:w-[16px] w-[14px]">
                <img src={starimg} alt="star" className="w-full" />
              </div>
              <div className="sm:w-[16px] w-[14px]">
                <img src={starimg} alt="star" className="w-full" />
              </div>
            </div>
            <p className="text-[13px] ">
              {totalReviews} <span>{On}</span>
            </p>
            <div className="w-[57px] ml-2">
              <img src={subimg} alt="image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
