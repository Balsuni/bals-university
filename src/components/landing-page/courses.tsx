import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingPageCourseGallery from "@/components/landing-page/landingPageCourses";
import Image from "next/image";
import { CloseSquare } from "iconsax-react";

const SearchCourses = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearchBox = () => {
    return setOpenSearch(!openSearch);
  };

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenSearch(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, [toggleSearchBox]);

  return (
    <div>
      <li className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500">
        {!openSearch ? (
          <img
            onClick={toggleSearchBox}
            className="w-[35px] sm:w-[40px]"
            src="/assets/search-icon.svg"
            alt="search"
            width={30}
            height={30}
          />
        ) : (
          <CloseSquare className="z-10 my-2" size="25" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openSearch && (
          <main className="absolute z-30 rounded-xl pl-3 py-3 h-[230px] w-[310px] sm:w-[320px] mt-3 -ml-[195px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-row items-center">
              {/* <img
                className="w-[15px] absolute ml-1 pointer-events-none"
                src="/assets/search-icon.svg"
                alt="search"
              /> */}
              <form action="">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  className="text-darkblue-500 text-3 h-10 pl-7 bg-gray-200 "
                />
              </form>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

const FilterCourses = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const toggleFilter = () => {
    return setOpenFilter(!openFilter);
  };

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenFilter(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, [toggleFilter]);

  return (
    <div>
      <li className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500">
        {!openFilter ? (
          <img
            onClick={toggleFilter}
            className="w-[35px] sm:w-[40px]"
            src="/assets/sort-by-icon.svg"
            alt="sort"
            width={30}
            height={30}
          />
        ) : (
          <CloseSquare className="z-10 my-2" size="25" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openFilter && (
          <main className="absolute z-30 rounded-xl pl-5 py-5 h-[auto] w-[310px] sm:w-[320px] mt-3 -ml-[242px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-col items-start gap-8">
              <h2>Search Engine Optimization (SEO)</h2>
              <h2>Social Media Management (SMM)</h2>
              <h2>Search Engine Optimization (SEO)</h2>
              <h2>Social Media Management (SMM)</h2>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

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
    <section className="mt-12 lg:mx-5 font-Ubuntu">
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
            {/* <Image
              src="/assets/search-icon.svg"
              alt="search"
              width={50}
              height={50}
              loading="lazy"
            /> */}
            <SearchCourses />
            {/* <Image
              src="/assets/sort-by-icon.svg"
              alt="sort"
              width={50}
              height={50}
              loading="lazy"
            /> */}
            <FilterCourses />
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
