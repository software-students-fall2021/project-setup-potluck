import "./../styles/RestaurantPage.css"
import FoodContainer from "./FoodContainer2x2.js"
import BiggerContainer from "./BiggerContainer.js"
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

    return (
      <div className="restaurantPage">
        

        <div className="dishImage">
          <img
            className="dishPic"
            src="https://picsum.photos/0/200"
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
              src="https://picsum.photos/250/250"
              alt="new"
              className="roundedCorners"
            ></img>
          </div>
        </div>

        <div className="mostPopularDishses">
          <h1 className="indent">Popular Dishes:</h1>
          <FoodContainer></FoodContainer>
        </div>

        <div className="mainDishes">
          <h1 className="indent">Main Dishes:</h1>
          <BiggerContainer></BiggerContainer>
        </div>

        <div className="beverages">
          <h1 className="indent">Beverages:</h1>
          <FoodContainer></FoodContainer>
        </div>
      </div>
    )
  }

export default FeedPage
