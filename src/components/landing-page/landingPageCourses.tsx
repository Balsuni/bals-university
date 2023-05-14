import React, { useRef } from "react";
import LandingPageCourseCard from "./landingPageCourseCard";
import Image from "next/image";

const LandingPageCourseGallery = () => {
  const coursesRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    coursesRef.current?.scrollBy({
      left: -coursesRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    coursesRef.current?.scrollBy({
      left: coursesRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <div
        ref={coursesRef}
        className="mb-24 flex flex-row w-full overflow-auto transition duration-300 ease-in "
        style={{ transform: "translateX(0)" }}
      >
        <LandingPageCourseCard />
      </div>
      <button
        onClick={handlePrev}
        // disabled={handlePrev === null}
        className="absolute top-1/3 -left-5 sm:-left-12 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-900 text-white p-2 py-4 px-3 ml-5 md:ml-0 rounded-full focus:outline-none"
      >
        <Image
          src="/assets/previous-icon.svg"
          width={20}
          height={20}
          loading="lazy"
          alt=""
        />
      </button>
      <button
        onClick={handleNext}
        // disabled={handleNext === null}
        className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-darkblue-500 text-white p-2 py-4 px-3 rounded-full focus:outline-none"
      >
        <Image
          src="/assets/next-icon.svg"
          width={20}
          height={20}
          loading="lazy"
          alt=""
        />
      </button>
    </div>
  );
};

export default LandingPageCourseGallery;
