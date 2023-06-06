import BlogCards from "@/components/blog/cards";
import Header from "@/components/blog/header";
import Newsletter from "@/components/blog/newsletter";
import PaginatedBlogs from "@/components/blog/paginatedBlogs";
import Layout from "@/components/layout";
import { CloseSquare } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const SearchDropPaginatedBlogs = (props: any) => {
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
          <Image
            onClick={toggleSearchBox}
            className="w-[15px] sm:w-[18px]"
            src="/assets/search.svg"
            alt="search"
            width={12}
            height={12}
          />
        ) : (
          <CloseSquare className="z-10 my-2" size="25" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openSearch && (
          <main className="absolute z-30 rounded-xl pl-3 py-3 h-[230px] w-[310px] sm:w-[320px] top-[1410px] sm:top-[1360px] md:top-[1280px] lg:top-[1430px] xl:top-[1470px] -ml-[262px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-row items-center">
              <form action="submit">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={props.searchValue}
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

export const SearchDropBlogGallery = (props: any) => {
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
          <Image
            onClick={toggleSearchBox}
            className="w-[15px] sm:w-[18px]"
            src="/assets/search.svg"
            alt="search"
            width={12}
            height={12}
          />
        ) : (
          <CloseSquare className="z-10 py-2 -mr-3 " size="40" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openSearch && (
          <main className="absolute z-30 rounded-xl pl-3 py-3 h-[230px] w-[310px] sm:w-[320px]  -ml-[215px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-row items-center">
              <form action="submit">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={props.searchValue}
                  className="text-darkblue-500 text-3 h-10 pl-7 bg-gray-200 focus:outline-none"
                />
              </form>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export const FilterBlog = (props: any) => {
  function onFilterValueChange(e: any) {
    props.filterValueSelected(e.target.value);
  }

  const [openFilter, setOpenFilter] = useState(false);

  const toggleFilter = () => {
    return setOpenFilter(!openFilter);
  };

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenFilter(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, [toggleFilter]);

  return (
    <div>
      <li className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500">
        {!openFilter ? (
          <img
            onClick={toggleFilter}
            className="w-[35px] sm:w-[40px]"
            src="/assets/sort-by-icon.svg"
            alt="sort"
            width={30}
            height={30}
          />
        ) : (
          <CloseSquare className="z-10 my-2 mr-3" size="25" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openFilter && (
          <main className="absolute z-30 rounded-xl pl-5 py-5 h-[auto] w-[310px] sm:w-[330px] top-[680px] sm:top-[630px] md:top-[550px] lg:top-[650px] -ml-[263px] md:-ml-[250px] text-darkblue-500 bg-gray-200  ">
            <section className="flex flex-col items-start gap-7">
              {/* <h2 className="text-sm sm:text-base ">
                Social Media Management (SMM)
              </h2>
              <h2 className="text-sm sm:text-base ">
                Social Media Management (SMM)
              </h2>
              <h2 className="text-sm sm:text-base ">
                Social Media Management (SMM)
              </h2>
              <h2 className="text-sm sm:text-base ">
                Social Media Management (SMM)
              </h2> */}
              <select onChange={onFilterValueChange}>
                <option>All</option>
                <option>Computer</option>
                <option>Technology</option>
                <option>Music</option>
                <option>Design</option>
              </select>
            </section>
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
        <BlogCards />
        <PaginatedBlogs />
      </main>
      <Newsletter />
    </Layout>
  );
};

export default Blog;
