import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>404 Page</title>
      </Head>

      <h2 className="text-red-600 font-black text-7xl">
        <span>O</span>ops<span className="text-8xl">!</span>
      </h2>

      <div className="text-center mt-4">
        <p className="text-xl tracking-wider">Can&apos;t load this page</p>
        <Link href="/" legacyBehavior>
          <a className="inline-block bg-darkblue-500 text-white px-8 py-2 text-sm rounded-lg mt-5 hover:bg-darkblue-400">
            Back
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Custom404;
