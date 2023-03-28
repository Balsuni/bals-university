import Header from "@/components/about-us/header";
import ValueCards from "@/components/about-us/valueCards";
import Layout from "@/components/layout";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <Header />
      <main className="w-full px-5 sm:px-12 md:px-14 lg:px-16 xl:px-16  py-10 sm:py-10 md:py-10 lg:py-12 xl:py-12 bg-bodyBackground ">
        <section className="mb-24">
          <h1 className="font-semibold text-4xl md:text-4xl lg:text-4xl text-darkblue-500 mb-5 md:mb-8">
            Our Story
          </h1>

          <div className="flex flex-col text-base md:text-lg text-black mb-8 font-normal gap-5  mr-4 sm:mr-7 md:mr-8 lg:mr-10 xl:mr-16">
            <h5>
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h5>
            <h5>
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h5>
          </div>
        </section>

        <section className="mb-20 sm:mb-24">
          <h1 className="font-semibold text-4xl md:text-4xl lg:text-4xl text-darkblue-500 mb-5 md:mb-8">
            Our Values
          </h1>

          <div className="flex flex-col text-base md:text-lg text-black mb-8 font-normal gap-5  mr-4 sm:mr-7 md:mr-8 lg:mr-10 xl:mr-16">
            <h5>
              Lorem ipsum dolor sit amet consectetur. Mauris cras neque in
              ultricies at. Elit venenatis ultricies dignissim bibendum. Aliquet
              sollicitudin neque fames imperdiet nibh vestibulum nec. Sed
              faucibus venenatis feugiat urna ullamcorper eget bibendum dui.
              Platea gravida ut amet.
            </h5>
          </div>
        </section>

        <section className="mb-24 flex flex-col lg:flex-row items-center justify-center xl:items-center xl:justify-center gap-8 lg:gap-20 xl:gap-36 ">
          <main className="grid gap-8 lg:gap-8 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 ">
            <ValueCards
              src="/assets/trustworthy.svg"
              valueTitle="Trustworthy"
              text=" Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
              interdum gjsjhdjd jddjdb sjhsjsjdn hdsdhj dx jhddj ..."
            />
            <ValueCards
              src="/assets/transformational.svg"
              valueTitle="Transformational"
              text=" Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
        interdum gjsjhdjd jddjdb sjhsjsjdn hdsdhj dx jhddj ..."
            />
            <ValueCards
              src="/assets/modern.svg"
              valueTitle="Modern"
              text=" Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
        interdum gjsjhdjd jddjdb sjhsjsjdn hdsdhj dx jhddj ..."
            />
            <ValueCards
              src="/assets/approachable.svg"
              valueTitle="Approachable"
              text=" Lorem ipsum dolor sit amet consectetur. Auctor ullamcorper sagittis
        interdum gjsjhdjd jddjdb sjhsjsjdn hdsdhj dx jhddj ..."
            />
          </main>
          <main className="w-[270px] h-[710px] lg:h-[770px] xl:h-[810px]  bg-imageColor items-center justify-center flex  ">
            <img src="/assets/holding-hands.svg" alt="" />
          </main>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
