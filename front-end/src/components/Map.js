import React, { useCallback, useEffect, useState } from "react"
import ReactMapGl, { Marker, GeolocateControl } from "react-map-gl"
import { useHistory } from "react-router-dom"
import Pin from "./Pin"
import { Spinner, Modal, Button, Container, Row, Col } from "react-bootstrap"
import "./../styles/Map.css"
// Load API key from .env file (WHICH SHOULD BE IN .gitignore)
require("dotenv").config()

// This component loads an interactive map using react-map-gl
// which is a React wrapper package for deck.gl
const Map = ( {restaurants} ) => {

  // STATES FOR MODAL

  // Show or hide modal
  const [show, setShow] = useState(false);

  // Restaurant data - default as first restaurant

  // Default restaurant - filler 
  const defaultRestaurant = {
    "categories": {
        "alias": "vietnamese",
        "title": "Vietnamese"
    },
    "location": {
        "coordinates": {
            "longitude": -73.991332,
            "latitude": 40.7606544
        },
        "city": "New York",
        "country": "US",
        "state": "NY",
        "address": "647 9th Ave",
        "zip_code": "10036"
      },
      "_id": "619acccc58529672c5748621",
      "name": "OBAO",
      "phone_number": "+12122458880",
      "yelp_id": "NN3mOWF5e_pnR1ArqM2bHQ",
      "yelp_url": "https://www.yelp.com/biz/obao-new-york-3?adjust_creative=JIfUwiIJQQHBe5CcyapAhg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JIfUwiIJQQHBe5CcyapAhg",
      "restaurant_img_url": "https://s3-media4.fl.yelpcdn.com/bphoto/CpVI2XJLrvg09Fm83bfPog/o.jpg",
      "transactions": [
          "pickup",
          "delivery"
      ],
      "posts": [],
      "__v": 0
  }

  const [restaurant, setRestaurant] = useState(defaultRestaurant) // << state: designates which restaurant to show (via modal)
  
  const handleClose = () => setShow(false);
  const handleShow = (idx) => {
  
    // Extract new restaurant
    let restaurant = restaurants[idx]

    // Set new restaurant
    setRestaurant(restaurant)

    // Show Modal
    setShow(true)
  };


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


  return (
    restaurants ? (
    <>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="modal-top-row">
          <Modal.Title className="modal-res-name">
            {restaurant.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>

        <Container>
          <img width="100%" height="100%" src={restaurant.restaurant_img_url}></img>
          <br/>
          <h4>Where to Find Us</h4>
          <p>{restaurant.phone_number}
          <br/>
          {restaurant.location.address}
          <br/>
          {restaurant.location.zip_code}
          </p>
          <a href={restaurant.yelp_url}>Check us out on Yelp!</a>
        </Container>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="primary" className="modal-lower-relevant-post-btn">See Releveant Posts</Button>
        </Modal.Footer>
      </Modal>
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
          restaurants.map((r, idx) => {
          
            // Callback function to detect a click on any of the markers
            return (
            <Marker // Component for the Red Pin
                key={r._id}
                latitude={r.location.coordinates.latitude}
                longitude={r.location.coordinates.longitude}
                onClick = {() => handleShow(idx)}
                // onClick={() => restaurantClicked(idx)}
            >
              <Pin size={15} />
            </Marker>)
          })
        } 
        
      </ReactMapGl>
      </>
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
