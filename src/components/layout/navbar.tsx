import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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

const DropdownResourcesMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenMenu(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, []);

  return (
    <div>
      <li
        className=" px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 border-b-2  border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <h2 className="lg:hover:text-darkblue-500">Resources </h2>
        {!openMenu ? <ArrowDown2 size="20" /> : <ArrowUp2 size="20" />}
      </li>
      <div ref={mainMenuRef}>
        {openMenu && (
          <main className="px-0 sm:px-5 lg:px-16 py-4 w-screen lg:w-[1024px] xl:w-[1424px]  bg-bodyBackground text-darkblue-500 absolute top-24 lg:top-20  -left-0 lg:-left-48 z-30">
            <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
              Overview
            </div>
            <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
              {ResourcesMenu.map((items) => {
                return (
                  <div key={items.id}>
                    <Link
                      href={items.href}
                      className="text-darkblue-500 flex flex-row gap-2 items-center "
                    >
                      {items.title} <ArrowRight size="20" color="#162A5A" />
                    </Link>
                    <h1 className="text-gray-500">{items.content}</h1>
                  </div>
                );
              })}
            </section>
          </main>
        )}
      </div>
    </div>
  );
};

const DropdownFeaturesMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenMenu(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, []);

  return (
    <div>
      <li
        className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 border-b-2  border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <h2 className="lg:hover:text-darkblue-500">Features </h2>
        {!openMenu ? <ArrowDown2 size="20" /> : <ArrowUp2 size="20" />}
      </li>
      <div ref={mainMenuRef}>
        {openMenu && (
          <main className="px-0 sm:px-5 lg:px-16 py-4 w-screen lg:w-[1024px] xl:w-[1424px]  bg-bodyBackground text-darkblue-500 absolute top-24 lg:top-20  -left-0 lg:-left-48 z-30">
            <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
              Overview
            </div>
            <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
              {FeaturesMenu.map((items) => {
                return (
                  <div key={items.id}>
                    <Link
                      href={items.href}
                      className="text-darkblue-500 flex flex-row gap-2 items-center "
                    >
                      {items.title} <ArrowRight size="20" color="#162A5A" />
                    </Link>
                    <h1 className="text-gray-500">{items.content}</h1>
                  </div>
                );
              })}
            </section>
          </main>
        )}
      </div>
    </div>
  );
};

