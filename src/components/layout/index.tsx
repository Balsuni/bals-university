import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
