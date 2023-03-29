import BlogCards from "@/components/blog/cards";
import Header from "@/components/blog/header";
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

        <section className="mb-24 gap-8 flex  overflow-y-scroll">
          <BlogCards />
          {/* <BlogCards />
          <BlogCards />
          <BlogCards /> */}
        </section>

        <section className="mb-9">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-14 md:gap-5  ">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900">
                All Posts
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900">
                Leadership
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900">
                Linkedin optimization
              </h1>
            </div>
            <img src="/assets/search-icon.svg" alt="search" />
          </div>
        </section>

        {/* path */}
        <section className="flex flex-col items-center justify-center">
          <img
            className="bg-darkblue-500 rounded-[64px] "
            src="/assets/path.svg"
            alt="path"
          />
          <div>
            <h1>Still thinking about it?</h1>
            <h1>Sign up for our newsletter and 5% off your next purchase</h1>
            <form className="flex w-[280px]">
              <input
                type="text"
                className="w-10/12 px-5 h-12 rounded-lg text-white bg-imageColor font-light"
                placeholder="Enter Email..."
              />
              <button
                type="submit"
                className="bg-darkblue-500 px-7 py-1 rounded-lg text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
