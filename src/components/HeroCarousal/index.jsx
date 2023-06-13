import React from 'react';
import Slider from 'react-slick';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../Hero"));


function HeroCarousal({ data , home }) {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
   
  };
  return (
    <div className="">
      <div className="">
        
        <div className=" flex flex-col justify-center h-[628px] overflow-hidden shadow-md Testimonial-Carousal">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <Hero key={index} data={item} home={home} />
            ))}
          </Slider>

        </div>
      </div>
    </div>
  );
}

export default HeroCarousal;
