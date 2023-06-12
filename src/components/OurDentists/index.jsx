import React from "react";
import TeamDentists from "./TeamDentists";
import BlogBody from "../BlogBody";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const OurDentists = ({ dentists, cards, description, desk }) => {
  return (
    <>
      <div>
        <div className="max-w-[1200px] lg:px-0 px-4 mx-auto py-[50px]">
          <BlogBody cusClass={"custom-our-patient"} data={description} team />
          <TeamDentists data={dentists} />
          <div className="grid md:grid-cols-3  md:gap-x-[20px] gap-y-[20px]">
            {desk?.map((item, index) => (
              <div key={index} className="cus-our-desk">
                <ReactMarkdown>{item?.details}</ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDentists;
