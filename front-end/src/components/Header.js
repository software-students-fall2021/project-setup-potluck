import React from "react"
import { useLocation } from 'react-router-dom';

import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {Search, PostFeed, Post} from "./FeedPage.js"
import "../styles/Header.css"
import "../styles/FeedPage.css"
// const HeaderLink = ({page}) =>{
//     const title = page.charAt(0).toUpperCase() + page.slice(1);

//     return <Link to={`/${page}`}>{title}</Link>
// }

// const Header = () =>{
//     return(
//         <div className ='header'>
//             <HeaderLink page='home' />
//             <HeaderLink page='about' />
//             <HeaderLink page='contact' />
//         </div>
//     );

// }

const Header = () => {
    //TODO: FIX USELOCATION HOOK as it is returning undefined
    // const location = useLocation();
    //use placeholder for now
    const location = "/feed";
    //Creates adjustable and stylable header columns
    //TODO: Move all styling to seperate CSS file
    //TODO: Add route handling to this Header
    return (
        <div className="myHeader" style={{ display: 'block', width: '99%'}}>
     
      <Row id= "myRow">
        <Col style={{
          
          textAlign : 'left'
        }}>
          <Button variant="primary">Account</Button>{' '}
      </Col>
        <Col style={{
         
          textAlign : 'center'
        }}>
          <img src="../Logos/TextOnlyBlack.png" height="100px"/>
      </Col>
        <Col style={{
          
          textAlign : 'right'
        }}>
           <Button variant="primary">Filter</Button>{' '}
      </Col>
      </Row>
      <PostSearch path={location}/>
    </div>
    )
}

//This component funcitons as a search function and allows you to pass the results to your own result handler components
const PostSearch = ({path}) =>{
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
      const[keyWord, setKeyWord] = React.useState('React');
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
          <div  className = "searchBar">
           {(path == "/") && <h1> Add custom search here</h1>}
           {(path =="/feed") &&  <><Search search={keyWord} onSearch={executeSearch}/>
                        <PostFeed list={matchedPosts}/> </> }
        
          </div>
      )
     


}

export default Header