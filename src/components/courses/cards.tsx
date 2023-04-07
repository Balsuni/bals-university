import React from "react";

export const CoursesCardMedium = () => {
  return (
    <div className="flex flex-col bg-darkblue-50 w-fit sm:w-[500px] sm:h-[600px] pb-5 rounded-xl">
      <div className="h-auto">
        <img
          src="/assets/courses_1.svg"
          className="sm:w-[500px] w-full rounded-t-xl"
          alt=""
        />
      </div>
      <h1 className="py-1 px-5 ml-5 mt-5 text-lg font-normal text-cyan1-800 border-[2px]  border-cyan1-800 w-[95px] ">
        Design
      </h1>

      <h1 className="text-darkblue-500 ml-5 text-[19px] font-bold tracking-wider mt-5">
        Fundamentals of LinkedIn
      </h1>

      <div className="flex gap-1 ml-5 lg:mt-2 mt-5 xl:mt-5">
        <img src="/assets/star_enabled.svg" alt="" />
        <img src="/assets/star_enabled.svg" alt="" />
        <img src="/assets/star_enabled.svg" alt="" />
        <img src="/assets/star_enabled.svg" alt="" />
        <img src="/assets/star_disabled.svg" alt="" />
      </div>

      <p className="lg:mt-2 mt-5 ml-5 xl:mt-5 text-gray-900 text-md">
        Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
        interdum ...
      </p>

      <p className="mt-3 font-bold ml-5 text-gray-900 text-xl">$ 50</p>

      <button className="ml-5 lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 text-center">
        Enroll Now
      </button>
    </div>
  );
};

export const CoursesCardSmall = () => {
  return (
    <div className="flex flex-col bg-darkblue-50 w-fit sm:[w-500px] lg:w-[350px] lg:h-[350px] pb-5 rounded-xl">
      <div className="h-auto">
        <img
          src="/assets/courses_1.svg"
          className="lg:w-[350px] rounded-t-xl sm:w-[500px]"
          alt=""
        />
      </div>

      <div className="mt-5">
        <h1 className="text-darkblue-500 text-xl ml-5 font-semibold">
          Fundamentals of LinkedIn
        </h1>
        <p className="mt-3 font-bold text-gray-900 text-xl ml-5">Free</p>

        <button className="lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md ml-5 w-[250px] h-fit px-14 py-2 text-center">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

const CoursesCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-darkblue-50 w-fit lg:w-[550px] lg:h-[370px] rounded-xl">
      <div className="p-5 mt-5">
        <h1 className="py-1 px-5 text-lg font-normal text-cyan1-800 border-[2px]  border-cyan1-800 w-[95px] ">
          Design
        </h1>

        <h1 className="text-darkblue-500 text-[19px] font-bold tracking-wider mt-5">
          Fundamentals of LinkedIn
        </h1>

        <div className="flex gap-1 lg:mt-2 mt-5 xl:mt-5">
          <img src="/assets/star_enabled.svg" alt="" />
          <img src="/assets/star_enabled.svg" alt="" />
          <img src="/assets/star_enabled.svg" alt="" />
          <img src="/assets/star_enabled.svg" alt="" />
          <img src="/assets/star_disabled.svg" alt="" />
        </div>

        <p className="lg:mt-2 mt-5 xl:mt-5 text-gray-900 text-md">
          Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
          interdum ...
        </p>

        <p className="mt-3 font-bold text-gray-900 text-xl">$ 50</p>

        <button className="lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 text-center">
          Enroll Now
        </button>
      </div>

      <div className="rounded-xl h-auto w-full flex justify-start">
        <img
          src="/assets/courses_2.svg"
          className="rounded-b-xl lg:rounded-r-xl h-[370px] w-11/12 lg:w-[550px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default CoursesCard;
