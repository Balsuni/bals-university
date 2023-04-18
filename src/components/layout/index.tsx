import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Navbar />
        {props.children}
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;
