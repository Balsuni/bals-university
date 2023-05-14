import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const AnimateText = () => {
  return (
    <section className="bg-bodyBackground flex flex-col lg:flex-row items-center justify-start sm:justify-center gap-10 lg:gap-36 px-5 lg:px-14 py-12 ">
      <div className="flex flex-col text-darkblue-500 font-bold text-3xl sm:text-5xl w-[auto] sm:w-[600px] gap-4">
        <Image
          className="static w-[18px] sm:w-[26px] -mt-[20px] ml-[70px] sm:ml-[130px]"
          src="/assets/blue-circle.svg"
          alt="logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="static w-[7px] sm:w-[14px] top-[120px] sm:top-[140px] -ml-[30px] sm:-ml-[20px] md:-ml-[40px] lg:-ml-[30px]  xl:-ml-[40px] "
          src="/assets/teal-circle.svg"
          alt="logo"
          width={50}
          height={50}
          loading="lazy"
        />

        <div>
          <h1>Unleash Your </h1>
          <span className="text-cyan1-600">
            <Typewriter
              words={["Potential,", "Prowess,", "Genius,"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
          <h1>Rule The Digital Space </h1>
        </div>

        <h2 className="text-gray-900 font-normal text-base md:text-lg w-[300px] sm:w-[400px] md:w-[500px]  ">
          An E-learning platform specially made for you and Africans who want to
          rule the digital space with practical knowledge.{" "}
        </h2>

        <div className="flex flex-row items-center justify-start  gap-4 sm:gap-8 md:gap-12 pt-2">
          <button className="py-3 px-6 bg-darkblue-500 text-base text-darkblue-50 w-[auto] border-[2px] border-darkblue-500 rounded-xl hover:bg-darkblue-400 focus:ring focus:bg-darkblue2-500  ">
            Get Started
          </button>
        </div>

        <Image
          className="static flex w-[100px] -ml-[30px] -mt-[100px] lg:w-[100px] lg:-ml-[30px] lg:-mt-[100px] xl:w-[180px] xl:-ml-[60px] xl:-mt-[150px] "
          src="/assets/leaf-icon-bottom.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="w-[290px] sm:w-[auto] lg:w-[auto] relative ">
        <Image
          className="absolute w-[150px] -right-20 "
          src="/assets/leaf-icon-top.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <Image
          src="/assets/favour-3.svg"
          // src="/assets/favour-2.svg"
          // src="/assets/favour-1.svg"
          alt="heoikon-logo"
          className="relative z-10"
          width={600}
          height={50}
        />
      </div>
    </section>
  );
};

export default AnimateText;
