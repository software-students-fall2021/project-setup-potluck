import "./App.css"

// Import components

import Header from "./components/Header"
import Map from "./components/Map"
import Login from "./components/Login"
import RestaurantFeed from "./components/RestaurantFeed"
import TagButton from "./components/TagButton"
import InitialView from "./components/InitialView"
import About from "./components/About"
import Footer from "./components/Footer"
import RestaurantPage from "./components/RestaurantPage"
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
              <a href="/restaurants">Restaurants</a>
              <a href="/map">Map</a>
              <a href="/about">About</a>
            </div>
          </nav>

        <Switch>
          <Route path="/feed">
            <TagButton />
            <Header />
          </Route>
          <Route path="/restaurants">
            <RestaurantFeed />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          {/* Route with restaurant id passed as a parameter */}
          <Route path="/restaurant/:id" children={<RestaurantPage />}/>
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
