import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-bodyBackground pt-5 pb-10 md:pb-14 ">
      <img
        className="bg-cyan1-700 rounded-[50px] sm:rounded-[64px] h-[300px] sm:h-[350px] md:h-[400px] w-[300px] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-auto  "
        src="/assets/path.svg"
        alt="path"
      />
      <div className="absolute flex flex-col items-center gap-8">
        <h1 className="text-gray-50  text-2xl sm:text-5xl font-medium">
          Still thinking about it?
        </h1>
        <h1 className=" px-10 sm:px-0 text-center text-sm sm:text-xl font-regular text-darkblue-50  w-[300px] sm:w-auto ">
          Sign up for our newsletter and 5% off your next purchase
        </h1>
        <form className="flex w-[280px]   ">
          <input
            type="text"
            className="w-10/12 px-5 h-12 rounded-lg  bg-white font-light"
            placeholder="Enter Email..."
          />
          <button
            type="submit"
            className="bg-darkblue-500 font-bold -left-3 px-7 py-1 rounded-lg text-white relative"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
