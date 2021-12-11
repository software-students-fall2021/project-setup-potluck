/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { useState } from 'react';
import {useHistory } from "react-router-dom"
import {FormControl} from 'react-bootstrap';
import "../App.css"
import "../styles/PostFeed.css"
// var session = require('express-session');

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="http://localhost:3000/postfeed"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);



const PostFeed = () => {

  
    let history = useHistory();
    const items = JSON.parse(localStorage.getItem("restaurants")) //{ ...localStorage};
    let newRestaurants = [];
    for (let i = 0; i < items.length; i++){
      // console.log(items[i]["name"])
      newRestaurants.push(items[i]["name"]);

    }
      console.log("here", newRestaurants)

    
  // what to do when the user clicks the submit buton on the form
  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()
    try{
      history.push('/map')

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

            
            {/* <label for="restaurants">Choose a Restaurant:</label>
            <div>
              <select name="restaurantOptions"> 
                {/* here we need to loop through and show all newRestaurants items as dropdown oki */}
                {/* {newRestaurants.map(({ name }) => (
                  <option value="name">newRestaurants
                  </option>
                ))}
                
              </select>
            </div> */} */

            render(
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  Custom toggle
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>,
            );

            <div class="form-group2">
                <button type="submit">Post</button>
            </div>
            </form>

        )

}


export default PostFeed