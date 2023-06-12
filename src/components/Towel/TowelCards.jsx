import React, { useState } from 'react'

const TowelCards = ({id, description,title}) => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div key={id} className={`bg-[#EFF0F7] rounded-[16px]   py-[18px] pl-[25px] pr-[18px]  mb-[25px] ${show==true?"border-slate-600 border-2":""}`}>
                    <div className="flex justify-between items-center w-100 cursor-pointer" onClick={() => setShow(!show)}>
                      <p className="text-[18px] leading-[24px] text-[#14142B] font-[600]">
                        {title}
                      </p>
                      <span>
                      {show === true ? (
                        <svg
                          
                          className="cursor-pointer"
                          width="21"
                          height="30"
                          viewBox="0 0 21 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.79169 1L20 1"
                            stroke="#14142B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                        
                          className="cursor-pointer "
                          width="24"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3V21"
                            stroke="#6E7191"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 12L21 12"
                            stroke="#6E7191"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      </span>
                    
                    </div>
                    {show && (
                      <p className="text-[18px] leading-[34px] font-[400] pt-[10px] pb-[20px]  text-[#4E4B66]">
                        {description}
                      </p>
                    )}
                  </div>
      
    </div>
  )
}

export default TowelCards
