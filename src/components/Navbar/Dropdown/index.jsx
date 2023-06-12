import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const Dropdown = ({ data, onChange, single }) => {
  const router = useRouter();
  return (
    <>
      <div
        onMouseEnter={() => onChange(true)}
        onMouseLeave={() => onChange(false)}
        className={`absolute top-[30px] left-[10px]  w-[170px] transition-all duration-3000 ease  z-50 bg-white`}
      >
        <ul className={` bg-white min-w-[223px]`}>
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  router.push(
                    `${single ? "" : "/services/"}${item.attributes.slug}` ||
                      "/"
                  )
                }
              >
                <li
                  className={`px-[20px] py-[13px] transition-all ease duration-500 ${styles.cusHover}`}
                >
                  <p
                    className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px]`}
                  >
                    {item.attributes.title}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
