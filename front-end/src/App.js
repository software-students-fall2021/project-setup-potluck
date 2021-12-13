import "./App.css"

// Import components

import Header from "./components/Header.js"
import Map from "./components/Map.js"
import Login from "./components/Login"

import InitialView from "./components/InitialView"
import About from "./components/About"
import Footer from "./components/Footer"
import Register from "./components/Register"

import RestaurantPage from "./components/RestaurantPage"
import MyAccountPage from "./components/MyAccountPage"
import PostFeed from "./components/PostFeed"
import GetData from "./components/MyAccountPage"
import Logout from "./components/Logout"

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"



function App() {
  
  // State holding an array of restaurant JSON objects
  // This array will be passed down as prop to RestaurantPage, RestaurantFeed, and Map
  // to avoid calling the backend API multiple times
  const [restaurants, setRestaurants] = useState([])

  const [username, setUsername] = useState()

  // Makes GET API call and sets data

  // Make GET request to the backend the get all restaurant JSON objects

  const initializeRestaurants = async () => {
    // Check if restaurants have already been stored in local storage
    const savedRestaurants = JSON.parse(localStorage.getItem("restaurants"))

    // check that at least 1000 restaurants have bene loaded
    if (savedRestaurants && savedRestaurants.length > 1000) {
      console.log("Found old version of savedRestaurants!", savedRestaurants)
      console.log('updating restaurants now..')
      setRestaurants(savedRestaurants)
    } else {
      // Local Storage is not properly populated -> fetch data from the back-end and populate localStorage
      
      // Clean localStorage of possible corrupt data
      localStorage.clear()

      // Request for the particular restaurant using its id
      await fetch(`http://143.198.119.5:3001/restaurants/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(" logging data", data)
          setRestaurants(data)

          console.log('saving data to localStorage!')
          localStorage.setItem("restaurants", JSON.stringify(data));
        })
    }
  }

  const initializeUsername = async () => {
    // Check if users have already been stored in local storage
    const savedUsername = JSON.parse(localStorage.getItem("username"))

    // check that users have been loaded
    if (savedUsername) {
      console.log("Found logged in user,", savedUsername)
      console.log('updating user now..')
      setUsername(savedUsername)
    } else {
      console.log('user not logged in')
    }
  }

  useEffect(() => {
    // Check to see if restaurants are saved in localStorage
    initializeRestaurants()
    initializeUsername()
  }, [])


  // Conditionally render or hide links based on login state
  const ConditionalNavBar = () => {
    return (
      // If logged in, show PostFeed and Log Out. If logged out, show Register and Login
      username ? (
        <>
          <a href="/postfeed">PostFeed</a>
          <a href="/logout">Log out</a>
        </>
      ) : (
        <>
         <a href="/register">Register</a>
         <a href="/login">Login</a>
        </>
        )
    )
  }

  const PostFeedRoute = () => {
    return (
      username ? (
        <PostFeed/>
      ) : (
        <Redirect to='/login'/>
      )
    )
  }

  const ConditionalLanding = () => {
    return (
      username ? (
        <Redirect to='/feed'/>
      ) : (
        <InitialView />
      )
    )
  }

  return (
    <Router>  
      <nav id="hamnav">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        {/* Later come back and revisit implementation for desktop browser */}
        <div id="hamitems">
          <a href="/feed">Feed</a>
          {/* <a href="/restaurant">Restaurant</a> */}
          <a href="/map">Map</a>
          <a href="/about">About Us</a>
          <ConditionalNavBar/>
        </div>
      </nav>
      <Switch>
        <Route path="/feed">
          <Header username={username}/>
        </Route> 
        {/* <Route path="/restaurant">
          <RestaurantPage />
        </Route> */}
        <Route path="/map">
          <Map restaurants={restaurants}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login username={username} setUsername={setUsername}/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        {/* Route with restaurant id passed as a parameter */}
        <Route path="/restaurant/:id">
          <RestaurantPage restaurants={restaurants} />
        </Route>
        {/* Dont add routes after the base route they wont work*/}
        <Route path="/postfeed">
          <PostFeed username={username}/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <Route path="/">
          <ConditionalLanding />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
