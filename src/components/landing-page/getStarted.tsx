import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const GetStarted = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="w-full mt-10 py-10">
      <div className="relative hidden lg:block">
        <img
          src="/assets/landing_vector.svg"
          className="absolute left-[635px]"
          alt=""
        />
      </div>
      <div className="relative hidden lg:block">
        <img
          src="/assets/pattern_2.svg"
          alt=""
          className="absolute left-[1300px] top-[200px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 sm:mx-5 lg:mx-0 md:gap-10 lg:flex-row lg:gap-32 justify-center sm:items-start items-center">
        <motion.div
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            src="/assets/tired.svg"
            className="rounded-3xl w-[300px]"
            alt=""
          />
        </motion.div>
        <div>
          <h1 className="text-[36px] text-darkblue-500 font-bold mx-5 sm:mx-0 animate-pulse">
            Surely, you&apos;re tired of:
          </h1>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5 animate-bounce">
              <p className="w-[24px] rounded-full bg-red-800 text-center text-gray-50 text-[15px]">
                !
              </p>
              <p className="my-auto text-[17px] text-gray-900">
                Expensive courses
              </p>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5 animate-bounce">
              <p className="w-[24px] rounded-full bg-red-800 text-center text-gray-50 text-[15px]">
                !
              </p>
              <p className="my-auto text-[17px] text-gray-900">
                Overwhelming lessons
              </p>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5 animate-bounce">
              <p className="w-[24px] rounded-full bg-red-800 text-center text-gray-50 text-[15px]">
                !
              </p>
              <p className="my-auto text-[17px] text-gray-900">
                Unreachable Tutors
              </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5 animate-bounce">
              <p className="w-[24px] rounded-full bg-red-800 text-center text-gray-50 text-[15px]">
                !
              </p>
              <p className="my-auto text-[17px] text-gray-900">
                Impractical Courses
              </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5 animate-bounce">
              <p className="w-[24px] rounded-full bg-red-800 text-center text-gray-50 text-[15px]">
                !
              </p>
              <p className="my-auto text-[17px] text-gray-900">
                Getting little to no results
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-3 gap-5 sm:gap-5 md:gap-10 sm:flex-row sm:mx-5 lg:mx-0 lg:ml-[350px] lg:flex-row lg:gap-32 justify-center mt-16 lg:mt-[120px] sm:items-start items-center">
        <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="sm:w-[500px] text-center sm:text-start">
            <p className="text-[18px]">GET MORE REVENUE AND INFLUENCE</p>
            <h2 className="lg:w-[392px] lg:text-[30px] font-bold sm:leading-[36px] leading-[25px]">
              The most unique and Only{" "}
              <span className="text-cyan1-600">You-Centric E-learning </span>
              Platform For Your Personal Growth and Success
            </h2>
          </div>
        </motion.h1>
        <motion.div
          className="box"
          ref={ref}
          variants={sectionVariant}
          initial="visible"
          animate={control}
        >
          <div className="sm:w-[500px] lg:mr-[350px] text-center sm:text-start">
            <p className="lg:w-[464px] font-light text-gray-900 lg:text-[18px]">
              BALS University is the all-encompassing e-learning platform geared
              towards your growth and success in the digital space with
              simplified and comprehensible lessons.
            </p>
            <button
              type="submit"
              className="flex bg-darkblue-500 mt-5 m-auto sm:mt-5 sm:mx-0 w-fit rounded-lg px-10 py-3 text-gray-50"
            >
              Get Started for free
              <Image
                src="/assets/arrow-up.svg"
                alt="arrow up"
                width={12}
                height={12}
                className="my-auto ml-3"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
