import React, { useCallback, useEffect, useState } from "react"
import ReactMapGl, { Marker, GeolocateControl } from "react-map-gl"
import { useHistory } from "react-router-dom"
import Pin from "./Pin"
import { Spinner } from "react-bootstrap"
// Load API key from .env file (WHICH SHOULD BE IN .gitignore)
require("dotenv").config()

// This component loads an interactive map using react-map-gl
// which is a React wrapper package for deck.gl
const Map = ( {restaurants} ) => {

  const [restaurantsLoaded, setRestaurantsLoaded] = useState(false)

  // Initialize history to program navigation - to render clicked restaurants
  let history = useHistory()

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
    zoom: 2,
    maxPitch: 0
  })

  // Callback function to render clicked Restaurant by pushing
  // the page specific restaurant page to the browser's history
  const restaurantClicked = (id) => {
    history.push(`/restaurant/${id}`)
  }

  // Styling for the geolocation feature
  const geolocateControlStyle= {
    right: 40,
    top: 40
  };

  // Rerender Map when restaurants is loaded / changed
  useEffect(() => {
    restaurants ? setRestaurantsLoaded(true) : setRestaurantsLoaded(false)
    console.log(restaurantsLoaded)
  }, [restaurants])
  
  return (
    restaurantsLoaded ? (
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
          showAccuracyCircle={false} // Remove the big blue accuracy circle
          auto
        />
        {
          // Conditionally display Restaurants if restaurants state is loaded  
          restaurants.map((restaurant) => {
          
            // Callback function to detect a click on any of the markers
            return (
            <Marker
                latitude={restaurant.location.latitude}
                longitude={restaurant.location.longitude}
                onClick={() => restaurantClicked(restaurant.id)}
            >
              <Pin size={15} />
            </Marker>)
          })
        } 
        
      </ReactMapGl>
    ) : (
      // Display loading screen if async call to GET restaurants is incomplete
      <div>
        <h1>Loading Map</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  )
}

export default Map
