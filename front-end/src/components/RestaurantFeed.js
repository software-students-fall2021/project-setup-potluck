import React, { useState, useEffect } from 'react'
import RestaurantPage from "./RestaurantPage"
import { Spinner } from "react-bootstrap"
const RestaurantFeed = ( {restaurants} ) => {  
    let i = -1
    return (
        // Conditional Rendering
        // Check restaurants[0] (instead of just restaurants) to ensure that at
        // least one restaurant JSON object is present before rending component
        
        restaurants[0] ? (
            // TO-DO Use useLocation to render minimized version of RestaurantPage
            restaurants.map( restaurant => {
                i++
                return <RestaurantPage id={i} />
            })
        ) : (
        <div>
            <h1>Loading Restaurants</h1>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    )
}

export default RestaurantFeed