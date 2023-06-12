import React from "react";
import { imageResolver } from "../../../../utils/image-resolver";
import ReactMarkdown from "react-markdown";

const TeamDentists = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="">
          <div className="grid lg:grid-cols-2 gap-x-[60px] lg:py-[98px] md:py-[50px] py-[30px] ">
            <div
              className={`flex items-center ${
                index === 1
                  ? "lg:order-2 justify-start"
                  : "lg:order-1 lg:justify-end"
              }`}
            >
              <img
                src={imageResolver(item.image).path}
                alt={data?.image?.data?.attributes?.alternativeText}
                className="w-fit h-fit rounded-xl"
                loading="lazy"
              />
            </div>
            <div
              className={`relative ${
                index === 1 ? "lg:order-1" : "lg:order-2"
              } cus-team-style`}
            >
              <img src="/static/images/slo.png" loading="lazy" alt="dental" className="absolute left-[-96px] top-[33px] -z-10" />
              <ReactMarkdown>{item?.details}</ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamDentists;
