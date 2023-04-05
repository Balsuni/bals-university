import Layout from "@/components/layout";
import PageHeaderText from "@/components/pageHeaders/pageHeader-text";
import React, { useState } from "react";

const FAQ = () => {
  const faqDefaultStyle = {
    display: 'none',
  }
  const faqClickedStyle = {
    display: 'inline',
  }

  interface UserData {
    prevState: null
  }

  const [faqOneIsClicked, setFaqOneIsClicked] = useState(false);
  const [faqTwoIsClicked, setFaqTwoIsClicked] = useState(false)
  const [faqOneStyle, setFaqOneStyle] = useState(faqDefaultStyle)
  const [faqTwoStyle, setFaqTwoStyle] = useState(faqDefaultStyle)
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
      <img src="/assets/letter_send 2.svg" className="absolute left-[200px] top-[310px] w-[450px]" alt="" />
      </div>

      <PageHeaderText
        text=" Frequently Asked Questions"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-faq.svg"
        backgroundImageAlt="faqs"
        title="FAQ"
      />

      <main className="w-full pt-12 sm:py-14 md:py-14 lg:py-16 xl:py-20 bg-bodyBackground">

      <div>
      <h5 className="text-darkblue-500 font-semibold text-[26px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-10 lg:mt-40 tracking-wider text-center ml-5 mr-5">Frequently Asked Questions</h5>
      <div className="flex w-full flex-col gap-10 mt-1 ml-auto mr-auto items-center">
      {faqData.map((data) => {
              return <div className="flex flex-col gap-4 lg:gap-4 w-fit sm:w-8/12 md:w-9/12 xl:w-6/12  p-0 py-3 md:px-12 mx-3" key={data.id}> 

              <div className="flex flex-row items-center justify-between w-full bg-gray-100 shadow-md shadow-gray-500 px-2 sm:p-5 py-3">
              <p className="text-darkblue-800 font-medium tracking-normal text-md lg:text-lg pr-3">{data.title}
               </p>
               <button onClick={() => {
                setFaqOneIsClicked(true)
                if (faqOneIsClicked) {
                  setFaqOneIsClicked(false)
                }
               }}>
               <img src={`${
                faqOneIsClicked 
                ? "/assets/faqdashicon.svg" 
                : "/assets/faqplusicon.svg"
                }`} 
                className="py-4 px-5 mr-5 ml-auto sm:ml-10" alt="" />  
               </button>
              </div>
              <div className={`${
              faqOneIsClicked
              ? "inline"
              : "hidden"
        }`}>
              <p className="">{data.content}</p>
              </div>
              </div>
            })}
      </div>
      </div>

      <div className="pb-20">
      <h5 className="text-darkblue-500 font-semibold text-[26px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center ml-5 mr-5">Frequently Asked Questions</h5>
      <div className="flex w-full flex-col gap-10 mt-16 ml-auto mr-auto items-center">
      {secondFaqData.map((data) => {
              return <div className="flex flex-col gap-5 lg:gap-7 w-11/12 sm:w-8/12 md:w-9/12 xl:w-8/12 bg-gray-50 p-5 py-10 md:px-12 ml-2 mr-2 rounded-3xl shadow-md shadow-gray-500" key={data.id}> 

              <div className="flex flex-row items-center justify-between w-full">
              <p className="w-fit text-darkblue-800 font-medium tracking-normal text-md lg:text-lg pr-3 break-normal">{data.title}
               </p>
               <button onClick={() => {
                setFaqTwoIsClicked(true)
                if (faqTwoIsClicked) {
                  setFaqTwoIsClicked(false)
                }
               }}>
               <img src={`${
                faqTwoIsClicked 
                ? "/assets/arrowdown.svg" 
                : "/assets/arrowside.svg"
                }`} className={`${faqTwoIsClicked ? "bg-darkblue-600 shadow-xl py-5 px-1 sm:px-4 rounded-full mr-5 ml-auto sm:ml-10" : "bg-gray-100 shadow-xl py-4 px-2 sm:px-5 rounded-full mr-5 ml-auto sm:ml-10"}`} alt="" />
               </button>
              </div>
              <div className={`${
              faqTwoIsClicked
              ? "inline"
              : "hidden"
              }`}>
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

//className="w-full mr-20 pr-16"
//className="w-full mr-20 pl-2 lg:pl-5 pr-16"