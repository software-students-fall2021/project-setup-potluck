import "./App.css"

// Import components
import TagButton from "./components/TagButton"
// import NavBar from "./components/NavBar"
import SampleComponent from "./components/SampleComponent"
import PostPage from "./components/FeedPage.js"
function App() {
  return (
    
    <div>
      {/* 
      <TagButton className="tagButton" />
      <h1>Example Text</h1>
      <p1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nulla
        placerat, viverra metus a, faucibus magna. Pellentesque feugiat erat in
        eros finibus, non feugiat massa eleifend. Mauris ut leo lorem. Praesent
        vestibulum porta mi, ac gravida ante mollis nec. Morbi et venenatis
        odio, eget accumsan augue. Aenean vitae quam a diam interdum euismod. Ut
        tincidunt varius neque, at fermentum diam molestie sit amet. In vel est
        orci. Integer viverra ut quam quis vestibulum. Nunc in maximus leo, a
        venenatis mi. Vivamus mollis faucibus auctor. Quisque iaculis placerat
        dictum.
      </p1> */}
      {/* Uncomment postpage to see the post page route for now */}
      <PostPage/>
    
    </div>
  )
}

export default App
