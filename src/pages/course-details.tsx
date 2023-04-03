import Layout from "@/components/layout";
import React from "react";
import styles from "../styles/pageHeaderImage.module.scss";
import InstructorCard from "@/components/course-details/instructor";

const CourseDetails = () => {
  return (
    <Layout>
      <section>
        <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
          <img
            className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
            src="/assets/students.svg"
            alt="course-details logo"
          />
          <div className="flex flex-col items-center px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-5 lg:py-12 xl:py-10">
            <div className="w-screen flex flex-col items-center flex-wrap md:items-start px-0 sm:px-5 md:px-10  py-10 sm:py-10 md:py-[30px] lg:py-12 xl:py-14">
              <h1 className={styles.course3}>Fundamentals of LinkedIn</h1>
              <h1 className={styles.course2}>Fundamentals of LinkedIn</h1>
              <h1 className={styles.course1}>Fundamentals of LinkedIn</h1>
            </div>
            <div className="w-full flex flex-col gap-8 sm:gap-0 sm:flex-row">
              <div className="flex flex-col gap-2 px-5 md:px-0 ">
                <h1 className="font-bold text-5xl text-gray-50">$20</h1>
                <h2 className="text-xl font-bold text-bodyBackground ">
                  Available in English only
                </h2>
                <h3>*****</h3>
              </div>
              <button className="m-auto flex font-normal text-lg items-center justify-center px-6 py-4 h-12 rounded-md text-darkblue-500 bg-gray-50 ">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* done */}
      <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 pt-14 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground">
        <h1 className="pb-8 text-4xl font-medium text-darkblue-500  ">
          Course Description
        </h1>
        <section className="flex flex-col lg:flex-row gap-16 items-center  lg:items-start ">
          <img
            className="rounded-xl w-auto h-auto  lg:w-[400px] lg:h-[400px]  "
            src="/assets/course-description.svg"
            alt="course detaisl logo"
          />

          <div className="text-gray-900 font-normal text-xl">
            <h1 className="mb-8">
              Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
              nibh et. Vestibulum a non ph ar e t ravolutpatpellentesque
              placerat arcu dignissim condimentum nibh et. Vestibulum a non
              Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
              nibh et. Vestibulum a non ph ar e t ravol utpat pellente sq ue
              placerat arcu dignissim condimentum nibh et. Vestibulum a non pha
              lacerat arcu dignissim condimentum nibh et. Vestibulum a Lorem
              ipsum dolor sit amet
            </h1>
            <div className="flex flex-col  gap-3">
              <h1 className="flex flex-row gap-4">
                <img src="/assets/outline-delivery.svg" alt="lesson-delivery" />
                Video, Audio, Assignments, Interactive exercises, Project
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/skill-level.svg" alt="skill level" />
                Beginner
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/no-prerequsite.svg" alt="no prerequisite" />
                No Prerequisite
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/time-duration.svg" alt="time " /> Approx 2-4
                Weeks
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/no-certificate.svg" alt="certification" />
                No Certificate
              </h1>
              <h1 className="flex flex-row gap-4">
                <img src="/assets/mdi-teacher.svg" alt="mdi-teacher" /> Favour
                Lucy
              </h1>
            </div>
          </div>
        </section>

        <section className="pt-28">
          <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
            Week 1
          </h2>
          <h1 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-2xl mb-5 flex flex-row items-center justify-between ">
            What is LinkedIn
            <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
          </h1>
          <div className="bg-darkblue-50 py-4 pl-3 sm:pl-6 lg:pl-14   pr-3 sm:pr-6 lg:pr-10 ">
            <div className="mb-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Objectives
              </h2>
              <ul className="text-gray-900 font-normal text-lg sm:text-xl ml-11 list-disc  ">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
                  nibh et. Vestibulum a non ph ar e t ravolutpatpe
                </li>
                <li>
                  Ilentesque placerat arcu dignissim condimentum nibh et.
                  Vestibulum a non
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
                  nibh et. Vestibulum a non ph ar e t ravol utpat pellente
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="mb-4  text-xl font-bold text-gray-900">
                Syllabus / Sub Topics
              </h2>
              <ul className="text-gray-900 font-normal text-lg sm:text-xl ml-11 list-disc  ">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
                  nibh et. Vestibulum a non ph ar e t ravolutpatpe
                </li>
                <li>
                  Ilentesque placerat arcu dignissim condimentum nibh et.
                  Vestibulum a non
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
                  nibh et. Vestibulum a non ph ar e t ravol utpat pellente
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Course Materials
              </h2>

              <h3 className="text-gray-900 font-normal text-lg sm:text-xl ml-5 list-disc  ">
                Textbook, Articles, supplementary resources. Lorem ipsum dolor
                sit amet consectetur. Adipiscing condimentum nibh et. Vestibulum
                a non ph ar e t ravolutpatpe llentesque placerat ar
              </h3>
            </div>
          </div>
        </section>

        <section className="pt-12">
          <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
            Week 1
          </h2>
          <h1 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-2xl mb-5 flex flex-row items-center justify-between ">
            What is LinkedIn
            <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
          </h1>
        </section>

        <section className="pt-12">
          <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
            Week 1
          </h2>
          <h1 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-2xl mb-5 flex flex-row items-center justify-between ">
            What is LinkedIn
            <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
          </h1>
        </section>

        <section className="pt-12">
          <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
            Week 1
          </h2>
          <h1 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-2xl mb-5 flex flex-row items-center justify-between ">
            What is LinkedIn
            <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
          </h1>
        </section>

        <section className="pt-12">
          <h2 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-medium text-xl mb-3">
            Week 1
          </h2>
          <h1 className="px-0 sm:px-5 lg:px-10  text-gray-900 font-normal text-2xl mb-5 flex flex-row items-center justify-between ">
            What is LinkedIn
            <img src="/assets/coursedetails-arrow-down.svg" alt="arrow down" />
          </h1>
        </section>

        <div className="py-14 flex flex-row gap-10 sm:gap-24 lg:gap-24 px-0 sm:px-5  lg:px-10 text-darkblue-500 font-bold text-2xl uppercase ">
          <h1>reviews</h1>
          <h1>faqs</h1>
        </div>

        <section>
          <h1 className="text-darkblue-900 font-medium text-2xl sm:text-3xl md:text-4xl">
            Message from instructor
          </h1>
          <div className="flex flex-col md:flex-row mt-9  ">
            <InstructorCard
              src="/assets/team-member-avatar.svg"
              text="      learning, we understand , can be challenging, but rest assured that we
          are here to support you every step of the way. Our courses ranges from
          paid to free courses. Lorem ipsum dolor sit amet consectetur.
          Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit
          amet consectetur. Adipiscing pellentesque placerat arcu dignissim
          Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque
          placerat arcu dignissim"
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
            <div className="flex flex-row gap-11 py-9 px-5 border-1 shadow-md w-[250px] ">
              <img
                className="w-[40px] h-[35px] "
                src="/assets/baal-mail-logo.svg"
                alt="mail logo"
              />
              <div>
                <h1 className="text-2xl font-medium">Email</h1>
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