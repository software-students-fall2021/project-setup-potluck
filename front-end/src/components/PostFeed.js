import React from 'react'
import { Redirect, useHistory } from "react-router-dom"

import "../App.css"
import "../styles/PostFeed.css"
// var session = require('express-session');


const PostFeed = () => {

    let history = useHistory()

  // what to do when the user clicks the submit buton on the form
  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    try{
      history.push('/map')

      // // Redirect ONLY  if user logs in
      // if (response.status == 200) {
        
      // } else {
      //   alert('login failed')
      // }

      // store the response data into the data state variable
     
    } catch (err) {
      // request failed... user entered invalid credentials
      console.log(err)
    }
  }
    return (    
        <form action="http://localhost:3001/postfeed" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>

            <h1><strong>Your Post</strong>: Share Food Love with everyone</h1>

            <div class="form-group">
                <label for="title"></label>
                <input type="text" name="title" id="title" class="form-controll" placeholder="Title of the Post"/>
            </div>
            <div class="form-group">
                <label for="caption"></label>
                <textarea type="text" name="caption" id="caption" class="form-controll" placeholder="Add more info"/>
            </div>

            <div class="form-group file-area">
                {/* <label for="images">Add Images</label> */}
                <input type="file" name="images" id="images" required="required" multiple="multiple"/>
                <div class="file-dummy">
                <div class="success">Click here to upload</div>
                {/* <div class="default">Please select some files</div> */}
                </div>
            </div>

            <div class="form-group2">
                <button type="submit">Post</button>
            </div>
            </form>

        )

}


export default PostFeed