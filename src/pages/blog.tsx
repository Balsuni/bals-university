import BlogGallery from "@/components/blog/blogGallery";
import Header from "@/components/blog/header";
import Newsletter from "@/components/blog/newsletter";
import PaginatedBlogs from "@/components/blog/paginatedBlogs";
import Layout from "@/components/layout";
import React from "react";

const Blog = () => {
  return (
    <Layout>
      <Header />
      <main className="w-full pl-5 sm:pl-12 md:pl-14 lg:pl-16 xl:pl-16  py-10 sm:py-10 md:py-10 lg:py-12 xl:py-12 bg-bodyBackground ">
        <section className="mb-9 pr-5 sm:pr-12 md:pr-14 lg:pr-16 xl:pr-16   ">
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

        <BlogGallery />

        <section className="mb-9 pr-5 sm:pr-12 md:pr-14 lg:pr-16 xl:pr-16">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32 ">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900 border-bodyBackground border-b-4   hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px]  ">
                All Posts
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900  hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                Leadership
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-4xl  font-medium text-gray-900 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] ">
                Linkedin optimization
              </h1>
            </div>
            <img src="/assets/search-icon.svg" alt="search" />
          </div>
        </section>

        <section className="mb-24 mt-14 pr-5 sm:pr-12 md:pr-14 lg:pr-16 xl:pr-16 flex items-center justify-center">
          <PaginatedBlogs />
        </section>
      </main>
      <Newsletter />
    </Layout>
  );
};

export default Blog;
