import React from "react";

type Props = {
  text: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  rightImageSrc: string;
  rightImageAlt: string;
};

const PageHeader = () => {
  return (
    <div>
      <div className=" h-[500px] bg-cover bg-center relative">
        <img
          className="w-full h-[350px] sm:h-[430px] md:h-[350px] xl:h-[450px] object-cover absolute mix-blend-overlay "
          src="/assets/toy-bricks-table-with-word-blog.svg"
          alt="terms-and-conditions"
        />
        <div className="ssm:px-10  flex flex-col items-left  sm:items-left  sm:justify-between md:flex-row md:items-center   ">
          <div className="flex flex-col  py-10 ">
            <h1 className="text-2xl  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl stroke-1 stroke-gray-50 font-bold text-gray-900 absolute z-1  ">
              Terms and Conditions
            </h1>
            <h1 className="text-2xl  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-gray-50 absolute pt-0 sm:pt-2 mt-2 z-20  ">
              Terms and Conditions
            </h1>
            <h1 className="text-2xl  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold stroke-darkblue-50 text-gray-900 absolute pt-4 sm:pt-8 z-10   ">
              Terms and Conditions
            </h1>
          </div>
          <img
            src="/assets/bro.svg"
            alt="accept-T&C"
            className=" sm:mt-10 md:mt-20 w-48 h-48  "
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
