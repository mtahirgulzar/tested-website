import { title } from "process";
import React from "react";

const ReviewsCards = ({profileimg,title,subtitle,logo,starimg,tickimg,description,btn}) => {
  


  return (
    
    <div>
      <div className="">
        <div className="shadow-md p-[18px] backdrop-blur-sm rounded-lg">
          <div className="relative">
            <div className="absolute right-0 top-0 w-[20px]">
              <img src={logo} alt="Review image" className="w-full" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[40px]">
                <img src={profileimg} alt="Review image" />
              </div>
              <div>
                <h2 className="text-[14px]  font-[700]">{title}</h2>
                <p className="text-[11.2px] text-opacity-50">{subtitle}</p>
              </div>
            </div>
            <div className="flex items-center mt-[15px] mb-[6px] gap-2">
                    <div className="flex items-center gap-[2px]">
                    <div className="w-[16px]"><img src={starimg} alt="star image" className="w-full" /></div>
                    <div className="w-[16px]"><img src={starimg} alt="star image" className="w-full" /></div>
                    <div className="w-[16px]"><img src={starimg} alt="star image" className="w-full" /></div>
                    <div className="w-[16px]"><img src={starimg} alt="star image" className="w-full" /></div>
                    <div className="w-[16px]"><img src={starimg} alt="star image" className="w-full" /></div>
                    </div>
                    <div className="w-[15px]"><img src={tickimg} alt="image" className="w-full" /></div>
            </div>
            <p className="text-[14px] leading-[20.2px] ">{description}</p>
          </div>
          <button className="pt-[7px] text-[12.6px] font-[700] hover:text-[#4E4B66] duration-300 ease-out">{btn}</button>
        </div>
        
      </div>
    </div>
  );
};

export default ReviewsCards;
