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

        <div className="mostPopularDishses">
          <h1 className="indent">Popular Dishes:</h1>
          {/*<FoodContainer restaurant={restaurant}></FoodContainer> */}
          <div className="popDishes"> {/*
              {restaurant.menuPopular.map(url => {
                  return (<div key={restaurant.name} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={url} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{restaurant.menuPopular.indexOf()}</figcaption><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp>
                  </div> )
                })} */}

                {restaurant.menuPopular.map((item, index) => {
                  return (<div key={restaurant.name} className="">
                    <button onClick={() => setButtonPopUp(true)}><img src={item} alt="popularDishes" className="rounded"/></button><figcaption className="textUnder">{item}</figcaption>
                    <FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>{item}</h1><p>{item}</p></FoodPopUp>
                  </div> )
                })}

          </div>
        </div>

        <div className="mainDishes">
          <h1 className="indent">Main Dishes:</h1>
          {/* <BiggerContainer></BiggerContainer> */}
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

export default FeedPage