const SearchDrop = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearchBox = () => {
    return setOpenSearch(!openSearch);
  };

  const mainMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let searchHandler = (e: any) => {
      if (!mainMenuRef.current?.contains(e.target)) {
        setOpenSearch(false);
        console.log(mainMenuRef.current);
      }
    };
    document.addEventListener("mousedown", searchHandler);

    return () => {
      document.removeEventListener("mousedown", searchHandler);
    };
  }, [toggleSearchBox]);

  return (
    <div>
      <li className="px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500">
        {!openSearch ? (
          <Image
            onClick={toggleSearchBox}
            className="w-[15px] sm:w-[20px]"
            src="/assets/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        ) : (
          <CloseSquare className="z-10" size="24" color="#162A5A" />
        )}
      </li>
      <div ref={mainMenuRef}>
        {openSearch && (
          <main className="absolute z-30 rounded-xl pl-3 py-3 h-[230px] w-[310px] sm:w-[320px] top-20 sm:top-24 -ml-[134px] sm:-ml-0 text-darkblue-500 bg-gray-200  ">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between ">
                {query ? (
                  ""
                ) : (
                  <img
                    className="w-[16px] absolute pointer-events-none"
                    src="/assets/search.svg"
                    alt="search"
                  />
                )}
                <form action="submit">
                  <input
                    type="text"
                    value={query}
                    name="search"
                    autoComplete="off"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                    className="text-darkblue-500 text-3 h-10 pl-7 bg-gray-200 w-[290px] focus:outline-none  "
                  />
                </form>
                {query ? (
                  <CloseSquare
                    size="23"
                    color="#162A5A"
                    onClick={() => setQuery("")}
                    className="absolute right-7"
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                {/* <div>
                  <ul className="flex flex-col gap-3 mt-2  list-disc list-inside">
                    <div className="flex flex-row items-center">
                      <img
                        className="w-[16px] absolute pointer-events-none"
                        src="/assets/search.svg"
                        alt="search"
                      />{" "}
                      <h1 className="ml-7"> Digital Marketing</h1>
                    </div>
                    <div className="flex flex-row items-center">
                      <img
                        className="w-[16px] absolute pointer-events-none"
                        src="/assets/search.svg"
                        alt="search"
                      />{" "}
                      <h1 className="ml-7"> Digital Learning</h1>
                    </div>
                  </ul>
                </div> */}
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setNavbar(!navbar);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let navBarHandler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setNavbar(true);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", navBarHandler);

    return () => {
      document.removeEventListener("mousedown", navBarHandler);
    };
  }, []);

  useEffect(() => {
    let aboutHandler = (e: any) => {
      if (!aboutRef.current?.contains(e.target)) {
        setOpenMenu(false);
        console.log(aboutRef.current);
      }
    };
    document.addEventListener("mousedown", aboutHandler);

    return () => {
      document.removeEventListener("mousedown", aboutHandler);
    };
  }, []);

  return (
    <div className="flex h-auto px-4 sm:px-7 md:px-10 lg:px-5 xl:px-16 py-6 flex-row items-center justify-between bg-bodyBackground">
      <Link href="/">
        <Image
          className="w-[90px] sm:w-32 h-12 sm:h-16"
          src="/assets/balis-logo.svg"
          alt="balis-logo"
          width={131}
          height={67}
        />
      </Link>

      <div ref={menuRef}>
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
                className=" px-1 xl:px-2 flex items-center text-left gap-2 text-lg py-2 border-b-2  border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
                onClick={() => setOpenMenu((prev) => !prev)}
              >
                <h2 className="lg:hover:text-darkblue-500">About BALS </h2>
                {!openMenu ? <ArrowDown2 size="20" /> : <ArrowUp2 size="20" />}
              </li>
              <div ref={aboutRef}>
                {openMenu && (
                  <main className="px-0 sm:px-5 lg:px-16 py-4 w-screen lg:w-[1024px] xl:w-[1424px]  bg-bodyBackground text-darkblue-500 absolute top-24 lg:top-20  -left-0 lg:-left-48 z-30">
                    <div className="py-3 px-5 sm:px-10 text-gray-900 font-normal text-lg border-b-[2px] border-gray-400 ">
                      Overview
                    </div>
                    <section className="text-[16px] py-5 px-5 sm:px-10 gap-8 grid grid-cols-2 grid-rows-2 pt-2 ">
                      {AboutMenu.map((items) => {
                        return (
                          <div key={items.id}>
                            <Link
                              href={items.href}
                              className="text-darkblue-500 flex flex-row gap-2 items-center "
                            >
                              {items.title}{" "}
                              <ArrowRight size="20" color="#162A5A" />
                            </Link>
                            <h1 className="text-gray-500">{items.content}</h1>
                          </div>
                        );
                      })}
                    </section>
                  </main>
                )}
              </div>
            </div>

            <li
              className=" px-1 xl:px-2  text-lg text-left py-2 border-b-2 border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
              onClick={toggleNavbar}
            >
              <Link href="/courses" className="lg:hover:text-darkblue-500">
                Courses{" "}
              </Link>
            </li>

            <DropdownFeaturesMenu />
            <DropdownResourcesMenu />

            <li
              className="flex items-center gap-2 text-lg"
              onClick={toggleNavbar}
            >
              <button className="flex lg:hidden items-center justify-center  px-3 py-3 w-36 rounded-md text-darkblue-500 bg-gray-200  hover:bg-gray-50 focus:ring focus:bg-gray-50 ">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center w-2/5 md:w-3/12 lg:w-40 xl:w-2/12 justify-between">
        <SearchDrop />
        <Image
          className="w-[30px] h-[30px] sm:w-[30px] bg-darkblue-50 px-1 sm:px- rounded-full"
          src="/assets/phone.svg"
          alt="phone"
          width={35}
          height={35}
        />
        <Image
          className="w-[30px] sm:w-[37px]  bg-darkblue-50 p-1 rounded-full"
          src="/assets/mail.svg"
          alt="mail"
          width={35}
          height={35}
        />
      </div>

      <div className="lg:hidden flex items-center ">
        <button onClick={toggleNavbar}>
          {navbar ? (
            <HambergerMenu size="30" color="#162A5A" />
          ) : (
            <CloseSquare className="z-10" size="30" color="#162A5A" />
          )}
        </button>
      </div>

      <button className="hidden lg:flex items-center justify-center px-3 py-3 w-36 rounded-md text-gray-50 bg-darkblue-500 hover:bg-darkblue-400 focus:ring focus:bg-darkblue2-500 ">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
