import "./../styles/RestaurantPage.css"
import FoodPopUp from "./FoodPopUp.js"
import React, { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

  const RestaurantPage = ({ restaurants }) => {
    console.log(restaurants, "RESTAURANTS PASSED IN RESTAURANT PAGE")
    // Extract restaurant id from url parameter
    let { id } = useParams()
  
    // State to keep track of the restaurant JSON object
    const [ restaurant, setRestaurant ] = useState()

    const [buttonPopUp, setButtonPopUp] = useState(false)
    // Sets the restaurant state once the async backend call sets restaurants
    // in App.js (otherwise, React would throw an error because restaurants
    // has not been created yet)
    useEffect( () => { 
      console.log("SETTING RESTAURANT")
      setRestaurant(restaurants[id])    
    }, [restaurants, id])
    
    console.log(restaurant, "YO")
    // Make GET request to grab specific restaurant JSON object
    return (
      // Conditionally render restaurant if data has been fetched
      restaurant ? (
      <div className="restaurantPage">
        <div className="dishImage">
          <img
            className="dishPic"
            src={restaurant.restaurant_img_url}
            alt="new"
          ></img>
        </div>

        <div className="restaurantInfo">
          <div className="restaurantNameAddr">
            <h2>{restaurant.name}</h2>
            <h4>Find Us Here!</h4>
            <h6>{restaurant.location.address}</h6>
            <h6>{restaurant.location.zip_code}</h6>
            <h6>{restaurant.phone_number}</h6>
            <p>Available Transactions: </p>
            <p>{restaurant.transactions}</p>
          </div>
{/*                     ************** MOST RECENT COMMENT **************

        (1) COMMENTED OUT logo_pic that shows up next to restaurant 
            name, location, phone#, etc. bc the live DB that is actually
            in use when rendering this info includes only one picture of
            the restaurant (which is already used in div/classname="dishImage")   

        (2) RestaurantPage.js (THIS PAGE) was initially intended to provide users
            with a roster of dishes served at a specific restaurant and other users' posts
            about said-restaurant's respective dishes. Our current and modified plan, 
            creating a mini pop-up within the "Map" page of our app that merely lists metadata
            of the restaurant, has rendered our previous intention obsolete. 
            (Main reason for change: could not find open source data for menus). 
            
        (3) Before deployment, this component will be altered to serve new goal (mentioned in point #2)


        *All unnecessary code has been commented out AND MAY BE DELETED* << will do so after team's approval*




          <div>
            <img
              src={restaurant.logoPic}
              alt="new"
              className="roundedCorners"
            ></img>
          </div> 
*/} 
        </div>
      </div>
      ) : ( // Otherwise, render loading screen
        <div>
          <h1>Loading Restaurant</h1>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        
        )) 
      } 
        {/* 
        What used to be separate component calls within these three compartments (Popular Dishes, Main Dishes, 
        Beverages -> all found between the <h1> tags have now been deleted and replaced with actual code within the
        RestaurantPage.js component itself. Through the use of the "FeedPage" & "initializeRestaurants," all functions 
        defined within this same component, we receive an array of JSON objects via restaurant.js, a file found within
        the project's back-end directory. 
      
      
      
      */}
{/*     FIRST OMIT    
        <div className="mostPopularDishses">
          <h1 className="indent">Popular Dishes:</h1>
          <div className="popDishes"> 
            {console.log(restaurant, "LALALALALAL")}
            {
              restaurant.menuPopular.map( (item, index) => {
                return (
                  <div key={index} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={restaurant.menuPopularPics[index]} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div>
                )
              })
            }

          </div>
          </div>
*/}
        {/* As shown above, the .map function is utilized to render in the exact number of dishes/beverages of each respective
        restaurant as opposed to the initial approach, hard-code (which kept us from implementing a more dynamic approach). */}
{/*        SECOND OMIT
        <div className="mainDishes">
          <h1 className="indent">Main Dishes:</h1>
          <div className="allDishes">
                {restaurant.menuMain.map((item, index) => {
                  return (<div key={index} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={restaurant.menuMainPics[index]} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}
          </div>
        </div>
        <div className="drinks">
          <h1 className="indent">Beverages:</h1>
           <div className="beverages">
              {restaurant.beverages.map((item, index) => {
                  return (<div key={index} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={restaurant.menuMainPics[index]} alt="beverages" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}
           </div>
        </div>
      </div>

    ) : ( // Otherwise, render loading screen
    <div>
      <h1>Loading Restaurant</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    
    )) 
  } */}
  
  /* Integration between the back-end and front-end has been achieved, but there still exist some actions which 
  keeps the component from running coherently.
    - mapping through an array of images: Many of the images that are to be displayed on this component are stored within 
    an array (a field within the JSON object) as picsum urls and not actual IMAGES. << potential source of prob tho UNSURE.
    - Cannot get the correct food_name or recipe to display on the popUp window when an item is clicked << will work on this.
*/

/* As for the restaurant.js page within the back-end dir, the only changes are the addition of certain fields within the 
JSON object (that is ultimately to be sent to the front-end: RestaurantPage.js & possibly Map.js?). */

export default RestaurantPage
