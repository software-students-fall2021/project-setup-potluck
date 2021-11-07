import "../styles/FoodContainer2x2.css"
import FoodPopUp from "./FoodPopUp.js"
import { useState } from 'react'

const FoodContainer2x2 = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    return (
        <div class="grid2x2">
            <figure><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded"></img></button><figcaption className="textUnder">Name_of_Food</figcaption></figure><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp>
            <figure><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded"></img></button><figcaption className="textUnder">Name_of_Food</figcaption></figure><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp>
            <figure><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded"></img></button><figcaption className="textUnder">Name_of_Food</figcaption></figure><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp>
            <figure><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded"></img></button><figcaption className="textUnder">Name_of_Food</figcaption></figure><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp>
        </div>
    )
}
export default FoodContainer2x2