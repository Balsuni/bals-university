import React from "react";
import styles from "../../styles/header.module.scss";

const Header = () => {
  return (
    <div className="h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
      <img
        className="w-full h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay bg-darkblue-500"
        src={"/assets/toy-bricks-table-with-word-blog.svg"}
        alt={"blog"}
      />
      <div className="w-screen h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] flex flex-col md:flex-row items-center justify-center md:items-center md:justify-start px-0 md:px-10 lg:px-16 xl:px-20 py-10 md:py-0 pb-0 ">
        <div className="w-screen flex flex-col items-center justify-center md:items-start pl-0 md:pl-16">
          <h3 className={styles.Blog2}>Blog</h3>
          <h1 className={styles.Blog1}>Blog</h1>
          <h2 className={styles.Blog3}>Blog</h2>
        </div>
        <div className=" flex flex-col text-center md:text-left items-center justify-center md:items-start md:justify-start py-10 px-5 md:px-0 md:py-0 mb-8 md:mb-0 ">
          <h1 className="text-2xl  sm:text-3xl md:text-4xl text-white w-full py-5 flex items-center justify-center ">
            Thoughts & ideas around things that matter.
          </h1>
          <div>
            <h1 className="text-lg  sm:text-xl text-white mb-4">
              New product features, the latest in technology, solutions and
              updates
            </h1>
          </div>
          <form className="flex pt-3 w-[280px]">
            <input
              type="text"
              className="w-auto px-5 h-12 rounded-lg font-light"
              placeholder="Enter Email..."
            />
            <button
              type="submit"
              className="relative bg-cyan1-500 px-7 py-1 rounded-lg text-gray-100 right-[120px] "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
