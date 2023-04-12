import React, { useState } from "react";

type Props = {
  title: string;
  content: string;
};

const Faq = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleOpen}
        className="flex flex-row items-center justify-between w-full border-b-2 border-lineColor px-2 sm:p-5"
      >
        <p className="text-darkblue-800 font-medium tracking-normal text-md lg:text-lg pr-3">
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
        <div className="w-full mr-20 pl-2 lg:pl-2 pr-16 bg-darkblue-50 py-2">
          <p className="">{props.content}</p>
        </div>
      )}
    </>
  );
};

export default Faq;
