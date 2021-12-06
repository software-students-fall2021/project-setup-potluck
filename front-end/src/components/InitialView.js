import { listClasses, ListItem } from "@mui/material";
import React from "react"
import { Button } from 'react-bootstrap';
import "../styles/FeedPage.css"
import "../App.css"
import Logout from "./Logout.js"

const LoginOrRegister = () => {
    // Check if user is logged in 
    const token = JSON.parse(localStorage.getItem("token"))

    return (
        // If logged in, show PostFeed and Log Out. If logged out, show Register and Login
        token ? (
            <></>
        ) : (
            <>
                <br/>
                <br/>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center'}}>
                    <a href="/register"><Button>Create an account</Button></a>
                    <p style={{margin: '8px'}}>or</p>
                    <a href="/login"><Button>Log in</Button></a>
                </div>
                <br/>
                <br/>
                <br/>
            </>    
        )
    )
} 

const InitialView = () =>{


    //passes search functionality to Search child component and search results to PostFeed
      return(
        <div>
            <br/>
            <h1 class="headerText" style={{textAlign: 'center', fontSize: '75px'}}>
                What is Potluck?
            </h1>   
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                Find food carts.
            </p>
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                Filter your dietary restrictions.
            </p>
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                Share your recipes.
            </p>
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                And more.
            </p>
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                An app for all things food.
            </p>
            <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center'}}>
                <img src="../Logos/TextOnlyBlack.png" height="100px"/>
            </div>
            <LoginOrRegister />
        </div>
      )
}

export default InitialView;