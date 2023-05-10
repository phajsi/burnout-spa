import { Fragment } from "react";
type Props = {
  openModal: () => void;
};
const Modal = (props: Props) => {
  return (
    <Fragment>
      {/*     <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden  sm:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative flex mx-auto w-full max-w-2xl max-h-full overflow-y-scroll bg-cyan-900 border-grey-100 border-2 rounded-md scrollbar scrollbar-thumb-cyan-950 scrollbar-track-gray-400">
          {/*   <!-- Modal content --> */}
          <div className="relative rounded-lg shadow ">
            {/*    <!-- Modal header --> */}
            <div className="sticky top-0 flex items-start justify-between p-4 border-b rounded-t border-gray-100 bg-cyan-900 shadow-md">
              <h3 className="text-xl font-semibold text-white">Lorem Ipsum</h3>
              <button
                type="button"
                className="text-gray-400 bg-cyan-950 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-cyan-800 hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => props.openModal()}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/*      <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-cyan-100">
                Lorem hehe
              </p>
              <p className="text-base leading-relaxed text-cyan-100">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
              <p className="text-base leading-relaxed text-cyan-100">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
              <p className="text-base leading-relaxed text-cyan-100">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
