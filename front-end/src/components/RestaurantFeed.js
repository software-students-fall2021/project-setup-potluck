import React, { useState, useEffect } from 'react'
import RestaurantPage from "./RestaurantPage"

const RestaurantFeed = () => {
    const [restaurants, setRestaurants] = useState([])
  
    // Makes GET API call and sets data
    useEffect( () => {
      
      // Make GET request to the backend the get all restaurant JSON objects
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

export default RestaurantFeed