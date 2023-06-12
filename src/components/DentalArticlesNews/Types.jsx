import React from "react";
import Getknowcard from "./getknowcard";
import ContactCard from "./contactCard";
import SmallCards from "./smallCards";
import CardsPosts from "./CardsPosts";
import BlogBody from "../../../src/components/BlogBody";
import Author  from "../../../pages/dental-articles-news/author";
const Types = ({ data,blogs,singleService }) => {
  
 
  return (
    <div>
      <section className="w-[1350px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <BlogBody data={data} cusClass={"cus-our-service"} />

            {singleService?.author?.data !==null ?? <Author data={singleService?.author?.data?.attributes} />}
          </div>
          <div className="col-span-3 items-center">
            <div className="flex flex-col  gap-[43px]">
              <Getknowcard
                title="Get to know us"
                description="The best and gentle Dentists and Team Member of Procopio Towle Dental Office are dedicated to providing top quality dental care to patients in Walnut Creek the surrounding San Francisco Bay Area."
                btn="Meet Our Dentist"
              />
              <ContactCard
                title="Contact us"
                img1=""
                description="2229 Olympic Boulevard Walnut Creek, CA 94595"
                img2=""
                phone="925-933-5677"
                cellDes='Just dial "WE FLOSS"'
              />
              <div>
                <h2 className="text-[22px] leading-[24px] font-[700] mb-[20px] text-[#14142a]">
                  Most Popular
                </h2>
                {blogs?.map((item,index)=>(

                <div key={index} className="mb-[20px]">
                  <SmallCards
                    data={item}
                  />
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[15px] p-[5px] ">
            <div className="w-[60px] h-[.5px] bg-black "></div>
            <div className="text-[14px] leading-[14px] font-[400] text-[#5f2eea]">
              On Key
            </div>
          </div>
          <div>
            <h2 className="text-[45px] leading-[45px] font-[600] text-[#14142a]">
              Related Posts
            </h2>
          </div>
          {/* cards  */}
          <div className="grid grid-cols-4 gap-[20px] my-[30px]">
          {blogs?.map((item,index)=>(
            <div key={index}>
            <CardsPosts
              data={item}
            />
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Types;
