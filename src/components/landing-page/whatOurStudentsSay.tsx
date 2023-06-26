import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const WhatOurStudentsSay = () => {
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

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

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
    <section className="w-full bg-darkblue-50 h-[1000px] sm:h-[580px]">
      <motion.div
        className="box"
        ref={ref}
        variants={sectionVariant}
        initial="hidden"
        animate={control}
      >
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
              <Image
                src="/assets/previous-icon.svg"
                loading="lazy"
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
              <Image
                src="/assets/next-icon.svg"
                loading="lazy"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
        </div>
      </motion.div>
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
                    className="flex flex-col flex-wrap bg-gray-50 h-[650px] w-full sm:w-[612px] md:w-[612px] md:h-[324px] sm:h-[324px] pb-5 rounded-xl"
                    key={data.id}
                  >
                    <div className="mt-10 ml-3 sm:ml-10">
                      <Image
                        src="/assets/quotation.svg"
                        alt=""
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="w-[299px] mt-7 ml-5 sm:ml-20 text-[18px] ">
                      <p>{data.description}</p>
                      <Image
                        src="/assets/quotation_2.svg"
                        className="ml-auto mr-5 sm:mr-0 mt-5"
                        alt=""
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="mt-20 sm:ml-7">
                      <div className="flex justify-center items-center">
                        <Image
                          className="w-[122.98px] h-[122.98px] mr-[9px] mb-0 ml-2 absolute z-10"
                          src="/assets/student_landingpage.svg"
                          alt="logo"
                          loading="lazy"
                          width={50}
                          height={50}
                        />
                        <Image
                          className="w-[145px] relative z-0"
                          src="/assets/ecclipse.svg"
                          alt="logo"
                          loading="lazy"
                          width={50}
                          height={50}
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
        <Image
          src="/assets/Rectangle_1.svg"
          onClick={handlePrev}
          alt=""
          loading="lazy"
          width={50}
          height={50}
        />
        <Image
          src="/assets/Rectangle.svg"
          alt=""
          loading="lazy"
          width={50}
          height={50}
        />
        <Image
          src="/assets/Rectangle_1.svg"
          alt=""
          onClick={handleNext}
          loading="lazy"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default WhatOurStudentsSay;
