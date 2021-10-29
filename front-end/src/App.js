import "./App.css"

// Import components
import TagButton from "./components/TagButton"
import PostPage from "./components/FeedPage.js"
import "bootstrap/dist/css/bootstrap.css"
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import Header from "./components/Header.js"
import Map from "./components/Map.js"

function App() {
  return (
    <div>
      <Header />
      <TagButton className="tagButton" />
      <Map />
    </div>
  )
}

export default App
