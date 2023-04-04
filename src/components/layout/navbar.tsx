import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowDown2,
  HambergerMenu,
  CloseSquare,
  ArrowUp2,
  ArrowRight,
} from "iconsax-react";
import {
  AboutMenu,
  FeaturesMenu,
  ResourcesMenu,
} from "../navbar/dropdownItems";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const [openAbout, setOpenAbout] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setNavbar(!navbar);
  };

  return (
    <div className="flex h-auto px-3 sm:px-7 md:px-10 lg:px-8 xl:px-16 py-6 flex-row items-center justify-between bg-bodyBackground">
      <Image
        className="w-28 sm:w-36 h-12 sm:h-16"
        src="/assets/balis-logo.svg"
        alt="balis-logo"
        width={131}
        height={67}
      />

      <div
        className={`${
          navbar
            ? "hidden lg:flex"
            : "absolute lg:relative top-0 left-0 z-20 block"
        }`}
      >
        <ul className="w-screen lg:w-full absolute lg:relative flex items-center flex-col lg:flex-row pt-10 lg:pt-0 pb-20 lg:pb-0 gap-16 lg:gap-4 xl:gap-16 mt-24 sm:mt-28 lg:mt-0 text-gray-50 lg:text-gray-900 bg-darkblue-500 lg:bg-gray-50">
          <div>
            <li
              className="flex items-center text-left gap-2 text-lg py-2 border-b-2  border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
              onClick={() => setOpenAbout((prev) => !prev)}
            >
              <h2>About BALS </h2>
              {!openAbout ? <ArrowDown2 size="20" /> : <ArrowUp2 size="20" />}
            </li>

            {openAbout && (
              <main className="px-0 sm:px-5 py-4 w-screen lg:w-[1024px] bg-bodyBackground text-darkblue-500 absolute top-24 lg:top-20  -left-0 lg:-left-48 ">
                <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
                  Overview
                </div>
                <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
                  {AboutMenu.map((items) => {
                    return (
                      <div key={items.id}>
                        <h2 className="text-darkblue-500 flex flex-row gap-2 items-center ">
                          {items.title} <ArrowRight size="20" color="#162A5A" />
                        </h2>
                        <h1 className="text-gray-500">{items.content}</h1>
                      </div>
                    );
                  })}
                </section>
              </main>
            )}
          </div>
          <li
            className="text-lg text-left py-2 border-b-2 border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
            onClick={toggleNavbar}
          >
            <Link href="/courses">Courses </Link>
          </li>
          <div>
            <li
              className=" flex items-center gap-2 text-lg py-2 border-b-2 border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
              onClick={() => setOpenFeatures(!openFeatures)}
            >
              <h2>Features </h2>
              {!openFeatures ? (
                <ArrowDown2 size="20" />
              ) : (
                <ArrowUp2 size="20" />
              )}
            </li>

            {openFeatures && (
              <main className="px-5 py-4 w-screen lg:w-[1024px] bg-bodyBackground text-darkblue-500 absolute top-[315px] lg:top-20  -left-0 lg:-left-48 ">
                <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
                  Overview
                </div>
                <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
                  {FeaturesMenu.map((items) => {
                    return (
                      <div key={items.id}>
                        <h2 className="text-darkblue-500 flex flex-row gap-2 items-center ">
                          {items.title} <ArrowRight size="20" color="#162A5A" />
                        </h2>
                        <h1 className="text-gray-500">{items.content}</h1>
                      </div>
                    );
                  })}
                </section>
              </main>
            )}
          </div>
          <div>
            <li
              className="flex items-center gap-2 text-lg py-2 border-b-2 border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
              onClick={() => setOpenResources(!openResources)}
            >
              <h2>Resources </h2>
              {!openResources ? (
                <ArrowDown2 size="20" />
              ) : (
                <ArrowUp2 size="20" />
              )}
            </li>

            {openResources && (
              <main className="px-5 py-4 w-screen lg:w-[1024px] bg-bodyBackground text-darkblue-500 absolute top-[425px] lg:top-20  -left-0 lg:-left-48 ">
                <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
                  Overview
                </div>
                <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
                  {ResourcesMenu.map((items) => {
                    return (
                      <div key={items.id}>
                        <h2 className="text-darkblue-500 flex flex-row gap-2 items-center ">
                          {items.title} <ArrowRight size="20" color="#162A5A" />
                        </h2>
                        <h1 className="text-gray-500">{items.content}</h1>
                      </div>
                    );
                  })}
                </section>
              </main>
            )}
          </div>
          <li
            className="flex items-center gap-2 text-lg"
            onClick={toggleNavbar}
          >
            <button className="flex lg:hidden items-center justify-center  px-3 py-3 w-36 rounded-md text-darkblue-500 bg-gray-50 ">
              Get Started
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-row w-2/5 md:w-3/12 lg:w-40 xl:w-2/12 justify-between">
        <Image src="/assets/search.svg" alt="search" width={16} height={16} />
        <Image
          className="bg-darkblue-50 p-1 rounded-full"
          src="/assets/phone.svg"
          alt="phone"
          width={35}
          height={35}
        />
        <Image
          className="bg-darkblue-50 p-1 rounded-full"
          src="/assets/mail.svg"
          alt="mail"
          width={35}
          height={35}
        />
      </div>

      <div className="lg:hidden">
        <button onClick={toggleNavbar}>
          {navbar ? (
            <HambergerMenu size="32" color="#162A5A" />
          ) : (
            <CloseSquare className="z-10" size="32" color="#162A5A" />
          )}
        </button>
      </div>

      <button className="hidden lg:flex items-center justify-center px-3 py-3 w-36 rounded-md text-gray-50 bg-darkblue-500 ">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
