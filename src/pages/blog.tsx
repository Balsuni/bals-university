import BlogCards, { BlogCardSmall } from "@/components/blog/cards";
import Header from "@/components/blog/header";
import Newsletter from "@/components/blog/newsletter";
import Layout from "@/components/layout";
import React from "react";

const Blog = () => {
  return (
    <Layout>
      <Header />
      <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16  py-10 sm:py-10 md:py-10 lg:py-12 xl:py-12 bg-bodyBackground ">
        <section className="mb-9">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-medium text-gray-900">
              Recent blog Posts
            </h1>
            <div className="flex flex-row gap-[2px] sm:gap-2 ">
              <img src="/assets/search-icon.svg" alt="search" />
              <img src="/assets/sort-by-icon.svg" alt="sort" />
            </div>
          </div>
        </section>

        <section className="mb-24 gap-8 flex">
          <BlogCards />
          {/* <BlogCards />
          <BlogCards />
          <BlogCards /> */}
        </section>

        <section className="mb-9 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32 ">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900  border-b-4 border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px]  ">
                All Posts
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900  border-b-4 border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                Leadership
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900 border-b-4 border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                Linkedin optimization
              </h1>
            </div>
            <img src="/assets/search-icon.svg" alt="search" />
          </div>
        </section>

        <section className="mb-24  flex items-center justify-center ">
          <div className="gap-10 grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2  lg:grid-rows-2 lg:grid-cols-3 xl:grid-rows-2 xl:grid-cols-4  ">
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
            <BlogCardSmall />
          </div>
        </section>

        <section className="flex flex-row items-center justify-center gap-3 sm:gap-5 md:gap-12 ">
          <div className="flex flex-row items-center gap-2">
            <img src="/assets/arrow-narrow-left.svg" alt="previous" />
            <h1 className="text-lg font-medium text-darkblue-500">Previous</h1>
          </div>
          <h1 className="text-gray-900 text-lg  sm:text-2xl font-medium px-0 py-0  sm:px-5 sm:py-3 hover:bg-cyan1-100 rounded-4px ">
            1
          </h1>
          <h1 className="text-gray-900 text-lg  sm:text-2xl font-medium px-0 py-0  sm:px-5 sm:py-3 hover:bg-cyan1-100 rounded-4px ">
            2
          </h1>
          <h1 className="text-gray-900 text-lg  sm:text-2xl font-medium px-0 py-0  sm:px-5 sm:py-3 hover:bg-cyan1-100 rounded-4px ">
            3
          </h1>
          <h1 className="text-gray-900 text-lg  sm:text-2xl font-medium px-0 py-0  sm:px-5 sm:py-3 hover:bg-cyan1-100 rounded-4px ">
            4
          </h1>
          <h1 className="text-gray-900 text-lg  sm:text-2xl font-medium px-0 py-0  sm:px-5 sm:py-3 hover:bg-cyan1-100 rounded-4px ">
            5
          </h1>

          <div className="flex flex-row items-center gap-1">
            <h1 className="text-lg font-medium text-darkblue-500">Next</h1>
            <img src="/assets/arrow-narrow-right.svg" alt="next" />
          </div>
        </section>
      </main>
      <Newsletter />
    </Layout>
  );
};

export default Blog;
