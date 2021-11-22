import "./App.css"

// Import components

import Header from "./components/Header.js"
import Map from "./components/Map.js"
import Login from "./components/Login"
import RestaurantPage from "./components/RestaurantPage"
import TagButton from "./components/TagButton"
import InitialView from "./components/InitialView"
import About from "./components/About"
import Footer from "./components/Footer"
import Register from "./components/Register"

//import RestaurantPage from "./components/RestaurantPage"
import MyAccountPage from "./components/MyAccountPage"

import GetData from "./components/MyAccountPage"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  // State for Sign Up - Array of all users who have registered already
  console.log("INITIALIZING LIST O USERS WOOOOO")
  const [listOfUsers, setListOfUsers] = useState([])

  const checkUsername = (newUser, history) => {
    let result = true
    //For each object in the listOfUsers, check if its email is equal to newUser.email
    listOfUsers.forEach(function (arrayItem) {
      console.log("LOOP STARTED")
      if (arrayItem.email === newUser.email) {
        result = false //if they match, the users are not all unique
      }
    })

    return result
  }

  // State holding an array of restaurant JSON objects
  // This array will be passed down as prop to RestaurantPage, RestaurantFeed, and Map
  // to avoid calling the backend API multiple times
  const [restaurants, setRestaurants] = useState([])

  const [users, setUsers] = useState([])

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
      await fetch(`http://localhost:3001/restaurants/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(" logging data", data)
          setRestaurants(data)

          console.log('saving data to localStorage!')
          localStorage.setItem("restaurants", JSON.stringify(data));
        })
    }
  }

  const initializeUser = async () => {
    await fetch(`http://localhost:3001/user/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(" logging users data", data)
        setUsers(data)
      })
  }

  useEffect(() => {
    initializeRestaurants()
    initializeUser()
    console.log("so wtf is restaurants:", restaurants)
  }, [])

  useEffect(() => {
    console.log('OOP! restaurants updated:', restaurants)
  }, [restaurants])

  useEffect(() => {
    console.log("LIST O' USERS", listOfUsers)
  }, [listOfUsers])

  return (
    <Router>
      {/* <div> */}
      <nav id="hamnav">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        {/* Later come back and revisit implementation for desktop browser */}
        <div id="hamitems">
          <a href="/">Initial view</a>
          <a href="/feed">Feed</a>
          {/* <a href="/restaurant">Restaurant</a> */}
          <a href="/map">Map</a>
          <a href="/about">About</a>
          <a href="/register">Register</a>
        </div>
      </nav>

      <Switch>
        <Route path="/feed">
          <TagButton />
          <Header />
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
        <Route path="/users">

          <MyAccountPage users={users}/>

          <GetData users={users} />

        </Route>
        <Route path="/register">
          <Register/>
        </Route>  
        {/* Route with restaurant id passed as a parameter */}
        {/* <Route path="/restaurant/:id">
          <RestaurantPage restaurants={restaurants} />
        </Route> */}
        {/* Dont add routes after the base route they wont work*/}
        <Route path="/">
          <InitialView />
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
