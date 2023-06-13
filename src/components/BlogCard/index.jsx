import React from "react";
import ServiceCards from "../Services/ServiceCards";

const BlogCard = ({ data, home, dental, cardsData, itemOffset }) => {
 
  return (
    <div>
      <section
        className={`max-w-[1200px] mx-auto md:pb-[80px]   pb-[20px] px-4 xl:px-0 ${
          home ? "mt-[0px]" : ""
        }`}
      >
        {data ? (
          <div className="flex flex-col justify-center mb-[50px] max-w-[800px] mx-auto">
            {data?.description ? (
              <p className="text-[16px] font-[400] leading-[24px] text-[#4e4b66] text-center mt-[35px] mb-[80px]">
                {data?.description}
              </p>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        
        <div
          className={`${home ? "sm:grid hidden" : "grid "}  sm:grid-cols-2  ${
            dental
              ? "md:grid-cols-3 lg:grid-cols-3"
              : "md:grid-cols-3  lg:grid-cols-4"
          }  gap-[20px] `}
        >
          {cardsData?.map((card, index) => (
            <div
              key={index}
              className={`${
                index >= itemOffset && index < itemOffset + 9 ? "" : "hidden"
              }`}
            >
              <ServiceCards card={card} dental={dental} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
