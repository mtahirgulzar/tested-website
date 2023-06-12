import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const Hamburger = ({
  isSubMenu1,
  isSubMenu2,
  isMenu,
  setIsSubmenu1,
  setIsSubmenu2,
  setIsMenu,
  data,
  staff,
  navServices,
}) => {
  return (
    <>
      {" "}
      {!isMenu && (
        <span
          onClick={() => setIsMenu(!isMenu)}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      )}
      {isMenu && (
        <span
          onClick={() => {
            setIsMenu(!isMenu), setIsSubmenu1(false), setIsSubmenu2(false);
          }}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
      )}
      {isMenu && (
        <div className="bg-white  z-50 min-h-[300px] absolute left-0 top-[100px] w-full shadow-lg">
          {data?.navItems?.map((item, index) => (
            <ul key={index} className="w-full">
              <li
                className={`px-[30px] py-[21px]  cursor-pointer transition-all ease duration-500 ${styles.cusHover}`}
              >
                <Link href={`${item.link}`}>
                  <>
                    {" "}
                    <div
                      onClick={() => {
                        index === 1 && setIsSubmenu1(!isSubMenu1),
                          index === 2 && setIsSubmenu2(!isSubMenu2);
                      }}
                      className={`flex cursor-pointer ${styles.cusMenu} flex-col`}
                    >
                      <p
                        className={`text-[15px] leading-[20px] font-[400] text-[#3B5266] transition-all ease duration-500 flex ${styles.hoverText}`}
                      >
                          {item.title}
                        <>
                          {index === 1 && (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="currentColor"
                                className="bi bi-caret-down-fill ml-[5px]"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                              </svg>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="currentColor"
                                  className="bi bi-caret-down-fill ml-[5px]"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                              </span>
                            </>
                          )}
                        </>
                      </p>
                    </div>
                  </>
                </Link>
              </li>
              <>
                {index === 1 && (
                  <>
                    {isSubMenu1 && (
                      <div
                        className={` w-full transition-all duration-3000 ease  z-50 bg-white  `}
                      >
                        <ul className={` bg-white`}>
                          {staff?.map((item, index) => (
                            <Link key={index} href={item.link || "/"}>
                              <li
                                className={`px-[30px] py-[13px] transition-all ease duration-500 ${styles.cusHover}`}
                              >
                                <p
                                  className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] pl-[10px]`}
                                >
                                  {item.attributes.title}
                                </p>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
                {index === 2 && (
                  <>
                    {isSubMenu2 && (
                      <div
                        className={` w-full transition-all duration-3000 ease  z-50 bg-white  `}
                      >
                        <ul className={` bg-white`}>
                          {navServices?.map((item, index) => (
                            <Link key={index} href={item.link || "/"} >
                              <li
                                className={`px-[30px] py-[13px] text-black transition-all ease duration-500 ${styles.cusHover}`}
                              >
                                <p
                                  className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] pl-[10px]`}
                                >
                                    {item?.attributes.title}
                                </p>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
