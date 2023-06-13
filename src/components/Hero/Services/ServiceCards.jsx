import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../../utils/image-resolver";
import Image from "next/image";

const ServiceCards = ({ card, home, dental, index }) => {
  function getWordStr(str) {
    return str.split(/\s+/).slice(0, 12).join(" ");
  }
  return (
    <Link
      href={
        dental
          ? `/dental-articles-news/${card?.attributes?.slug}`
          : `/services/${card?.attributes?.slug}`
      }
      legacyBehavior
    >
      <div
        className={`${
          index == 0
            ? "order-[3]"
            : index == 1
            ? "order-[4]"
            : index === 3
            ? "order-[1]"
            : ""
        } flex flex-col z-111 cursor-pointer relative -top-20 mb-8 border-3`}
      >
        <div className="absolute left-[5px]  bg-white text-black px-[2px] py-[1px] rounded-md text-[12px]">
          {card?.attributes?.category?.data?.attributes?.name}
        </div>
        <div className="relative w-[100%] h-[130px]">
          {card?.attributes?.image?.data  ? (
            <Image
              src={imageResolver(card?.attributes?.image).path}
              alt={card?.attributes?.image?.data?.attributes?.url}
              loader={() => imageResolver(card?.attributes?.image).path}
              layout="fill"
              className="rounded-t-xl	 object-cover "
            />
          ) : (
            <Image
              src={`https://adminpwdds.vigorant.xyz/uploads/${card?.attributes?.imagePath}`}
              alt=""
              layout="fill"
              loader={() =>
                `https://adminpwdds.vigorant.xyz/uploads/${card?.attributes?.imagePath}`
              }
              className="rounded-t-xl h-[130px]	object-cover"
            />
          )}
        </div>
        <div
          className={`text-center pt-[20px] pb-[10px] mb-[10px]  text-[18px] leading-[34px] text-[#14142B] font-[600] ${
            dental ? "" : ""
          }`}
        >
          <p>{card?.attributes?.title}</p>
        </div>

        {card?.attributes?.publishedDate && (
          <div
            className={`text-[14px] leading-[24px] font-[400] tracking-normal text-center text-[#66738f]`}
          >
            <p>{card?.attributes?.publishedDate}</p>
          </div>
        )}

        <div
          className={`font-[500] text-[14px] leading-[24px]  tracking-[0.75px] text-[#66738F] pb-[25px] ${
            dental ? "text-center" : "text-justify"
          }`}
        >
          <p className="text-[14px] leading-[24px] font-[400] tracking-normal text-center text-[#66738f]">
            {getWordStr(card?.attributes?.description)}
          </p>
        </div>

        <div className="mt-auto text-center">
          <Link
            href={
              dental
                ? `/dental-articles-news/${card?.attributes?.slug}`
                : `/services/${card?.attributes?.slug}`
            }
            legacyBehavior
          >
            <a
              className={`cursor-pointer font-[500] text-[14px] leading-[24px] text-[#5F2EEA] rounded-full ${
                dental ? "" : "border-2 w-50"
              } ${
                dental ? "text-[#66738F]" : "text-[#5F2EEA"
              } border-[#5F2EEA]  py-[10px] px-[20px]`}
              title={
                dental
                  ? `/dental-articles-news/${card?.attributes?.slug}`
                  : `/services/${card?.attributes?.slug}`
              }
            >
              {dental ? "Read More" : `More about ${card.attributes.title}`}
            </a>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCards;
