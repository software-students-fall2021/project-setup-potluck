import React, { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import axios from "axios"
import "../App.css";

const Register = props => {

  let history = useHistory()

    // create state variables to hold username and password
  const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
  const [errorMessage, setErrorMessage] = useState("")

  // if the user's logged-in status changes, save the token we receive from the server
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully registered: ${response.username}`)
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

      //console.log("requestData: ", requestData);

      // send a POST request with the data to the server api to authenticate
      const response = await axios.post(
        `http://localhost:3001/register/`,
        requestData
      )
      // store the response data into the data state variable
      //console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
      console.log("Response: ", response);
      setResponse(response.data)

      history.push('/login')
    
    } catch (err) {
      // Request failed... user entered invalid credentials
      setErrorMessage(
        "You entered invalid registration credentials. Please try again."
      )
    }
  }
  
    // if the user is not logged in, show the login form
    if (!response.success)
      return (
        <div className="Register">
          <br/>
          <h1 class="headerText" style={{justifyContent: 'center', textAlign: 'center'}}>Create an Account</h1>
          <br/>
          <section className="main-content">
            <form onSubmit={handleSubmit}>
              {
                //handle error condition
              }
              <label>First Name: </label>
              <input type="text" name="firstName" placeholder="Enter your first name" />

              <label>Last Name: </label>
              <input type="text" name="lastName" placeholder="Enter your last name" />

              <label>Username: </label>
              <input type="text" name="username" placeholder="Enter your username" />

              <label>Email: </label>
              <input type="text" name="email" placeholder="Enter your email" />

              <label>Password: </label>
              <input type="password" name="password" placeholder="Enter your password" />

              <input type="submit" value="Create account"/>
            </form>
          </section>
        </div>
      )
    // otherwise, if the user has successfully logged-in, redirect them to a different page
    else return <Redirect to="/" />
  }
  
  export default Register