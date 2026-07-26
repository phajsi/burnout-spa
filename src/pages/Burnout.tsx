import { useEffect, useState } from "react"
import { Parallax } from "react-scroll-parallax"

import {
  BurnoutLogoSVG,
  PhisycalHealthSVG,
  MentalHealthSVG,
  LifestyleSVG,
  WorkSVG,
  EngagedSVG,
  MaslachColSVG,
  MaslachSVG,
  BurnoutDimensionsSVG,
  JobPersonSVG,
  AwsSVG,
} from "../assets/"

import Footer from "../components/Footer"
import Modal from "../components/Modal"
import Navigation from "../components/Navigation"
import PlayIcon from "../assets/icons/PlayIcon"
import IconCard from "../components/IconCard"
import { dimensionCards, worklifeCards } from "../data/burnoutContent"

const styles = {
  center:
    " absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
  bold: "text-neutral-200",
  h2: "mt-20 mb-8 mx-auto text-neutral-200 font-bold capitalize text-2xl underline underline-offset-4 w-fit",
  content_container:
    "text-cyan-100 mx-4 mb-4 sm:w-3/4 sm:mx-auto md:w-2/4 place-items-center",
  sub_header_container:
    "sm:mx-auto w-fit mx-4 md:w-2/4 text-neutral-200 font-bold capitalize leading-8",
}

