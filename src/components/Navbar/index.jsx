import Link from "next/link";
import React, { useState } from "react";
import { imageResolver } from "../../../utils/image-resolver";
import { useRouter } from "next/router";
import Hamburger from "../Hamburger";
import Dropdown from "./Dropdown";
import Image from "next/image";

const Navbar = ({ data, navServices }) => {
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const staff = [
    {
      attributes: {
        title: "Meet Our Dentists & Staffs",
        slug: "meet-our-dentists-staffs",
      },
    },
  ];
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto lg:px-0 px-4">
        <div className="flex items-center justify-between">
          <div className="py-[27px]">
            <Link href={"/"} >
                <Image
                  src={imageResolver(data?.Logo).path}
                  alt={data?.Logo?.data?.attributes?.alternativeText}
                  className="cursor-pointer w-fit h-fit"
                  loading="lazy"
                  width={247}
                  height={48}
                  loader={()=>imageResolver(data?.Logo).path}
                />
            </Link>
          </div>
          <div className="lg:flex hidden items-center px-[8px]">
            {data?.navItems?.map((item, index) => (
              <div key={index} className="relative overflow-visible ">
                <Link href={item.link || "/"}>
                  <div
                    onMouseEnter={() => {
                      index === 1 && setIsSubmenu1(true),
                        index === 2 && setIsSubmenu2(true);
                    }}
                    onMouseLeave={() => {
                      index === 1 && setIsSubmenu1(false),
                        index === 2 && setIsSubmenu2(false);
                    }}
                    key={index}
                    className="xl:px-[12px] px-[5px] flex items-center"
                  >
                    <>
                      <p
                        className={`text-[14px] font-[600] tracking-wider leading-[32px] text-center  cursor-pointer ${
                          currentRoute === item.link
                            ? "text-[#5F2EEA]"
                            : "text-[#6E7191]"
                        }`}
                      >
                          {item.title}
                      </p>
                      <div className={`${index !== 1 && "hidden"}`}>
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
                        <div className={`${!isSubMenu1 && "hidden"}`}>
                          <Dropdown
                            onChange={setIsSubmenu1}
                            data={staff}
                            single
                          />
                        </div>
                      </div>
                      <div className={`${index !== 2 && "hidden"}`}>
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
                        <div className={`${!isSubMenu2 && "hidden"}`}>
                          <Dropdown
                            onChange={setIsSubmenu2}
                            data={navServices}
                          />
                        </div>
                      </div>
                    </>
                  </div>
                </Link>
              </div>
            ))}
            <Link href={`tel:+${`925-933-5677`}`}  >
              <p className="xl:ml-[15px] ml-[4px] bg-[#5F2EEA] text-white text-[15px] leading-[15px] font-[500] py-[10px] px-[15px] rounded-3xl">
                Call Us
              </p>
            </Link>
          </div>
          <div className="lg:hidden flex items-center min-h-full h-[62px] ">
            <Hamburger
              isMenu={isMenu}
              setIsMenu={setIsMenu}
              isSubMenu1={isSubMenu1}
              setIsSubmenu1={setIsSubmenu1}
              isSubMenu2={isSubMenu2}
              setIsSubmenu2={setIsSubmenu2}
              data={data}
              navServices={navServices}
              staff={staff}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
