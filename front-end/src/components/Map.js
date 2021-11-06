import React, { useCallback, useEffect, useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"

import Pin from "./Pin"
// Load API key from .env file (WHICH SHOULD BE IN .gitignore)
require("dotenv").config()
const axios = require("axios")

const getRestaurants = () => {
  return []
}

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
  const [restaurants, setRestaurants] = useState(axios.get("/restaurants"))
  
  // restaurants = [{},{}]
  // i = 0

  // Hook to initailize markerArr on the first browser load
  useEffect(() => {
    
    // GET all restaurants from the Map
    // (later Map should accept tags as props and render pre-filtered Data, even if it's the first render)
    setRestaurants(getRestaurants())

  }, [])

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
      {
        // Display all pins
        restaurants.map((restuarant) => {
          return (
            // 1. Callback function to detect a click on any of the markers
            // 2. 
            <Marker
              latitude={restuarant.latitude}
              longitude={restuarant.longitude}
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
