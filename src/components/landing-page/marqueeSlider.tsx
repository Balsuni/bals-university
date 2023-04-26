import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <Marquee className="flex flex-row gap-16">
      <div className="flex flex-row gap-16 items-center ">
        <img
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
        />
        <img
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
        />
        <img
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
        />
        <img
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
        />
        <img
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
        />
        <img
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
        />{" "}
        <img
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
        />
        <img
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
        />
        <img
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
        />
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;
