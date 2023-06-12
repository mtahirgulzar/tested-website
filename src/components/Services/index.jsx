import { useRouter } from "next/router";
import React from "react";
import ServiceCards from "./ServiceCards";

const OurServices = ({ data, home, dental, cardsData }) => {
  const titles=[
    "Family Dentistry",
    "Invisalign",
    "Dental Implants",
    "Root Canal Therapy"
  ]
const {asPath}= useRouter()
  console.log("dental",   dental)

const filteredHomeServicesCards=cardsData&& asPath==="/"?cardsData?.filter((item)=>{
return titles.includes(item.attributes.title)
}):cardsData
console.log("filteredHomeServicesCards",   filteredHomeServicesCards)

  console.log("cardsData",   cardsData)
  return (
    <div >
      <section
        className={`max-w-[1200px] mx-auto md:pb-[80px]   pb-[20px] px-4 xl:px-0 ${asPath==="/" ? "mt-[0px]" : "mt-[150px]"
          }`}
      >
        {data && (
          <div className="flex flex-col justify-center mb-[50px] max-w-[800px] mx-auto">
         
            {data?.description && (
              <p className="text-[16px] font-[400] leading-[24px] text-[#4e4b66] text-center mt-[35px] mb-[80px]">
                {data?.description}
              </p>
            )}
          </div>
        )}
        <div
          className={`${home ? "sm:grid hidden" : "grid md:grid-cols-2 "}  sm:grid-cols-2  ${dental
            ? "md:grid-cols-3 lg:grid-cols-3"
            : "md:grid-cols-3  lg:grid-cols-4"
            }  gap-[20px] `}
        >
          {filteredHomeServicesCards?.map((card, index) => (
            <ServiceCards key={index} index={index} card={card} dental={dental} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
