import { listClasses, ListItem } from "@mui/material";
import React from "react"
import "../styles/FeedPage.css"
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";



// const PostPage = () =>{
//     //Fake Data that will be replaced by our API Call
//     const dummyData = [
//         {
//           title: 'Ramen',
//           imageURL: 'https://cdn.vox-cdn.com/thumbor/JxSROcKD03BBywyMP50lG8U7FFk=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63017335/L_Palmberg_TabeTomo_075.0.jpg',
//           url: 'https://reactjs.org/',
//           author: 'Christian Weinschenk',
//           tags: 3,
//           objectID: 0,
//         },
//         {
//           title: 'KBBQ',
//           imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/_uuM4nLAurZUgK9XBO1H2w/348s.jpg",
//           url: 'https://reactjs.org/',
//           author: 'Christian Weinschenk',
//           tags: 3,
//           objectID: 1,
//         },
//       ];
//       //setting up initial default search keyword that will show on page load we can set this to whatever we want
//       const[keyWord, setKeyWord] = React.useState('Search Here');
//       //setter function that when called changes the keyword, will be called when the searchbar is updated
//       const executeSearch = event =>{
//           setKeyWord(event.target.value);
//       }
//       //filters posts with titles that match our keyword (this itself is the search), this can be further updated to include tags
//       const matchedPosts = dummyData.filter(post=>
//         //   console.log(post.title.toLowerCase().includes(keyWord.toLowerCase()));
//           post.title.toLowerCase().includes(keyWord.toLowerCase())
//           ///console.log(matchedPosts);
//       );
//     //passes search functionality to Search child component and search results to PostFeed
//       return(
//           <div>
//               <h1>Put the Navbar Here</h1>

//               <Search search={keyWord} onSearch={executeSearch}/>
//               <PostFeed list={matchedPosts}/>
//           </div>
//       )
     


// }

//Search component that recieves the search keyword and the search function itself is called every time the input changes
export const Search = ({search, onSearch}) =>(
<div>
    <label htmlFor="search">Search:</label>
    {/* <input
    id="search"
    type="text"
    value={search}
    onChange={onSearch}
    /> */}
    {/* <InputGroup className="mb-3">
    <InputGroup.Text id="search">@</InputGroup.Text>
    <FormControl onChange={onSearch} value={search}></FormControl>
    </InputGroup> */}
    <InputGroup className="mb-3">
    {/* <InputGroup.Text id="inputGroup-sizing-sm">None</InputGroup.Text> */}
    
      <FormControl aria-describedby="basic-addon1" onChange={onSearch} value={search} aria-label="Small" aria-describedby="inputGroup-sizing-sm"></FormControl>
      
  </InputGroup>
  

</div>

);
//The feed passes all of the search results to individual posts and displays them
export const PostFeed = ({list}) =>{
    
    return(<div className={"myFeed"}>
    {list.map(item => <Post key={item.objectID} item={item} />)}
    </div>)
}
//Individual posts take all the details about the post and display them.
export const Post = ({ item })=>(

  
      
        

                <Card className={"myPost"} key ={item.objectID}>
                
                <Card.Img  className={"rImage"}src={item.imageURL}></Card.Img>

                <div className ={"postName"}> <a href={item.url}>{item.title}</a></div>
                <span>{item.author}</span>
                <span>{item.tags}</span>
                </Card>
           
       
     
    );



//export default PostPage;