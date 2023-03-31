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
      <div className="shadow-lg justify-center w-fit shadow-gray-500 ml-auto mr-auto rounded-lg bg-gray-50 p-10 pb-10 mt-20 mb-20">

        <h5 className="text-darkblue-500 font-semibold text-[16px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center">Frequently Asked Questions</h5>
          <div className="flex flex-col gap-10 mt-10 mb-5">
            {faqData.map((data) => {
              return <div className="flex flex-col w-fit" key={data.id}> 
              <div className="flex gap-5 lg:gap-14 flex-row lg:justify-between w-fit bg-gray-200 p-5 md:px-10 shadow-md shadow-gray-500 ml-auto mr-auto">
               <p className="font-semibold text-md">{data.title}</p>
               <img src="/assets/plusicon.svg" className="ml-5 sm:ml-10" alt="" />
              </div>
              <div className="w-full ml-3 mr-3 sm:w-fit sm:ml-5 sm:mr-5 md:w-9/12 lg:w-7/12 break-words md:ml-auto md:mr-auto mt-3 ">
              <p className="break-words ml-2 mr-2">{data.content}</p>
              </div>
              </div>
            })}
          </div>
      </div>

      <div className="pb-20">
      <h5 className="text-darkblue-500 font-semibold text-[16px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center">Frequently Asked Questions</h5>
      <div className="flex w-fit flex-col gap-10 mt-16 ml-auto mr-auto">
      {faqData.map((data) => {
              return <div className="flex gap-5 lg:gap-14 flex-row lg:justify-between w-fit bg-gray-50 p-5 md:px-12 ml-3 mr-3 rounded-3xl border-darkblue-700 border-2 shadow-md shadow-gray-500" key={data.id}> 
              <div className="flex justify-between">
               <p className="text-darkblue-800 font-medium tracking-normal text-md">{data.title}</p>
               <img src="/assets/arrowdown.svg" className="bg-darkblue-700 py-3 px-2 rounded-full mr-5 sm:ml-10" alt="" />
              </div>
              <div className="w-full mr-20 pt-5 hidden">
              <p className="">{data.content}</p>
              </div>
              </div>
            })}
      </div>
      </div>
    </Layout>
  );
};

export default FAQ;
