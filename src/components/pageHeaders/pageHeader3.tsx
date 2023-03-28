import React from "react";

type Props = {
  title: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  header: string;
  parag1: string;
  parag2?: string;
};

// x sm: md: lg: xl:

const PageHeaderThree = (props: Props) => {
  return (
    <div>
      <div className="h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
        <img
          className="w-full h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt}
        />
        <div className="w-screen h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] flex flex-col md:flex-row items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20 py-10 md:py-0 pb-0 ">
          <div className="w-screen flex flex-col items-center justify-center md:items-start">
            <h1 className="text-[52px]  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-darkblue-500 absolute z-1">
              {props.title}
            </h1>
            <h1 className="text-[52px] sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-gray-50 absolute pt-0 sm:pt-2 mt-2 z-20  ">
              {props.title}
            </h1>
            <h1 className="text-[52px]  sm:text-5xl md:text-4xl lg:text-5xl  xl:text-6xl font-bold text-darkblue-500 absolute pt-4 sm:pt-8 z-10 ">
              {props.title}
            </h1>
          </div>

          <div className="flex flex-col text-center md:text-left items-center justify-center py-10 px-5 ">
            <h1 className="text-2xl  sm:text-3xl md:text-4xl text-white w-full py-5 flex items-center justify-center ">
              {props.header}
            </h1>
            <div>
              <h1 className="text-lg  sm:text-xl text-white">{props.parag1}</h1>
              <h1 className="sm: md: lg: xl:text-xl text-white mb-4 ">
                {props.parag2}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderThree;
