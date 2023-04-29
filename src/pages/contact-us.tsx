import Layout from "@/components/layout";
import PageHeaderText from "@/components/pageHeaders/pageHeader-text";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Layout>
      <div className="hidden lg:inline xl:inline">
        <div className="relative top-[0px]">
          <img
            src="/assets/contact-line.svg"
            className="absolute top-[30px] xl:left-[70px] lg:left-[-30px]"
            alt="dotted-line"
          />
        </div>
      </div>
      <PageHeaderText
        title="Contact Us"
        backgroundImageSrc="/assets/toy-bricks-table-with-word-blog-contact.svg"
        backgroundImageAlt="contact-us"
        text="Any question or remarks? Just write us a message!"
      />
      <main className="bg-bodyBackground  pt-24  pb-44 ">
        <div className="shadow-lg  ml-auto mr-auto rounded-2xl bg-white shadow-gray-500 grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-3 xl:gap-0  w-fit p-10  justify-center pl-10">
          <div>
            <h5 className="text-darkblue-500 font-bold text-2xl tracking-wider mt-10">
              Love to hear from you, <br /> Get in touch 👋
            </h5>

            <form className="mt-16 flex flex-col gap-14">
              <input
                type="text"
                className="w-full border-b-2 border-gray-500 outline-none "
                placeholder="Full Name (Last Name First)"
              />
              <input
                type="email"
                className="w-full border-b-2 border-gray-500 outline-none"
                placeholder="Email Address"
              />
              <div className="w-full flex border-b-2">
                <select name="countrycode" id="" className="bg-white">
                  <option data-countrycode="NG" value="234">
                    +234
                  </option>
                </select>
                <input
                  type="text"
                  className="w-ful outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <input
                type="text"
                className="w-full border-b-2 border-gray-500 outline-none"
                placeholder="Message"
              />
              <button
                type="submit"
                className="flex bg-darkblue-500 w-fit m-auto justify-center px-16 py-3 text-gray-50 mt-10 hover:bg-darkblue-400 focus:ring focus:bg-darkblue2-500 "
              >
                Send message
                <Image
                  src="/assets/arrow-up.svg"
                  alt="arrow up"
                  width={12}
                  height={12}
                  className="my-auto ml-3"
                />
              </button>
            </form>

            <div className="flex mt-10 flex-row items-center justify-center gap-4 ">
              <img src="/assets/youtube.svg" alt="youtube logo" />
              <img src="/assets/instagram.svg" alt="instagram logo" />
              <img src="/assets/facebook.svg" alt="facebook logo" />
              <img src="/assets/twitter.svg" alt="twitter logo" />
            </div>
            <div className="hidden xl:inline">
              <div className="relative top-[-20px]">
                <img
                  src="/assets/letter_send 1.svg"
                  className="absolute top-[-50px] left-[200px]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-darkblue-500 rounded-xl w-fit h-auto mt-10 xl:mt-0 lg:mt-0 lg:ml-10 md:ml-10 xl:ml-10 text-gray-50 pr-5 pb-20">
            <div className="hidden xl:inline">
              <div className="relative top-[222px]">
                <img
                  src="/assets/contact-design(2).svg"
                  className="absolute top-[300px] left-[210px]"
                  alt=""
                />
              </div>
              <div className="relative top-[222px]">
                <img
                  src="/assets/contact-design(3).svg"
                  className="absolute top-[250px] left-[390px]"
                  alt=""
                />
              </div>
              <div className="relative top-[222px]">
                <img
                  src="/assets/contact-design(4).svg"
                  className="absolute top-[60px] left-[300px]"
                  alt=""
                />
              </div>
              <div className="relative top-[222px]">
                <img
                  src="/assets/contact-design(5).svg"
                  className="absolute top-[100px] left-[260px] w-[232px] h-[200px]"
                  alt=""
                />
              </div>
              <div className="relative top-[222px]">
                <img
                  src="/assets/contact-design(6).svg"
                  className="absolute top-[140px] left-[270px] w-[232px] h-[200px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col px-3 pl-10 mt-10">
              <h5 className="font-semibold text-2xl tracking-wider">
                Others way to connect
              </h5>
              <p className="mt-6 text-sm tracking-wider font-light">
                We&apos;ll love to hear from you. Our friendly team is always{" "}
                <br /> here to chat.
              </p>
            </div>

            <div className="pl-10 flex flex-col mt-10 gap-10">
              <div>
                <div className="flex gap-5">
                  <Image
                    alt="logo"
                    src="/assets/chat.svg"
                    width={20}
                    height={20}
                  />
                  <h5 className="font-bold text-lg tracking-wider">
                    Reach us on email
                  </h5>
                </div>
                <p className="ml-10 mt-1 text-sm font-extralight">
                  Our friendly team is here to help.
                </p>
                <p className="ml-10 mt-3 text-sm font-extralight">
                  info@bals.com
                </p>
              </div>

              <div>
                <div>
                  <div className="flex gap-5">
                    <Image
                      alt="logo"
                      src="/assets/briefcase.svg"
                      width={20}
                      height={20}
                    />
                    <h5 className="font-bold text-lg tracking-wider">
                      For Careers
                    </h5>
                  </div>
                  <p className="ml-10 mt-1 text-sm font-extralight">
                    Send your resume on
                  </p>
                  <p className="ml-10 mt-3 text-sm font-light tracking-wider">
                    careers@yourmail.com
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <div className="flex gap-5">
                    <Image
                      alt="logo"
                      src="/assets/phoneicon.svg"
                      width={20}
                      height={20}
                    />
                    <h5 className="font-bold text-lg tracking-wider">Phone</h5>
                  </div>
                  <p className="ml-10 mt-1 text-sm font-extralight">
                    Monday - Friday (9 am to 4 pm.)
                  </p>
                  <p className="ml-10 mt-3 text-sm font-light tracking-wider">
                    +234 814 875 8005
                  </p>
                  <p className="ml-10 mt-3 text-sm font-light tracking-wider">
                    +234 704 652 6254
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <div className="flex gap-5">
                    <Image
                      alt="logo"
                      src="/assets/location.svg"
                      width={20}
                      height={20}
                    />
                    <h5 className="font-bold text-lg tracking-wider">Office</h5>
                  </div>
                  <p className="ml-10 mt-1 text-sm font-extralight">
                    Come say hello at our office HQ.
                  </p>
                  <p className="ml-10 mt-3 text-sm font-light tracking-wider">
                    6 Peterson Rd, 1st Floor, Opp. Alex street, <br />
                    Lekki Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
