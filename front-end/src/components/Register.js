/*import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

const Register = ({loggedIn, setLoggedIn}) => {

    // TODO: Make POST request to the backend
    const registerUser = async (email, password) => {
        
    }
  
    //Function that is called when user presses "submit" button on registration form
    const handleSubmit = async e => {
      // prevent the HTML form from actually submitting... we use React's javascript code instead
      e.preventDefault()
  
      // get the entered first name, last name, username, email, and password from the form fields
      const firstName = e.target.firstName.value
      const lastName = e.target.lastName.value
      const username = e.target.username.value
      const email = e.target.email.value // gets the value of the field in the submitted form with name='email'
      const password = e.target.password.value // gets the value of the field in the submitted form with name='password'
  
      registerUser(email, password)
  
    }
  
    // if the user is not logged in, show the login form
    if (loggedIn === false)
      return (
        <div className="Register">
          <h1 class="title">Create An Account</h1>
          <section className="main-content">
            <form onSubmit={handleSubmit}>
              {
                //handle error condition
              }
              <label>First Name: </label>
              <input type="text" name="firstName" placeholder="Enter your first name" />
              <br />
              <label>Last Name: </label>
              <input type="text" name="lastName" placeholder="Enter your last name" />
              <br />
              <label>Username: </label>
              <input type="text" name="username" placeholder="Enter your username" />
              <br />
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
  
  export default Register*/