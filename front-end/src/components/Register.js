import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

const Register = props => {

    // create state variables to hold username and password
  const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
  const [errorMessage, setErrorMessage] = useState("")

  // if the user's logged-in status changes, save the token we receive from the server
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully registered in: ${response.username}`)
      localStorage.setItem("token", response.token) // store the token into localStorage
    }
  }, [response])

  // what to do when the user clicks the submit buton on the form
  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        email: e.target.email.value,
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',      
      }
      // send a POST request with the data to the server api to authenticate
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/register`,
        requestData
      )
      // store the response data into the data state variable
      console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
      setResponse(response.data)
    } catch (err) {
      // request failed... user entered invalid credentials
      setErrorMessage(
        "You entered invalid registration credentials. Please try again."
      )
    }
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
  
  export default Register