import React from "react";
import Link from "next/link";

const landingPageCoursesCardData = [
  {
    id: 1,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "FREE",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 2,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Introduction to Web Development and Design",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "FREE",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 3,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Learn Javascript",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 120",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 4,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of Cyber Security",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 1450",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 5,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Data Structures",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 219",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 6,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Algorithms",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "FREE",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 7,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Mobile Development",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 210",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 8,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Game Development",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "FREE",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 9,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Learn C",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 720",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 10,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Learn C++",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 150",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
  {
    id: 11,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Learn Python",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_disabled.svg",
    ],
    review: "(4.0/5.0)",
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "FREE",
    buttonTitle: "Enroll Now",
    courseContent: "Video, Audio, Assignments, Interactive exercises, Project",
    courseLevel: "Beginner",
    prequisiteLevel: "No Prerequisite",
    approxWeek: "Approx 2-4 Weeks",
    certificate: "No Certificate",
    instructor: "Favour Lucy",
    messageFromInstructor:
      "learning, we understand , can be challenging, but rest assured that we are here to support you every step of the way. Our courses ranges from paid to free courses. Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim",
    instructorProfile: "/assets/team-member-avatar.svg",
    courseImage: "/assets/course-description.svg",
  },
];

const LandingPageCourseCard = () => {
  return (
    <div className="flex flex-row gap-6 sm:gap-8 xl:gap-9 mr-[14px] sm:mr-[20px] ">
      {landingPageCoursesCardData.map((data) => {
        return (
          <Link
            href={{
              pathname: "/courses/[coursedetails]/",
              query: {
                coursedetails: data.courseTitle,
                coursetitle: data.courseTitle,
                price: data.price,
                coursedescription: data.courseDetails,
                courserating: data.ratings,
                learningmethod: data.courseContent,
                courselevel: data.courseLevel,
                prequisitelevel: data.prequisiteLevel,
                approxweek: data.approxWeek,
                certificate: data.certificate,
                instructor: data.instructor,
                messagefrominstructor: data.messageFromInstructor,
                instructorprofile: data.instructorProfile,
                courseimage: data.courseImage,
              },
            }}
            as={`courses/${data.id}/${data.courseTitle.toLocaleLowerCase()}`}
            key={data.id}
          >
            <section className="flex flex-col bg-darkblue-50 w-[300px] sm:w-[320px] md:w-[350px] md:h-[auto] shadow-lg sm:h-[auto] pb-5 rounded-xl">
              <div className="h-auto">
                <img
                  src={data.imageSrc}
                  className="sm:w-[500px] md:w-[350px] w-full rounded-t-xl"
                  alt=""
                />
              </div>
              <h1 className="py-1 px-5 ml-5 mt-5 text-lg font-normal text-gray-900 border-[2px]  border-gray-500 w-[95px] ">
                {data.category}
              </h1>
              <h1 className="text-gray-900 ml-5 text-[19px] font-bold mt-5 min-h-[60px] ">
                {data.courseTitle}
              </h1>

              <div className="flex items-center gap-2">
                <div className="flex gap-1 ml-5 lg:mt-2 mt-5 xl:mt-5">
                  {data.ratings.map((rating) => (
                    <img src={rating} alt="" key={rating} />
                  ))}
                </div>
                <div className="flex lg:mt-2 xl:mt-5 mt-5">
                  <p className="text-gray-700 tracking-wider">{data.review}</p>
                </div>
              </div>

              <p className="lg:mt-2 mt-5 ml-5 xl:mt-5 text-gray-900 text-md">
                {data.courseDetails}
              </p>

              <p className="mt-3 font-bold ml-5 text-gray-900 text-xl">
                {data.price}
              </p>

              <button className="ml-5 lg:mt-1 mt-3 xl:mt-3 border-2 bg-darkblue-500 text-gray-50 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 mb-3 text-center">
                {data.buttonTitle}
              </button>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default LandingPageCourseCard;
