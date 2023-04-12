import React, { useState } from "react";
import Layout from "@/components/layout";
import styles from "../styles/pageHeaderImage.module.scss";
import InstructorCard from "@/components/course-details/instructor";
import Faq from "@/components/ui/faq";

const affiliate = () => {
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

  const howToBecomeAnAffiliate = [
    {
      id: 1,
      title: "Sign Up",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque p",
    },
    {
      id: 2,
      title: "Sign Up",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque p",
    },
    {
      id: 3,
      title: "Sign Up",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque p",
    },
    {
      id: 4,
      title: "Sign Up",
      content:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque p",
    },
  ];

  const whatWeOffer = [
    {
      id: 1,
      title: "Commision Rates",
      content:
        "cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      title: "Payment Option",
      content:
        "cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      title: "Promotional Resources",
      content:
        "cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet  cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet cu dignissim Lorem ipsum dolor sit amet",
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
          <div className="flex flex-col gap-10 lg:flex-row items-center px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-5 lg:py-12 xl:py-10">
            <div className="w-screen flex flex-col items-start flex-wrap md:items-start px-5 py-5 sm:px-5 md:px-10 sm:py-5 md:py-[10px] lg:py-5 xl:py-14">
              <h1 className={styles.course3}>Affiliate</h1>
              <h1 className={styles.course2}>Affiliate</h1>
              <h1 className={styles.course1}>Affiliate</h1>
            </div>
            <div className="w-full mb-28 h-fit flex flex-col gap-3 lg:flex-row sm:gap-0 sm:flex-row xl:mr-28 lg:mt-16">
              <div className="w-full flex flex-col lg:flex-col gap-5 px-5 md:px-0 ">
                <h1 className="font-bold text-2xl tracking-normal lg:text-3xl text-gray-50">
                  Join our community of affiliates by promoting our high-quality
                  courses and start earning extra Income
                </h1>

                <button className="w-fit my-auto font-normal text-md md:text-lg items-center px-4 py-2 lg:px-6 lg:py-2 h-fit rounded-md text-darkblue-500 bg-gray-50 ">
                  Sign Up now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="w-full pt-12 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground">
        <div className="mt-16">
          <h1 className="w-fit ml-auto mr-auto text-darkblue-900 text-4xl text-center font-semibold">
            What we Offer
          </h1>

          <div className="w-fit mx-auto mt-10 flex flex-col gap-10">
            {whatWeOffer.map((offer) => (
              <div className="w-fit mx-auto flex flex-col gap-2" key={offer.id}>
                <div className="flex flex-col sm:flex-row sm:justify-normal items-center gap-5 sm:gap-20 sm:mx-0">
                  <h1 className="w-[54px] h-[54px] flex items-center justify-center bg-cyan1-900 rounded-full text-gray-50 font-bold text-2xl">
                    {offer.id}
                  </h1>
                  <h1 className="my-auto text-darkblue-900 text-[20px] font-semibold">
                    {offer.title}
                  </h1>
                </div>
                <div className="flex items-center justify-center mx-auto w-[300px] sm:mr-0 sm:ml-28 sm:pl-5 sm:w-[411px]">
                  <p className="break-words">{offer.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 bg-darkblue-50 mt-10">
          <h1 className="text-darkblue-900 text-center font-medium pt-10 text-2xl sm:text-3xl md:text-4xl">
            Message from Management
          </h1>
          <div className="flex flex-col md:flex-row mt-9  ">
            <InstructorCard
              src="/assets/affiliate_1.svg"
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

        <section className="pt-12 pb-44 ">
          <h1 className="text-center pb-8 text-2xl sm:text-3l lg:text-4xl font-medium text-darkblue-900  ">
            How to become an Affiliate
          </h1>

          <div className="relative top-[150px] hidden xl:block">
            <img
              src="/assets/pointer_shape(1).svg"
              className="absolute left-[250px]"
              alt=""
            />
          </div>

          <div className="relative top-[0px] left-[180px] hidden xl:block">
            <img
              src="/assets/pointer_shape.svg"
              className="absolute left-[900px]"
              alt=""
            />
          </div>

          <div className="relative top-[330px] left-[180px] hidden xl:block">
            <img
              src="/assets/pointer_shape.svg"
              className="absolute left-[900px]"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-5">
            {howToBecomeAnAffiliate.map((step) => {
              return (
                <div
                  className="flex flex-col md:flex-row items-center justify-between w-[300px] md:w-[700px] m-auto gap-8 shadow-lg py-7 px-4"
                  key={step.id}
                >
                  <div className="flex flex-row gap-4 items-center ">
                    <h1 className="rounded-md px-5 py-2 text-5xl font-bold text-white bg-cyan1-900 ">
                      {step.id}
                    </h1>
                    <h1 className="text-darkblue-900 font-bold text-3xl ">
                      {step.title}
                    </h1>
                  </div>
                  <h2 className=" text-darkblue-900 font-normal text-xl w-[270px]">
                    {step.content}
                  </h2>
                </div>
              );
            })}
          </div>
        </section>

        <section className="text-darkblue-900 flex flex-col lg:flex-row gap-5 items-center justify-between px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 ">
          <div className="w-screen sm:w-full items-center justify-center py-12 ">
            <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-medium mb-4 ">
              Generate your Affiliate Link
            </h1>
          </div>
          <div className="sm:w-full px-0 sm:px-12 md:px-24 lg:px-3 lg:pl-5 py-12 bg-darkblue-50">
            <h3 className="text-lg sm:text-xl font-normal mb-10 max-w-[550px]  ">
              learning, we understand , can be challenging, but rest assured
              that we are here to support you every step of the way. Our courses
              r
            </h3>
            <button className="flex bg-darkblue-500 w-fit justify-center px-16 py-3 text-gray-50 mt-10">
              Generate Link
              <img
                src="/assets/arrow-up.svg"
                alt="arrow up"
                width={12}
                height={12}
                className="my-auto ml-3"
              />
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16 mt-10">
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

      <section className="pl-2 pr-2 text-center bg-darkblue-50 pt-12 pb-16 flex flex-col items-center justify-center ">
        <h1 className="text-3xl  sm:text-4xl font-medium text-darkblue-900 mb-4">
          50% Bonus available for a limited time
        </h1>
        <h2 className=" text-xl sm:text-2xl text-center font-normal text-darkblue-900 mb-6 ">
          Comprehensive Learning at your Fingertips
        </h2>
        <button className="flex font-normal text-lg items-center px-6 py-4 h-12 rounded-md bg-darkblue-500 text-gray-50 ">
          Sign up as an Affiliate
        </button>
      </section>
    </Layout>
  );
};

export default affiliate;
