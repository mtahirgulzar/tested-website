import React from "react";
import { imageResolver } from "../../../../utils/image-resolver";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

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
              <div className="w-full h-full relative">
                <Image
                  src={imageResolver(item.image).path}
                  alt={data?.image?.data?.attributes?.alternativeText}
                  className="w-fit h-fit rounded-xl"
                  loading="lazy"
                  // width={480}
                  // height={600}
                  layout="fill"
                  loader={() => imageResolver(item.image).path}
                />
              </div>
            </div>
            <div
              className={`relative ${
                index === 1 ? "lg:order-1" : "lg:order-2"
              } cus-team-style`}
            >
              <Image
                src="/static/images/slo.png"
                loading="lazy"
                alt="dental"
                width={325}
                height={92}
                loader={() => `/static/images/slo.png`}
                className="absolute left-[-96px] top-[33px] -z-10"
              />
              <ReactMarkdown>{item?.details}</ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamDentists;