const Burnout = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset"
  }, [open])

  return (
    <>
      {open && <Modal openModal={() => setOpen(false)} />}
      <header className="flex h-screen relative justify-center">
        <Parallax speed={2}>
          <div className={`z-10 bg-cyan-800 h-32 w-80 ${styles.center}`} />
        </Parallax>
        <Parallax speed={30}>
          {/*  Add svg element inside div */}
          <div className={`z-0 translate-y-48 ${styles.center}`}>
            <BurnoutLogoSVG />
          </div>
        </Parallax>
        <Parallax speed={-10}>
          <h1
            id="intro"
            className={`${styles.center} text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline z-20`}
          >
            Burnout in Tech
          </h1>
        </Parallax>
      </header>
      {/* INTRO */}

      <div className={`${styles.content_container} relative z-10 mt-12`}>
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
        <br />
        <p>
          A psychologist named Herbert Freudenberg, who worked in these clinics,
          observed that the workers were becoming depressed, apathetic, and
          agitated, leading to the popularization of the term{" "}
          <cite>burnout syndrome</cite> within the community of workers involved
          in the movement. Freudenberg later wrote several academic papers on
          this phenomenon.
        </p>
      </div>
      <hr className="w-48 sm:w-72 h-1 mx-auto bg-neutral-300 border-0 rounded my-10 "></hr>

      <div className={`${styles.content_container}`}>
        <p>
          <b className={`${styles.bold}`}>
            Hi there! <br /> You might have come across this page because you
            have personally experienced burnout, are uncertain if how you’re
            feeling constitutes burnout or want to help someone that is
            suffering from burnout. You might even want to learn how to best
            prevent it.
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
      <Navigation />
      {/* Part 1: WHAT IS BURNOUT */}
      <h2 id="first_header" className={`${styles.h2}`}>
        {" "}
        What is Burnout?{" "}
      </h2>
      <div className={`${styles.content_container}`}>
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

        {/* Maslach cool effect */}
        <div className="w-52 h-72 m-12 mx-auto">
          <div className="relative flex justify-center">
            <Parallax speed={10}>
              <div className={`${styles.center} -z-10 mt-12`}>
                <MaslachColSVG />
              </div>
            </Parallax>
            <Parallax speed={7}>
              <div className={`${styles.center} z-10`}>
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
      <h3
        id="first_header_sub_1"
        className={`${styles.sub_header_container} mt-8 mb-4 text-2xl`}
      >
        Burnout Dimensions{" "}
      </h3>
      <div className={`${styles.content_container}`}>
        <p>
          Many associate burnout with the feeling of being exhausted, not having
          the energy to accomplish basic tasks. But exhaustion is but one of the
          facets of burnout.
        </p>

        {dimensionCards.map((card) => (
          <IconCard key={card.label} {...card} />
        ))}
      </div>
      {/* Part 1.2 - CONSEQUENCES */}
      <h3
        id="first_header_sub_2"
        className={`${styles.sub_header_container} mt-8 mb-4 text-2xl`}
      >
        Why is Burnout Bad?{" "}
      </h3>
      <div className={`${styles.content_container}`}>
        <p>
          Burnout acts as a mediator of both work and personal health outcomes.
        </p>
      </div>
      <h4 className={`${styles.sub_header_container} text-xl`}>Health</h4>
      <div className={`${styles.content_container}`}>
        <p>
          The exhaustion dimension of burnout, being the closest related to
          stress is also the one most predictive of stress-related health
          outcomes. Exhaustion has been found to correlate with stress symptoms
          like <b className={`${styles.bold}`}>headaches</b>,{" "}
          <b className={`${styles.bold}`}>chronic fatigue</b>,{" "}
          <b className={`${styles.bold}`}>gastrointestinal disorders</b>,{" "}
          <b className={`${styles.bold}`}>muscle tension</b>,{" "}
          <b className={`${styles.bold}`}>hypertension</b>,{" "}
          <b className={`${styles.bold}`}>cold/flu episodes</b> and{" "}
          <b className={`${styles.bold}`}>changes in sleep patterns</b>.
          Workload and exhaustion has also been found to correlate with{" "}
          <b className={`${styles.bold}`}>incidences of workplace injuries</b>,
          and burnout has been linked to unhealthy lifestyles like{" "}
          <b className={`${styles.bold}`}>smoking, alcohol and drug use</b>
          .{" "}
        </p>
        <br />
        <p>
          Mental health wise, burnout has been found to be predictive of{" "}
          <b className={`${styles.bold}`}>depression and anxiety</b>. A Finnish
          study on burnout found that 90 percent of the those with severe
          burnout reported having physical or mental diseases like{" "}
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
      </div>
      <div className="mx-2 sm:mx-auto mt-12 md:w-2/4 flex justify-between">
        <div className="group">
          <LifestyleSVG />
          <ul className="group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-red-950 rounded-md bg-[#6A3B3B] p-2 sm:text-sm text-xs whitespace-nowrap">
            <li>- smoking</li>
            <li>- alcohol use</li>
            <li>- drug use</li>
          </ul>
        </div>

        <div className="group">
          <div>
            <MentalHealthSVG />
          </div>
          <ul className="group-hover:opacity-100 opacity-0 transition-opacity active:opacity-100 mt-4 text-cyan-100 border-2 border-orange-950 rounded-md bg-[#694339] p-2 sm:text-sm text-xs whitespace-nowrap">
            <li>- depression</li>
            <li>- anxiety</li>
          </ul>
        </div>

        <div className="group">
          <div className="sm:mx-8">
            <PhisycalHealthSVG />{" "}
          </div>
          <ul
            className="mx-auto mt-4 p-2 
              group-hover:opacity-100 opacity-0 transition-all active:opacity-100
              text-cyan-100 border-2 border-pink-950 rounded-md bg-[#733950]
              sm:text-sm text-xs sm:whitespace-nowrap whitespace-break-spaces"
          >
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
      <h4 className={`${styles.sub_header_container} text-xl`}>Work</h4>
      <p className={`${styles.content_container}`}>
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
      <h3
        id="first_header_sub_3"
        className={`${styles.sub_header_container} mt-8 mb-4 text-2xl`}
      >
        Job Engagement
      </h3>
      <p className={`${styles.content_container}`}>
        It is important to note that employee engagement, the opposite of
        burnout, is incredibly powerful and important for organisations
        thriving.
      </p>
      <div className="w-fit mx-auto my-4">
        <EngagedSVG />{" "}
      </div>
      <p className={`${styles.content_container}`}>
        Research into high performing organisations in software development has
        shown that{" "}
        <b className={`${styles.bold}`}>employee engagement and satisfaction</b>{" "}
        are indicative of{" "}
        <b className={`${styles.bold}`}>employee loyalty and identity</b>, they
        can{" "}
        <b className={`${styles.bold}`}>
          help reduce the likelihood of burnout
        </b>{" "}
        while{" "}
        <b className={`${styles.bold}`}>
          driving key organizational outcomes such as profitability,
          productivity, and market share.
        </b>{" "}
        Employees in high-performing teams were{" "}
        <b className={`${styles.bold}`}>
          twice as likely to recommend their organization to a friend as a great
          place to work.
        </b>
      </p>
      <p className={`${styles.content_container}`}>
        Moreover, employee engagement doesn't just benefit the workers; it
        drives business outcomes as well. Research has found{" "}
        <b className={`${styles.bold}`}>
          significant correlations between engagement and how well organizations
          collect and utilize customer feedback
        </b>
        , as well as the{" "}
        <b className={`${styles.bold}`}>
          ability of teams to visualize and understand the development process
          from start to finish.
        </b>{" "}
        Engagement is also linked to{" "}
        <b className={`${styles.bold}`}>
          how much employees align with their workplace's values and goals,
        </b>{" "}
        and{" "}
        <b className={`${styles.bold}`}>
          how much effort they're willing to put in to ensure the organization's
          success.
        </b>
      </p>
      {/* Part 2 - AREAS OF WORKLIFE BALANCE */}
      <h2 id="second_header" className={`${styles.h2}`}>
        {" "}
        Areas of Worklife Scale{" "}
      </h2>
      <div className="w-fit m-auto my-8">
        <AwsSVG />
      </div>
      <p className={`${styles.content_container}`}>
        Maslach's research resulted in the identification of six key domains in
        worklife, as situational predictors of burnout. The key idea is that
        finding a good fit between the person and their job is essential. This
        model identifies areas of work that can impact a person's job
        satisfaction and engagement, or lead to burnout.
      </p>
      <div className={`${styles.content_container}`}>
        {worklifeCards.map((card) => (
          <IconCard key={card.label} {...card} />
        ))}
      </div>
      <div className={`${styles.content_container}`}>
        <p>
          While it may be difficult to get all worklife dimensions in perfect
          shape, it is neither necessary. These areas should be considered entry
          points for creating a better workplace. The organization can still be
          a good place to work even if it does not excel in all aspects.
          However, to prevent burnout, certain dimensions must be strong and
          well functioning.{" "}
        </p>
      </div>
      <h2 id="third_header" className={`${styles.h2}`}>
        Personal Characteristics
      </h2>
      <div className="w-fit m-auto mb-8">
        <JobPersonSVG />
      </div>
      <div className={`${styles.content_container}`}>
        <p>
          We have established that the work environment plays an important role
          in the development of burnout. However, certain personal
          characteristics have also been found to correlate with burnout.
        </p>{" "}
        <br />{" "}
        <p>
          {" "}
          Age is one of those variables, as{" "}
          <b className={`${styles.bold}`}>younger employees </b> tend to have
          higher rates of burnout compared to those over 30 or 40 years old.
          Gender has not been identified as a strong predictor of burnout, but
          males tend to score slightly higher on cynicism, while females tend to
          score higher on exhaustion. In terms of personality traits,
          individuals with <b className={`${styles.bold}`}>Type A behavior </b>{" "}
          (competitive, impatient and aggressive) tend to have higher rates of
          burnout, and{" "}
          <b className={`${styles.bold}`}> people high on neuroticism, </b>
          which is a trait from the Big Five personality dimensions, has also
          been closely linked to burnout. A person's home life is also important
          in their susceptibility to burnout. As those experiencing stress in
          their personal life are more vulnerable to developing burnout.
        </p>
      </div>
      <h2 id="fourth_header" className={`${styles.h2}`}>
        Job demands in tech
      </h2>
      <div className={`${styles.content_container}`}>
        <p>
          Nicole Forsgren, Jez Humble, and Gene Kim, Kim is known for authoring
          The Phoenix Project, conducted a study on over 2000 organizations
          worldwide to identify the practices that result in high-performing
          tech organizations. The results of their research is compiled into the
          book Accelerate, which highlights the impact of Lean Software and
          DevOps on tech organizations.
        </p>
      </div>
      <h3
        id="fourth_header_sub_1"
        className={`${styles.sub_header_container} mt-8 mb-4 text-2xl`}
      >
        Lean Management Practices{" "}
      </h3>
      <div className={`${styles.content_container}`}>
        <p>
          According to the authors, Lean management practices have a strong
          positive influence on software delivery performance and team culture,
          while also reducing burnout and promoting a more generative culture.
          Practices such as{" "}
          <b className={`${styles.bold}`}>
            limiting Work In Process, implementing visual management, providing
            feedback from production, and implementing lightweight change
            approval processes{" "}
          </b>{" "}
          were found to contribute to these positive outcomes.
        </p>
        <br />
        <p>
          The core principles of Lean management involve granting employees the
          necessary time and resources to improve their work and creating an
          environment that supports experimentation, failure and learning, and
          which allows employees to make decisions that impact their jobs.
        </p>
      </div>
      <h3
        id="fourth_header_sub_1"
        className={`${styles.sub_header_container} mt-8 mb-4 text-2xl`}
      >
        Making work sustainable{" "}
      </h3>
      <div className={`${styles.content_container} mb-4`}>
        <p>
          Factors within organizations that strongly correlate with high levels
          of burnout were identified in the research, with suggestions for how
          to address these problems.
        </p>
      </div>
      <h3 className={`${styles.sub_header_container}`}>
        Organizational culture
      </h3>
      <div className={`${styles.content_container} mb-4`}>
        <p>
          Organizational culture was found to predict software delivery
          performance and organizational performance. A power oriented culture,
          characterized by low cooperation, nontransparence and blaming have
          employees with strong feelings of burnout. Managers can counteract by
          creating a blame free environment, learn from failures and
          communicating shared sense of purpose, in that way transforming the
          culture into a generative one.
        </p>
      </div>
      <h3 className={`${styles.sub_header_container}`}>Deployments</h3>
      <div className={`${styles.content_container}  mb-4`}>
        <p>
          A high correlation was found between deployment pain, which
          contributes to feelings of stress and lack of control, and poor IT
          performance, organizational performance and organizational culture.
          Systems should be designed to be deployed easily, be able to detect
          and tolerate failure and have loosely coupled architectures, so that
          it’s components can be updated easily. They should also be able to
          automatically reproduce the state of production systems from
          information in version control.
        </p>
        <br />
        <p>
          A 2020 survey of more than 500 software developers in North America
          examining the state of Big Code, which refers to the dramatic growth
          in the volume and complexity of code, found that 88% of teams admitted
          that evry release caused some anxiety. When asked about the emotions
          that code releases make them feel, there was a 50/50 response of
          satisfaction vs fear or anxiety.
        </p>
      </div>
      <h3 className={`${styles.sub_header_container}`}>Leaders</h3>
      <div className={`${styles.content_container} mb-4`}>
        <p>
          Teams with effective leaders reported lower levels of burnout. These
          leaders are known for limiting work in process and removing roadblocks
          that hinders the team's progress.
        </p>
      </div>
      <h3 className={`${styles.sub_header_container}`}>Skills Development</h3>
      <div className={`${styles.content_container} mb-4`}>
        <p>
          Organizations that prioritize the development of their teams' skills
          and abilities have better outcomes. Invest in training and providing
          adequate support and resources for acquiring new skills, are vital for
          the succesull adoption of DevOps practices that improve software
          delivery and performance.
        </p>
      </div>
      <h3 className={`${styles.sub_header_container}`}>
        Organizational performance
      </h3>
      <div className={`${styles.content_container}`}>
        <p>
          Research shows that the implementation of Lean management and
          continuous delivery practices has a positive impact on software
          delivery performance, leading to an improvement in overall
          organizational performance.
        </p>
      </div>

      <div className="w-fit m-auto my-8 self-center text-center">
        <h3 className="text-neutral-200 font-bold capitalize leading-8 text-xl">
          Test what you have learned
        </h3>
        {/* Prortype:
         "https://www.figma.com/proto/0aR0EDHOKOrSddx8CSUwLp/Untitled?type=design&node-id=204-146&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=204%3A146" */}
        <a href="burnout-in-tech/intro" rel="noreferrer">
          <PlayIcon />
        </a>
      </div>

      <Footer openModal={() => setOpen(true)} />
    </>
  )
}
export default Burnout
