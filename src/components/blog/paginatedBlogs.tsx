import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColors = (currentPage: any) => {
  const itemsPerPage = 12;

  return axios.get(
    `http://localhost:4000/BlogData?_limit=${itemsPerPage}&_page=${currentPage}`
  );
};

function PaginatedBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", currentPage],
    () => fetchColors(currentPage),
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

  console.log("isLoading", isLoading);
  console.log("iserror", error);
  console.log("data", data);

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="gap-10 grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2  lg:grid-rows-2 lg:grid-cols-3 xl:grid-rows-2 xl:grid-cols-4  ">
        {data?.data?.map((data: any) => {
          return (
            <section
              key={data.id}
              className="max-w-[280px] lg:max-w-[300px] border-[px] shadow-md bg-gray-100 "
            >
              <img className="rounded-t-3xl " src={data.imageSrc} alt="logo" />
              <main className="px-4  py-5 flex flex-col h-[auto]  gap-6">
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
                      <h6 className="text-xs font-normal text-darkblue-500">
                        {data.date}
                      </h6>
                    </div>
                  </div>
                  <h1 className="py-1 text-center text-lg font-normal text-gray-900 border-[2px] border-gray-300 w-[95px] ">
                    {data.category}
                  </h1>
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="text-xl font-medium text-gray-900">
                    {data.blogTitle}
                  </div>
                  <div className="text-ellipses overflow-hidden h-[50px] text-base font-normal text-gray-900">
                    {data.blogContent}
                  </div>
                </div>
                <h1 className="flex flex-row gap-2 text-lg font-medium text-darkblue-500  pb-5 ">
                  Read Post
                  <img src="/assets/post-arrow.svg" alt="post" />
                </h1>
              </main>
            </section>
          );
        })}
      </div>

      <section className="mt-12 flex flex-row items-center justify-center gap-3 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10 pr-5 sm:pr-12 md:pr-14 lg:pr-16 xl:pr-16 ">
        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }  hover:bg-gray-50 text-md sm:text-lg font-medium text-darkblue-500 flex flex-row items-center gap-2 py-2 px-4 rounded-l`}
        >
          <img src="/assets/arrow-narrow-left.svg" alt="previous" />
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page} className="list-none">
            <button
              onClick={() => handlePageChange(page)}
              className={`${
                currentPage === page
                  ? "bg-cyan1-100 hover:bg-cyan1-100 text-gray-800 hover:text-gray-900"
                  : "bg-gray-50 text-gray-900 cursor-not-allowed"
              } text-lg sm:text-2xl font-medium px-0 py-0 sm:px-3 sm:py-2 md:px-5 md:py-3  `}
              disabled={currentPage === page}
            >
              {page}
            </button>
          </li>
        ))}
        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }  hover:bg-gray-50 text-md sm:text-lg font-medium text-darkblue-500 flex flex-row items-center gap-1 py-2 px-4 rounded-r`}
        >
          Next
          <img src="/assets/arrow-narrow-right.svg" alt="next" />
        </button>
      </section>
      {isFetching && "Loading"}
    </div>
  );
}

export default PaginatedBlogs;
