import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const images = [
  "/assets/favour-1.svg",
  "/assets/favour-2.svg",
  "/assets/favour-3.svg",
];

export const ImageSwapper = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImage === images.length) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={images[currentImage]} alt="heroicon" width={600} />
    </div>
  );
};

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
          <button className="py-3 px-6 bg-darkblue-500 text-base text-darkblue-50 w-[auto] border-[2px] border-darkblue-500 rounded-xl hover:bg-darkblue-400 focus:ring focus:bg-darkblue2-500  ">
            Get Started
          </button>
          <button className="py-3 px-6 bg-bodyBackground text-base text-darkblue-500 w-[auto] border-[2px] border-darkblue-500 rounded-xl hover:bg-gray-50 focus:ring focus:bg-gray-100  ">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-[290px] sm:w-[auto] lg:w-[auto] relative ">
        <img
          src="/assets/favour-3.svg"
          // src="/assets/favour-2.svg"
          // src="/assets/favour-1.svg"
          alt="heoikon-logo"
          width={600}
          className="relative z-10"
        />

        {/* <ImageSwapper /> */}
      </div>
    </section>
  );
};

export default AnimateText;
