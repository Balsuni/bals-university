import Layout from "@/components/layout";
import PageHeaderText from "@/components/pageHeaders/pageHeader-text";
import React from "react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      title: 'How do i make payment for double courses at a time?',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.',
    },
    {
      id: 2,
      title: 'How do i make payment for double courses at a time?',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.',
    },
    {
      id: 3,
      title: 'How do i make payment for double courses at a time?',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.',
    },
    {
      id: 4,
      title: 'How do i make payment for double courses at a time?',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.',
    },
    {
      id: 5,
      title: 'How do i make payment for double courses at a time?',
      content: 'Lorem ipsum dolor sit amet consectetur. Eu elit platea ornare mauris tortor sagittis. Ut sit lorem amet bibendum amet nullam quam. Sed.',
    },
  ]

  const secondFaqData = [
    {
      id: 1,
      title: 'What is Bals University about?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      title: 'How to setup my dashboard and start courses?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'What is the mode of payment?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      title: 'How can we contact our tutor?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  return (

    <Layout>
      <div className="hidden lg:inline">
      <img src="/assets/letter_send 2.svg" className="absolute left-[500px] top-[330px] w-[450px]" alt="" />
      </div>

      <PageHeaderText
        text=" Frequently Asked Questions"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-faq.svg"
        backgroundImageAlt="faqs"
        title="FAQ"
      />

      <main className="bg-bodyBackground">
      <div className="justify-center w-fit ml-auto mr-auto p-10 pb-10 mt-20 mb-20">

        <h5 className="text-darkblue-500 font-semibold text-[16px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center">Frequently Asked Questions</h5>
          <div className="flex flex-col gap-10 mt-10 mb-5">
            {faqData.map((data) => {
              return <div className="flex flex-col w-fit" key={data.id}> 
              <div className="flex gap-5 lg:gap-14 flex-row lg:justify-between w-fit xl:w-9/12 bg-gray-200 p-5 md:px-10 shadow-md shadow-gray-500 ml-auto mr-auto">
               <p className="font-semibold text-md">{data.title}</p>
               <img src="/assets/plusicon.svg" className="ml-5 sm:ml-10" alt="" />
              </div>
              <div className="w-full ml-3 mr-3 sm:w-fit sm:ml-5 sm:mr-5 md:w-9/12 lg:w-7/12 xl:w-9/12 break-words md:ml-auto md:mr-auto mt-3 ">
              <p className="break-words ml-2 mr-2">{data.content}</p>
              </div>
              </div>
            })}
          </div>
      </div>

      <div className="pb-20">
      <h5 className="text-darkblue-500 font-semibold text-[26px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center">Frequently Asked Questions</h5>
      <div className="flex w-full flex-col gap-10 mt-16 ml-auto mr-auto items-center">
      {secondFaqData.map((data) => {
              return <div className="flex flex-col gap-5 lg:gap-7 w-fit sm:w-7/12 bg-gray-50 p-5 py-10 md:px-12 ml-3 mr-5 rounded-3xl shadow-md shadow-gray-500" key={data.id}> 

              <div className=" flex flex-row items-center justify-between w-full">
              <p className="text-darkblue-800 font-medium tracking-normal text-md lg:text-lg pr-3">{data.title}
               </p>
               <img src="/assets/arrowside.svg" className="bg-gray-100 shadow-xl py-4 px-5 rounded-full mr-5 ml-auto sm:ml-10" alt="" />
              </div>
               

              <div className="w-full mr-20 hidden">
              <p className="">{data.content}</p>
              </div>
              </div>
            })}
      </div>
      </div>
      </main>
    </Layout>
  );
};

export default FAQ;
