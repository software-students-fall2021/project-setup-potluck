import "./App.css"

// Import components
import TagButton from "./components/TagButton"
import PostPage from "./components/FeedPage.js"
import "bootstrap/dist/css/bootstrap.css"
import InitialView from "./components/InitialView"

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
import Login from "./components/Login"
function App() {
  return (
    <div>
      <Header />
      <InitialView />
      <Login />
      <Map />
    </div>
  )
}

export default App
