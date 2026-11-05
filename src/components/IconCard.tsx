import { ReactNode } from "react"

type Props = {
  icon: ReactNode
  label: string
  description: ReactNode
  accentColor?: string
}

const IconCard = ({
  icon,
  label,
  description,
  accentColor = "teal-800",
}: Props) => {
  return (
    <div className="sm:flex my-24 items-center sm:my-12">
      <div className="w-fit sm:mr-8 m-auto my-4 md:my-0">
        {icon}
        <h4
          className={`bg-${accentColor} mt-4 mx-auto p-2 rounded-md leading-4 w-min`}
        >
          {label}
        </h4>
      </div>
      <div>{description}</div>
    </div>
  )
}

export default IconCard
