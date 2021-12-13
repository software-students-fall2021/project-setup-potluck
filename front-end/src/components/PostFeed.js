import React from 'react'
import { Redirect, useHistory } from "react-router-dom"
import {useState, useEffect} from "react"
import Select from 'react-select'
import "../App.css"
import "../styles/PostFeed.css"
//import { Axios } from 'axios'
import axios, * as others from 'axios';
// var session = require('express-session');


const PostFeed = ({username}) => {

    let history = useHistory()
    console.log(JSON.parse(localStorage.getItem("restaurants")))
    let restaurants = JSON.parse(localStorage.getItem("restaurants"))
    let restaurantNames = restaurants.map(element=> ({label: element.name, value: element.name}))
    let [selectedR, setSelectedR] =useState(restaurantNames[0].label);
    const [file,setFile] = useState("yay")
    console.log(restaurantNames)

   const handleRestaurants = async (opt)=>{
    //console.log(opt.label+"curlabel")
    const m = opt.label
    //console.log(selectedR+"beforeMod")
  /// await  setSelectedR(opt.label)
    modRestaurant(opt.label)
 
   }

   const modRestaurant = async (label)=>{
     await setSelectedR(label)
     return(selectedR)
   }
      useEffect (async() =>{ 
     console.log(selectedR)
   

   }, [selectedR, file])
   
  const send = async () =>{
     let form = document.getElementById("myForm");
     let myData = new FormData();
     console.log()
     console.log(form["title"].value)
     console.log(form["caption"].value)
     let newData = {
      title: form["title"].value,
      caption: form["caption"].value,
      images: file,
      parentRestaurant: selectedR
    }
      
    myData.append("title", form["title"].value )
    myData.append("caption", form["caption"].value )
    myData.append("restaurant", selectedR)
    myData.append("file",file)
      
    console.log(file)
     
     //console.log(form)
    // const data = new FormData()
    //   data.append("title");
    
    //   data.append("")
    //  await Axios({method:'post', url:'localhost:3001/postFeed', data:form}).then(res=>console.log(res))
    try{
      await others.post('http://143.198.119.5:3001/postFeed',  myData).then(res=>console.log(res))
    } catch(error){
      console.log(error)
    }
  }

  // what to do when the user clicks the submit buton on the form
  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()
    try{

      await send();

    } catch (err) {
      // request failed... user entered invalid credentials
      console.log(err)
    }
  }
  
  if (username) {
    return (
      <form action="http://localhost:3001/postFeed" method="POST" enctype="multipart/form-data" id="myForm" onSubmit={handleSubmit}>

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
          <input type="file" name="file" id="file" required="required" multiple="multiple" onChange={event =>{
            const file  = event.target.files[0];
            console.log(event.target.files[0])
            setFile(file)
          }}/>
          <div class="file-dummy">
          <div class="success">Click here to upload</div>
          {/* <div class="default">Please select some files</div> */}
          </div>
        </div>
        <div>
          <Select 
          onChange={handleRestaurants} options={restaurantNames}> </Select>
          </div>
          
    
        <div class="form-group2">
            <button type="submit">Post</button>
        </div>
      </form>
    )
  } else return <p>Paragraph</p>
  
}

export default PostFeed