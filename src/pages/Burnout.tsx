import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  FreudenbergSVG,
  ExhaustionColSVG,
  CynicismColSVG,
  InefficacyColSVG,
  BurnoutLogoSVG,
} from "../assets/";
import FreudenbergCol1SVG from "../assets/FreudenbergCol1SVG";
import Footer from "../components/Footer";
import ControlSVG from "../assets/ControlSVG";
import RewardSVG from "../assets/RewardSVG";
import CommunitySVG from "../assets/CommunitySVG";
import FairnessSVG from "../assets/FairnessSVG";
import ValuesSVG from "../assets/ValuesSVG";
import WorkloadSVG from "../assets/WorkloadSVG";

const styles = {
  center:
    " absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
  bold: "text-neutral-200 text-lg",
};

const Burnout = () => (
  <div className="">
    <header className="flex h-screen relative justify-center ">
      <Parallax speed={2}>
        <div className={"z-10 bg-cyan-900 h-32 w-80" + `${styles.center}`} />
      </Parallax>
      <Parallax speed={30}>
        {/*  Add svg element inside div */}
        <div className={"z-0 translate-y-48" + `${styles.center}`}>
          <BurnoutLogoSVG />
        </div>
      </Parallax>
      <Parallax speed={-10}>
        <h1
          className={
            "text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline z-20" +
            `${styles.center}`
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
          <span className="bg-sky-800 p-2 rounded-md leading-10">
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
          <h4 className="bg-sky-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Exhaustion
          </h4>
        </div>
        <p>
          Exhaustion represents the individual dimension of burnout. It relates
          to the feeling of being stressed at work, and of being overextended
          and depleted of emotional, mental and physical resources.
          <div className="border-2 rounded-md p-2 my-2 border-sky-800 bg-[#397A9D]">
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
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Mental health wise, burnout has been found to be predictive of{" "}
        <b className={`${styles.bold}`}>depression and anxiety</b>. For example,
        a Finnish study on burnout found that 90 percent of the those with
        severe burnout reported having physical or mental diseases like
        musculoskeletal pain and depression as the most common problems. Other
        research has also found burnout predictive of the emergence of{" "}
        <b className={`${styles.bold}`}>
          cardiovascular problems, type 2 diabetes
        </b>{" "}
        and a links between burnout and{" "}
        <b className={`${styles.bold}`}>inflammation biomarkers</b>.
      </p>
      <h4 className="mx-auto w-3/4 lg:w-2/4 text-neutral-200 font-bold capitalize text-xl">
        Work
      </h4>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Burnout is linked to various adverse reactions to work, including job
        dissatisfaction, low commitment to the organization, absenteeism,
        intention to quit the job, and employee turnover. Those experiencing
        burnout can also have a negative impact on their colleagues by causing
        personal conflicts or disrupting job tasks. Poor job performance is one
        of the most significant consequences of burnout in the workplace, which
        could have severe consequences in certain professions, even leading to
        fatal outcomes.{" "}
      </p>{" "}
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        It is important to note that employee engagement, the opposite of
        burnout, is incredibly powerful and important for organisations
        thriving.
      </p>{" "}
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Research into high performing organisations in software development has
        shown that employee engagement and satisfaction are indicative of
        employee loyalty and identity, they can help reduce the likelihood of
        burnout while driving key organizational outcomes such as profitability,
        productivity, and market share. In fact, employees in high-performing
        teams were twice as likely to recommend their organization to a friend
        as a great place to work.
      </p>
      <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
        Moreover, employee engagement doesn't just benefit the workers; it can
        drive business outcomes as well. Research has found significant
        correlations between engagement and how well organizations collect and
        utilize customer feedback, as well as the ability of teams to visualize
        and understand the development process from start to finish. Engagement
        is also linked to how much employees align with their workplace's values
        and goals, and how much effort they're willing to put in to ensure the
        organization's success.
      </p>
    </Parallax>
    <Parallax speed={0}>
      <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h2> Areas of Worklife Balance </h2>
      </div>
    </Parallax>
    {/*  <Parallax speed={4}>
      <div className="mx-auto my-8 w-3/4 lg:w-2/4 flex justify-between">
        <WorkloadSVG />

        <ControlSVG />
        <RewardSVG />
        <CommunitySVG />
        <FairnessSVG />
        <ValuesSVG />
      </div>
    </Parallax> */}
    <p className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      Six key domains in worklife have been identified as situational predictors
      of burnout. The key idea is that finding a good fit between the person and
      their job is essential. This model identifies areas of work that can
      impact a person's job satisfaction and engagement, or lead to burnout.
    </p>

    {/* WORKLOAD */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <WorkloadSVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Workload
          </h4>
        </div>
        <p>
          Having too much to do in too little time and with limited resources
          can lead to{" "}
          <span className="bg-sky-800 p-1 rounded-md leading-8">
            exhaustion.
          </span>{" "}
          It's not just the amount of work that matters, but also the quality of
          the work. Doing work that is outside the scope of one's job can be
          particularly draining. Work overload can deplete a person's energy,
          and without time to recover, the exhaustion can continue.
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    {/* CONTROL */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <ControlSVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Control
          </h4>
        </div>
        <p>
          Lorem{" "}
          {/* <span className="bg-sky-800 p-2 rounded-md leading-10">
            exhaustion.
          </span> */}{" "}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adi
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    {/* REWARD */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <RewardSVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Reward
          </h4>
        </div>
        <p>
          Lorem{" "}
          {/* <span className="bg-sky-800 p-2 rounded-md leading-10">
            exhaustion.
          </span> */}{" "}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adi
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    {/* COMMUNITY */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <CommunitySVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Community
          </h4>
        </div>
        <p>
          Lorem{" "}
          {/* <span className="bg-sky-800 p-2 rounded-md leading-10">
            exhaustion.
          </span> */}{" "}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adi
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    {/* FAIRNESS */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <FairnessSVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Fairness
          </h4>
        </div>
        <p>
          Lorem{" "}
          {/* <span className="bg-sky-800 p-2 rounded-md leading-10">
            exhaustion.
          </span> */}{" "}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adi
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    {/* VALUES */}
    <div className="mx-auto text-cyan-100 my-4 w-3/4 lg:w-2/4 place-items-center">
      <div className="md:flex my-12 items-center">
        <div className="w-fit md:mr-8 m-auto my-4 md:my-0">
          <ValuesSVG />
          <h4 className="bg-green-800 mt-4 mx-auto p-2 rounded-md leading-4 w-min">
            Values
          </h4>
        </div>
        <p>
          Lorem{" "}
          {/* <span className="bg-sky-800 p-2 rounded-md leading-10">
            exhaustion.
          </span> */}{" "}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adi
          {/* <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
            Typical feelings of inefficacy are feeling that there's no future,
            feeling stuck.{" "}
          </div> */}
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default Burnout;
