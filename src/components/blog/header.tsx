import React from "react";

const Header = () => {
  return (
    <div className="h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] bg-cover bg-center relative">
      <img
        className="w-full h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
        src={"/assets/toy-bricks-table-with-word-blog.svg"}
        alt={"blog"}
      />
      <div className="w-screen h-[480px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] flex flex-col md:flex-row items-center justify-center md:items-center md:justify-start px-0 md:px-10 lg:px-16 xl:px-20 py-10 md:py-0 pb-0 ">
        <div className="w-screen flex flex-col items-center justify-center md:items-start pl-0 md:pl-16">
          <h1 className="text-[52px]  sm:text-5xl md:text-6xl font-bold text-darkblue-500 absolute z-1">
            Blog
          </h1>
          <h1 className="text-[52px] sm:text-5xl md:text-6xl font-bold text-gray-50 absolute pt-0 sm:pt-2 mt-2 z-20  ">
            Blog
          </h1>
          <h1 className="text-[52px]  sm:text-5xl md:text-6xl font-bold text-darkblue-500 absolute pt-4 sm:pt-8 z-10 ">
            Blog
          </h1>
        </div>

        <div className=" flex flex-col text-center md:text-left items-center justify-center md:items-start md:justify-start py-10 px-5 md:px-0 md:py-0 ">
          <h1 className="text-2xl  sm:text-3xl md:text-4xl text-white w-full py-5 flex items-center justify-center ">
            Thoughts & ideas around things that matter.
          </h1>
          <div>
            <h1 className="text-lg  sm:text-xl text-white mb-4">
              New product features, the latest in technology, solutions and
              updates
            </h1>
          </div>
          <form className="flex w-[280px]">
            <input
              type="text"
              className="w-10/12 px-5 h-12 rounded-lg font-light"
              placeholder="Enter Email..."
            />
            <button
              type="submit"
              className="bg-cyan1-500 px-7 py-1 rounded-lg text-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
