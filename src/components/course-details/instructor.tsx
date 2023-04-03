import React from "react";

type Props = {
  src: string;
  text: string;
};

const InstructorCard = (props: Props) => {
  return (
    <div className="pb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between  ">
      <div className="flex flex-row items-center justify-center mb-8 ">
        <img
          className="w-[250px]  mr-[9px]  mb-0 sm:mb-[1px]  absolute z-10"
          src={props.src}
          alt="logo"
        />
        <img
          className="w-[280px] relative z-0"
          src="/assets/ecclipse.svg"
          alt="logo"
        />
      </div>
      <div className="lg:absolute lg:ml-[350px] pr-0 sm:pr-10 lg:pr-28">
        <h2 className=" text-lg sm:text-xl font-normal text-gray-900">
          {props.text}
        </h2>
      </div>
    </div>
  );
};

export default InstructorCard;
