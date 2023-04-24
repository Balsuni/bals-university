import React from "react";
import Image from "next/image";
import FooterWrapper from "../ui/footerWrapper";
import FooterFlexWrapper from "../ui/footerFlexWrapper";
import FooterLinks from "../ui/footerLinks";
import FooterLinksParagraph from "../ui/footerLinksParagraph";
import Link from "next/link";
import { Copyright } from "iconsax-react";

const Footer = () => {
  const FooterSocialIcons = [
    {
      id: 1,
      imgSrc: "/assets/instagram-logo.svg",
      alt: "Instagram Logo",
      href: "https://www.instagram.com/",
    },
    {
      id: 2,
      imgSrc: "/assets/twitter-logo.svg",
      alt: "Twitter Logo",
      href: "https://www.twitter.com/",
    },
    {
      id: 3,
      imgSrc: "/assets/facebook-logo.svg",
      alt: "Facebook Logo",
      href: "https://www.facebook.com/",
    },
    {
      id: 4,
      imgSrc: "/assets/linkedin-logo.svg",
      alt: "Linkedin Logo",
      href: "https://www.linkedin.com/",
    },
  ];

  const companyFooterLinks = [
    {
      id: 1,
      title: "About Us",
      href: "/about-us",
    },
    {
      id: 2,
      title: "Affiliate",
      href: "/affiliate",
    },
    {
      id: 3,
      title: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      title: "FAQ",
      href: "/faq",
    },
  ];

  const categoriesFooterLinks = [
    {
      id: 1,
      title: "Skill Acquisition",
      href: "/",
    },
    {
      id: 2,
      title: "Talent Acquisition",
      href: "/",
    },
  ];

  const quicklinksFooterLinks = [
    {
      id: 1,
      title: "Site Map",
      href: "/",
    },
    {
      id: 2,
      title: "Help",
      href: "/",
    },
    {
      id: 3,
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      id: 4,
      title: "Terms and Conditions",
      href: "/terms-and-conditions",
    },
  ];

  return (
    <FooterWrapper>
      <FooterFlexWrapper>
        <div className="lg:ml-10 xl:ml-10 text-gray-50">
          <Image
            className="mt-auto mb-auto text-cyan1-500"
            src="/assets/logo.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <h5 className="font-bold text-xl mt-16 tracking-wide">
            Subscribe to our newsletters
          </h5>
          <p className="text-sm font-light mt-3">
            We will ensure you don&apos;t get spammed
          </p>

          <form className="mt-10 flex w-10/12 h-12">
            <input
              type="email"
              className="font-bold text-gray-900 px-5 h-12 rounded-lg outline-none border-none"
              placeholder="Enter Email..."
              required
            />
            <button
              type="submit"
              className="bg-cyan1-500 active:bg-cyan1-700 hover:bg-cyan1-400  px-7 py-1 rounded-lg text-gray-100 absolute h-12 left-[250px]"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mr-10 mt-16 lg:mt-0 xl:mt-0 text-gray-50">
          <div className="flex flex-col justify-end lg:flex-row xl:flex-row lg:gap-10 xl:gap-10">
            <h5 className="mt-auto mb-auto font-medium text-lg tracking-wide">
              Follow us on social media
            </h5>
            <div className="flex">
              {FooterSocialIcons.map((icon) => {
                return (
                  <div key={icon.id}>
                    <a href={icon.href}>
                      <Image
                        className="flex flex-row mr-4"
                        src={icon.imgSrc}
                        alt={icon.alt}
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-2 xl:grid-cols-4 lg:gap-5 xl:gap-2">
            <FooterLinks>
              <FooterLinksParagraph>Company</FooterLinksParagraph>
              {companyFooterLinks.map((company) => (
                <li
                  className="active:text-cyan2-300 hover:text-cyan2-500"
                  key={company.id}
                >
                  <Link href={company.href}>{company.title}</Link>
                </li>
              ))}
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Categories</FooterLinksParagraph>
              {categoriesFooterLinks.map((category) => (
                <li
                  className="active:text-cyan2-300 hover:text-cyan2-500"
                  key={category.id}
                >
                  <Link href={category.href}>{category.title}</Link>
                </li>
              ))}
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Quick Links</FooterLinksParagraph>
              {quicklinksFooterLinks.map((quicklink) => (
                <li
                  className="active:text-cyan2-300 hover:text-cyan2-500"
                  key={quicklink.id}
                >
                  <Link href={quicklink.href}>{quicklink.title}</Link>
                </li>
              ))}
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Contact Us</FooterLinksParagraph>
              <li className="active:text-cyan2-300 hover:text-cyan2-500">
                <div className="flex gap-3">
                  <img src="/assets/footerphoneicon.svg" />
                  <Link href="/">+ 234 (0) 234 234 234</Link>
                </div>
              </li>
              <li className="active:text-cyan2-300 hover:text-cyan2-500">
                <div className="flex gap-3">
                  <div>
                    <img src="/assets/footermail.svg" />
                  </div>
                  <Link href="/">info@bals.ng</Link>
                </div>
              </li>
            </FooterLinks>
          </div>
        </div>
      </FooterFlexWrapper>

      <div className="flex flex-col items-center  xl:flex-row xl:justify-between lg:flex-row lg:justify-between md:flex-row md:justify-between border-cyan2-500 border-t-2 w-screen mt-24 pb-1 text-gray-50">
        <div className="mt-5 ml-1 md:ml-5 lg:ml-5 xl:ml-5 flex flex-col sm:flex-row items-center gap-1 text-sm mr-5 font-medium">
          <div className="flex flex-row gap-2 items-center justify-center ">
            <Copyright size="24" color="#FBFBFB" variant="Bold" />
            <span>2023 BALS UNIVERSITY 2023.</span>
          </div>
          <span className="flex flex-col">All Right reserved</span>
        </div>
        <p className="mt-5 ml-1 md:ml-5 lg:ml-5 xl:ml-5 flex flex-row items-center gap-1 text-sm mr-5 font-medium">
          Photos by Freepik
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
