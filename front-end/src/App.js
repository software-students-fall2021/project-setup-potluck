import "./App.css"

// Import components
import TagButton from "./components/TagButton"
import PostPage from "./components/FeedPage.js"
import "bootstrap/dist/css/bootstrap.css"
import InitialView from "./components/InitialView"
import Header from "./components/Header.js"
import Map from "./components/Map.js"
import Login from "./components/Login"
import RestaurantPage from "./components/RestaurantPage"
function App() {
  return (
    <div>
      <InitialView />

      <PostPage />
      <Header />
      <TagButton />
      <Login />
      <RestaurantPage />
      <Map />
    </div>
  )
}

export default App
