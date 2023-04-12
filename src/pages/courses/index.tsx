import Layout from "@/components/layout";
import styles from "@/styles/pageHeaderImage.module.scss";
import React, { useState } from "react";
import CoursesCard from "@/components/courses/cards";
import CourseGallery from "@/components/courses/courseGallery";
import FreeCoursesGallery from "@/components/courses/freeCoursesGallery";
import Faq from "@/components/ui/faq";

const courses = () => {
  const faqData = [
    {
      id: 1,
      title: "How do i make payment for double courses at a time?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.",
    },
    {
      id: 2,
      title: "How do i make payment for double courses at a time?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.",
    },
    {
      id: 3,
      title: "How do i make payment for double courses at a time?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.",
    },
    {
      id: 4,
      title: "How do i make payment for double courses at a time?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.",
    },
    {
      id: 5,
      title: "How do i make payment for double courses at a time?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.",
    },
  ];

  return (
    <Layout>
      <section className="">
        <div className="h-[438px] bg-cover bg-center relative">
          <img
            className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
            src="/assets/students.svg"
            alt="course-details logo"
          />
          <div className="flex flex-col lg:flex-row items-center px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-5 lg:py-12 xl:py-10">
            <div className="w-screen flex flex-col items-start flex-wrap md:items-start px-5 py-5 sm:px-5 md:px-10 sm:py-5 md:py-[10px] lg:py-5 xl:py-14">
              <h1 className={styles.course3}>Courses</h1>
              <h1 className={styles.course2}>Courses</h1>
              <h1 className={styles.course1}>Courses</h1>
            </div>
            <div className="w-full mb-28 h-fit flex flex-col gap-3 lg:flex-row sm:gap-0 sm:flex-row xl:mr-28 lg:mt-10">
              <div className="w-full flex flex-col lg:flex-col gap-5 px-5 md:px-0 ">
                <h1 className="font-bold text-2xl lg:text-5xl text-gray-50">
                  Best selling courses on the planet
                </h1>
                <h2 className="text-sm sm:text-md lg:text-lg font-md text-bodyBackground">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing
                  pellentesque placerat arcu dignissim condimentum nibh et.
                  Vestibulum a non pharetra volutpat.
                </h2>
                <button className="w-fit my-auto font-normal text-md md:text-lg items-center px-4 py-2 lg:px-6 lg:py-4 h-fit rounded-md text-darkblue-500 bg-gray-50 ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row shadow-lg shadow-gray-500 w-9/12 justify-around py-5 items-center mx-auto">
          <div className="flex flex-col justify-center">
            <img
              src="/assets/icon(1).svg"
              className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto"
              alt=""
            />
            <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">
              Seamless User experience
            </h1>
            <p className="text-gray-900 text-md font-thin">
              Learn at your own pace
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <img
              src="/assets/icon(1).svg"
              className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto"
              alt=""
            />
            <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">
              Practical courses
            </h1>
            <p className="text-gray-900 text-md font-thin">
              Get implementable knowledge
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <img
              src="/assets/icon(1).svg"
              className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto"
              alt=""
            />
            <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">
              Result driven courses
            </h1>
            <p className="text-gray-900 text-md font-thin">
              Success in the digital space
            </p>
          </div>
        </div>
      </section>
      <main className="w-full sm:py-14 md:py-14 lg:py-16 xl:py-20">
        <section className="mt-10 pb-20">
          <h1 className="text-darkblue-500 font-bold text-2xl lg:text-3xl ml-3 lg:ml-20">
            Recommended for you
          </h1>
          <div className="flex flex-col lg:flex-row justify-start items-center xl:justify-around mt-10 ml-3 lg:ml-3 gap-5 mr-3">
            <CoursesCard />
          </div>
        </section>

        <section className="pb-10">
          <h1 className="text-darkblue-500 font-bold text-2xl lg:text-3xl ml-5 lg:ml-20">
            Free Courses
          </h1>

          <h5 className="text-gray-900 font-normal text-md lg:text-xl ml-5 lg:ml-20 mt-7">
            Get started with these free courses
          </h5>

          <div className="items-center gap-10 xl:gap-96 mt-10 ml-5 lg:ml-20 mr-3">
            <FreeCoursesGallery />
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-9 ml-16 mr-10">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32 ">
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-bodyBackground border-b-4   hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px]  ">
                  All Courses
                </h1>
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900  hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                  Skill Acquisition
                </h1>
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                  Talent Acquisition
                </h1>
              </div>
              <div className="flex flex-row gap-[2px] sm:gap-2 ">
                <img src="/assets/search-icon.svg" alt="search" />
                <img src="/assets/sort-by-icon.svg" alt="sort" />
              </div>
            </div>
          </div>

          <div className="items-center ml-5 lg:ml-20 mr-3">
            <CourseGallery />
            <div className="flex gap-3">
              <p className="text-darkblue-500 text-lg font-semibold tracking-wider">
                See More
              </p>
              <img src="/assets/next.svg" className="my-auto" alt="" />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 pb-20">
          <h5 className="text-darkblue-500 font-semibold text-2xl sm:text-3xl md:sm:text-4xl mt-12 tracking-wider text-center pb-10">
            Frequently Asked Questions
          </h5>
          <div className="flex w-full flex-col gap-10 ml-auto mr-auto items-center">
            {faqData.map((data) => {
              return (
                <div
                  className="flex flex-col gap-5 lg:gap-7 w-fit sm:w-8/12 md:w-9/12 xl:w-6/12  p-0 py-3 md:px-12 ml-2 mr-2"
                  key={data.id}
                >
                  <Faq title={data.title} content={data.content} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default courses;
