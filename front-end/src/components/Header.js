import React, { useState, useEffect }  from "react"
import { Link, useHistory } from "react-router-dom"
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

const Header = ({username, isChecked, setIsChecked, keyWord, setKeyWord}) => {
    //TODO: FIX USELOCATION HOOK as it is returning undefined
    // const location = useLocation();
    //use placeholder for now
    const location = "/feed";
    //Creates adjustable and stylable header columns
    //TODO: Move all styling to seperate CSS file
    //TODO: Add route handling to this Header

    let history = useHistory()


    const handleLogin = () => {
      console.log('logging out')
      history.push('/login')
    }

    const handleLogout = () => {
      console.log('logging out')
      history.push('/logout')
    }
    if (username) 
      return (
        <div className="myHeader" style={{ display: 'block', width: '99%'}}>
          <Row id= "myRow">
            <Col style={{
              textAlign : 'left'
            }}>
              Logged in as {username}
          </Col>
            <Col style={{
            
              textAlign : 'center'
            }}>
              <img src="../Logos/TextOnlyBlack.png" height="50px"/>
          </Col>
            <Col style={{
              textAlign : 'right'
            }}>
            <Button onClick={handleLogout}>Logout</Button>
          </Col>
          </Row>
          <PostSearch path={location} isChecked={isChecked} setIsChecked={setIsChecked} keyWord={keyWord} setKeyWord={setKeyWord} />
        </div>
      ) 
      else return (
        <div className="myHeader" style={{ display: 'block', width: '99%'}}>
          <Row id= "myRow">
            <Col style={{
              textAlign : 'left'
            }}>
          </Col>
            <Col style={{
            
              textAlign : 'center'
            }}>
              <img src="../Logos/TextOnlyBlack.png" height="50px"/>
          </Col>
            <Col style={{
              textAlign : 'right'
            }}>
            <Button onClick={handleLogin}>Login</Button>
          </Col>
          </Row>
          <PostSearch path={location}/>
        </div>
      )
}



//This component funcitons as a search function and allows you to pass the results to your own result handler components
const PostSearch = ({path}) =>{
  //Fake Data that will be replaced by our API Call
  const [posts, setPosts] = useState([])
  
  //setting up initial default search keyword that will show on page load we can set this to whatever we want
  const[keyWord, setKeyWord] = React.useState('');
  
  // Makes GET API call and sets data
  useEffect( () => {
    
    const initializePosts= async () => {
      //promise based request to query backend for posts
      
       await fetch("http://143.198.119.5:3001/search").then(response => response.json())
       .then(data => {console.log(data);
        setPosts(data)
      })
  
      console.log(posts) 
    }
    initializePosts()

    let savedKeyWord = JSON.parse(localStorage.getItem('keyword'))
    if (savedKeyWord) {setKeyWord(savedKeyWord)}
    else {setKeyWord("")}
    
  }, [])
  
    
    //setter function that when called changes the keyword, will be called when the searchbar is updated
    const executeSearch = event =>{
        setKeyWord(event.target.value);
    }

    

    //filters posts with titles that match our keyword (this itself is the search), this can be further updated to include tags
    const matchedPosts = posts.filter(post=>
      //   console.log(post.title.toLowerCase().includes(keyWord.toLowerCase()));
        post.parentRestaurant[0].name.toLowerCase().includes(keyWord.toLowerCase())
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
