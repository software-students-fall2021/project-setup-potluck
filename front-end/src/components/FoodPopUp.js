import React from 'react'
import "../styles/FoodPopUp.css"

const FoodPopUp = (props) => {

    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="closeButton" onClick={() => props.setTrigger(false)}>
                    close
                </button>
                { props.children }
            </div>
        </div>

    ) : ""

}

export default FoodPopUp