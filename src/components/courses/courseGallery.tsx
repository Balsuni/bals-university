import React, { useRef, useState } from "react";
import {
  CoursesCardMedium,
  coursesCardMediumData,
} from "@/components/courses/cards";
import Link from "next/link";
import { FilterCourses, SearchCourses } from "@/pages/courses";

const CourseGallery = () => {
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

  const [search, setSearch] = useState("");

  const onSearch = (e: any) => {
    return setSearch(e.target.value);
  };

  const [filterTextValue, updateFilterText] = useState("All");

  function onFilterValueSelected(filterValue: any) {
    updateFilterText(filterValue);
  }

  const filteredCoursesList = coursesCardMediumData.filter((item) => {
    if (filterTextValue === "Linkedin") {
      return item.category === "linkedin";
    } else if (filterTextValue === "Web Development") {
      return item.category === "web";
    } else if (filterTextValue === "Game Development") {
      return item.category === "game";
    } else if (filterTextValue === "Cyber Security") {
      return item.category === "cyber-security";
    } else if (filterTextValue === "Programming Languages") {
      return item.category === "programming";
    } else {
      return true;
    }
  });

  return (
    <div>
      <div className="mb-9 ml-5 mr-10">
        <div className="flex flex-row items-center justify-between border-b-4 border-darkblue-100">
          <div className="sm:flex hidden flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32 ">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4  hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1 ">
              All Courses
            </h1>
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900  border-b-4 border-darkblue-100 hover:border-b-4  hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
              Skill Acquisition
            </h1>
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4  hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
              Talent Acquisition
            </h1>
          </div>

          <div className="flex flex-row gap-[2px] sm:gap-2 ">
            <SearchCourses searchValue={onSearch} />
            <FilterCourses filterValueSelected={onFilterValueSelected} />
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={coursesRef}
          className="mb-5 flex flex-row w-full overflow-auto transition duration-300 ease-in "
          style={{ transform: "translateX(0)" }}
        >
          {/* <CoursesCardMedium /> */}

          <div className="flex flex-row gap-[22px] sm:gap-[40px]">
            {filteredCoursesList
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item || "Item not found"
                  : item.courseTitle.toLocaleLowerCase().includes(search);
              })
              .map((data: any) => {
                return (
                  <Link
                    href={{
                      pathname: "/courses/[coursedetails]/",
                      query: {
                        coursedetails: data.courseTitle,
                        coursetitle: data.courseTitle,
                        price: data.price,
                        coursedescription: data.courseDetails,
                        courserating: data.ratings,
                        learningmethod: data.courseContent,
                        courselevel: data.courseLevel,
                        prequisitelevel: data.prequisiteLevel,
                        approxweek: data.approxWeek,
                        certificate: data.certificate,
                        instructor: data.instructor,
                        messagefrominstructor: data.messageFromInstructor,
                        instructorprofile: data.instructorProfile,
                        courseimage: data.courseImage,
                      },
                    }}
                    as={`courses/${
                      data.id
                    }/${data.courseTitle.toLocaleLowerCase()}`}
                    key={data.id}
                  >
                    <section className="flex flex-col bg-darkblue-50 w-[300px] sm:w-[500px] md:w-[350px] md:h-[auto] sm:h-[auto] pb-5 rounded-xl">
                      <div className="h-auto">
                        <img
                          src={data.imageSrc}
                          className="sm:w-[500px] md:w-[350px] w-full rounded-t-xl"
                          alt=""
                        />
                      </div>
                      <h1 className="py-1 px-5 ml-5 mt-5 text-lg font-normal text-cyan1-800 border-[2px]  border-cyan1-800 w-fit ">
                        {data.category}
                      </h1>
                      <h1 className="text-darkblue-500 ml-5 text-[19px] font-bold tracking-wider h-[60px]  mt-5">
                        {data.courseTitle}
                      </h1>

                      <div className="flex gap-1 ml-5 lg:mt-2 mt-5 xl:mt-5">
                        {data.ratings.map((rating: any) => (
                          <img src={rating} alt="" key={rating} />
                        ))}
                      </div>

                      <p className="lg:mt-2 mt-5 ml-5 xl:mt-5 text-gray-900 text-md">
                        {data.courseDetails}
                      </p>

                      <p className="mt-3 font-bold ml-5 text-gray-900 text-xl">
                        {data.price}
                      </p>

                      <button className="ml-5  lg:mt-1 mt-3 xl:mt-3 mb-3 border-2 border-darkblue-500 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 text-center">
                        {data.buttonTitle}
                      </button>
                    </section>
                  </Link>
                );
              })}
          </div>
        </div>

        <button
          onClick={handlePrev}
          // disabled={handlePrev === null}
          className="absolute top-1/3 -left-5 sm:-left-12 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-900 text-white p-2 py-4 px-3 rounded-full focus:outline-none"
        >
          <img src="/assets/previous-icon.svg" width={20} height={20} alt="" />
        </button>
        <button
          onClick={handleNext}
          // disabled={handleNext === null}
          className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-darkblue-500 text-white p-2 py-4 px-3 rounded-full focus:outline-none"
        >
          <img src="/assets/next-icon.svg" width={20} height={20} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CourseGallery;
