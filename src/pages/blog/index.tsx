import BlogGallery from "@/components/blog/blogGallery";
import Header from "@/components/blog/header";
import Newsletter from "@/components/blog/newsletter";
import PaginatedBlogs from "@/components/blog/paginatedBlogs";
import Layout from "@/components/layout";
import { CloseSquare } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";

const SearchDrop = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearchBox = () => {
    return setOpenSearch(!openSearch);
  };

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenSearch(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, [toggleSearchBox]);

  return (
    <div>
      <li className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500">
        {!openSearch ? (
          <img
            onClick={toggleSearchBox}
            className="w-[30px] sm:w-[40px]"
            src="/assets/search-icon.svg"
            alt="search"
            width={30}
            height={30}
          />
        ) : (
          <CloseSquare className="z-10" size="25" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openSearch && (
          <main className="absolute z-30 rounded-xl pl-3 py-3 h-[230px] w-[310px] sm:w-[320px] top-[1410px] sm:top-[1360px] md:top-[1280px] lg:top-[1430px] xl:top-[1470px] -ml-[262px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-row items-center">
              {/* <img
                className="w-[15px] absolute ml-1 pointer-events-none"
                src="/assets/search-icon.svg"
                alt="search"
              /> */}
              <form action="">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  className="text-darkblue-500 text-3 h-10 pl-7 bg-gray-200 "
                />
              </form>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

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
          <div className="flex flex-row items-center justify-between border-b-4 border-darkblue-100  ">
            <div className="sm:flex hidden flex-col sm:flex-row gap-5 sm:gap-5 md:gap-5 lg:gap-18 xl:gap-32 ">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1 ">
                All Posts
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
                Leadership
              </h1>
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:lg:text-3xl  font-medium text-gray-900 border-b-4 border-darkblue-100 hover:border-b-4 hover:border-darkblue-500 px-5px md:px-[6px] lg:md:px-[10px] py-[10px] -mb-1">
                Linkedin optimization
              </h1>
            </div>
            <div className="flex sm:hidden w-8/12">
              <select
                id="selection"
                className="bg-cyan1-500 border border-cyan1-900 text-gray-50 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-5"
              >
                <option>All Posts</option>
                <option>Leadership</option>
                <option>Linkedin optimization</option>
              </select>
            </div>
            {/* <img src="/assets/search-icon.svg" alt="search" /> */}
            <SearchDrop />
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
