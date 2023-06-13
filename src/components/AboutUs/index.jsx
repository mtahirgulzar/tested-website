import React, { useEffect } from "react";
import Title from "../common/Title";


const AboutUs = ({ title }) => {

  useEffect(() => {
		const slider= document.getElementById("trustSlider")
		const script = document.createElement("script");
		script.src = "https://cdn.trustindex.io/loader.js?2abcb2663437965433581e7259";
		script.async = true;
		slider.appendChild(script); 
	},[])
  return (
    < >
      <div className="sm:py-[75px] py-[40px]">
        <Title data={title} red />
        <div id="trustSlider" className="max-w-[1156px] mx-auto bg-white p-[35px] flex flex-col justify-center">
        </div>
      </div>
    </>
  );
};

export default AboutUs;
