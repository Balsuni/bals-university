import React from "react";
import Image from "next/image";
import FooterWrapper from "../UI/footerWrapper";
import FooterFlexWrapper from "../UI/FooterFlexWrapper";
import FooterLinks from "../UI/FooterLinks";
import FooterLinksParagraph from "../UI/FooterLinksParagraph";
import Link from "next/link";

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

          <form className="mt-10 flex">
            <input
              type="text"
              className="w-10/12 px-5 h-12 rounded-lg font-light"
              placeholder="Enter Email..."
            />
            <button
              type="submit"
              className="bg-cyan1-500 px-7 py-1 rounded-lg text-gray-100"
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

          <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4 lg:gap-5 xl:gap-2">
            <FooterLinks>
              <FooterLinksParagraph>Company</FooterLinksParagraph>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Affiliate</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Categories</FooterLinksParagraph>
              <li>
                <Link href="/">Skill Acquisition</Link>
              </li>
              <li>
                <Link href="/">Talent Acquisition</Link>
              </li>
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Quick Links</FooterLinksParagraph>
              <li>
                <Link href="/">Sitemap</Link>
              </li>
              <li>
                <Link href="/">Help</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms and Conditions</Link>
              </li>
            </FooterLinks>

            <FooterLinks>
              <FooterLinksParagraph>Contact Us</FooterLinksParagraph>
              <li>
                <Link href="/">+ 234 (0) 234 234 234</Link>
              </li>
              <li>
                <Link href="/">info@bals.ng</Link>
              </li>
            </FooterLinks>
          </div>
        </div>
      </FooterFlexWrapper>

      <div className="border-cyan2-500 border-t-2 w-screen mt-24 pb-1 text-gray-50">
        <p className="mt-5 ml-5 text-sm mr-5 font-bold">
          &copy; 2023 BALS UNIVERSITY 2023. All Right reserved
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
