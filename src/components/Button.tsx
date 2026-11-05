import { Link } from "react-router-dom"

const Button = ({ text, href }: { text: string; href: string }) => (
  <Link
    className="border-neutral-50 border-solid border-2 py-2 px-4 rounded-md text-neutral-50"
    to={href}
  >
    {text}
  </Link>
)

export default Button
