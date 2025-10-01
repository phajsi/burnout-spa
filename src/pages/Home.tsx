import { BurnoutLogoIconSVG } from "../assets";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-2/4 h-fit py-4 text-center">
        <p className="text-neutral-200 font-bold md:text-2xl font-mono mb-4">
          Learn more about burnout in Tech ...
        </p>

        <a
          href="burnout-in-tech"
          className="w-fit group m-auto inline-flex items-center justify-center sm:text-xl text-sm h-16 px-8 py-0 font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        >
          <BurnoutLogoIconSVG />
          <p className="ml-4 whitespace-nowrap">Learn More</p>
        </a>
      </div>
    </>
  );
};

export default Home;
