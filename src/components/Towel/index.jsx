import React from "react";
import TowelCards from "./TowelCards";
import { IoMdNotificationsOutline } from 'react-icons/io';


const Towel = ({data}) => {
  
  return (
    <div>
      <section className="max-w-[1200px] mx-auto px-4 xl:px-0 py-[50px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px]">
          <div className="relative rounded-[21px] ">
            <img
              src="/static/images/img-home.png"
              alt="Faqs"
              className="rounded-[21px] w-full"
            />

            <div className="absolute bottom-[-30px] border-green-500 lg:bottom-7 left-0 lg:-left-20 sm:right-0 sm:w-[100%] md:right-40 rounded-[16px]	 h-34 flex justify-between  sm:gap-[15px] lg:gap-[25px] text-[#ffff] items-center w-30  saturate-200 backdrop-blur-[22.5px] bg-[#0b072473] sm:p-[8px] lg:p-[24px] ">
              <span className="text-[#fff] text-4xl"><IoMdNotificationsOutline /></span><div> Friendly Reminder! fask mask is required before entering  our dental office. we are protecting our community together  </div>
            </div>
          </div>
          <div>
            <div className="overflow-scroll h-[460px]">
              <p className="sm:text-[24px] text-[16px] sm:leading-[38px] leading-[28px] text-[#4E4B66] pb-[5px]">
                {data?.tagline}
              </p>
              <h2 className="text-[32px] leading-[34px] text-[#14142B] font-[600] pb-[30px]">
                {data?.title}
              </h2>
                  { data?.testimonials?.map(({id,title,description, index}) =>{
                    return (
                      <TowelCards title={title} description={description} id={id} key={index}/>
                    );

                  })
                     
                  }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Towel;
