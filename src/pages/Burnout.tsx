import React, { Fragment, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  FreudenbergSVG,
  ExhaustionColSVG,
  CynicismColSVG,
  InefficacyColSVG,
  BurnoutLogoSVG,
  FreudenbergCol1SVG,
  ControlSVG,
  PhisycalHealthSVG,
  MentalHealthSVG,
  LifestyleSVG,
  RewardSVG,
  CommunitySVG,
  FairnessSVG,
  ValuesSVG,
  WorkloadSVG,
  WorkSVG,
  EngagedSVG,
  MaslachColSVG,
  MaslachSVG,
  BurnoutDimensionsSVG,
} from "../assets/";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import JobPersonSVG from "../assets/JobPersonSVG";
import AwsSVG from "../assets/AwsSVG";

const styles = {
  center:
    " absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
  bold: "text-neutral-200",
  icon_text_responsivity: "sm:flex my-24 items-center sm:my-12",
};

const Burnout = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <div className="h-screen">
      {open && <Modal openModal={() => setOpen(false)} />}
      <header className="flex h-screen relative justify-center ">
        <Parallax speed={2}>
          <div className={"z-10 bg-cyan-800 h-32 w-80" + `${styles.center}`} />
        </Parallax>
        <Parallax speed={30}>
          {/*  Add svg element inside div */}
          <div className={"z-0 translate-y-48" + `${styles.center}`}>
            <BurnoutLogoSVG />
          </div>
        </Parallax>
        <Parallax speed={-10}>
          <h1
            id="intro"
            className={
              "text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline z-20" +
              `${styles.center}`
            }
          >
            Burnout in Tech
          </h1>
        </Parallax>
      </header>
      {/* INTRO */}
      <Parallax speed={-4}>
        <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
          <p>
            In the 1960s and 1970s, a movement originated in the US to provide
            free medical treatment to individuals with no health insurance, the
            Free Clinic Movement.
          </p>
          <br />
          <p>
            These clinics were run by volunteers, a mix of nurses, doctors, and
            students, who worked after their regular workday ended. Due to the
            prevalence of drug-related issues during that time, the clinics
            often treated drug related illnesses, and at the time, the term
            "burnout" was used to describe the physical effects of chronic drug
            use.
          </p>
        </div>
      </Parallax>
      {/* Freudenberg cool effect */}
      <div className="w-52 h-72 m-12 mx-auto">
        <div className="relative flex justify-center">
          <Parallax speed={12}>
            <div className={`${styles.center}` + " -z-10 mt-10"}>
              <FreudenbergCol1SVG />
            </div>
          </Parallax>
          <Parallax speed={8}>
            <div className={`${styles.center}` + " z-10"}>
              <FreudenbergSVG />
            </div>
          </Parallax>
        </div>
      </div>
      <div className="mx-auto text-cyan-100 my-4 mb-12 w-3/4 md:w-2/4 place-items-center">
        <p>
          A psychologist named Herbert Freudenberg, who worked in these clinics,
          observed that the workers were becoming depressed, apathetic, and
          agitated, leading to the popularization of the term{" "}
          <cite>burnout syndrome</cite> within the community of workers involved
          in the movement. Freudenberg later wrote several academic papers on
          this phenomenon.
        </p>
      </div>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <p>
          {" "}
          <b className={`${styles.bold}`}>
            Hi there! You might have come across this page because you have
            personally experienced burnout, are uncertain if how you’re feeling
            constitutes burnout or want to help someone that is suffering from
            burnout. You might even want to learn how to best prevent it.
          </b>
        </p>

        <br />
        <p>
          I’ll do my best to share what I have discovered in my research, and
          hopefully you’ll understand burnout a little bit better 😊
        </p>
        <br />
      </div>
      {/* Navigation */}
      <div className="hidden md:fixed md:flex md:items-center md:right-0 md:my-auto md:inset-y-0 md:w-fit md:max-h-max md:h-fit md:py-4 md:px-10">
        <ul className="text-neutral-200 font-normal md:leading-10 text-sm md:text-base ml-auto">
          <li className="group flex items-center justify-end h-10 ">
            <a
              href="#intro"
              className="mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity top"
            >
              Intro
            </a>
            <svg
              width="7"
              height="3"
              viewBox="0 0 7 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1.5H1.5"
                stroke="#ECFEFF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="group flex items-center justify-end h-10 ">
            <a
              href="#first_header"
              className="mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity top"
            >
              What is Burnout?
            </a>
            <svg
              width="7"
              height="3"
              viewBox="0 0 7 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1.5H1.5"
                stroke="#ECFEFF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="group flex items-center justify-end h-10 ">
            <a
              href="#second_header"
              className="mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity"
            >
              Areas Of Worklife Scale
            </a>
            <svg
              width="7"
              height="3"
              viewBox="0 0 7 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1.5H1.5"
                stroke="#ECFEFF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="group flex items-center justify-end h-10 ">
            <a
              href="#third_header"
              className="mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity"
            >
              Personal Characteristics
            </a>
            <svg
              width="7"
              height="3"
              viewBox="0 0 7 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1.5H1.5"
                stroke="#ECFEFF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="group flex items-center justify-end h-10 ">
            <a
              href="#first_header"
              className="mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity"
            >
              Job Demands In Tech
            </a>
            <svg
              width="7"
              height="3"
              viewBox="0 0 7 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 1.5H1.5"
                stroke="#ECFEFF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
        </ul>
      </div>
      {/* Part 1: WHAT IS BURNOUT */}
      <Parallax speed={-2}>
        <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit">
          <h2 id="first_header"> What is Burnout? </h2>
        </div>
      </Parallax>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <p>
          Only recently has the World Health Organisation, WHO, added burnout to
          it’s characterisation system for illnesses, the ICD-11, in 2019. The
          WHO defines burnout as
          <blockquote className="p-4 my-4 border-l-4 border-gray-500 bg-cyan-800">
            <p className="text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200">
              a syndrome resulting from chronic workplace stress that has not
              been successfully managed
            </p>
          </blockquote>
        </p>

        <div className="w-52 h-72 m-12 mx-auto">
          <div className="relative flex justify-center">
            <Parallax speed={10}>
              <div className={`${styles.center}` + " -z-10 mt-12"}>
                <MaslachColSVG />
              </div>
            </Parallax>
            <Parallax speed={7}>
              <div className={`${styles.center}` + " z-10"}>
                <MaslachSVG />
              </div>
            </Parallax>
          </div>
        </div>

        <p>
          One cannot talk about burnout without mentioning Christina Maslach,
          the pioneer researcher who has devoted her life to researching
          occupational burnout since the 70’s. The basis of her work laid the
          foundation for the WHO’s recognition of burnout as a workplace
          syndrome. Maslach defines burnout as
          <blockquote className="p-4 my-4 border-l-4 border-gray-500 bg-cyan-800">
            <p className="text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200">
              a psychological syndrome that involves a prolonged response to
              chronic situational stressors on the job
            </p>
          </blockquote>{" "}
          Her work led to the identification of the following three burnout
          dimensions:
        </p>

        <div className="w-fit m-auto my-8">
          <BurnoutDimensionsSVG />
        </div>

        <p>
          One important point that arises from the definitions of burnout is
          that it only manifests in the workplace setting, highlighting the role
          of employers and organizations as essential factors in its
          development. Burnout being the consequence of a malfunctioning system.
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
          <blockquote className="p-4 my-4 border-l-4 border-gray-500 bg-cyan-800">
            <p className="text-base sm:text-xl italic font-medium leading-relaxed text-neutral-200">
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
      {/*  Part 1.1 - DIMENSIONS */}
      <Parallax speed={-2}>
        <div className="my-12 mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
          <h3 id="first_header_sub_1">Burnout Dimensions </h3>
        </div>
      </Parallax>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <p>
          Many associate burnout with the feeling of being exhausted, not having
          the energy to accomplish basic tasks. But exhaustion is but one of the
          facets of burnout.
        </p>

        <Parallax speed={8}>
          <div className={`${styles.icon_text_responsivity}`}>
            <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
              <ExhaustionColSVG />
              <h4 className="bg-sky-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
                Exhaustion
              </h4>
            </div>
            <p>
              Exhaustion represents the individual dimension of burnout. It
              relates to the feeling of being stressed at work, and of being
              overextended and depleted of emotional, mental and physical
              resources.
              <div className="border-2 rounded-md p-2 my-2 border-sky-800 bg-[#397A9D]">
                Typical signs of exhaustion are not being able to think
                straight, feeling fed up with work and just wanting to go home.
              </div>
            </p>
          </div>
        </Parallax>

        <Parallax speed={6}>
          <div className={`${styles.icon_text_responsivity}`}>
            <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
              <CynicismColSVG />
              <h4 className="bg-red-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
                Cynicism
              </h4>
            </div>
            <p>
              The component of cynicism or depersonalisation represents the
              interpersonal dimension of burnout. It involves detachment from
              various aspects of the job, often resulting in a negative or
              apathetic attitude.{" "}
              <div className="border-2 rounded-md p-2 my-2 border-red-800 bg-[#AD4949]">
                Typical feelings of cynicism are negativity or hostility towards
                the work and coworkers, only doing the bare minimum. Not seeing
                the value in the work anymore.
              </div>
            </p>
          </div>
        </Parallax>
        <Parallax speed={4}>
          <div className={`${styles.icon_text_responsivity}`}>
            <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
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
                Typical feelings of inefficacy are feeling that there's no
                future, feeling stuck.{" "}
              </div>
            </p>
          </div>
        </Parallax>
      </div>
      {/* Part 1.2 - CONSEQUENCES */}
      <Parallax speed={-2}>
        <div className="my-12 mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
          <h3 id="first_header_sub_2">Why is Burnout Bad? </h3>
        </div>
      </Parallax>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Burnout acts as a mediator of both work and personal health outcomes.
      </p>
      <h4 className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-xl">
        Health
      </h4>
      <p className="mx-auto text-cyan-100 mb-4 w-3/4 md:w-2/4 place-items-center">
        The exhaustion dimension of burnout, being the closest related to stress
        is also the one most predictive of stress-related health outcomes.
        Exhaustion has been found to correlate with stress symptoms like{" "}
        <b className={`${styles.bold}`}>headaches</b>,{" "}
        <b className={`${styles.bold}`}>chronic fatigue</b>,{" "}
        <b className={`${styles.bold}`}>gastrointestinal disorders</b>,{" "}
        <b className={`${styles.bold}`}>muscle tension</b>,{" "}
        <b className={`${styles.bold}`}>hypertension</b>,{" "}
        <b className={`${styles.bold}`}>cold/flu episodes</b> and{" "}
        <b className={`${styles.bold}`}>changes in sleep patterns</b>. Workload
        and exhaustion has also been found to correlate with{" "}
        <b className={`${styles.bold}`}>incidences of workplace injuries</b>,
        and burnout has been linked to unhealthy lifestyles like{" "}
        <b className={`${styles.bold}`}>smoking, alcohol and drug use</b>.{" "}
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Mental health wise, burnout has been found to be predictive of{" "}
        <b className={`${styles.bold}`}>depression and anxiety</b>. A Finnish
        study on burnout found that 90 percent of the those with severe burnout
        reported having physical or mental diseases like{" "}
        <b className={`${styles.bold}`}>
          {" "}
          musculoskeletal pain and depression{" "}
        </b>
        as the most common problems. Other research has also found burnout
        predictive of the emergence of{" "}
        <b className={`${styles.bold}`}>
          cardiovascular problems, type 2 diabetes
        </b>{" "}
        and a links between burnout and{" "}
        <b className={`${styles.bold}`}>inflammation biomarkers</b>.
      </p>
      <Parallax speed={10}>
        <div className="mx-2 sm:mx-auto mt-12 sm:w-3/4 md:w-2/4 flex justify-between">
          <div className="group">
            <LifestyleSVG />
            <ul className="group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-red-950 rounded-md bg-[#6A3B3B] p-2 sm:text-sm text-xs whitespace-nowrap">
              <li>- smoking</li>
              <li>- alcohol use</li>
              <li>- drug use</li>
            </ul>
          </div>

          <div className="group">
            <div className="">
              <MentalHealthSVG />
            </div>
            <ul className="group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-orange-950 rounded-md bg-[#694339] p-2 sm:text-sm text-xs whitespace-nowrap">
              <li>- depression</li>
              <li>- anxiety</li>
            </ul>
          </div>

          <div className="group">
            <div className="sm:mx-12">
              <PhisycalHealthSVG />{" "}
            </div>
            <ul className="w-fit mx-auto group-hover:opacity-100 opacity-0 transition-all active:opacity-100 mt-4 text-cyan-100 border-2 border-pink-950 rounded-md bg-[#733950] p-2 sm:text-sm text-xs whitespace-nowrap">
              <li>- headaches</li>
              <li>- chronic fatigue</li>
              <li>- gastrointestinal issues</li>
              <li>- muscle tension</li>
              <li>- hypertension</li>
              <li>- cold/flu episodes</li>
              <li>- sleep changes</li>
              <li>- workplace injuries</li>
              <li>- musculoskeletal pain</li>
              <li>- cardiovascular problems</li>
              <li>- type 2 diabetes</li>
              <li>- inflammation biomarkers</li>
            </ul>
          </div>
        </div>
      </Parallax>
      <h4 className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-xl">
        Work
      </h4>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Burnout is associated with several forms of negative responses to work,
        including{" "}
        <b className={`${styles.bold}`}>
          job dissatisfaction, low commitment to the organization, absenteeism,
          intention to quit the job, and employee turnover
        </b>
        . Those experiencing burnout can also have a{" "}
        <b className={`${styles.bold}`}>
          negative impact on their colleagues by causing personal conflicts or
          disrupting job tasks
        </b>
        . <b className={`${styles.bold}`}>Poor job performance </b>is one of the
        most significant consequences of burnout in the workplace, which could
        have severe consequences in certain professions, even leading to fatal
        outcomes.{" "}
      </p>
      <Parallax speed={10}>
        <div className="w-fit mx-auto my-4 group align-center">
          <div className="w-fit mx-auto">
            <WorkSVG />
          </div>
          <ul className="group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-orange-950 rounded-md bg-[#684D38] p-2 sm:text-sm text-xs whitespace-nowrap">
            <li>- job dissatisfaction</li>
            <li>- low commitment</li>
            <li>- absenteeism</li>
            <li>- intention to quit</li>
            <li>- employee turnover</li>
            <li>- causing conflicts</li>
            <li>- disrupting job tasks</li>
            <li>- poor job performance</li>
          </ul>
        </div>
      </Parallax>
      <Parallax speed={-2}>
        <div className="my-12 mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
          <h3 id="first_header_sub_3">Job Engagement</h3>
        </div>
      </Parallax>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        It is important to note that employee engagement, the opposite of
        burnout, is incredibly powerful and important for organisations
        thriving.
      </p>
      <div className="w-fit mx-auto my-4">
        <EngagedSVG />{" "}
      </div>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Research into high performing organisations in software development has
        shown that employee engagement and satisfaction are indicative of
        employee loyalty and identity, they can help reduce the likelihood of
        burnout while driving key organizational outcomes such as profitability,
        productivity, and market share. In fact, employees in high-performing
        teams were twice as likely to recommend their organization to a friend
        as a great place to work.
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Moreover, employee engagement doesn't just benefit the workers; it can
        drive business outcomes as well. Research has found significant
        correlations between engagement and how well organizations collect and
        utilize customer feedback, as well as the ability of teams to visualize
        and understand the development process from start to finish. Engagement
        is also linked to how much employees align with their workplace's values
        and goals, and how much effort they're willing to put in to ensure the
        organization's success.
      </p>
      {/* Part 2 - AREAS OF WORKLIFE BALANCE */}
      <Parallax speed={0}>
        <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit">
          <h2 id="second_header"> Areas of Worklife Scale </h2>
        </div>
      </Parallax>
      <Parallax speed={4}>
        <div className="w-fit m-auto my-8">
          <AwsSVG />
        </div>
      </Parallax>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Maslach's research resulted in the identification of six key domains in
        worklife, as situational predictors of burnout. The key idea is that
        finding a good fit between the person and their job is essential. This
        model identifies areas of work that can impact a person's job
        satisfaction and engagement, or lead to burnout.
      </p>
      {/* WORKLOAD */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <WorkloadSVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Workload
            </h4>
          </div>
          <p>
            Having too much to do in too little time and with limited resources
            can lead to{" "}
            <span className="bg-sky-800 p-1 rounded-md leading-8">
              exhaustion.
            </span>{" "}
            It's not just the amount of work that matters, but also the quality
            of the work. Doing work that is outside the scope of one's job can
            be particularly draining. Work overload can deplete a person's
            energy, but with the chance to recover, the energy can be recharged
            keeping exhaustion at bay, without time to recover the exhaustion
            continues.
            {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
          Typical feelings of inefficacy are feeling that there's no future,
          feeling stuck.{" "}
        </div> */}
          </p>
        </div>
      </div>
      {/* CONTROL */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <ControlSVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Control
            </h4>
          </div>
          <div>
            <p>
              It is vital for job satisfaction and commitment that workers have
              the ability to influence decisions on how they perform their
              tasks, exercise professional autonomy, and access necessary
              resources to do their job effectively. Problematic aspects of job
              control arises when there is role conflict and role ambiguity.
            </p>
            <br />
            <p>
              In situations when workload increases, having greater clarity on
              what is expected, more control and access to resources on how to
              carry out tasks, can help balance out the increasing job demands
              and prevent exhaustion.
            </p>
          </div>
        </div>
      </div>
      {/* REWARD */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <RewardSVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Reward
            </h4>
          </div>
          <p>
            It is important to feel that the rewards we receive, whether they
            are monetary, social, or intrinsic, match our expectations. Research
            has found that inadequate rewards can make people more susceptible
            to burnout. Lack of recognition from those around us are associated
            with feelings of{" "}
            <span className="bg-amber-800 p-1 rounded-md leading-8">
              inefficacy
            </span>
            , and if we feel neglected by the organization's reward system, we
            may feel disconnected with it’s values. On the other hand,
            acknowledging and rewarding good work has been identified as a
            direct, effective and inexpensive way to prevent burnout and
            increase engagement.
          </p>
        </div>
      </div>
      {/* COMMUNITY */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <CommunitySVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Community
            </h4>
          </div>
          <div>
            <p>
              The social interactions in the workplace, conflicts, mutual
              support, closeness and teamwork, all affect the social aspect of
              work.
              <br />
              Two types of support at work have been identified: informal
              support from coworkers, which is closely related to feelings of
              efficacy, and supervisor support, which is linked to{" "}
              <span className="bg-sky-800 p-1 rounded-md leading-8">
                {" "}
                exhaustion
              </span>
              , reflecting the impact that supervisors have on workload. Social
              support in general is associated with higher engagement.
            </p>
            <br />
            <p>
              In addition, a sense of community in the workplace is important as
              well, as it has been found to alleviate feelings of inequality.
              Conversely, if workplace relationships become toxic, burnout is
              likely to occur.
            </p>
          </div>
        </div>
      </div>
      {/* FAIRNESS */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <FairnessSVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Fairness
            </h4>
          </div>
          <p>
            Fairness shares qualities with community and reward. The extent to
            which the workplaces decisions are perceived as fair and equitable
            are important. Research has shown that people are more concerned
            with the fairness of the process, when decisions are made. The
            experience of injustice is strongly associated with the{" "}
            <span className="bg-sky-800 p-1 rounded-md leading-8">
              exhaustion
            </span>{" "}
            and{" "}
            <span className="bg-red-800 p-1 rounded-md leading-8">
              cynicism
            </span>{" "}
            dimensions, and those who experience it feel alienated from the
            community. On the contrary, for decisions to be fair people need to
            present their arguments and be treated with respect and politeness.
          </p>
        </div>
      </div>
      {/* VALUES */}
      <div className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        <div className={`${styles.icon_text_responsivity}`}>
          <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
            <ValuesSVG />
            <h4 className="bg-teal-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
              Values
            </h4>
          </div>
          <div>
            <p>
              Values are the ideals and motivation between people and their
              workplace. Value conflicts can be making a trade-off between work
              you want to do, and the actual work; it can be having to do things
              on the job that don’t go with their own values or being caught
              between conflicting values in a workplace.
            </p>
            <br />
            <p>
              Research has found that value conflicts and work overload are the
              two most relevant factors for employees experience of burnout.
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        While it may be difficult to get all worklife dimensions in perfect
        shape, it is neither necessary. These areas should be considered entry
        points for creating a better workplace. The organization can still be a
        good place to work even if it does not excel in all aspects. However, to
        prevent burnout, certain dimensions must be strong and well functioning.{" "}
      </p>
      <Parallax speed={0}>
        <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit text-center">
          <h2 id="third_header"> Personal Characteristics</h2>
        </div>
      </Parallax>
      <div className="w-fit m-auto mb-8">
        <JobPersonSVG />
      </div>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        We have established that the work environment plays an important role in
        the development of burnout. However, certain personal characteristics
        have also been found to correlate with burnout.
      </p>{" "}
      <br />{" "}
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        {" "}
        <b className={"$´styles.bold´"}>Age</b> is one of those variables, as
        younger employees tend to have higher rates of burnout compared to those
        over 30 or 40 years old. Gender has not been identified as a strong
        predictor of burnout, but males tend to score slightly higher on
        cynicism, while females tend to score higher on exhaustion. In terms of{" "}
        <b className={"$´styles.bold´"}>personality traits</b>, individuals with
        Type A behavior (competitive, impatient and aggressive) tend to have
        higher rates of burnout, and people high on neuroticism, which is a
        trait from the Big Five personality dimensions, has also been closely
        linked to burnout. A person's{" "}
        <b className={"$´styles.bold´"}> home life </b> is also important in
        their susceptibility to burnout. As those experiencing stress in their
        personal life are more vulnerable to developing burnout.
      </p>
      <Parallax speed={0}>
        <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit">
          <h2 id="fourth_header"> Job demands in tech</h2>
        </div>
      </Parallax>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Nicole Forsgren, Jez Humble, and Gene Kim, Kim is known for authoring
        The Phoenix Project, conducted a study on over 2000 organizations
        worldwide to identify the practices that result in high-performing tech
        organizations. The results of their research is compiled into the book
        Accelerate, which highlights the impact of Lean Software and DevOps on
        tech organizations.
      </p>
      <div className="my-12 mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
        <h3 id="fourth_header_sub_1">Lean Management Practices </h3>
      </div>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        According to the authors, Lean management practices have a strong
        positive influence on software delivery performance and team culture,
        while also reducing burnout and promoting a more generative culture.
        Practices such as{" "}
        <b>
          limiting Work In Process, implementing visual management, providing
          feedback from production, and implementing lightweight change approval
          processes{" "}
        </b>{" "}
        were found to contribute to these positive outcomes.
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        The core principles of Lean management involve granting employees the
        necessary time and resources to improve their work and creating an
        environment that supports experimentation, failure and learning, and
        which allows employees to make decisions that impact their jobs.
      </p>
      <div className="my-12 mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize text-2xl">
        <h3 id="fourth_header_sub_1">Making work sustainable </h3>
      </div>
      <h3
        id="fourth_header_sub_1"
        className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize"
      >
        Organizational culture
      </h3>
      <br />
      <p className="mx-auto text-cyan-100 mb-4 w-3/4 md:w-2/4 place-items-center">
        Organizational culture was found to predict software delivery
        performance and organizational performance. A power oriented culture,
        characterized by low cooperation, nontransparence and blaming have
        employees with strong feelings of burnout. Managers can counteract by
        creating a blame free environment, learn from failures and communicating
        shared sense of purpose, in that way transforming the culture into a
        generative one.
      </p>
      <h3
        id="fourth_header_sub_1"
        className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize"
      >
        Deployments
      </h3>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        A high correlation was found between deployment pain, which contributes
        to feelings of stress and lack of control, and poor IT performance,
        organizational performance and organizational culture. Systems should be
        designed to be deployed easily, be able to detect and tolerate failure
        and have loosely coupled architectures, so that it’s components can be
        updated easily. They should also be able to automatically reproduce the
        state of production systems from information in version control.
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        A 2020 survey of more than 500 software developers in North America
        examining the state of Big Code, which refers to the dramatic growth in
        the volume and complexity of code, found that 88% of teams admitted that
        evry release caused some anxiety. When asked about the emotions that
        code releases make them feel, there was a 50/50 response of satisfaction
        vs fear or anxiety.
      </p>
      <h3
        id="fourth_header_sub_1"
        className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize"
      >
        Leaders
      </h3>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Lower levels of burnout were reported by teams with effective leadrs.
        Leaders who limit work in process and eliminate roadblocks for the team.
      </p>
      <h3
        id="fourth_header_sub_1"
        className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize"
      >
        DevOps
      </h3>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Lorem
      </p>{" "}
      <h3
        id="fourth_header_sub_1"
        className="mx-auto w-3/4 md:w-2/4 text-neutral-200 font-bold capitalize"
      >
        Organizational performance
      </h3>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 md:w-2/4 place-items-center">
        Lorem
      </p>
      <Footer openModal={() => setOpen(true)} />
    </div>
  );
};
export default Burnout;
