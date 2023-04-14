import { StudentsCards } from "@/components/about-us/teamCards";
import { ServicesCard } from "@/components/about-us/valueCards";
import Startup from "@/components/landing/start";
import Layout from "@/components/layout";
import LandingPageCourseGallery from "@/components/landing-page/landingPageCourses";
import React, { useRef } from "react";

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

const Students = [
  {
    id: 1,
    src: "/assets/recent-graduate.png",
    srcRinglight: "/assets/ellipse-recentGraduate.svg",
    student: "Recent Graduate",
    text: "Enter the favour market with irresistible skills that employers cannot overlook.",
  },
  {
    id: 2,
    src: "/assets/freelancer.png",
    srcRinglight: "/assets/ellipse-freelancer.svg",
    student: "Freelancer",
    text: "Advance your career as a freelancer by arming yourself with knowledge prospects can’t resist.",
  },
  {
    id: 3,
    src: "/assets/student.png",
    srcRinglight: "/assets/ellipse-student.svg",
    student: "Student",
    text: "Stand out from the multitude with knowledge that millions of persons are willing to pay millions for.",
  },
  {
    id: 4,
    src: "/assets/entrepreneur.png",
    srcRinglight: "/assets/ellipse-entrepreneur.svg",
    student: "Entrepreneur",
    text: "Arm yourself with the knowledge to scale and advance your company in the digital space.",
  },
  {
    id: 5,
    src: "/assets/9-5ever.png",
    srcRinglight: "/assets/ellipse-9-5ever.png",
    student: "9-5ever",
    text: "Make yourself invaluable in your workplace by equipping yourself with laser-focused knowledge to advance your company.",
  },
];

const whatOurStudentSay = [
  {
    id: 1,
    name: "John Doe",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue sit neque sit varius aliquet. Faucibus elit id tortor convallis pulvinar tristique fringilla et enim. Tortor sit eu pretium varius tellus urna. Duis sit non volutpat.",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue sit neque sit varius aliquet. Faucibus elit id tortor convallis pulvinar tristique fringilla et enim. Tortor sit eu pretium varius tellus urna. Duis sit non volutpat.",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue sit neque sit varius aliquet. Faucibus elit id tortor convallis pulvinar tristique fringilla et enim. Tortor sit eu pretium varius tellus urna. Duis sit non volutpat.",
  },
  {
    id: 4,
    name: "John Doe",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue sit neque sit varius aliquet. Faucibus elit id tortor convallis pulvinar tristique fringilla et enim. Tortor sit eu pretium varius tellus urna. Duis sit non volutpat.",
  },
  {
    id: 5,
    name: "John Doe",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue sit neque sit varius aliquet. Faucibus elit id tortor convallis pulvinar tristique fringilla et enim. Tortor sit eu pretium varius tellus urna. Duis sit non volutpat.",
  },
];

