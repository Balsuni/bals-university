import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <Marquee className="flex flex-row gap-16">
      <div className="flex flex-row gap-16 items-center ">
        <Image
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <Image
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
          width={50}
          height={50}
          loading="lazy"
        />
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;
