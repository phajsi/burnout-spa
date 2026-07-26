import {
  ExhaustionColSVG,
  CynicismColSVG,
  InefficacyColSVG,
  ControlSVG,
  RewardSVG,
  CommunitySVG,
  FairnessSVG,
  ValuesSVG,
  WorkloadSVG,
} from "../assets/"
import { ReactNode } from "react"

type CardData = {
  icon: ReactNode
  label: string
  description: ReactNode
  accentColor?: string
}

export const dimensionCards: CardData[] = [
  {
    icon: <ExhaustionColSVG />,
    label: "Exhaustion",
    accentColor: "sky-800",
    description: (
      <>
        <p>
          Exhaustion represents the individual dimension of burnout. It relates
          to the feeling of being stressed at work, and of being overextended
          and depleted of emotional, mental and physical resources.
        </p>
        <div className="border-2 rounded-md p-2 my-2 border-sky-800 bg-[#397A9D]">
          Typical signs of exhaustion are not being able to think straight,
          feeling fed up with work and just wanting to go home.
        </div>
      </>
    ),
  },
  {
    icon: <CynicismColSVG />,
    label: "Cynicism",
    accentColor: "red-800",
    description: (
      <>
        <p>
          The component of cynicism or depersonalisation represents the
          interpersonal dimension of burnout. It involves detachment from
          various aspects of the job, often resulting in a negative or apathetic
          attitude.
        </p>
        <div className="border-2 rounded-md p-2 my-2 border-red-800 bg-[#AD4949]">
          Typical feelings of cynicism are negativity or hostility towards the
          work and coworkers, only doing the bare minimum. Not seeing the value
          in the work anymore.
        </div>
      </>
    ),
  },
  {
    icon: <InefficacyColSVG />,
    label: "Inefficacy",
    accentColor: "amber-800",
    description: (
      <>
        <p>
          The inefficacy component of burnout represents the self-evaluation
          dimension. It refers to feelings of incompetence and a lack of
          achievement and productivity in one's work. It can also exacerbate
          feelings of Imposter Syndrome.
        </p>
        <div className="border-2 rounded-md p-2 my-2 border-amber-800 bg-[#A8663E]">
          Typical feelings of inefficacy are feeling that there's no future,
          feeling stuck.
        </div>
      </>
    ),
  },
]

export const worklifeCards: CardData[] = [
  {
    icon: <WorkloadSVG />,
    label: "Workload",
    description: (
      <p>
        Having too much to do in too little time and with limited resources can
        lead to{" "}
        <span className="bg-sky-800 p-1 rounded-md leading-8">exhaustion.</span>{" "}
        It's not just the amount of work that matters, but also the quality of
        the work. Doing work that is outside the scope of one's job can be
        particularly draining. Work overload can deplete a person's energy, but
        with the chance to recover, the energy can be recharged keeping
        exhaustion at bay, without time to recover the exhaustion continues.
      </p>
    ),
  },
  {
    icon: <ControlSVG />,
    label: "Control",
    description: (
      <>
        <p>
          It is vital for job satisfaction and commitment that workers have the
          ability to influence decisions on how they perform their tasks,
          exercise professional autonomy, and access necessary resources to do
          their job effectively. Problematic aspects of job control arises when
          there is role conflict and role ambiguity.
        </p>
        <br />
        <p>
          In situations when workload increases, having greater clarity on what
          is expected, more control and access to resources on how to carry out
          tasks, can help balance out the increasing job demands and prevent
          exhaustion.
        </p>
      </>
    ),
  },
  {
    icon: <RewardSVG />,
    label: "Reward",
    description: (
      <p>
        It is important to feel that the rewards we receive, whether they are
        monetary, social, or intrinsic, match our expectations. Research has
        found that inadequate rewards can make people more susceptible to
        burnout. Lack of recognition from those around us are associated with
        feelings of{" "}
        <span className="bg-amber-800 p-1 rounded-md leading-8">
          inefficacy
        </span>
        , and if we feel neglected by the organization's reward system, we may
        feel disconnected with it's values. On the other hand, acknowledging and
        rewarding good work has been identified as a direct, effective and
        inexpensive way to prevent burnout and increase engagement.
      </p>
    ),
  },
  {
    icon: <CommunitySVG />,
    label: "Community",
    description: (
      <>
        <p>
          The social interactions in the workplace, conflicts, mutual support,
          closeness and teamwork, all affect the social aspect of work.
          <br />
          Two types of support at work have been identified: informal support
          from coworkers, which is closely related to feelings of efficacy, and
          supervisor support, which is linked to{" "}
          <span className="bg-sky-800 p-1 rounded-md leading-8">
            exhaustion
          </span>
          , reflecting the impact that supervisors have on workload. Social
          support in general is associated with higher engagement.
        </p>
        <br />
        <p>
          In addition, a sense of community in the workplace is important as
          well, as it has been found to alleviate feelings of inequality.
          Conversely, if workplace relationships become toxic, burnout is likely
          to occur.
        </p>
      </>
    ),
  },
  {
    icon: <FairnessSVG />,
    label: "Fairness",
    description: (
      <p>
        The concept of fairness is closely linked to those of community and
        reward. The perception of fairness and equity in the decision-making
        process is important. Studies suggest that people value the fairness of
        the process when decisions are made. Feelings of injustice are strongly
        linked to the{" "}
        <span className="bg-sky-800 p-1 rounded-md leading-8">exhaustion</span>{" "}
        and{" "}
        <span className="bg-red-800 p-1 rounded-md leading-8">cynicism</span>{" "}
        dimensions, leading individuals to feel detached from the community.
        Conversely, when people are treated with respect and politeness and
        given a chance to present their arguments, they perceive decisions as
        fair, leading to a sense of community and preventing burnout.
      </p>
    ),
  },
  {
    icon: <ValuesSVG />,
    label: "Values",
    description: (
      <>
        <p>
          Values refer to the ideals and motivations that guide individuals in
          their workplace. Value conflicts can arise when individuals are forced
          to choose between work they desire to do and the actual work, or when
          they are required to perform tasks that do not align with their own
          values. Individuals may also find themselves caught in the middle of
          conflicting values within their workplace.
        </p>
        <br />
        <p>
          Studies have revealed that value conflicts and work overload are the
          two primary factors that contribute to employees experiencing burnout.
        </p>
      </>
    ),
  },
]
