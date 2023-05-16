import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingPageCourseGallery from "@/components/landing-page/landingPageCourses";
import Image from "next/image";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Courses = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="mt-12 lg:mx-5">
      <div className="mb-9 lg:ml-16 ml-0 mr-10">
        <div className="flex flex-row items-center justify-between border-b-4 border-darkblue-100">
          <div className="sm:flex hidden flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4  hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
              All Courses
            </h1>
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900  border-b-4 border-darkblue-100  hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
              Skill Acquisition
            </h1>
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
              Talent Acquisition
            </h1>
          </div>
          <div className="flex sm:hidden w-8/12">
            <select
              id="selection"
              className="bg-cyan1-500 border border-cyan1-900 text-gray-50 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-5"
            >
              <option selected>All Courses</option>
              <option>Skill Acquisition</option>
              <option>Talent Acquisition</option>
            </select>
          </div>
          <div className="flex flex-row gap-[2px] sm:gap-2 ">
            <Image
              src="/assets/search-icon.svg"
              alt="search"
              width={50}
              height={50}
              loading="lazy"
            />
            <Image
              src="/assets/sort-by-icon.svg"
              alt="sort"
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="items-center ml-0 lg:ml-20 mr-3">
        <LandingPageCourseGallery />
      </div>
    </section>
  );
};

export default Courses;
