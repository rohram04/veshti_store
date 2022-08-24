import React from "react";
import Loader from "../components/loader";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" inset-0 mx-auto fixed overflow-y-auto min-h-full w-full flex items-center justify-center bg-purple-400 bg-opacity-50">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white p-4">Welcome!</h1>
        <Link href="/products">
          <button className="space-x-4 w-fit bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <p>Shop Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
