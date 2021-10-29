import React from "react"
import ReactMapGl from "react-map-gl"

// Load API key from .env file (WHICH SHOULD BE IN .gitignore)
require("dotenv").config()

// Grab API Key for Mapbox
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX

// This component loads an interactive map using react-map-gl
// which is a React wrapper package for deck.gl
const Map = () => {
  // viewport determines the user's view of the map
  const [viewport, setViewport] = React.useState({
    // Default values for the viewport when the App is loaded
    longitude: -73.9936,
    latitude: 40.7128,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  })

  return (
    <ReactMapGl
      // Spread all values of the viewport as prop for <ReactMapGl />
      {...viewport}
      width="100vw"
      height="100vh"
      initial
      // Track changes in the viewPort
      onViewportChange={setViewport}
      // Provide Mapbox API key
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    />
  )
}

export default Map
