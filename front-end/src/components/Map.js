import React, { useCallback, useEffect, useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"

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
  const DEFAULT_SPRAD = 0.02

  // Temporary function to generate random longitude OR latitude, centered around
  // a given location with a given spread
  const getRandomLocation = (location, spread) => {
    return spread / 2 - spread * Math.random() + location
  }

  // viewport determines the user's view of the map
  const [viewport, setViewport] = React.useState({
    // Default values for the viewport when the App is loaded
    longitude: -73.9936,
    latitude: 40.7128,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  })

  // Fake data filler to create an array of markers
  const [markerArr, setMarkerArr] = useState([])

  // Hook to initailize markerArr on the first browser load
  useEffect(() => {
    let tempArr = [...markerArr]
    for (let i = 0; i < 100; i++) {
      tempArr.push({
        longitude: getRandomLocation(DEFAULT_LONGITUDE, DEFAULT_SPRAD),
        latitude: getRandomLocation(DEFAULT_LATITUDE, DEFAULT_SPRAD),
      })
    }

    setMarkerArr(tempArr)
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
        markerArr.map((restuarant) => {
          return (
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
