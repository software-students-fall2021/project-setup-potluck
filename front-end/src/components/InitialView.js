import { listClasses, ListItem } from "@mui/material";
import React from "react"
import { Button } from 'react-bootstrap';
import "../styles/FeedPage.css"
import "../App.css"
import Logout from "./Logout.js"

const InitialView = () =>{

    //Fake Data that will be replaced by our API Call
    const dummyData = [
        {
          title: 'Ramen',
          imageURL: 'https://cdn.vox-cdn.com/thumbor/JxSROcKD03BBywyMP50lG8U7FFk=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63017335/L_Palmberg_TabeTomo_075.0.jpg',
          url: 'https://reactjs.org/',
          author: 'Christian Weinschenk',
          tags: 3,
          objectID: 0,
        },
        {
          title: 'KBBQ',
          imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/_uuM4nLAurZUgK9XBO1H2w/348s.jpg",
          url: 'https://reactjs.org/',
          author: 'Christian Weinschenk',
          tags: 3,
          objectID: 1,
        },
      ];
      //setting up initial default search keyword that will show on page load we can set this to whatever we want
      const[keyWord, setKeyWord] = React.useState('');
      //setter function that when called changes the keyword, will be called when the searchbar is updated
      const executeSearch = event =>{
          setKeyWord(event.target.value);
      }
      //filters posts with titles that match our keyword (this itself is the search), this can be further updated to include tags
      const matchedPosts = dummyData.filter(post=>
        //   console.log(post.title.toLowerCase().includes(keyWord.toLowerCase()));
          post.title.toLowerCase().includes(keyWord.toLowerCase())
          ///console.log(matchedPosts);
      );
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
        </div>
      )
}

export default InitialView;