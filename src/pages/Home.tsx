import { Link } from "react-router-dom"
import { BurnoutLogoIconSVG } from "../assets"

export default function Home() {
  return (
    <div>
      <Link to="burnout-in-tech">
        <BurnoutLogoIconSVG />
        <p>Learn More</p>
      </Link>
    </div>
  )
}
