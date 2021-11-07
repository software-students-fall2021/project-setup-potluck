import React, { useCallback, useEffect, useState } from "react"
import ReactMapGl, { Marker, GeolocateControl } from "react-map-gl"

import Pin from "./Pin"
// Load API key from .env file (WHICH SHOULD BE IN .gitignore)
require("dotenv").config()

// This component loads an interactive map using react-map-gl
// which is a React wrapper package for deck.gl
const Map = () => {

  // Grab API Key for Mapbox
  const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX

  // Define default location to load map
  const DEFAULT_LONGITUDE = -73.9936
  const DEFAULT_LATITUDE = 40.7218

  // viewport determines the user's view of the map
  const [viewport, setViewport] = React.useState({
    // Default values for the viewport when the App is loaded
    longitude: DEFAULT_LONGITUDE,
    latitude: DEFAULT_LATITUDE,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  })

  // Fake data filler to create an array of markers
  const [restaurants, setRestaurants] = useState([])

    // Makes GET API call and sets data
    useEffect( () => {
      
      // GET restaurant data from /restaurants
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

  // Styling for the geolocation feature
  const geolocateControlStyle= {
    right: 10,
    top: 10
  };
  
  return (
    <ReactMapGl
      // Spread all values of the viewport as prop for <ReactMapGl />
      {...viewport}
      width="100vw"
      height="80vh"
      initial
      // Track changes in the viewPort
      onViewportChange={setViewport}
      // Provide Mapbox API key
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    >
      
      <GeolocateControl
        // Show & zoom to user's current location
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
      {
        // Display all pins
        restaurants.map((restaurant) => {
          return (
            // 1. Callback function to detect a click on any of the markers
            // 2. 
            <Marker
              latitude={restaurant.location.latitude}
              longitude={restaurant.location.longitude}
            >
              <Pin size={15} />
            </Marker>
          )
        })
      }
    </ReactMapGl>
  )
}

export default Map
