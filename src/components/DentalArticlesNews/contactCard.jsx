import React from "react";

const contactCard = ({ title, img1, description, img2, phone, cellDes }) => {
  return (
    <div>
      <div className="py-[39px] px-[17.2px] shadow-xl rounded-2xl">
        <div className="">
          <h2 className="text-[30px] leading-[59px] text-[#14142a] font-[700] text-center">
            {title}
          </h2>
          <div className="flex gap-5 items-center mb-[15px]">
            {/* <div><img src={img1} alt="contact image" /></div> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22 11C22 15.346 15.8077 20.9022 13.1687 23.0727C12.4838 23.636 11.5162 23.636 10.8313 23.0727C8.19234 20.9022 2 15.346 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11Z"
                  stroke="#5A5A89"
                  stroke-width="2"
                ></path>
                <circle
                  cx="12"
                  cy="11"
                  r="3"
                  stroke="#5A5A89"
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div className="text-[14px] leading-[17px] text-[#14142b] font-[700]">
              {description}
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* <div>
              <img src={img2} alt="contact image" />
            </div> */}
            <div>
              <a href="tel:925-933-5677">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.72229 1.97356L3.25431 2.35889C2.32462 2.46219 1.60764 3.19955 1.70526 4.12986C1.94931 6.45552 3.0987 11.0412 8.02806 15.9706C12.9574 20.8999 17.5437 22.05 19.8698 22.2945C20.8003 22.3923 21.5379 21.6752 21.6412 20.7453L22.0265 17.2778C22.1146 16.4851 21.7233 15.7159 21.0308 15.3203L18.5467 13.9012C17.7636 13.4539 16.7781 13.5859 16.1404 14.2236L15.5031 14.8609C15.0303 15.3337 14.3489 15.5338 13.7445 15.2475C13.0285 14.9083 11.9935 14.2792 10.8572 13.1429C9.7208 12.0065 9.09172 10.9716 8.75252 10.2555C8.46625 9.65119 8.66632 8.96977 9.13917 8.49692L9.77645 7.85964C10.4141 7.22196 10.5462 6.2364 10.0988 5.45335L8.67975 2.96926C8.28415 2.27676 7.51494 1.88549 6.72229 1.97356Z"
                    stroke="#5A5A89"
                    stroke-width="2"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <h2 className="text-[14px] leading-[17px] text-[#14142b] font-[600]">
                {phone}
              </h2>
              <p className="text-[14px] leading-[24px]  font-[600] text-[#4e4b66]">
                {cellDes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactCard;
