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
const PostSearch = ({path, isChecked, setIsChecked, keyWord, setKeyWord}) =>{
    //Fake Data that will be replaced by our API Call
    const [posts, setPosts] = useState([])
    const handleChange = () =>{
      setIsChecked(!isChecked);
      console.log("checked" + isChecked)
    }
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
      
      // initializePosts()
  
    
    }, [])
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

      //setter function that when called changes the keyword, will be called when the searchbar is updated
      const executeSearch = event =>{
          setKeyWord(event.target.value);
      }
      //filters posts with titles that match our keyword (this itself is the search), this can be further updated to include tags
      const matchedPosts = posts.filter(post=>
        //   console.log(post.title.toLowerCase().includes(keyWord.toLowerCase()));
          post.title.toLowerCase().includes(keyWord.toLowerCase())
          ///console.log(matchedPosts);
      );
      // Restaurant
      const matchedPostsR = posts.filter(post=>
        //   console.log(post.title.toLowerCase().includes(keyWord.toLowerCase()));
          post.parentRestaurant.name.toLowerCase().includes(keyWord.toLowerCase())
          ///console.log(matchedPosts);
      );

      const mychange = function(){
        
      }

    const ConditionalSearch = () => {
      if (isChecked) {
        return (
          <><Search search={keyWord} onSearch={executeSearch}/>
                        <PostFeed list={matchedPosts}/> </>
        )
      } else {
        return (
          <><Search search={keyWord} onSearch={executeSearch}/>
                        <PostFeed list={matchedPostsR}/> </>
        )
      }
    }

    //passes search functionality to Search child component and search results to PostFeed
      return(
          <div  className = "searchBar">
           {(path == "/") && <h1> Add custom search here</h1>}
           <ConditionalSearch />
            <input type="checkbox" checked={isChecked} onChange={handleChange}></input>
          </div>
      )

}

export default Header