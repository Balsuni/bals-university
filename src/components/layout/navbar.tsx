import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowDown2, HambergerMenu, CloseSquare } from "iconsax-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

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
        className={` ${
          navbar
            ? "hidden lg:flex"
            : "absolute lg:relative top-0 left-0 z-20 block "
        }`}
      >
        {/* <ul className="flex items-center flex-col lg:flex-row pt-20 lg:pt-0 pb-20 lg:pb-0 gap-16 lg:gap-4 xl:gap-16 mt-24 sm:mt-28 lg:mt-0 w-screen lg:w-full text-gray-50 lg:text-gray-900 bg-darkblue-500 lg:bg-gray-50"> */}
        <ul className="w-screen lg:w-full absolute lg:relative flex items-center flex-col lg:flex-row pt-20 lg:pt-0 pb-20 lg:pb-0 gap-16 lg:gap-4 xl:gap-16 mt-24 sm:mt-28 lg:mt-0 text-gray-50 lg:text-gray-900 bg-darkblue-500 lg:bg-gray-50 ">
          {" "}
          <li
            className="flex items-center text-left gap-2 text-lg"
            onClick={toggleNavbar}
          >
            <Link href="/route-2">About BALS </Link>
            <ArrowDown2 size="20" />
          </li>
          <li className="text-lg text-left" onClick={toggleNavbar}>
            <Link href="/route-2">Courses </Link>
          </li>
          <li
            className=" flex items-center gap-2 text-lg"
            onClick={toggleNavbar}
          >
            <Link href="/route-2">Features </Link>
            <ArrowDown2 size="20" />
          </li>
          <li
            className="flex items-center gap-2 text-lg"
            onClick={toggleNavbar}
          >
            <Link href="/route-2">Resources </Link>
            <ArrowDown2 size="20" />
          </li>
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
