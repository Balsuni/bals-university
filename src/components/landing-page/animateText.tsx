import React from "react";
import styles from "../../styles/type-text.module.scss";
import { Typewriter } from "react-simple-typewriter";

const AnimateText = () => {
  return (
    <section className="bg-bodyBackground flex flex-col lg:flex-row items-center justify-start sm:justify-center gap-10 lg:gap-36 px-5 lg:px-14 py-12 ">
      <div className="flex flex-col text-darkblue-500 font-bold text-3xl sm:text-5xl w-[auto] sm:w-[600px] gap-4 ">
        <div>
          <h1>Unleash</h1>
          <h1>
            Your{" "}
            <span className="text-cyan1-600">
              <Typewriter
                words={["Potential", "Prowess", "Genius"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h1>And Rule</h1>
          <h1>The Digital Space</h1>
        </div>

        <h2 className="text-gray-900 font-normal text-base md:text-lg w-[300px] sm:w-[400px] md:w-[500px]  ">
          An E-learning platform specially made for you and Africans who want to
          rule the digital space with practical knowledge.{" "}
        </h2>

        <div className="flex flex-row items-center justify-start  gap-4 sm:gap-8 md:gap-12 pt-2">
          <button className="py-3 px-6 bg-darkblue-500 text-base text-darkblue-50 w-[auto] border-[2px] border-darkblue-500 rounded-xl">
            Get Started
          </button>
          <button className="py-3 px-6 bg-bodyBackground text-base text-darkblue-500 w-[auto] border-[2px] border-darkblue-500 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-[290px] sm:w-[400px] relative ">
        {/* <div className="px-6 absolute z-0 -left-3 mt-7 flex flex-row items-center  bg-bodyBackground text-base text-darkblue-500 w-[200px] h-[60px] border-[2px] rounded-[50px]">
          <img src="" alt="a" className="w-[30px] h-[30px] " />
          <div className="flex flex-col w-[40px] ">
            <h3 className="text-base font-bold leading-5 ">5k</h3>
            <h3 className="text-[10px] leading-[10px]">students globally</h3>
          </div>
        </div> */}
        <img
          src="/assets/favour.svg"
          alt="favour-logo"
          width={500}
          className="relative z-10"
        />
      </div>
    </section>
  );
};

export default AnimateText;
