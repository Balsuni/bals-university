import React from "react";

type Props = {
  title: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  text: string;
};

// x sm: md: lg: xl:

const PageHeaderText = (props: Props) => {
  return (
    <div>
      <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
        <img
          className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt}
        />
        <div className="w-screen flex flex-col md:flex-row items-center justify-center gap-28 sm:gap-36 md:gap-0 md:items-start md:justify-center px-0 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36  ">
          <div className="w-screen flex flex-col items-center md:items-start  ">
            <h1 className="text-[28px]  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-darkblue-500 absolute z-1">
              {props.title}
            </h1>
            <h1 className="text-[28px] sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-gray-50 absolute pt-0 sm:pt-2 mt-2 z-20  ">
              {props.title}
            </h1>
            <h1 className="text-[28px]  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-darkblue-500 absolute pt-4 sm:pt-8 z-10 ">
              {props.title}
            </h1>
          </div>
          <div className=" border-[3px] border-white w-screen md:w-[1700px]  ml-10 md:ml-0 mr-10 xl:mr-24">
            <h1 className="text-lg text-white text-center w-full py-5 flex items-center justify-center ">
              {props.text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderText;
