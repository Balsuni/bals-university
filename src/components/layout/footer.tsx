import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 relative bottom-0 w-screen h-auto py-10">

      <div className="flex flex-col lg:flex-row xl:flex-row justify-between ml-4 mr-4 md:ml-6 md:mr-6">

      <div className="lg:ml-10 xl:ml-10">
        <Image className="mt-auto mb-auto" src='/assets/balis-logo.svg' alt="Logo" width={150} height={150} />
        <h5 className="font-bold text-xl mt-16 tracking-wide">Subscribe to our newsletters</h5>
        <p className="text-sm font-light mt-3">We will ensure you don't get spammed</p>

        <form className="mt-10 flex">
        <input type="text" className="w-10/12 px-5 h-12 rounded-lg font-light" placeholder="Enter Email..."/>
        <button type="submit" className="bg-darkblue-500 px-7 py-1 rounded-lg text-gray-100">Submit</button>
        </form>
      </div>

      <div className="mr-10 mt-16 lg:mt-0 xl:mt-0">

        <div className="flex flex-col justify-end lg:flex-row xl:flex-row lg:gap-10 xl:gap-10">
        <h5 className="mt-auto mb-auto font-medium text-lg tracking-wide">Follow us on social media</h5>
        <div className="flex">
        <Image className="mt-auto mb-auto" src='/assets/Instagram-logo.svg' alt="Instagram Logo" width={50} height={50} />
        <Image className="mt-auto mb-auto" src='/assets/Twitter-logo.svg' alt="Twitter Logo" width={50} height={50} />
        <Image className="mt-auto mb-auto" src='/assets/Facebook-logo.svg' alt="Facebook Logo" width={50} height={50} />
        <Image className="mt-auto mb-auto" src='/assets/Linkedin-logo.svg' alt="Linkedin Logo" width={50} height={50} />
        </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4 lg:gap-5 xl:gap-2">
          <ul className="flex flex-col gap-2 text-md tracking-wider">
            <p className="font-semibold text-xl tracking-wider mb-5">Company</p>
            <li>About Us</li>
            <li>Affiliate</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>

          <ul className="flex flex-col gap-2 text-md tracking-wider">
            <p className="font-semibold text-xl tracking-wider mb-5">Categories</p>
            <li>Skill Acquisition</li>
            <li>Talent Acquisition</li>
          </ul>

          <ul className="flex flex-col gap-2 text-md tracking-wider">
            <p className="font-semibold text-xl tracking-wider mb-5">Quick Links</p>
            <li>Sitemap</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>

          <ul className="flex flex-col gap-2 text-md tracking-wider">
            <p className="font-semibold text-xl tracking-wider mb-5">Contact Us</p>
            <li>+ 234 (0) 234 234 234</li>
            <li>info@bals.ng</li>
          </ul>
        </div>

      </div>

      </div>

      <div className="border-gray-900 border-t-2 w-screen mt-24 pb-1">
        <p className="mt-5 ml-5 text-sm mr-5">&copy; 2023 BALS UNIVERSITY 2023. All Right reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
