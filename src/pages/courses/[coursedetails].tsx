import Layout from "@/components/layout";
import React, { useState } from "react";
import styles from "@/styles/pageHeaderImage.module.scss";
import InstructorCard from "@/components/course-details/instructor";
import { WeeklyOutlineData } from "@/components/course-details/courseDetailsData";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type Props = {
  weekNumber: number;
  topic: string;
  objectives1: string;
  objectives2: string;
  objectives3: string;
  syllabus1: string;
  syllabus2: string;
  syllabus3: string;
  courseMaterials: string;
};

const WeeklyOutline = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <section className="pt-12">
      <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
        Week {props.weekNumber}
      </h2>
      <h1
        onClick={toggleOpen}
        className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-xl sm:text-2xl mb-5 flex flex-row items-center justify-between "
      >
        {props.topic}
        {isOpen ? (
          <img src="/assets/coursedetails-arrow-up.svg" alt="arrow up" />
        ) : (
          <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
        )}
      </h1>

      {isOpen && (
        <div className="bg-darkblue-50 py-4 pl-3 sm:pl-6 lg:pl-14   pr-3 sm:pr-6 lg:pr-10 ">
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Objectives</h2>
            <ul className="text-gray-900 font-normal text-lg sm:text-xl ml-11 list-disc  ">
              <li>{props.objectives1}</li>
              <li>{props.objectives2}</li>
              <li>{props.objectives3}</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4  text-xl font-bold text-gray-900">
              Syllabus / Sub Topics
            </h2>
            <ul className="text-gray-900 font-normal text-lg sm:text-xl ml-11 list-disc  ">
              <li>{props.syllabus1}</li>
              <li>{props.syllabus2}</li>
              <li>{props.syllabus3}</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Course Materials
            </h2>

            <h3 className="text-gray-900 font-normal text-lg sm:text-xl ml-5 list-disc  ">
              {props.courseMaterials}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

const fetchWeeklyOutline = () => {
  return axios.get(`https://bals-testapi.onrender.com/weeklyoutline`);
};

const CourseDetails = () => {
  const router = useRouter();
  const query = router.query;
  const title = query.coursetitle;
  const price = query.price;
  const description = query.coursedescription;
  const learningmethod = query.learningmethod;
  const courselevel = query.courselevel;
  const prequisitelevel = query.prequisitelevel;
  const approxweek = query.approxweek;
  const certificate = query.certificate;
  const instructor = query.instructor;
  const messagefrominstructor = query.messagefrominstructor;
  const instructorprofile = query.instructorprofile;
  const courseimage = query.courseimage;

  const { isLoading, isError, data, isFetching } = useQuery(
    ["colors"],
    () => fetchWeeklyOutline(),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (isError) {
    return <h2>{isError}</h2>;
  }

  return (
    <Layout>
      <section>
        <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
          <img
            className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay bg-darkblue-500"
            src="/assets/students.svg"
            alt="course-details logo"
          />
          <div className="flex flex-col gap-28 sm:gap-10 md:gap-14 lg:gap-0 px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-5 lg:py-12 xl:py-10">
            <div className="ml-3 sm:ml-0 mt-3 lg:ml-0 w-full flex flex-col flex-wrap md:items-start pl-2 sm:pl-5   sm:py-10 md:pl-0 md:py-5 lg:py-12 xl:py-14">
              <h1 className={styles.course3}>{title}</h1>
              <h1 className={styles.course2}>{title}</h1>
              <h1 className={styles.course1}>{title}</h1>
            </div>
            <div className="w-full flex flex-col gap-8 sm:gap-0 lg:flex-row">
              <div className="flex flex-col gap-2 px-5 md:px-0 ">
                <h1 className="font-bold text-2xl lg:text-5xl text-gray-50">
                  {price}
                </h1>
                <h2 className="text-xl font-bold text-bodyBackground ">
                  Available in English only
                </h2>
                <div className="flex gap-1 lg:mt-2 mt-5 xl:mt-5">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star_disabled.svg" alt="" />
                </div>
              </div>
              <button className="ml-5 md:ml-0 flex mt-5 font-normal w-fit text-md items-center lg:mx-auto lg:py-2 lg:px-6 lg:text-xl px-3 py-2 h-auto lg:h-16 rounded-md text-darkblue-500 bg-gray-50 ">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 pt-14 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground">
        <h1 className="pb-8 text-4xl font-medium text-darkblue-500  ">
          Course Description
        </h1>
        <section className="flex flex-col lg:flex-row gap-16 items-center  lg:items-start ">
          <img
            className="rounded-xl w-auto h-auto  lg:w-[400px] lg:h-[400px]  "
            src="/assets/course-description.jpg"
            alt="course detaisl logo"
          />

          <div className="text-gray-900 font-normal text-xl">
            <h1 className="mb-8">{description}</h1>
            <div className="flex flex-col  gap-3">
              <h1 className="flex flex-row gap-4">
                <img src="/assets/outline-delivery.svg" alt="lesson-delivery" />
                {learningmethod}
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/skill-level.svg" alt="skill level" />
                {courselevel}
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/no-prerequsite.svg" alt="no prerequisite" />
                {prequisitelevel}
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/time-duration.svg" alt="time " /> {approxweek}
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/no-certificate.svg" alt="certification" />
                {certificate}
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/mdi-teacher.svg" alt="mdi-teacher" />{" "}
                {instructor}
              </h1>
            </div>
          </div>
        </section>

        <section className="mt-12">
          {data?.data?.map((data: any) => {
            return (
              <div key={data.id}>
                <WeeklyOutline
                  weekNumber={data.week}
                  topic={data.topic}
                  objectives1={data.objectives1}
                  objectives2={data.objectives2}
                  objectives3={data.objectives3}
                  syllabus1={data.syllabus1}
                  syllabus2={data.syllabus2}
                  syllabus3={data.syllabus3}
                  courseMaterials={data.courseMaterials}
                />
              </div>
            );
          })}
        </section>

        <div className="py-14 flex flex-row gap-10 sm:gap-24 lg:gap-24 px-0 sm:px-5  lg:px-10 text-darkblue-500 font-bold text-lg sm:text-xl lg:text-2xl uppercase ">
          <h1>reviews</h1>
          <h1>faqs</h1>
        </div>
        <section>
          <h1 className="text-darkblue-900 font-medium text-2xl sm:text-3xl md:text-4xl">
            Message from instructor
          </h1>
          <div className="flex flex-col md:flex-row mt-9  ">
            <InstructorCard
              src={instructorprofile}
              text={messagefrominstructor}
            />
          </div>
        </section>
        <section className="text-darkblue-900 flex flex-col lg:flex-row gap-5 items-center justify-between">
          <div className="sm:w-full px-0 sm:px-12 md:px-24 lg:px-0 py-12">
            <h1 className="text-3xl sm:text-4xl font-medium mb-4 ">
              Support Resources
            </h1>
            <h3 className="text-lg sm:text-xl font-normal mb-10 max-w-[550px]  ">
              nventore veritatis qui repellat repellat s nventore veritatis qui
              repellat repellat sed
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 lg:gap-8 mb-4  ">
              <h1 className="text-lg font-medium">Office Hours:</h1>
              <div className="flex flex-col gap-4">
                <div className="text-lg font-normal">
                  <h2>Mondays-Fridays</h2>
                  <h2>9AM-6PM (Gmt+1)</h2>
                </div>
                <div className="text-lg font-normal">
                  <h2>Saturday & Sunday</h2>
                  <h2>1PM-6PM (Gmt+1)</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-11 py-7 px-5 border-1 shadow-md w-[250px] ">
              <img
                className="w-[30px] h-[30px] "
                src="/assets/baal-mail-logo.svg"
                alt="mail logo"
              />
              <div>
                <h1 className="text-lg sm:text-xl  md:text-2xl font-medium">
                  Email
                </h1>
                <h3 className="text-lg font-normal">Baal@info.org</h3>
              </div>
            </div>
          </div>
          <div className="w-screen sm:w-full flex items-center justify-center bg-white sm:bg-darkblue-50 py-12 ">
            <form className="rounded-xl flex flex-col gap-10 w-auto sm:w-[450px] bg-white px-auto sm:px-10 py-5 sm:py-10 ">
              <input
                type="text"
                className="w-full border-b-2 border-gray-500 outline-none text-darkblue-500 "
                placeholder="Full Name (Last Name First)"
              />
              <input
                type="email"
                className="w-full border-b-2 border-gray-500 outline-none"
                placeholder="Email Address"
              />
              <div className="w-full flex border-b-2">
                <select name="countrycode" id="" className="bg-white">
                  <option data-countrycode="NG" value="234">
                    +234
                  </option>
                </select>
                <input
                  type="text"
                  className="w-ful outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <textarea
                cols={5}
                rows={5}
                className="w-full border-2 p-4 border-gray-500 outline-none"
                placeholder="Message"
              />
              <button
                type="submit"
                className="flex bg-darkblue-500 w-fit justify-center px-16 py-3 text-gray-50 mt-10"
              >
                Send message
                <img
                  src="/assets/arrow-up.svg"
                  alt="arrow up"
                  width={12}
                  height={12}
                  className="my-auto ml-3"
                />
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CourseDetails;
