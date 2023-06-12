import React, { useEffect, useState } from "react";

const BlogBody = ({ data, cusClass, team }) => {
  let content = data?.body || data?.attributes?.body || data
  const [finaldata, setFinalData] = useState(content)
  var finalContent

  useEffect(() => {
    var el = document.createElement("html")
    el.innerHTML = content
    let images = el.getElementsByTagName("img")
    console.log(el)
    for (let image of images) {
      console.log("images here", image.src)
      image.src = `https://adminpwdds.vigorant.xyz/uploads/${image.src.split('/')[image.src.split('/').length - 1]}`
    }
    finalContent = el.innerHTML
    setFinalData(finalContent)

  })

  return (
    <>
      <div className="">
        <div className={`${team ? "max-w-[1200px]" : "max-w-[723px]"} mx-auto md:py-[80px] py-[20px] ${cusClass}`}>
          {/* <ReactMarkdown>{content}</ReactMarkdown> */}
          <div dangerouslySetInnerHTML={{ __html: finaldata }} ></div>

        </div>
      </div>
    </>
  );
};

export default BlogBody;
