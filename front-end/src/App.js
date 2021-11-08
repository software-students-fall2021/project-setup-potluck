import "./App.css"

// Import component
import Header from "./components/Header"
import Map from "./components/Map"
import Login from "./components/Login"
import RestaurantFeed from "./components/RestaurantFeed"
import TagButton from "./components/TagButton"
import InitialView from "./components/InitialView"
import About from "./components/About"
import Footer from "./components/Footer"
import RestaurantPage from "./components/RestaurantPage"
import GetData from "./components/MyAccountPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function App() {

  // State holding an array of restaurant JSON objects
  // This array will be passed down as prop to RestaurantPage, RestaurantFeed, and Map
  // to avoid calling the backend API multiple times
  const [restaurants, setRestaurants] = useState([])
  
  // Makes GET API call and sets data
//  useEffect( () => {
    
    // Make GET request to the backend the get all restaurant JSON objects

//    const initializeRestaurants = async () => {
      
      // Request for the particular restaurant using its id
//       await fetch(`http://localhost:3001/restaurants/`).then(response => response.json())
//       .then(data => {console.log(" logging data",data);
//        setRestaurants([...data])
//      })
    
  
//    }
    
 //   initializeRestaurants()
  
//  }, [])

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
            <RestaurantFeed restaurants={restaurants} />
          </Route>
          <Route path="/map">
            <Map restaurants={restaurants}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          {/* Route with restaurant id passed as a parameter */}
          <Route path="/restaurant/:id">
            <RestaurantPage restaurants={restaurants}/>
          </Route>

          <Route path="/myAccount">
            <GetData/>
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
