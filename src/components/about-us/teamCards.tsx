import React from "react";

type Props = {
  src: string;
  teamMemberName: string;
  teamMemberRole: string;
};

type StudentProps = {
  src: string;
  srcRinglight: string;
  student: string;
  text: string;
};

export const PreviousStudentsCards = (props: StudentProps) => {
  return (
    <div className="mt-10 mb-3 flex flex-col items-center justify-center w-[280px] sm:w-[300px] lg:w-[400px] h-[430px] lg:h-[500px]">
      <div className="flex flex-row items-center justify-center mb-8 ">
        <img
          className="w-[250px] lg:w-auto mr-[9px] lg:mr-[11px] mb-0 sm:mb-[1px]  absolute z-10"
          src={props.src}
          alt="logo"
        />
        <img
          className="w-[290px] lg:w-auto h-[285px] lg:h-auto relative z-0"
          src={props.srcRinglight}
          alt="logo"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-3 ">
        <h1 className="text-3xl font-medium text-gray-900">{props.student}</h1>
        <h3 className="w-[300px] text-center text-lg font-normal text-gray-900">
          {props.text}
        </h3>
      </div>
    </div>
  );
};

const TeamCards = (props: Props) => {
  return (
    <div className="pb-10 flex flex-col items-center justify-center w-[280px] sm:w-[300px] lg:w-[400px] h-[430px] lg:h-[500px]">
      <div className="flex flex-row items-center justify-center mb-8 ">
        <img
          className="w-[250px] lg:w-auto mr-[9px] lg:mr-[11px] mb-0 sm:mb-[1px]  absolute z-10"
          src={props.src}
          alt="logo"
        />
        <img
          className="w-[290px] lg:w-auto h-[285px] lg:h-auto relative z-0"
          src="/assets/ecclipse.svg"
          alt="logo"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold text-darkblue-500">
          {props.teamMemberName}
        </h1>
        <h3 className="text-xl font-normal text-gray-900">
          {props.teamMemberRole}
        </h3>
      </div>
    </div>
  );
};

export default TeamCards;
