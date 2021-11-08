import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import "../styles/Login.css"

const Login = props => {
  
  //Create state variables to hold the email and password
  const [status, setStatus] = useState({})

  // if the user's logged-in status changes, call the setuser function that was passed to this component from the PrimaryNav component.
  useEffect(() => {
    // if the login was a success, call the setuser function that was passed to this component as a prop
    if (status.success) {
      console.log(`User successfully logged in: ${status.email}`)
      props.setuser(status)
    }
  }, [status])

  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    // get the entered email and password from the form fields
    const email = e.target.email.value // gets the value of the field in the submitted form with name='email'
    const password = e.target.password.value // gets the value of the field in the submitted form with name='password'

    // send form data to API to authenticate
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    try {
      // send the request to the server api to authenticate
      const response = await axios({
        method: "post",
        url: "https://api.mockaroo.com/api/2364dc40?count=1000&key=e5beaaa0",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      // store the response data into the data state variable
      console.log(response.data)
      setStatus(response.data)
    } catch (err) {
      // throw an error
      throw new Error(err)
    }
  }

  // if the user is not logged in, show the login form
  if (!status.success)
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
  //Currently is set the about page for testing purposes
  else return <Redirect to="/about" />
}

export default Login