import Layout from "@/components/layout";
import { useState } from "react";

type Props = {
  title: string;
  content: string;
};

const Questions = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleOpen}
        className="flex flex-row items-center justify-between w-full bg-gray-100 shadow-md shadow-gray-500 px-2 sm:p-5 py-3"
      >
        <p className="text-darkblue-800 font-bold tracking-normal text-md lg:text-lg pr-3">
          {props.title}
        </p>
        {isOpen ? (
          <img
            src="/assets/faqdashicon.svg"
            className="py-4 px-5 mr-5 ml-auto sm:ml-10"
            alt=""
          />
        ) : (
          <img
            src="/assets/faqplusicon.svg"
            className="py-4 px-5 mr-5 ml-auto sm:ml-10"
            alt=""
          />
        )}
      </div>

      {isOpen && (
        <div className="w-full mr-20 pl-2 lg:pl-5 pr-16">
          <p className="">{props.content}</p>
        </div>
      )}
    </>
  );
};

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

const Route1 = () => {
  return (
    <Layout>
      <div>
        <h5 className="text-darkblue-500 font-semibold text-[26px] md:text-[26px] xl:text-[26px] lg:text-[26px] mt-28 tracking-wider text-center ml-5 mr-5">
          Frequently Asked Questions
        </h5>
        <div className="flex w-full flex-col gap-10 mt-16 ml-auto mr-auto items-center">
          {faqData.map((data) => {
            return (
              <div
                className="flex flex-col gap-5 lg:gap-7 w-fit sm:w-8/12 md:w-9/12 xl:w-6/12  p-0 py-3 md:px-12 ml-2 mr-2"
                key={data.id}
              >
                <Questions title={data.title} content={data.content} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Route1;
