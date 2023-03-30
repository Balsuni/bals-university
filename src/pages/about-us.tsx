import Header from "@/components/about-us/header";
import TeamCards from "@/components/about-us/teamCards";
import ValueCards, {
  ValueCardsBlackText,
} from "@/components/about-us/valueCards";
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
            <ValueCardsBlackText
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
            <ValueCardsBlackText
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
          <div className="w-[270px] h-[710px] lg:h-[770px] xl:h-[810px]  bg-imageColor items-center justify-center flex  ">
            <img src="/assets/holding-hands.svg" alt="" />
          </div>
        </section>

        <section className="mb-20 sm:mb-24  flex flex-col md:flex-row items-center xl:items-center justify-between gap-5 lg:gap-0 ">
          <div className="text-darkblue-500 text-3xl lg:text-4xl xl:text-5xl font-medium">
            <h1>We drive growth.</h1>
            <h1>Together.</h1>
          </div>
          <div className="text-darkblue-500 bg-gray-200 w-[280px] xl:w-80 h-32 px-6 pt-5 pb-5 rounded-lg">
            <h1 className=" text-4xl font-medium">7000+</h1>
            <h4 className=" text-xl font-normal">Registered Students</h4>
          </div>
          <div className="text-darkblue-500 bg-gray-200 w-[280px] xl:w-80 h-32 px-6 pt-5 pb-5 rounded-lg">
            <h1 className=" text-4xl font-medium">7000+</h1>
            <h4 className=" text-xl font-normal">Registered Students</h4>
          </div>
        </section>

        <section className="mb-9 sm:mb-12">
          <h1 className="font-semibold text-4xl md:text-4xl lg:text-4xl text-darkblue-500 mb-5 md:mb-8">
            Meet our team of creators, writers, and world class problemsolvers
          </h1>

          <div className="flex flex-col text-base md:text-lg text-black mb-8 font-normal gap-5  mr-4 sm:mr-7 md:mr-8 lg:mr-10 xl:mr-16">
            <h5>
              To be the company our customers want us to be, it takes eclectic
              group of passionate operators. Get to know the people leading the
              way at BALS university.
            </h5>
          </div>
        </section>

        <section className="mb-12 flex items-center justify-center gap-8 lg:gap-20 xl:gap-36 ">
          <main className="grid gap-8 grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
            <TeamCards
              src="/assets/team-member-avatar.svg"
              teamMemberName="James Okapa"
              teamMemberRole="Head of Engineering"
            />
          </main>
        </section>
      </main>
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-5 py-10 sm:py-14 gap-4 md:gap-0  bg-gray-200">
        <img
          className="w-[156px] h-[57px]"
          src="/assets/google.svg"
          alt="google logo"
        />
        <img
          className="w-[173px] h-[50px]"
          src="/assets/flutter.svg"
          alt="flutter logo"
        />
        <img
          className="w-[300px] h-[59px]"
          src="/assets/cowrywise.svg"
          alt="cowrywise logo"
        />
        {/* <img src="/assets/google.svg" alt="google logo" />
        <img src="/assets/flutter.svg" alt="flutter logo" />
        <img src="/assets/cowrywise.svg" alt="cowrywise logo" /> */}
      </section>
    </Layout>
  );
};

export default AboutUs;
