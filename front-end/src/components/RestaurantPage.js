import "./../styles/RestaurantPage.css"
import FoodPopUp from "./FoodPopUp.js"
import React, { useState, useEffect } from "react"
const axios = require("axios").default
  
const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([])

  // Makes GET API call and sets data
  useEffect( async() => {
    
    const initializeRestaurants = async () => {
      //promise based request to query backend for restaurants
       await fetch("http://localhost:3001/restaurants").then(response => response.json())
       .then(data => {console.log(data);
        setRestaurants(data)
      })
  
      console.log(restaurants)
  
    }
    
    initializeRestaurants()

  
  }, [])

  return (
      restaurants.map( restaurant => {
        return <RestaurantPage restaurant={restaurant} />
      })
  )
}

  const RestaurantPage = ( { restaurant } ) => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    return (
      <div className="restaurantPage">
        

        <div className="dishImage">
          <img
            className="dishPic"
            src={restaurant.backgroundPic}
            alt="new"
          ></img>
        </div>

        <div className="restaurantInfo">
          <div className="restaurantNameAddr">
            <h2>{restaurant.name}</h2>
            <h4>{restaurant.address}</h4>
            <h4>{restaurant.number}</h4>
            <h6># of Posts: {restaurant.no_posts}</h6>
          </div>
          <div>
            <img
              src={restaurant.logoPic}
              alt="new"
              className="roundedCorners"
            ></img>
          </div>
        </div>
        {/* what used to be separate component calls within these three compartments (Popular Dishes, Main Dishes, 
        Beverages -> all found between the <h1> tags have now been deleted and replaced with actual code within the
        RestaurantPage.js component itself. Through the use of the "FeedPage" & "initializeRestaurants," all functions 
        defined within this same component, we receive an array of JSON objects via restaurant.js, a file found within
        the project's back-end directory. */}
        <div className="mostPopularDishses">
          <h1 className="indent">Popular Dishes:</h1>
          <div className="popDishes"> 
                {restaurant.menuPopular.map((item, index) => {
                  return (<div key={restaurant.name} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={item} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}

          </div>
        </div>
        {/* As shown above, the .map function is utilized to render in the exact number of dishes/beverages of each respective
        restaurant as opposed to the initial approach, hard-code (which kept us from implementing a more dynamic approach). */}
        <div className="mainDishes">
          <h1 className="indent">Main Dishes:</h1>
          <div className="allDishes">
                {restaurant.menuMain.map((item, index) => {
                  return (<div key={restaurant.name} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={item} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}
          </div>
        </div>
        <div className="drinks">
          <h1 className="indent">Beverages:</h1>
           <div className="beverages">
              {restaurant.beverages.map((item, index) => {
                  return (<div key={restaurant.name} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={item} alt="beverages" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}
           </div>
        </div>
      </div>
    )
  }

  {/* Integration between the back-end and front-end has been achieved, but there still exist some actions which 
  keeps the component from running coherently.
    - mapping through an array of images: Many of the images that are to be displayed on this component are stored within 
    an array (a field within the JSON object) as picsum urls and not actual IMAGES. << potential source of prob tho UNSURE.
    - Cannot get the correct food_name or recipe to display on the popUp window when an item is clicked << will work on this.
*/}

{/* As for the restaurant.js page within the back-end dir, the only changes are the addition of certain fields within the 
JSON object (that is ultimately to be sent to the front-end: RestaurantPage.js & possibly Map.js?). */}

export default FeedPage