const Home = () => {
  const studentRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    studentRef.current?.scrollBy({
      left: -studentRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    studentRef.current?.scrollBy({
      left: studentRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <section className="py-12 px-5 sm:px-10 flex flex-col items-center justify-center ">
        <h1 className="mb-10 sm:mb-5 md:mb-0 text-darkblue-500 text-center text-3xl sm:text-3xl md:text-4xl font-bold">
          Master The CyberSpace
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col max-w-[300px] items-start justify-center ">
            <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium mb-8">
              What you do doesn&apos;t matter, BALS University is built for
              anyone who desires to get more from the digital space.
            </h1>
            <button className=" py-4 px-6 bg-darkblue-500 text-darkblue-50 w-[150px] rounded-xl">
              Get Started
            </button>
          </div>
          {Students.map((data) => {
            return (
              <div key={data.id}>
                <StudentsCards
                  src={data.src}
                  student={data.student}
                  text={data.text}
                  srcRinglight={data.srcRinglight}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-12 ">
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

      <section className="w-full bg-darkblue-50 h-[580px]">
        <div className="flex flex-col justify-center lg:flex-row gap-3 pt-16 lg:justify-between items-center lg:mx-24">
          <h1 className="text-darkblue-500 font-bold text-2xl sm:text-3xl md:text-4xl mb-4 lg:text-left text-center">
            What our students say
          </h1>
          <div className="flex gap-5">
            <button
              // disabled={handlePrev === null}
              className="bg-darkblue-500 text-white hover:bg-gray-900 p-2 py-4 px-3 rounded-full focus:outline-none"
              onClick={handlePrev}
            >
              <img
                src="/assets/previous-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
            <button
              // disabled={handleNext === null}
              className="bg-darkblue-500 text-white hover:bg-gray-900 p-2 py-4 px-3 rounded-full focus:outline-none"
              onClick={handleNext}
            >
              <img src="/assets/next-icon.svg" width={20} height={20} alt="" />
            </button>
          </div>
        </div>
        <div className="px-5 lg:ml-16 mt-10">
          <div className="relative">
            <div
              ref={studentRef}
              className="mb-5 flex flex-row w-full overflow-auto transition duration-300 ease-in "
              style={{ transform: "translateX(0)" }}
            >
              <div className="flex flex-row gap-[22px] sm:gap-[40px]">
                {whatOurStudentSay.map((data) => {
                  return (
                    <section
                      className="flex flex-col flex-wrap bg-gray-50 h-[324px] w-[612px] sm:w-[612px] md:w-[612px] md:h-[324px] sm:h-[324px] pb-5 rounded-xl"
                      key={data.id}
                    >
                      <div className="mt-10 ml-10">
                        <img src="/assets/quotation.svg" alt="" />
                      </div>
                      <div className="w-[299px] mt-7 ml-20 text-[18px]">
                        <p>{data.description}</p>
                        <img
                          src="/assets/quotation_2.svg"
                          className="ml-auto mt-5"
                          alt=""
                        />
                      </div>

                      <div className="mt-20 ml-7">
                        <div className="flex items-center">
                          <img
                            className="w-[122.98px] h-[122.98px] mr-[9px] mb-0 ml-2 absolute z-10"
                            src="/assets/student_landingpage.svg"
                            alt="logo"
                          />
                          <img
                            className="w-[145px] relative z-0"
                            src="/assets/ecclipse.svg"
                            alt="logo"
                          />
                        </div>

                        <div className="flex justify-center flex-col items-center mt-3">
                          <p className="text-[18px] font-bold text-gray-900">
                            {data.name}
                          </p>
                          <p className="text-[16px] font-light text-gray-900">
                            {data.title}
                          </p>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 lg:mt-10">
          <img src="/assets/Rectangle_1.svg" onClick={handlePrev} alt="" />
          <img src="/assets/Rectangle.svg" alt="" />
          <img src="/assets/Rectangle_1.svg" alt="" onClick={handleNext} />
        </div>
      </section>

      <main className="px-6 py-12 ">
        <section className="flex flex-col pt-12">
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

        <section className="mt-12 lg:mx-5">
          <div className="mb-9 lg:ml-16 ml-0 mr-10">
            <div className="flex flex-row items-center justify-between border-b-4 border-darkblue-100">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32">
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px]  ">
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

          <div className="items-center ml-0 lg:ml-20 mr-3">
            <LandingPageCourseGallery />
          </div>
        </section>

        <section className="flex flex-col md:flex-row mb-16 gap-16 md:gap-8 lg:gap-10 items-center justify-center ">
          <div className="max-w-[450px]">
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
              className="w-[300px] sm:w-[400px] md:w-[350px] lg:w-[580px] xl:w-[725px]"
              src="/assets/photo.jpg"
              alt="lady-pic"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-5">
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
            Over 2,000 students across Africa who have optimized their
            potential.
          </h1>
        </section>
      </main>

      <Startup />
    </Layout>
  );
};

export default Home;
