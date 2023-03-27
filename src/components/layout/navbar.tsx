import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const toggleNavbar = () => {
    console.log("clicked");
    setNavbar(!navbar);
  };

  return (
    <div className="flex h-auto px-3 sm:px-7 md:px-10 lg:px-8 xl:px-16 py-6 flex-row items-center justify-between bg-gray-50">
      <h1>Navbar</h1>
      <h1>Navbar</h1>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
