import React from "react";
import Link from "next/link";

const coursesCard = [
  {
    id: 1,
    category: "Design",
    imageSrc: "/assets/courses_2.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 2,
    category: "Design",
    imageSrc: "/assets/courses_2.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
];

const coursesCardSmallData = [
  {
    id: 1,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 2,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 3,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 4,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 5,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 6,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 7,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 8,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 9,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 10,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
  {
    id: 11,
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    price: "Free",
    buttonTitle: "Enroll Now",
  },
];

const coursesCardMediumData = [
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
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 2,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 3,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 4,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 5,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 6,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 7,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 8,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 9,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 10,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
  {
    id: 11,
    category: "Design",
    imageSrc: "/assets/courses_1.svg",
    courseTitle: "Fundamentals of LinkedIn",
    ratings: [
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
      "/assets/star_enabled.svg",
    ],
    courseDetails:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
    price: "$ 50",
    buttonTitle: "Enroll Now",
  },
];

export const CoursesCardMedium = () => {
  return (
    <div className="flex flex-row gap-[22px] sm:gap-[40px]">
      {coursesCardMediumData.map((data) => {
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
              },
            }}
            as={`courses/${data.id}/${data.courseTitle.toLocaleLowerCase()}`}
            key={data.id}
          >
            <section className="flex flex-col bg-darkblue-50 w-[300px] sm:w-[500px] md:w-[350px] md:h-[500px] sm:h-[600px] pb-5 rounded-xl">
              <div className="h-auto">
                <img
                  src={data.imageSrc}
                  className="sm:w-[500px] md:w-[350px] w-full rounded-t-xl"
                  alt=""
                />
              </div>
              <h1 className="py-1 px-5 ml-5 mt-5 text-lg font-normal text-cyan1-800 border-[2px]  border-cyan1-800 w-[95px] ">
                {data.category}
              </h1>
              <h1 className="text-darkblue-500 ml-5 text-[19px] font-bold tracking-wider mt-5">
                {data.courseTitle}
              </h1>

              <div className="flex gap-1 ml-5 lg:mt-2 mt-5 xl:mt-5">
                {data.ratings.map((rating) => (
                  <img src={rating} alt="" key={rating} />
                ))}
              </div>

              <p className="lg:mt-2 mt-5 ml-5 xl:mt-5 text-gray-900 text-md">
                {data.courseDetails}
              </p>

              <p className="mt-3 font-bold ml-5 text-gray-900 text-xl">
                {data.price}
              </p>

              <button className="ml-5 lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 text-center">
                {data.buttonTitle}
              </button>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export const CoursesCardSmall = () => {
  return (
    <div className="flex flex-row gap-[22px] sm:gap-[40px]">
      {coursesCardSmallData.map((data) => {
        return (
          <Link
            href={{
              pathname: "/courses/[coursedetails]/",
              query: {
                coursedetails: data.courseTitle,
                coursetitle: data.courseTitle,
                price: data.price,
                coursedescription: "Not Available",
                courserating: "Not Available",
              },
            }}
            as={`courses/${data.id}/${data.courseTitle.toLocaleLowerCase()}`}
            key={data.id}
          >
            <section className="bg-darkblue-50 w-fit sm:[w-500px] lg:w-[350px] lg:h-[350px] pb-5 rounded-xl">
              <div className="h-auto">
                <img
                  src={data.imageSrc}
                  className="lg:w-[350px] rounded-t-xl sm:w-[500px]"
                  alt=""
                />
              </div>

              <div className="mt-5">
                <h1 className="text-darkblue-500 text-xl ml-5 font-semibold">
                  {data.courseTitle}
                </h1>
                <p className="mt-3 font-bold text-gray-900 text-xl ml-5">
                  {data.price}
                </p>

                <button className="lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md ml-5 w-[250px] h-fit px-14 py-2 text-center">
                  {data.buttonTitle}
                </button>
              </div>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

const CoursesCard = () => {
  return (
    <>
      {coursesCard.map((data) => (
        <Link
          href={{
            pathname: "/courses/[coursedetails]/",
            query: {
              coursedetails: data.courseTitle,
              coursetitle: data.courseTitle,
              price: data.price,
              coursedescription: data.courseDetails,
              courserating: data.ratings,
            },
          }}
          as={`courses/${data.id}/${data.courseTitle.toLocaleLowerCase()}`}
          key={data.id}
        >
          <div className="flex flex-col lg:flex-row bg-darkblue-50 w-fit lg:w-[550px] lg:h-[370px] rounded-xl">
            <div className="p-5 mt-5">
              <h1 className="py-1 px-5 text-lg font-normal text-cyan1-800 border-[2px]  border-cyan1-800 w-[95px] ">
                {data.category}
              </h1>

              <h1 className="text-darkblue-500 text-[19px] font-bold tracking-wider mt-5">
                {data.courseTitle}
              </h1>

              <div className="flex gap-1 lg:mt-2 mt-5 xl:mt-5">
                {data.ratings.map((rating) => (
                  <img src={rating} key={rating} alt="" />
                ))}
              </div>

              <p className="lg:mt-2 mt-5 xl:mt-5 text-gray-900 text-md">
                {data.courseDetails}
              </p>

              <p className="mt-3 font-bold text-gray-900 text-xl">
                {data.price}
              </p>

              <button className="lg:mt-1 mt-3 xl:mt-3 border-2 border-darkblue-500 rounded-md w-11/12 h-fit lg:px-11 xl:px-18 px-14 py-2 text-center">
                {data.buttonTitle}
              </button>
            </div>

            <div className="rounded-xl h-auto w-full flex justify-start">
              <img
                src={data.imageSrc}
                className="rounded-b-xl lg:rounded-r-xl h-[370px] w-11/12 lg:w-[550px]"
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CoursesCard;
