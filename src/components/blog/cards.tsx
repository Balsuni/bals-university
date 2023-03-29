import React from "react";

export const BlogCardSmall = () => {
  return (
    <section className="w-[280px] border-[px] shadow-md bg-gray-100 ">
      <img className="rounded-t-3xl " src="/assets/blog-logo.svg" alt="logo" />
      <main className="px-4  py-5 flex flex-col h-[280px]  gap-6">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-[37px] h-[37px]"
              src="/assets/post-avatar.svg"
              alt="avatar"
            />
            <div>
              <h5 className="text-base font-bold text-gray-900">Lydia Phils</h5>
              <h6 className="text-xs font-normal text-darkblue-500       ">
                20 March, 2023
              </h6>
            </div>
          </div>
          <h1 className="py-1 px-5 text-lg font-normal text-gray-900 border-[2px]  border-gray-300 w-[95px] ">
            Design
          </h1>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-xl font-medium text-gray-900">
            UI/UX design tips
          </div>
          <div className="text-base  font-normal text-gray-900">
            Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
            interdum ...
          </div>
        </div>
        <h1 className="flex flex-row gap-2 text-lg font-medium text-darkblue-500  pb-5 ">
          Read Post
          <img src="/assets/post-arrow.svg" alt="post" />
        </h1>
      </main>
    </section>
  );
};

const BlogCards = () => {
  return (
    <section className="w-[280px] lg:w-[363px] xl:w-[463px] border-[px] shadow-md bg-gray-100 ">
      <img className="rounded-t-3xl " src="/assets/blog-logo.svg" alt="logo" />
      <main className="px-4 md:px-5 lg:px-10  py-5 md:py-5 flex flex-col h-[280px] lg:h-[300px] gap-6">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-[37px] h-[37px]"
              src="/assets/post-avatar.svg"
              alt="avatar"
            />
            <div>
              <h5 className="text-base font-bold text-gray-900">Lydia Phils</h5>
              <h6 className="text-xs font-normal text-darkblue-500       ">
                20 March, 2023
              </h6>
            </div>
          </div>
          <h1 className="py-1 px-5 text-lg font-normal text-gray-900 border-[2px] border-gray-300 w-[95px] ">
            Design
          </h1>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-xl md:text-[22px] lg:text-2xl  font-medium text-gray-900">
            UI/UX design tips
          </div>
          <div className="text-base lg:text-lg  font-normal text-gray-900">
            Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
            interdum ...
          </div>
        </div>
        <h1 className="flex flex-row gap-2 text-lg sm:text-xl font-medium text-darkblue-500  pb-5 ">
          Read Post
          <img src="/assets/post-arrow.svg" alt="post" />
        </h1>
      </main>
    </section>
  );
};

export default BlogCards;
