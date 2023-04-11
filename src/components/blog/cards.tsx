import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

const fetchBlogs = () => {
  return axios.get(`https://bals-testapi.onrender.com/blog_display`);
};

const BlogCards = () => {
  const { isLoading, isError, data, isFetching } = useQuery(
    ["colors"],
    () => fetchBlogs(),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{isError}</h2>;
  }

  return (
    <div className="flex flex-row gap-[22px] sm:gap-[40px]">
      {data?.data?.map((data: any) => {
        return (
          <section
            key={data.id}
            className="min-w-[280px] lg:min-w-[363px] xl:min-w-[463px] border-[px] shadow-md bg-gray-100 "
          >
            <img className="rounded-t-3xl " src={data.imageSrc} alt="logo" />
            <main className="px-4 md:px-5 lg:px-10  py-5 md:py-5 flex flex-col h-[auto] gap-6">
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-[37px] h-[37px]"
                    src={data.avatarSrc}
                    alt="avatar"
                  />
                  <div>
                    <h5 className="text-base font-bold text-gray-900">
                      {data.author}
                    </h5>
                    <h6 className="text-xs font-normal text-darkblue-500       ">
                      {data.date}
                    </h6>
                  </div>
                </div>
                <h1 className="text-ellipses overflow-hidden py-1 text-center text-lg font-normal text-gray-900 border-[2px] border-gray-300 w-[95px]">
                  {data.category}
                </h1>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="text-xl md:text-[22px] lg:text-2xl  font-medium text-gray-900">
                  {data.blogTitle}
                </div>
                <div className="text-ellipses overflow-hidden h-[80px] text-base lg:text-lg font-normal text-gray-900">
                  {data.blogContent}
                </div>
              </div>
              <Link
                href={`/blog/` + data.id}
                className="flex flex-row gap-2 text-lg sm:text-xl font-medium text-darkblue-500  pb-5 "
              >
                Read Post
                <img src="/assets/post-arrow.svg" alt="post" />
              </Link>
            </main>
          </section>
        );
      })}
    </div>
  );
};

export default BlogCards;
