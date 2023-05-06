import React from "react";
import { BurnoutLogoIconSVG } from "../assets";

const Home = () => {
  return (
    <div className="grid place-content-center h-screen">
      <p className="text-neutral-200 font-bold w-max text-2xl font-mono mb-4">
        Learn more about burnout in Tech ...
      </p>

      <a
        href="burnout-in-tech"
        className="w-fit m-auto inline-flex items-center justify-center h-16 px-8 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        <BurnoutLogoIconSVG />
        <p className="ml-4">Learn More</p>
      </a>
    </div>
  );
};

export default Home;
