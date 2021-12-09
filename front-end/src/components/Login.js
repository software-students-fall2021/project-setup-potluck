import React, { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import axios from "axios"
import "../styles/Login.css";
import "../App.css";

const Login = props => {
  
  // Initialize history to control navigation
  let history = useHistory()


  // create state variables to hold username and password
  const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
  const [errorMessage, setErrorMessage] = useState("")

  // if the user's logged-in status changes, save the token we receive from the server
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.username}`)
      localStorage.setItem("token", response.token) // store the token into localStorage
    }
  }, [response])

  // what to do when the user clicks the submit buton on the form
  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()
    console.log('attempting to handle user login')
    try {
      // create an object with the data we want to send to the server
      const requestData = {
        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }
      console.log('requestData', requestData)
      // send a POST request with the data to the server api to authenticate
      const response = await axios.post(
        `http://143.198.119.5:3001/login`,
        requestData
      )
      history.push('/map')
      console.log('response is', response)

      // // Redirect ONLY  if user logs in
      // if (response.status == 200) {
        
      // } else {
      //   alert('login failed')
      // }

      // store the response data into the data state variable
      setResponse(response.data)
      console.log(`Server response.body in front end: ${JSON.stringify(response.hasOwnProperty('body'))}`)
    } catch (err) {
      // request failed... user entered invalid credentials
      setErrorMessage(
        "You entered invalid credentials. Please try again."
      )
    }
  }

  // if the user is not logged in, show the login form
  if (!response.success)
    return (
      <div className="Login">
        <br/>
        <h1 className="headerText" style={{justifyContent: 'center', textAlign: 'center'}}>Log In</h1>
        <br/>
        {errorMessage ? <p className="error">{errorMessage}</p> : ""}
        <section className="main-content">
          <form onSubmit={handleSubmit}>
            {
              //handle error condition
            }
            <label>Username: </label>
            <input type="text" name="username" placeholder="Enter your username here" />

            <label>Password: </label>
            <input type="password" name="password" placeholder="Enter your password here" />

            <input class="submit" type="submit" value="Log In"/>
          </form>
        </section>
      </div>
    )
  // otherwise, if the user has successfully logged-in, redirect them to a different page
  // in this example, we simply redirect to the home page, but a real app would redirect to a page that shows content only available to logged-in users
  else return <Redirect to="/feed" />
}

export default Login