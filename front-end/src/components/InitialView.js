import { listClasses, ListItem } from "@mui/material";
import React from "react"
import { Link } from 'react-router-dom';
import "../styles/FeedPage.css"
import "../App.css"

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

            <h1 class="headerText" style={{textAlign: 'center', fontSize: '75px'}}>
                What is Potluck?
            </h1>   
            <p style={{fontFamily: 'Bebas Neue', textAlign: 'center', fontSize: '25px'}}>
                Input text here
            </p>
            <Search search={keyWord} onSearch={executeSearch}/>
            <br></br>
            <PostFeed list={matchedPosts}/>
        </div>
      )
}

//Search component that recieves the search keyword and the search function itself is called every time the input changes
export const Search = ({search, onSearch}) =>(
<div>
    <label htmlFor="search">Search:</label>
    <input
    id="search"
    type="text"
    value={search}
    onChange={onSearch}
    />
</div>

);
//The feed passes all of the search results to individual posts and displays them
export const PostFeed = ({list}) =>
    list.map(item => <Post key={item.objectID} item={item} />);

//Individual posts take all the details about the post and display them.
export const Post = ({ item })=>(

    <div>
    
        <div key ={item.objectID}>
        <span>
        <a href={item.url}>{item.title}</a>
        </span>
        <span>
        <img src={item.imageURL}></img>
        </span>
        <span>{item.author}</span>
        <span>{item.tags}</span>
        </div> 
    
    </div>
);

export default InitialView;