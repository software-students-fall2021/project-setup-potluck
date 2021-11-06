import "../styles/BiggerContainer.css"
import FoodPopUp from "./FoodPopUp.js"
import { useState } from 'react'

const BiggerContainer = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    return (
        <div class="grid">
            <br></br>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
            <div classname="mainDishSpace"><button onClick={() => setButtonPopUp(true)}><img src="https://picsum.photos/200/200" alt="first" className="rounded2"></img></button><FoodPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}><h1>Name_Of_Food</h1><p>space for recipe + nutrtional content</p></FoodPopUp><div className="cent">Name_of_Food</div></div>
        </div>
    )
}
export default BiggerContainer