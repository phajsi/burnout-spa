import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  FreudenbergSVG,
  ExhaustionColSVG,
  CynicismColSVG,
  InefficacyColSVG,
  BurnoutLogoSVG,
  GitHubIcon,
  LinkedInIcon,
  LinkIcon,
} from "../assets/";
import FreudenbergCol1SVG from "../assets/FreudenbergCol1SVG";

const styles = {
  centerCSS:
    " absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
};

const Burnout = () => (
  <div className="">
    <header className="flex h-screen relative justify-center ">
      <Parallax speed={2}>
        <div className={"z-10 bg-cyan-900 h-32 w-80" + `${styles.centerCSS}`} />
      </Parallax>
      <Parallax speed={30}>
        {/*  Add svg element inside div */}
        <div className={"z-0 translate-y-48" + `${styles.centerCSS}`}>
          <BurnoutLogoSVG />
        </div>
      </Parallax>
      <Parallax speed={-10}>
        <h1
          className={
            "text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline z-20" +
            `${styles.centerCSS}`
          }
        >
          Burnout in Tech
        </h1>
      </Parallax>
    </header>

    <Parallax speed={-4}>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        <p>
          In the 1960s and 1970s, a movement originated in the US to provide
          free medical treatment to individuals with no health insurance, the
          Free Clinic Movement.
        </p>
        <br />
        <p>
          These clinics were run by volunteers, a mix of nurses, doctors, and
          students, who worked after their regular workday ended. Due to the
          prevalence of drug-related issues during that time, the clinics often
          treated drug related illnesses, and at the time, the term "burnout"
          was used to describe the physical effects of chronic drug use.
        </p>
      </div>
    </Parallax>
    {/* Freudenberg cool effect */}
    <div className="w-52 h-72 m-12 mx-auto">
      <div className="relative flex justify-center">
        <Parallax speed={12}>
          <div className={`${styles.centerCSS}` + " -z-10 mt-10"}>
            <FreudenbergCol1SVG />
          </div>
        </Parallax>
        <Parallax speed={8}>
          <div className={`${styles.centerCSS}` + " z-10"}>
            <FreudenbergSVG />
          </div>
        </Parallax>
      </div>
    </div>
    <Parallax speed={-4}>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        <p>
          A psychologist named Herbert Freudenberg, who worked in these clinics,
          observed that the workers were becoming depressed, apathetic, and
          agitated, leading to the popularization of the term{" "}
          <cite>burnout syndrome</cite> within the community of workers involved
          in the movement. Freudenberg later wrote several academic papers on
          this phenomenon.
        </p>
        <br />
        <p>
          Hi there! You might have come across this page because you personally
          experienced burnout, are uncertain if how you’re feeling constitutes
          burnout or want to help someone that is suffering from burnout. You
          might even want to learn how to best prevent it.
        </p>
        <br />
        <p>
          I’ll do my best to share what I have discovered in my research, and
          hopefully you’ll understand burnout a little bit better 😊
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h2> What is Burnout? </h2>
      </div>
    </Parallax>
    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        <p>
          Only recently has the World Health Organisation, WHO, added burnout to
          it’s characterisation system for illnesses, the ICD-11, in 2019. The
          WHO defines burnout as:
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-cyan-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-neutral-200">
              a syndrome resulting from chronic workplace stress that has not
              been successfully managed
            </p>
          </blockquote>
        </p>
        <p>
          One cannot talk about burnout without mentioning Christina Maslach, a
          pioneer researcher who has devoted her life to researching
          occupational burnout since the 70’s. The basis of her work laid the
          foundation for the WHO’s recognition of burnout as a workplace
          syndrome. Maslach defines burnout as:
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-cyan-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-neutral-200">
              a psychological syndrome that involves a prolonged response to
              chronic situational stressors on the job
            </p>
          </blockquote>{" "}
          Her work led to the identification of three burnout dimensions:{" "}
          <span className="bg-teal-800 p-2 rounded-md leading-10">
            Exhaustion
          </span>
          ,{" "}
          <span className="bg-red-800 p-2 rounded-md leading-10">Cynicism</span>{" "}
          and{" "}
          <span className="bg-amber-800 p-2 rounded-md leading-10">
            Inefficacy
          </span>
          .
        </p>
        <p>
          An important aspect can be taken from these definitions: that burnout
          only occurs in the context of employment within an organisation. This
          is important because it highlights the role of employers and
          workplaces as necessary factors for burnout. Burnout being a
          consequence of a malfunctioning system.
        </p>
        <br />
        <p>
          Going through stressful periods at work, like working extra to meet a
          deadline, is unavoidable at times. However, burnout arises when this
          stress becomes a constant. It follows that to avoid burnout and help
          burnt out people, not only the individuals must be helped, but the
          workplace as well.
        </p>

        <br />
        <p>
          To not only focus on the negative, it is interesting to note that job
          engagement, defined as
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-cyan-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-neutral-200">
              an energetic state of involvement with personally fulfilling
              activities that enhance one's sense of professional efficacy
            </p>
          </blockquote>
          is considered as being the opposite state of burnout. Having
          engagement as a desired outcome in the workplace in the back of our
          minds, helps us think about the factors in the workplace that we
          should strive for, and that gives us energy and enjoyment.
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-12 mx-auto w-3/4 lg:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
        <h3>Burnout Dimensions </h3>
      </div>
    </Parallax>

    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <p>
        Many associate burnout with the feeling of being exhausted, not having
        the energy to accomplish basic tasks. But exhaustion is but one of the
        facets of burnout.
      </p>
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <ExhaustionColSVG />
          <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Exhaustion
          </h4>
        </div>
        <p>
          Exhaustion represents the individual dimension of burnout. It relates
          to the feeling of being stressed at work, and of being overextended
          and depleted of emotional, mental and physical resources.
          <div className="border-2 rounded-md p-2 my-2 border-teal-800 bg-[#417E7A]">
            Typical signs of exhaustion are not being able to think straight,
            feeling fed up with work and just wanting to go home.
          </div>
        </p>
      </div>

      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <CynicismColSVG />
          <h4 className="bg-red-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Cynicism
          </h4>
        </div>
        <p>
          The component of cynicism or depersonalisation represents the
          interpersonal dimension of burnout. It involves detachment from
          various aspects of the job, often resulting in a negative or apathetic
          attitude.{" "}
          <div className="border-2 rounded-md p-2 my-2 border-red-800 bg-[#AD4949]">
            Typical feelings of cynicism are negativity or hostility towards the
            work and coworkers, only doing the bare minimum. Not seeing the
            value in the work anymore.
          </div>
        </p>
      </div>
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <InefficacyColSVG />
          <h4 className="bg-amber-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Inefficacy
          </h4>
        </div>
        <p>
          The inefficacy component of burnout represents the self-evaluation
          dimension. It refers to feelings of incompetence and a lack of
          achievement and productivity in one’s work. It can also exacerbate
          feelings of Imposter Syndrome.
          <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div>
        </p>
      </div>
    </div>

    <Parallax speed={-2}>
      <div className="my-12 mx-auto w-3/4 lg:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
        <h3>Why is Burnout Bad? </h3>
      </div>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Burnout acts as a mediator of both work and personal health outcomes.
      </p>
      <h4 className="mx-auto w-3/4 lg:w-2/4 text-neutral-200 font-bold capitalize text-xl">
        Health
      </h4>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        The exhaustion dimension of burnout, being the closest related to stress
        is also the one most predictive of stress-related health outcomes.
        Exhaustion has been found to correlate with stress symptoms like{" "}
        <b className="text-lg">headaches</b>,{" "}
        <b className="text-lg">chronic fatigue</b>,{" "}
        <b className="text-lg">gastrointestinal disorders</b>,{" "}
        <b className="text-lg">muscle tension</b>,{" "}
        <b className="text-lg">hypertension</b>,{" "}
        <b className="text-lg">cold/flu episodes</b> and{" "}
        <b className="text-lg">changes in sleep patterns</b>. Workload and
        exhaustion has also been found to correlate with{" "}
        <b className="text-lg">incidences of workplace injuries</b>, and burnout
        has been linked to unhealthy lifestyles like{" "}
        <b className="text-lg">smoking, alcohol and drug use</b>.{" "}
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Mental health wise, burnout has been found to be predictive of{" "}
        <b className="text-lg">depression and anxiety</b>. For example, a
        Finnish study on burnout found that 90 percent of the those with severe
        burnout reported having physical or mental diseases like musculoskeletal
        pain and depression as the most common problems. Other research has also
        found burnout predictive of the emergence of{" "}
        <b className="text-lg">cardiovascular problems, type 2 diabetes</b> and
        a links between burnout and{" "}
        <b className="text-lg">inflammation biomarkers</b>.
      </p>
      <h4 className="mx-auto w-3/4 lg:w-2/4 text-neutral-200 font-bold capitalize text-xl">
        Work
      </h4>
      <p className="mx-auto text-cyan-100 my-4 mb-40 w-3/4 lg:w-2/4 place-items-center"></p>
    </Parallax>
    <footer className="w-full p-4 bg-slate-950 ">
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
  </div>
);

export default Burnout;
