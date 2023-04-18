import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Goals = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const goalsData = [
    {
      id: 1,
      title: "Seamless Learning Experience",
      description:
        "Stop battling with complex processes and steps while learning. With a learning management system built for your ease, you can learn on the go, at your own pace, but with your success in mind.",
    },
    {
      id: 2,
      title: "Practical Courses",
      description:
        "Get implementable knowledge from practical and relevant courses taught by certified and experienced tutors. You can choose to learn in bite sizes or at a go. The choice is all yours.",
    },
    {
      id: 3,
      title: "Results-Driven Courses",
      description:
        "To ensure your success in the digital space, you get access to real-time support groups, and  tutors. You also get to take exams and assessments to determine how much you have comprehended your lessons.",
    },
  ];
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <section className="w-full bg-darkblue-50 h-[900px] sm:h-[800px] lg:h-[559px] mt-10">
        <div className="relative top-[220px] hidden lg:block">
          <img
            src="/assets/pattern.svg"
            alt=""
            className="absolute top-[200px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:gap-5 lg:justify-between my-auto w-full h-[559px]">
          <div className="lg:ml-16 mx-1 mt-5">
            <h1 className="lg:w-[466px] sm:w-[550px] w-full lg:text-left text-center text-[18px] sm:text-[25px] lg:text-[36px] font-bold text-darkblue-500 leading-2 lg:leading-[40px]">
              Our Foremost Goal is to give you an unforgettable learning
              experience.
            </h1>
            <p className="lg:w-[395px] w-full mt-3 lg:text-left text-center text-[15px] sm:text-[18px] lg:text-[18px] font-light">
              Ready to experience this in real time?. Here&apos;s how.
            </p>
          </div>
          <div className="flex flex-col lg:mr-20 mx-3  gap-10 mt-10 lg:mt-0">
            {goalsData.map((goal) => {
              return (
                <div
                  className="w-full lg:w-[564px] flex flex-col lg:items-start items-center"
                  key={goal.id}
                >
                  <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-10">
                    <p className="w-[24px] rounded-full bg-darkblue-500 text-center text-gray-50 text-[18px]">
                      {goal.id}
                    </p>
                    <p className="my-auto font-bold text-[20px] text-gray-900">
                      {goal.title}
                    </p>
                  </div>
                  <p className="w-full sm:w-[564px] text-center lg:text-left text-[18px] mt-3 text-gray-900">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Goals;
