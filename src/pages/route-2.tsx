import Link from "next/link";
import React from "react";

const Route2 = () => {
  return (
    <div className="flex items-center justify-center pt-10 ">
      <button className="px-4 py-2 bg-darkblue-500 text-white rounded-lg ">
        <Link href="/">Back</Link>
      </button>
    </div>
  );
};

export default Route2;
