import Link from "next/link";
import React from "react";

const Startup = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-bodyBackground pt-5 pb-10 md:pb-14  px-5 sm:px-0 ">
      <img
        className="bg-cyan1-700 rounded-[50px] sm:rounded-[64px] h-[300px] sm:h-[350px] md:h-[400px] w-[auto] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-auto  "
        src="/assets/path.svg"
        alt="path"
      />
      <div className="absolute items-center">
        <h1 className="text-gray-50 mb-8 w-[280px] sm:w-[500px] text-center text-2xl sm:text-5xl font-medium">
          Are you ready to start your course?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-medium text-base sm:text-lg ">
          <Link href="/students">
            <button
              type="submit"
              className="flex flex-row items-center bg-gray-50 px-4 sm:px-6  py-3 sm:py-4 rounded-lg border-gray-50 border-2 text-darkblue-500 gap-2 hover:bg-gray-100 hover:border-darkblue-500  "
            >
              Become a Student
              <svg
                width="21"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.293 5.80866C12.4805 5.62118 12.7348 5.51587 13 5.51587C13.2652 5.51587 13.5195 5.62118 13.707 5.80866L17.707 9.80866C17.8945 9.99618 17.9998 10.2505 17.9998 10.5157C17.9998 10.7808 17.8945 11.0351 17.707 11.2227L13.707 15.2227C13.5184 15.4048 13.2658 15.5056 13.0036 15.5033C12.7414 15.5011 12.4906 15.3959 12.3052 15.2105C12.1198 15.0251 12.0146 14.7743 12.0123 14.5121C12.01 14.2499 12.1108 13.9973 12.293 13.8087L14.586 11.5157H3C2.73478 11.5157 2.48043 11.4103 2.29289 11.2228C2.10536 11.0352 2 10.7809 2 10.5157C2 10.2504 2.10536 9.99609 2.29289 9.80855C2.48043 9.62101 2.73478 9.51566 3 9.51566H14.586L12.293 7.22266C12.1055 7.03513 12.0002 6.78082 12.0002 6.51566C12.0002 6.25049 12.1055 5.99618 12.293 5.80866Z"
                  fill="#162A5A"
                />
              </svg>
            </button>{" "}
          </Link>
          <Link href="/affiliate">
            <button
              type="submit"
              className="flex flex-row items-center gap-2 bg-inherit px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white border-2 border-white hover:border-darkblue-500 "
            >
              Become an Affiliate
              <svg
                width="21"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.293 5.80866C12.4805 5.62118 12.7348 5.51587 13 5.51587C13.2652 5.51587 13.5195 5.62118 13.707 5.80866L17.707 9.80866C17.8945 9.99618 17.9998 10.2505 17.9998 10.5157C17.9998 10.7808 17.8945 11.0351 17.707 11.2227L13.707 15.2227C13.5184 15.4048 13.2658 15.5056 13.0036 15.5033C12.7414 15.5011 12.4906 15.3959 12.3052 15.2105C12.1198 15.0251 12.0146 14.7743 12.0123 14.5121C12.01 14.2499 12.1108 13.9973 12.293 13.8087L14.586 11.5157H3C2.73478 11.5157 2.48043 11.4103 2.29289 11.2228C2.10536 11.0352 2 10.7809 2 10.5157C2 10.2504 2.10536 9.99609 2.29289 9.80855C2.48043 9.62101 2.73478 9.51566 3 9.51566H14.586L12.293 7.22266C12.1055 7.03513 12.0002 6.78082 12.0002 6.51566C12.0002 6.25049 12.1055 5.99618 12.293 5.80866Z"
                  fill="#162A5A"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Startup;
