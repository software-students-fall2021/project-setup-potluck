import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import "../styles/Login.css"

const Login = ({loggedIn, setLoggedIn}) => {

  // Make GET request to the backend
  const authenticateLogin = async (email, password) => {
      
    // Request for the particular restaurant using its id
     await fetch(`http://localhost:3001/login/${email}/${password}`)
     .then(data => data.json())
     .then(data => {
      console.log("logging data",data.body);
      if (data === true) {
        setLoggedIn(true)
      }
      console.log("is the user logged in? ", loggedIn)
    })
  }

  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    // get the entered email and password from the form fields
    const email = e.target.email.value // gets the value of the field in the submitted form with name='email'
    const password = e.target.password.value // gets the value of the field in the submitted form with name='password'

    authenticateLogin(email, password)

  }

  // if the user is not logged in, show the login form
  if (loggedIn === false)
    return (
      <div className="Login">
        <h1 class="title">Login</h1>
        <section className="main-content">
          <form onSubmit={handleSubmit}>
            {
              //handle error condition
            }
            <label>Email: </label>
            <input type="text" name="email" placeholder="Enter your email" />
            <br />
            <label>Password: </label>
            <input type="password" name="password" placeholder="Enter your password" />
            <br />
            <input type="submit" value="Login" />
          </form>
        </section>
      </div>
    )
  // otherwise, if the user has successfully logged-in, redirect them to a different page
  else return <Redirect to="/" />
}

export default Login