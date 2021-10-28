/// app.js
import React from "react"
import ReactMapGl from "react-map-gl"

require("dotenv").config()

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX

const Map = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -73.9936,
    latitude: 40.7128,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  })

  return (
    <ReactMapGl
      {...viewport}
      width="100vw"
      height="100vh"
      initial
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
    />
  )
}

export default Map
