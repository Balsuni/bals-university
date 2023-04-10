import React, { useRef } from "react";
import { CoursesCardSmall } from "@/components/courses/cards";

const FreeCoursesGallery = () => {
  const coursesRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    coursesRef.current?.scrollBy({
      left: coursesRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={coursesRef}
        className="mb-24 flex flex-row w-full overflow-auto transition duration-300 ease-in "
        style={{ transform: "translateX(0)" }}
      >
        <CoursesCardSmall />
      </div>
      <div onClick={handleNext} className="flex justify-end mr-5">
        <img src="/assets/next-active.svg" width={20} height={20} alt="" />
        <img src="/assets/next-disable.svg" width={20} height={20} alt="" />
        <img src="/assets/next-disable.svg" width={20} height={20} alt="" />
        <img src="/assets/next-disable.svg" width={20} height={20} alt="" />
      </div>
    </div>
  );
};

export default FreeCoursesGallery;
