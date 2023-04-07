import { ArrowDown2, ArrowUp2, Link, ArrowRight } from "iconsax-react";
import { useState, useRef, useEffect } from "react";
import { ResourcesMenu } from "./dropdownItems";

const DropdownMenu = () => {
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
        className="flex items-center text-left gap-2 text-lg py-2 border-b-2  border-darkblue-500 lg:border-bodyBackground hover:border-white lg:hover:border-darkblue-500"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <h2>Resources </h2>
        {!openMenu ? <ArrowDown2 size="20" /> : <ArrowUp2 size="20" />}
      </li>
      <div ref={mainMenuRef}>
        {openMenu && (
          <main className="px-0 sm:px-5 py-4 w-screen lg:w-[1024px] bg-bodyBackground text-darkblue-500 absolute top-24 lg:top-20  -left-0 lg:-left-48 z-30">
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

export default DropdownMenu;
