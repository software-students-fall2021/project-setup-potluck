import "../styles/BackButton.css"
import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link to="/feed" className="backButton">
      Back
    </Link>
  )
}

export default BackButton
