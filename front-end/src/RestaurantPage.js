import "./RestaurantPage.css"
import Button from "./components/BackButton.js"
import FoodContainer from "./components/FoodContainer2x2.js"
import BiggerContainer from "./components/BiggerContainer.js"

const RestaurantPage = () => {
    return (
        <div className="restaurantPage">

            <div className="topMost" >
                <Button></Button>
            </div>

            <div className="dishImage">
                <img className="dishPic" src="https://picsum.photos/0/200" alt="new"></img>
            </div>

            <div className="restaurantInfo">
                <div className="restaurantNameAddr">
                    <h2>Name_of_Restaurant</h2>
                    <h4>Address_of_Restaurant (240 W 40th St)</h4>
                    <h4>Contact (929-9299-9929)</h4>
                    <h6>Number of Posts: 5,241</h6>
                </div>
                <div>
                    <img src="https://picsum.photos/250/250" alt="new" className="roundedCorners"></img>
                </div>
            </div>

            <div className="mostPopularDishses">
                <h1 className="indent">Popular Dishes:</h1>
                <FoodContainer></FoodContainer>
            </div>

            <div className="mainDishes">
                <h1 className="indent">Main Dishes:</h1>
                <BiggerContainer></BiggerContainer>
            </div>

            <div className="beverages">
                <h1 className="indent">Beverages:</h1>
                <FoodContainer></FoodContainer>
            </div>
        </div>
    )
    

}

export default RestaurantPage