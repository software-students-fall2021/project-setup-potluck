import "./App.css"

// Import components

import Header from "./components/Header.js"
import Map from "./components/Map.js"
import Login from "./components/Login"
import RestaurantPage from "./components/RestaurantPage"
import TagButton from "./components/TagButton"
import InitialView from "./components/InitialView"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        {/* To be replaced with custom header / hamburger menu w links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Initial View</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/feed">
            <TagButton />
            <Header />
          </Route>
          <Route path="/restaurant">
            <RestaurantPage />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          {/* Dont add routes after the base route they wont work*/}
          <Route path="/">
            <InitialView />
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App
