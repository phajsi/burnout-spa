import { Fragment } from "react";
import ModalSesction from "./ModalSection";
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
        className="fixed top-0 left-0 right-0 z-50 m-4 p-4 overflow-x-hidden sm:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative flex mx-auto w-full max-w-2xl max-h-full overflow-y-scroll bg-cyan-950 border-grey-100 border-2 rounded-md">
          {/*   <!-- Modal content --> */}
          <div className="relative rounded-lg shadow ">
            {/*    <!-- Modal header --> */}
            <div className="sticky top-0 flex items-start justify-between p-4 border-b rounded-t border-gray-100 bg-cyan-950 shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Links & References
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-700 hover:text-white"
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
              <ModalSesction
                relates={
                  " On Freudenberg and the origins of burnout as a terminology "
                }
                link={
                  "https://www.researchgate.net/publication/346586006_Herbert_J_Freudenberger_and_the_making_of_burnout_as_a_psychopathological_syndrome"
                }
                title={
                  "Herbert J. Freudenberger and the making of burnout as a psychopathological syndrome"
                }
                author={"Fontes, Flavio"}
                year={"2020"}
              />
              <hr />
              <ModalSesction
                relates={"Burnout on WHO's ICD-11"}
                link={
                  "https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/129180281"
                }
                title={"ICD-11 for Mortality and Morbidity Statistics"}
                author={"ICD-11"}
                year={"2023"}
              />
              <hr />
              <p className="text-base leading-relaxed text-cyan-100">
                <b>Christina Maslach and Burnout</b>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=gRPBkCW0R5E"
                  target="_blank"
                  className="underline text-red-500"
                >
                  {" "}
                  TED Talk: Understanding Job Burnout by Dr. Christina Maslach
                </a>{" "}
                (2018) and Dr. Christina Maslach's{" "}
                <a
                  href="https://psychology.berkeley.edu/people/christina-maslach"
                  target="_blank"
                  className="underline text-red-500"
                >
                  page
                </a>{" "}
                at Berkeley
              </p>
              <hr />
              <ModalSesction
                relates={"On what Job Engagement is"}
                link={
                  "https://www.researchgate.net/publication/5396366_Early_Predictors_of_Job_Burnout_and_Engagement"
                }
                title={"Early Predictors of Job Burnout and Engagement"}
                author={"Maslach and Leiter"}
                year={"2008"}
              />
              <hr />
              <ModalSesction
                relates={
                  "On the Burnout Dimensions, Effects of Burnout, Areas of Worklife Scale and Personal Characteristics and Burnout"
                }
                link={
                  "https://onlinelibrary.wiley.com/doi/book/10.1002/9781118993811"
                }
                title={
                  "Understanding Burnout (CH. 3) on The Handbook of Stress and Health"
                }
                author={"Maslach and Leiter"}
                year={"2017"}
              />
              <hr />

              <ModalSesction
                relates={"On the effects of Job Engagement"}
                link={
                  "https://www.oreilly.com/library/view/accelerate/9781457191435/"
                }
                title={"Accelerate (Chapter 10)"}
                author={"Forsgren et al."}
                year={"2018"}
              />
              <hr />
              <ModalSesction
                relates={"On Job Demands in Tech"}
                link={
                  "https://www.oreilly.com/library/view/accelerate/9781457191435/"
                }
                title={"Accelerate"}
                author={"Forsgren et al."}
                year={"2018"}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
