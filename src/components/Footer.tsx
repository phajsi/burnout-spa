import { GitHubIcon, LinkIcon, LinkedInIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-slate-950 mt-40">
      <div className="w-3/4 lg:w-2/4 m-auto flex sm:justify-end justify-center">
        <div className="group flex relative">
          <button
            type="button"
            className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
          >
            <LinkIcon />
          </button>
          <span className="whitespace-nowrap group-hover:opacity-100 transition-opacity bg-gray-800 px-6 py-1 font-mono text-lg text-white rounded-lg absolute left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 m-4 mx-auto">
            Links & References
          </span>
        </div>
        <button
          type="button"
          className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
        >
          <LinkedInIcon />
        </button>
        <button
          type="button"
          className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
        >
          <GitHubIcon />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
