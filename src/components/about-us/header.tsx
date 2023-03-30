import React from "react";
import styles from "../../styles/header.module.scss";

const Header = () => {
  return (
    <div>
      <div className="h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
        <img
          className="w-full h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
          src="/assets/toy-bricks-table-with-word-blog.svg"
          alt="about-us"
        />
        <div className="w-screen h-[500px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] flex flex-col md:flex-row items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20 py-12 md:py-0 pb-0 ">
          <div className="w-screen flex flex-col items-center justify-center md:items-start mt-10 sm:mt-0 ">
            <h1 className={styles.Blog2}>About Us</h1>
            <h1 className={styles.Blog1}>About Us</h1>
            <h1 className={styles.Blog3}>About Us</h1>
          </div>

          <div className="flex flex-col text-center md:text-left items-center justify-center py-10 px-5 mb-5 md:mb-0 ">
            <p className="flex flex-wrap gap-[6px] text-2xl font-medium sm:text-3xl md:text-4xl text-white w-full py-5 items-center md:items-start justify-center md:justify-start ">
              Unleash your <span className="text-cyan2-500">potential</span> and
              rule the
              <span className="text-cyan2-500">digital space!</span>
            </p>
            <div>
              <h1 className="text-lg  sm:text-xl text-white">
                An E-learning platform specially made for you and Africans who
                want to rule the digital space with practical knowledge.
              </h1>
              <h1 className="sm: md: lg: xl:text-xl text-white mb-4 ">
                Over 5000 number of people have achieved 5000+ results.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
