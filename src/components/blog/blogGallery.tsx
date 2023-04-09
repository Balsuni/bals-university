import React, { useRef } from "react";
import BlogCards from "./cards";

const BlogGallery = () => {
  const blogRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    blogRef.current?.scrollBy({
      left: -blogRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    blogRef.current?.scrollBy({
      left: blogRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={blogRef}
        className="mb-24 gap-8 flex flex-row w-full overflow-auto transition duration-300 ease-in "
        style={{ transform: "translateX(0)" }}
      >
        <BlogCards />
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/3 -left-5 sm:-left-12 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-900 text-white p-2 rounded-full focus:outline-none"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70679 15.2227C7.51926 15.4101 7.26495 15.5155 6.99979 15.5155C6.73462 15.5155 6.48031 15.4101 6.29279 15.2227L2.29279 11.2227C2.10532 11.0351 2 10.7808 2 10.5157C2 10.2505 2.10532 9.99619 2.29279 9.80867L6.29279 5.80867C6.48139 5.62651 6.73399 5.52571 6.99619 5.52799C7.25838 5.53027 7.5092 5.63544 7.6946 5.82085C7.88001 6.00626 7.98518 6.25707 7.98746 6.51926C7.98974 6.78146 7.88894 7.03406 7.70679 7.22267L5.41379 9.51567H16.9998C17.265 9.51567 17.5194 9.62102 17.7069 9.80856C17.8944 9.9961 17.9998 10.2504 17.9998 10.5157C17.9998 10.7809 17.8944 11.0352 17.7069 11.2228C17.5194 11.4103 17.265 11.5157 16.9998 11.5157H5.41379L7.70679 13.8087C7.89426 13.9962 7.99957 14.2505 7.99957 14.5157C7.99957 14.7808 7.89426 15.0351 7.70679 15.2227Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-darkblue-500 text-white p-2 rounded-full focus:outline-none"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.293 5.80866C12.4805 5.62118 12.7348 5.51587 13 5.51587C13.2652 5.51587 13.5195 5.62118 13.707 5.80866L17.707 9.80866C17.8945 9.99618 17.9998 10.2505 17.9998 10.5157C17.9998 10.7808 17.8945 11.0351 17.707 11.2227L13.707 15.2227C13.5184 15.4048 13.2658 15.5056 13.0036 15.5033C12.7414 15.5011 12.4906 15.3959 12.3052 15.2105C12.1198 15.0251 12.0146 14.7743 12.0123 14.5121C12.01 14.2499 12.1108 13.9973 12.293 13.8087L14.586 11.5157H3C2.73478 11.5157 2.48043 11.4103 2.29289 11.2228C2.10536 11.0352 2 10.7809 2 10.5157C2 10.2504 2.10536 9.99609 2.29289 9.80855C2.48043 9.62101 2.73478 9.51566 3 9.51566H14.586L12.293 7.22266C12.1055 7.03513 12.0002 6.78082 12.0002 6.51566C12.0002 6.25049 12.1055 5.99618 12.293 5.80866Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default BlogGallery;
