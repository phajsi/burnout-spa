import { GitHubIcon, LinkIcon, LinkedInIcon } from "../assets";

type Props = {
  openModal: () => void;
};

const Footer = (props: Props) => {
  return (
    <>
      {/* Footer */}
      <footer className="w-full p-4 bg-slate-950 mt-40">
        <div className="w-3/4 lg:w-2/4 m-auto flex sm:justify-end justify-center">
          <div className="border-r-2 mr-2 pr-2">
            <button
              onClick={() =>
                (document.documentElement.scrollTop = 0) ||
                (document.body.scrollTop = 0)
              }
              type="button"
              className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="20"
                width="20"
              >
                <path
                  fill="currentColor"
                  d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="group flex relative">
            <button
              onClick={() => props.openModal()}
              type="button"
              className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
            >
              <LinkIcon />
            </button>
            <span className="whitespace-nowrap group-hover:opacity-100 transition-opacity bg-gray-800 px-6 py-1 font-mono text-lg text-white rounded-lg absolute left-1/2 -translate-x-1/2 -translate-y-16 opacity-0 m-4 mx-auto">
              Links & References
            </span>
          </div>
          <a href="https://www.linkedin.com/in/phajsihal/" target="_blank">
            <button
              type="button"
              className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
            >
              <LinkedInIcon />
            </button>
          </a>
          <a href="https://github.com/phajsi/burnout-spa" target="_blank">
            <button
              type="button"
              className="mx-2 border-2 mb-2 inline-block rounded-full p-3 text-xs font-medium  leading-normal text-white shadow-md "
            >
              <GitHubIcon />
            </button>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
