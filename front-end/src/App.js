import "./App.css"

// Import components

import Header from "./components/Header.js"
import Map from "./components/Map.js"
import Login from "./components/Login"
import FeedPage from "./components/RestaurantPage"
import TagButton from "./components/TagButton"
import InitialView from "./components/InitialView"
import About from "./components/About"
import Footer from "./components/Footer.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() { 
  return (
    <Router>
      {/* <div> */}
      <nav id="hamnav">
          
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>

            {/* Later come back and revisit implementation for desktop browser */}
            <div id="hamitems">
              <a href="/">Initial view</a>
              <a href="/feed">Feed</a>
              <a href="/restaurant">Restaurant</a>
              <a href="/map">Map</a>
              <a href="/about">About</a>
            </div>
          </nav>

        <Switch>
          <Route path="/feed">
            <TagButton />
            <Header />
          </Route>
          <Route path="/restaurant">
            <FeedPage />
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
      <Footer/>
    </Router>
  )
}

export default App
