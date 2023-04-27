import { StudentsCards } from "@/components/about-us/teamCards";
import { ServicesCard } from "@/components/about-us/valueCards";
import Startup from "@/components/landing/start";
import Layout from "@/components/layout";
import React from "react";
import GetStarted from "@/components/landing-page/getStarted";
import Goals from "@/components/landing-page/goals";
import WhatOurStudentsSay from "@/components/landing-page/whatOurStudentsSay";
import Courses from "@/components/landing-page/courses";
import MasterTheCyberSpace from "@/components/landing-page/masterTheCyberSpace";
import AnimateText from "@/components/landing-page/animateText";
import MarqueeSlider from "@/components/landing-page/marqueeSlider";

const ServicesData = [
  {
    id: 1,
    src: "/assets/course-modules.svg",
    service: "Simplified Course Module",
    text: "Learn seamlessly without being overwhelmed with chunky modules. You can learn at your own pace on your learning dashboard.",
  },
  {
    id: 2,
    src: "/assets/certified.svg",
    service: "Get Certified",
    text: "Get certification that shows your expertise and credibility in the knowledge you just gained.",
  },
  {
    id: 3,
    src: "/assets/examinations.svg",
    service: "Real-time Examinations",
    text: "Test your knowledge with real examinations and tests. This exam will make you ready for the clientele world.",
  },
  {
    id: 4,
    src: "/assets/tutors.svg",
    service: "Certified Tutors",
    text: "Learn from experienced and certified tutors.",
  },
  {
    id: 5,
    src: "/assets/community-support.svg",
    service: "Community Support",
    text: "Get community support for the courses that you enrol for, with moderators and course creators responding to your questions.",
  },
  {
    id: 6,
    src: "/assets/2-4-7.svg",
    service: "2-4-7 You Service",
    text: "Chat with our customer service if you are having trouble with navigating your dashboard, or with payment.",
  },
];

