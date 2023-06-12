import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children, data, navServices }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Navbar data={data?.header} navServices={navServices} />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default Layout;
