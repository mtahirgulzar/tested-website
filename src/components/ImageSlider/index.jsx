import React from "react";
import Slider from "react-slick";
import { imageResolver } from "../../../utils/helpers";
import Image from "next/image";

function ImageSlider({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="pb-[45px]">
      <div className="bg-[#7F7C59]">
        <div className="w-[90%] mx-auto px-[20px] py-[50px] cus-image-slider">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <div key={index} className="relative w-full h-[240px] ">
                <Image
                  src={imageResolver(item.img).path}
                  className="w-full h-[240px] object-contain"
                  loader={() => imageResolver(item.img).path}
                  alt={item?.img?.data?.attributes?.alternativeText}
                  layout="fill"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