const Home = () => {
  return (
    <Layout>
      <AnimateText />

      <section className="w-full flex flex-col md:flex-row items-center justify-between px-5 py-3 sm:py-10 gap-4 md:gap-0 bg-darkblue-50">
        <MarqueeSlider />
      </section>

      <GetStarted />

      <Goals />

      <MasterTheCyberSpace />

      <section className="flex flex-col items-center justify-center py-12 bg-bodyBackground ">
        <h1 className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue-500 px-5 sm:px-14 md:px-24 lg:px-40 xl:px-64 max-w-[1520px] ">
          Get Unimaginable but Achievable Influence & Revenue From the comfort
          of your home with;
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ">
          {ServicesData.map((data) => {
            return (
              <div key={data.id}>
                <ServicesCard
                  src={data.src}
                  valueTitle={data.service}
                  text={data.text}
                />
              </div>
            );
          })}
        </div>
      </section>

      <WhatOurStudentsSay />

      <main className="py-12 bg-bodyBackground">
        <section className="flex flex-col px-5 bg-bodyBackground ">
          <div className="flex flex-col lg:flex-row gap-3 justify-normal lg:justify-between lg:items-center lg:mx-24">
            <h1 className="text-darkblue-500 font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
              Check out our influential courses
            </h1>
            <h4 className="flex flex-rwo gap-2 text-gray-900 text-lg font-bold  ">
              Explore Courses{" "}
              <svg
                width="21"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.293 5.80866C12.4805 5.62118 12.7348 5.51587 13 5.51587C13.2652 5.51587 13.5195 5.62118 13.707 5.80866L17.707 9.80866C17.8945 9.99618 17.9998 10.2505 17.9998 10.5157C17.9998 10.7808 17.8945 11.0351 17.707 11.2227L13.707 15.2227C13.5184 15.4048 13.2658 15.5056 13.0036 15.5033C12.7414 15.5011 12.4906 15.3959 12.3052 15.2105C12.1198 15.0251 12.0146 14.7743 12.0123 14.5121C12.01 14.2499 12.1108 13.9973 12.293 13.8087L14.586 11.5157H3C2.73478 11.5157 2.48043 11.4103 2.29289 11.2228C2.10536 11.0352 2 10.7809 2 10.5157C2 10.2504 2.10536 9.99609 2.29289 9.80855C2.48043 9.62101 2.73478 9.51566 3 9.51566H14.586L12.293 7.22266C12.1055 7.03513 12.0002 6.78082 12.0002 6.51566C12.0002 6.25049 12.1055 5.99618 12.293 5.80866Z"
                  fill="#162A5A"
                />
              </svg>
            </h4>
          </div>
        </section>
        <div className="pl-3">
          <Courses />
        </div>
      </main>

      <section className="px-5 sm:px-10 flex flex-col lg:flex-row pb-12 gap-16 md:gap-8 lg:gap-10 items-center justify-center bg-bodyBackground ">
        <div className="max-w-[450px] ">
          <h1 className="text-darkblue-500 font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            You can promote our courses and get a commission
          </h1>
          <h3 className="text-darkblue-900 text-basw sm:text-lg md:text-xl font-normal mb-10">
            Lorem ipsum dolor sit amet consectetur. Cursus sed ullamcorper sit
            vel in lorem ut. Euismod nunc neque ut lorem aenean mauris neque
            libero amet.
          </h3>
          <h4 className="flex flex-row items-center gap-2 text-darkblue-500 text-lg font-medium  ">
            See how it works{" "}
            <svg
              width="21"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.293 5.80866C12.4805 5.62118 12.7348 5.51587 13 5.51587C13.2652 5.51587 13.5195 5.62118 13.707 5.80866L17.707 9.80866C17.8945 9.99618 17.9998 10.2505 17.9998 10.5157C17.9998 10.7808 17.8945 11.0351 17.707 11.2227L13.707 15.2227C13.5184 15.4048 13.2658 15.5056 13.0036 15.5033C12.7414 15.5011 12.4906 15.3959 12.3052 15.2105C12.1198 15.0251 12.0146 14.7743 12.0123 14.5121C12.01 14.2499 12.1108 13.9973 12.293 13.8087L14.586 11.5157H3C2.73478 11.5157 2.48043 11.4103 2.29289 11.2228C2.10536 11.0352 2 10.7809 2 10.5157C2 10.2504 2.10536 9.99609 2.29289 9.80855C2.48043 9.62101 2.73478 9.51566 3 9.51566H14.586L12.293 7.22266C12.1055 7.03513 12.0002 6.78082 12.0002 6.51566C12.0002 6.25049 12.1055 5.99618 12.293 5.80866Z"
                fill="#162A5A"
              />
            </svg>
          </h4>
        </div>
        <div>
          <img
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[580px] xl:w-[725px]"
            src="/assets/photo.jpg"
            alt="lady-pic"
          />
        </div>
      </section>

      <section className="px-5 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-5 bg-bodyBackground pb-5 sm:pb-8 ">
        <div className="flex flex-row">
          <img
            className="relative z-10 w-[100px]"
            src="/assets/student1.svg "
            alt="student-avatar"
          />
          <img
            className="rounded-full relative z-20 -left-6 w-[100px]  "
            src="/assets/student2.svg "
            alt="student-avatar"
          />
          <img
            className="rounded-full relative z-30 -left-14 w-[100px] "
            src="/assets/student3.svg "
            alt="student-avatar"
          />
          <img
            className="hidden lg:flex"
            src="/assets/divider-vertical.svg"
            alt="divider"
          />
        </div>
        <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold w-[auto] md:w-[550px] lg:w-[700px] xl:w-[800px]  pl-0 lg:pl-5 ">
          Over 2,000 students across Africa who have optimized their potential.
        </h1>
      </section>

      <Startup />
    </Layout>
  );
};

export default Home;
