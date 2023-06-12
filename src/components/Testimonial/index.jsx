import React from "react";
import ReviewsCards from "./ReviewsCards";
import Header from "../../components/Testimonial/testimonial-header";
import Blogcards from "../Testimonial/blogCards";

const index = () => {
  const CardsData = [
    {
      id: 1,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 2,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 3,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 4,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
  ];
  const CardsData2 = [
    {
      id: 1,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 2,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 3,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 4,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
  ];
  const CardsData3 = [
    {
      id: "1",
      description:
        "“Excellent experience. High quality, professional & efficient & friendly service. Meticulous adherence to Covid protection guidelines.”",
      title: "— Eduard pechko.",
    },
    {
      id: "2",
      description:
        "“Best service ever got. Complete hygienic. I will always recommend”",
      title: "— Tereza.",
    },
    {
      id: "3",
      description:
        "“Excellent experience.  professional & efficient & friendly staff. Meticulous adherence to Covid protection guidelines.”",
      title: "— Marko.",
    },
  ];

  return (
    <div>
      <section className="max-w-[1400px] mx-auto xl:px-0 px-4 ">
        <div className=" lg:py-[144px] md:py-[100px] py-[50px] ">
          <Header
            title="Testimonials"
            img="/static/images/google.png"
            review="Reviews"
            subtitle="EXCELLENT"
            starimg="/static/images/star.svg"
            totalReviews="87 reviews"
            subimg="/static/images/glogo.svg"
            On="on"
          />

          <div className="grid xl:grid-cols-4  sm:grid-cols-2 grid-cols-1  gap-[16px] ">
            {CardsData.map((card, index) => {
              const {
                profileimg,
                title,
                subtitle,
                logo,
                starimg,
                tickimg,
                description,
                btn,
              } = card;
              return (
                <ReviewsCards
                  key={index}
                  profileimg={profileimg}
                  title={title}
                  subtitle={subtitle}
                  logo={logo}
                  starimg={starimg}
                  tickimg={tickimg}
                  description={description}
                  btn={btn}
                />
              );
            })}
          </div>
        </div>

        <div className="md:py-[70px] py-[50px] ">
          <Header
            title="Testimonials"
            img="/static/images/Yelp.png"
            review="Reviews"
            subtitle="EXCELLENT"
            starimg="/static/images/redstar.svg"
            totalReviews="87 reviews"
            subimg="/static/images/Ylogo.svg"
            On="on"
          />

          <div className="grid xl:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-[16px] lg:pb-[74px] md:pb-[40px] pb-0">
            {CardsData2.map((card, index) => {
              const {
                profileimg,
                title,
                subtitle,
                logo,
                starimg,
                tickimg,
                description,
                btn,
              } = card;
              return (
                <ReviewsCards
                  key={index}
                  profileimg={profileimg}
                  title={title}
                  subtitle={subtitle}
                  logo={logo}
                  starimg={starimg}
                  tickimg={tickimg}
                  description={description}
                  btn={btn}
                />
              );
            })}
          </div>
        </div>

        <div className="md:py-[70px] py-[50px]">
          <Header
           title="Testimonials"
           img="/static/images/google.png"
           review="Reviews"
           subtitle="EXCELLENT"
           starimg="/static/images/star.svg"
           totalReviews="87 reviews"
           subimg="/static/images/glogo.svg"
           On="on"
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[18px] gap-[30px] lg:pb-[74px] md:pb-[40px] pb-0">
            {CardsData3.map((card) => {
              const { title, description,starimg, index } = card;
              return (
                <Blogcards
                  key={index}
                  // starimg={starimg}
                  description={description}
                  title={title}
                />
              );
            })}
          </div>
        </div>
{/* 
        <div className="md:py-[70px] py-[50px]">
        <div className="flex justify-center">
          <div>
            <h2 className="lg:text-[50px] lg:leading-[24px] md:text-[42px] md:leading-[22px] text-[36px] leading-[20px] font-[700] tracking-[0.7px] text-[#14142A]">
              Testimonials
            </h2>
            <p className="text-center pt-5 text-[16px] leading-[24px] tracking-[0.75px] text-[#4e4b66]">Email Reviews</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[18px] gap-[30px] lg:pb-[74px] md:pb-[40px] pb-0">
          {CardsData3.map((card , index) => {
            const { title, description} = card;
            return (
              <Blogcards key={index} description={description} title={title} />
            );
          })}
        </div>
        </div> */}
      </section>
    </div>
  );
};

export default index;
