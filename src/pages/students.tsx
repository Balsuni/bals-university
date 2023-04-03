import Layout from "@/components/layout";
import React from "react";
import styles from "../styles/pageHeaderImage.module.scss";
import InstructorCard from "@/components/course-details/instructor";

const Students = () => {
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
      <section>
        <div className="h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
          <img
            className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
            src="/assets/students.svg"
            alt="course-details logo"
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-14 lg:gap-28 xl:gap-64 px-0 md:px-10 lg:px-16 xl:px-20 py-0 md:py-12 lg:py-12">
            <div className="flex flex-row w-1/3">
              <div className="w-screen flex flex-col items-center flex-wrap md:items-start py-10 sm:py-10 md:py-[70px] lg:py-16 xl:py-20">
                <h1 className={styles.text3}>Students</h1>
                <h1 className={styles.text2}>Students</h1>
                <h1 className={styles.text1}>Students</h1>
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-col items-center md:items-start justify-between gap-8 sm:gap-10">
              <h1 className="px-1 sm:px-10 md:px-0 text-center md:text-start text-2xl sm:text-4xl font-medium text-gray-50">
                An Engaging learning Experience to fit your needs
              </h1>

              <button className="flex font-normal text-lg items-center px-6 py-4 h-12 rounded-md text-darkblue-500 bg-gray-50 ">
                Sign Up now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* done */}

      {/* <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 pt-12 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground"> */}
      <main className="w-full pt-12 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground">
        <div className="text-darkblue-900 pb-12 px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 ">
          <h1 className="text-center mb-7 text-2xl sm:text-3xl lg:text-4xl font-medium ">
            OUR COURSE STRUCTURE
          </h1>
          <div className="flex flex-col gap-4 text-lg sm:text-lg lg:text-xl font-normal ">
            <h3>
              Courses are structured with your growth and success in mind. For
              each course, you get a courses overview, lesson plan, discussion
              forum and the ability to create your course schedule. Lorem ipsum
              dolor sit amet consectetur. Adipiscing condimentum nibh et.
              Vestibulum a non ph ar e t ravolutpatpellentesque placerat arcu
              dignissim condimentum nibh et. Vestibulum a non pha .{" "}
            </h3>
            <h3>
              Lorem ipsum dolor sit amet consectetur. Adipiscing condimentum
              nibh et. Vestibulum a non ph ar e t ravol utpat pellente sq ue
              placerat arcu dignissim condimentum nibh et. Vestibulum a non pha
            </h3>
          </div>
          <h1 className="pt-5 uppercase text-xl text-darkblue2-900 font-medium underline">
            view all courses
          </h1>
        </div>

        <section className="py-12 bg-darkblue-50 px-4  ">
          <h1 className="uppercase text-center pb-8 text-2xl sm:text-3l lg:text-4xl font-medium text-darkblue-900  ">
            Why should you join as a student?
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10">
            <div className="flex flex-row gap-8">
              <img
                className="py-8 px-6 bg-white"
                src="/assets/baal-mail-logo.svg"
                alt="folder"
              />
              <div className="flex flex-col gap-1 w-[200px] text-darkblue-900">
                <p className="text-2xl font-medium">Lorem ip</p>
                <p className="text-md sm:text-lg lg:text-xl font-normal">
                  cu dignissim Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <img
                className="py-8 px-6 bg-white"
                src="/assets/baal-mail-logo.svg"
                alt="folder"
              />
              <div className="flex flex-col gap-1 w-[200px] text-darkblue-900">
                <p className="text-2xl font-medium">Lorem ip</p>
                <p className="text-md sm:text-lg lg:text-xl font-normal">
                  cu dignissim Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>{" "}
            <div className="flex flex-row gap-8">
              <img
                className="py-8 px-6 bg-white"
                src="/assets/baal-mail-logo.svg"
                alt="folder"
              />
              <div className="flex flex-col gap-1 w-[200px] text-darkblue-900">
                <p className="text-2xl font-medium">Lorem ip</p>
                <p className="text-md sm:text-lg lg:text-xl font-normal">
                  cu dignissim Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-44 ">
          <h1 className="text-center pb-8 text-2xl sm:text-3l lg:text-4xl font-medium text-darkblue-900  ">
            Ready?
          </h1>
          <h2 className="text-center px-5 md:w-[800px] md:m-auto pb-8 text-md sm:text-lg lg:text-xl font-normal text-darkblue-900  ">
            learning, we understand , can be challenging, but rest assured that
            we are here to support you every step of the way. Our cour{" "}
          </h2>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center justify-between w-[300px] md:w-[700px] m-auto gap-8 shadow-lg py-7 px-4  ">
              <div className="flex flex-row gap-4 items-center ">
                <h1 className="rounded-md px-5 py-2 text-5xl font-bold text-white bg-cyan1-900 ">
                  1
                </h1>
                <h1 className="text-darkblue-900 font-bold text-3xl ">
                  Sign Up
                </h1>
              </div>
              <h2 className=" text-darkblue-900 font-normal text-xl w-[270px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque
                p
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-[300px] md:w-[700px] m-auto gap-8 shadow-lg py-7 px-4  ">
              <div className="flex flex-row gap-4 items-center ">
                <h1 className="rounded-md px-5 py-2 text-5xl font-bold text-white bg-cyan1-900 ">
                  2
                </h1>
                <h1 className="text-darkblue-900 font-bold text-3xl ">
                  Sign Up
                </h1>
              </div>
              <h2 className=" text-darkblue-900 font-normal text-xl w-[270px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque
                p
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-[300px] md:w-[700px] m-auto gap-8 shadow-lg py-7 px-4  ">
              <div className="flex flex-row gap-4 items-center ">
                <h1 className="rounded-md px-5 py-2 text-5xl font-bold text-white bg-cyan1-900 ">
                  3
                </h1>
                <h1 className="text-darkblue-900 font-bold text-3xl ">
                  Sign Up
                </h1>
              </div>
              <h2 className=" text-darkblue-900 font-normal text-xl w-[270px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque
                p
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-[300px] md:w-[700px] m-auto gap-8 shadow-lg py-7 px-4  ">
              <div className="flex flex-row gap-4 items-center ">
                <h1 className="rounded-md px-5 py-2 text-5xl font-bold text-white bg-cyan1-900 ">
                  4
                </h1>
                <h1 className="text-darkblue-900 font-bold text-3xl ">
                  Sign Up
                </h1>
              </div>
              <h2 className=" text-darkblue-900 font-normal text-xl w-[270px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque
                p
              </h2>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16">
          <h1 className="text-darkblue-900 text-center font-medium text-2xl sm:text-3xl md:text-4xl">
            Message from Management
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

        <section className="text-darkblue-900 flex flex-col lg:flex-row gap-5 items-center justify-between px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 ">
          <div className="sm:w-full px-0 sm:px-12 md:px-24 lg:px-0 py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 ">
              24/7 SUPPORT
            </h1>
            <h3 className="text-lg sm:text-xl font-normal mb-10 max-w-[550px]  ">
              Information about the support available for students. Lorem ipsum
              dolor sit amet. 33 perferendis tempora vel ipsam aperiam aut amet
              asperiores et inventore veritatis qui repellat repellat sed optio
              explicabo. Quo consequatur magni aut laudantium aliquam 33 laborum
              sapiente ut fugiat pariatur! Qui iste necessitatibus ut laborum
              sint qui nemo nobis eum nisi alias eos eius
            </h3>
            <div className="flex flex-col  gap-3  mb-4  ">
              <div className="text-lg font-normal flex flex-row gap-5">
                <img src="/assets/phone.svg" alt="phone" />
                <div>
                  <h2>+234 814 875 8005</h2>
                  <h2>+234 704 652 6254</h2>
                </div>
              </div>
              <div className="text-lg font-normal">
                <h2 className="flex flex-row gap-5 items-center ">
                  <img
                    className="w-[30px] h-[30px] "
                    src="/assets/mail.svg"
                    alt="mail"
                  />{" "}
                  info@bals.com
                </h2>
                <h2 className="flex flex-row gap-5">
                  <img
                    className="ml-1 w-[23px]"
                    src="/assets/logos-linkedin-icon.svg"
                    alt="linkedin"
                  />
                  Baalsuniversity
                </h2>
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

        <section className="flex flex-col items-center justify-center px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 ">
          <h5 className="text-darkblue-500 font-semibold text-2xl sm:text-3xl md:sm:text-4xl mt-12 tracking-wider text-center">
            Frequently Asked Questions
          </h5>
          <div className="flex flex-col gap-10 mt-10 mb-5">
            {faqData.map((data) => {
              return (
                <div className="flex flex-col w-fit" key={data.id}>
                  <div className="flex gap-5 lg:gap-14 flex-row lg:justify-between w-fit border-b-2 border-lineColor  p-5 md:px-10  ml-auto mr-auto">
                    <p className="font-normal text-xl">{data.title}</p>
                    <img
                      src="/assets/plusicon.svg"
                      className="ml-5 sm:ml-10"
                      alt=""
                    />
                  </div>
                  <div className="w-full ml-3 mr-3 sm:w-fit sm:ml-5 sm:mr-5 md:w-9/12 lg:w-7/12 break-words md:ml-auto md:mr-auto mt-3 ">
                    <p className="break-words text-lg font-normal ml-2 mr-2">
                      {data.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <section className="bg-darkblue-50 pt-12 pb-16 flex flex-col items-center justify-center ">
        <h1 className="text-3xl  sm:text-4xl font-medium text-darkblue-900 mb-4">
          Get Started Now
        </h1>
        <h2 className=" text-xl sm:text-2xl text-center font-normal text-darkblue-900 mb-6 ">
          Comprehensive Learning at your Fingertips
        </h2>
        <button className="flex font-normal text-lg items-center px-6 py-4 h-12 rounded-md bg-darkblue-500 text-gray-50 ">
          Sign up as a Student
        </button>
      </section>
    </Layout>
  );
};

export default Students;
