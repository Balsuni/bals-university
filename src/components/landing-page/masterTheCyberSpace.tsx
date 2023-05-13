import React, { useEffect } from "react";
import { StudentsCards } from "../about-us/teamCards";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Students = [
  {
    id: 1,
    src: "/assets/recent-graduate.png",
    srcRinglight: "/assets/ellipse-recentGraduate.svg",
    student: "Recent Graduate",
    text: "Enter the favour market with irresistible skills that employers cannot overlook.",
  },
  {
    id: 2,
    src: "/assets/freelancer.png",
    srcRinglight: "/assets/ellipse-freelancer.svg",
    student: "Freelancer",
    text: "Advance your career as a freelancer by arming yourself with knowledge prospects can’t resist.",
  },
  {
    id: 3,
    src: "/assets/student.png",
    srcRinglight: "/assets/ellipse-student.svg",
    student: "Student",
    text: "Stand out from the multitude with knowledge that millions of persons are willing to pay millions for.",
  },
  {
    id: 4,
    src: "/assets/entrepreneur.png",
    srcRinglight: "/assets/ellipse-entrepreneur.svg",
    student: "Entrepreneur",
    text: "Arm yourself with the knowledge to scale and advance your company in the digital space.",
  },
  {
    id: 5,
    src: "/assets/9-5ever.png",
    srcRinglight: "/assets/ellipse-9-5ever.png",
    student: "9-5ever",
    text: "Make yourself invaluable in your workplace by equipping yourself with laser-focused knowledge to advance your company.",
  },
];

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const MasterTheCyberSpace = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  const motionControls = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      motionControls.start({ x: 0 });
    } else {
      control.start("hidden");
      motionControls.start({ x: -100 });
    }
  }, [control, motionControls, inView]);

  return (
    <section className="py-12 px-5 sm:px-10 flex flex-col items-center justify-center bg-bodyBackground ">
      <h1 className="mb-10 sm:mb-5 md:mb-12 text-darkblue-500 text-center text-3xl sm:text-3xl md:text-4xl font-bold">
        Master The CyberSpace
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center ">
        <motion.div
          className="box"
          ref={ref}
          variants={sectionVariant}
          initial="visible"
          animate={control}
        >
          <div className="flex flex-col max-w-[300px] items-start justify-center margin-auto">
            <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium mb-8">
              What you do doesn&apos;t matter, BALS University is built for
              anyone who desires to get more from the digital space.
            </h1>
            <button className="py-4 px-6 bg-darkblue-500 text-darkblue-50 w-[150px] rounded-xl hover:bg-darkblue-400 focus:ring focus:bg-darkblue2-500 ">
              Get Started
            </button>
          </div>
        </motion.div>

        {Students.map((data) => {
          return (
            <div key={data.id}>
              <StudentsCards
                src={data.src}
                student={data.student}
                text={data.text}
                srcRinglight={data.srcRinglight}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MasterTheCyberSpace;
