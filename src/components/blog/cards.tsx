import Link from "next/link";
import React from "react";

const BlogData = [
  {
    id: 1,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: " Lydia Phils",
    date: "20 March, 2023",
    category: "Design",
    blogTitle: " UI/UX design tips",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum.Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum. Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum .Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum  ...",
  },
  {
    id: 2,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Saheed Phils",
    date: "20 March, 2023",
    category: "Social-Media",
    blogTitle: "Impact of social media on businesses",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 3,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Sarah Miles",
    date: "20 March, 2023",
    category: "Computer",
    blogTitle: "Operating Systems",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 4,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Terry Awkins",
    date: "20 March, 2023",
    category: "Technology",
    blogTitle: "Web App Development",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 5,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Jessica Lewis",
    date: "20 March, 2023",
    category: "Music",
    blogTitle: "Key Signatures",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 6,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: " Lydia Phils",
    date: "20 March, 2023",
    category: "Design",
    blogTitle: " UI/UX design tips",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum.Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum. Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum .Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum  ...",
  },
  {
    id: 7,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Saheed Phils",
    date: "20 March, 2023",
    category: "Social-Media",
    blogTitle: "Impact of social media on businesses",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 8,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Sarah Miles",
    date: "20 March, 2023",
    category: "Computer",
    blogTitle: "Operating Systems",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 9,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Terry Awkins",
    date: "20 March, 2023",
    category: "Technology",
    blogTitle: "Web App Development",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 10,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Jessica Lewis",
    date: "20 March, 2023",
    category: "Music",
    blogTitle: "Key Signatures",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 11,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Terry Awkins",
    date: "20 March, 2023",
    category: "Technology",
    blogTitle: "Web App Development",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
  {
    id: 12,
    imageSrc: "/assets/blog-logo.svg",
    avatarSrc: "/assets/post-avatar.svg",
    author: "Jessica Lewis",
    date: "20 March, 2023",
    category: "Music",
    blogTitle: "Key Signatures",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis interdum ...",
  },
];

const BlogCards = () => {
  return (
    <div className="flex flex-row gap-[22px] sm:gap-[40px]">
      {BlogData.map((data) => {
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
                href="/blog/blog-page"
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
