import "./../styles/RestaurantPage.css"
import FoodContainer from "./FoodContainer2x2.js"
import BiggerContainer from "./BiggerContainer.js"
import React, { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

  const RestaurantPage = ({ restaurants }) => {
    console.log(restaurants, "RESTAURANTS PASSED IN RESTAURANT PAGE")
    // Extract restaurant id from url parameter
    let { id } = useParams()
  
    // State to keep track of the restaurant JSON object
    const [ restaurant, setRestaurant ] = useState({})

    // Sets the restaurant state once the async backend call sets restaurants
    // in App.js (otherwise, React would throw an error because restaurants
    // has not been created yet)
    useEffect( () => { 
      console.log("SETTING RESTAURANT")
      setRestaurant(restaurants[id])    
    }, [restaurants, id])
    

    // Make GET request to grab specific restaurant JSON object
    return (
      // Conditionally render restaurant if data has been fetched
      restaurant ? (
      
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
    ) : ( // Otherwise, render loading screen
    <div>
      <h1>Loading Restaurant</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    
    ))
  }

export default RestaurantPage
