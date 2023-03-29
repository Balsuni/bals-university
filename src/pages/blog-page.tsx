import Newsletter from "@/components/blog/newsletter";
import Layout from "@/components/layout";
import React from "react";

const BlogPage = () => {
  return (
    <Layout>
      <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16  py-10 sm:py-10 md:py-10 lg:py-12 xl:py-12 bg-bodyBackground ">
        <section className="flex flex-col items-center justify-center">
          <h1 className="py-1 px-5 text-xl font-normal text-cyan1-800 border-[2px]  border-cyan1-700 w-[95px] ">
            Design
          </h1>
          <div className="flex flex-col items-center justify-between gap-5 mt-12 ">
            <div className=" text-4xl sm:text-6xl font-medium text-darkblue-500">
              UI/UX design tips
            </div>
            <div className="text-lg text-center font-normal text-gray-900  w-[300px] sm:w-[400px] ">
              Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper
              sagittis interdum ...
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 mt-8">
            <img
              className="w-[50px] h-[50px]"
              src="/assets/post-avatar.svg"
              alt="avatar"
            />
            <div>
              <h5 className="text-lg font-bold text-darkblue-500">
                Lydia Phils
              </h5>
              <h6 className="text-lg font-normal text-darkblue-500       ">
                20 March, 2023
              </h6>
            </div>
          </div>
        </section>

        <section className=" mt-12  ">
          <img className="mb-16" src="/assets/blog-logo-large.svg" alt="logo" />
          <h3 className="font-regular text-lg text-gray-900">
            Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
            ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
            sollicitudin neque fames imperdiet nibh vestibulum nec. Sed faucibus
            venenatis feugiat urna ullamcorper eget bibendum dui. Platea gravida
            ut amet.
          </h3>
        </section>

        <section className="mt-12">
          <h1 className="mb-10 text-darkblue-500 font-medium text-4xl ">
            Introduction
          </h1>
          <div className="flex flex-col gap-7">
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
          </div>
          <img
            className="rounded-t-3xl my-12 m-auto"
            src="/assets/blog-picture.svg"
            alt="blog-picture"
          />
          <div className="flex flex-col gap-7">
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="mb-10 text-darkblue-500 font-medium text-4xl ">
            Software and tools
          </h1>
          <div className="flex flex-col gap-7">
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="mb-10 text-darkblue-500 font-medium text-4xl ">
            UI/UX tips{" "}
          </h1>
          <div className="flex flex-col gap-7">
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>{" "}
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="mb-10 text-darkblue-500 font-medium text-4xl ">
            Other Resources
          </h1>
          <div className="flex flex-col gap-7">
            <h3 className="font-regular text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h3>
          </div>
        </section>

        <img
          className="pt-16 pb-8"
          src="/assets/line-blog-page.svg"
          alt="divider"
        />

        <section className="flex flex-col sm:flex-row gap-10 sm:gap-0  items-center justify-between mb-28 ">
          <div className="flex flex-row gap-4">
            <h1 className="py-1 px-5 text-xl font-normal text-cyan2-800 border-[2px]  border-cyan1-700 w-auto ">
              Design
            </h1>
            <h1 className="py-1 px-5 text-xl font-normal text-cyan2-800 border-[2px]  border-cyan1-700 w-auto">
              Tool
            </h1>
            <h1 className="py-1 px-5 text-xl font-normal text-cyan2-800 border-[2px]  border-cyan1-700 w-auto ">
              Tips
            </h1>
          </div>
          <div className="flex flex-row gap-5">
            <img src="/assets/share-logo.svg" alt="share" />
            <div className="py-1 px-5 text-xl flex flex-row font-normal text-cyan1-800 border-[2px]  border-cyan1-700 w-auto gap-2 ">
              <img src="/assets/copy-logo.svg" alt="copy" /> Copy Link
            </div>
          </div>
        </section>

        <section className="">
          <h1 className="">Leave a reply</h1>
          <h1>
            Your email address will not be published. Required fields are marked{" "}
            <span>*</span>
          </h1>
          <form className="flex flex-col items-start justify-center ">
            <label>Messgage *</label>
            <textarea className="bg-gray-100" cols={7} rows={5} />
            <label>Name *</label>
            <input
              type="text"
              className="w-full border-gray-500 outline-none bg-gray-100"
            />
            <label>Email *</label>
            <input
              type="text"
              className="w-full border-gray-500 outline-none bg-gray-100"
            />
            <label>Website</label>
            <input
              type="text"
              className="w-full border-gray-500 outline-none bg-gray-100"
            />
            <div className="flex flex-row gap-4">
              <input type="checkbox" className="default:ring-2 ..." />
              <h3>
                Save my name, email, and website in this browser for the next
                time I comment.
              </h3>
            </div>
          </form>
        </section>
      </main>
      <Newsletter />
    </Layout>
  );
};

export default BlogPage;
