import React from "react";

type Props = {
  src: string;
  valueTitle: string;
  text: string;
};

export const ServicesCard = (props: Props) => {
  return (
    <div className="gap-8 xl:gap-10 w-[280px] xl:w-[370px] h-[auto] px-6 py-10 flex flex-col border-2 shadow-md bg-gray-50">
      <img className="w-[74px] h-[77px] " src={props.src} alt="logo" />
      <h1 className="h-[50px]  font-bold text-gray-900 text-2xl xl:text-3xl">
        {props.valueTitle}
      </h1>
      <h4 className="h-[120px]  text-base xl:text-lg font-normal text-gray-900">
        {props.text}
      </h4>
    </div>
  );
};

export const ValueCardsBlackText = (props: Props) => {
  return (
    <div className="gap-8 xl:gap-10 w-[280px] xl:w-[370px] h-[370px] xl:h-[390px] px-6 py-10 flex flex-col justify-between border-2 shadow-md bg-gray-50">
      <img className="w-[74px] h-[77px] " src={props.src} alt="logo" />
      <h1 className="font-bold text-gray-900 text-2xl xl:text-3xl">
        {props.valueTitle}
      </h1>
      <h4 className=" text-base xl:text-lg font-normal text-gray-900">
        {props.text}
      </h4>
    </div>
  );
};

const ValueCards = (props: Props) => {
  return (
    <div className="gap-8 xl:gap-10 w-[280px] xl:w-[370px] h-[370px] xl:h-[390px] px-6 py-10 flex flex-col justify-between border-2 shadow-md bg-gray-50">
      <img className="w-[74px] h-[77px] " src={props.src} alt="logo" />
      <h1 className="font-bold text-darkblue-500 text-2xl xl:text-3xl">
        {props.valueTitle}
      </h1>
      <h4 className=" text-base xl:text-lg font-normal text-gray-900">
        {props.text}
      </h4>
    </div>
  );
};

export default ValueCards;
