import React, { useState, useEffect } from "react"

import "../styles/Tag.css"

// This Component displays the name of each Tag
// It is colored dark blue if the Tag is selected, light blue when it is unselected
const Tag = ({ name, selectedArr, setSelectedArr, idx }) => {
  // State to keep track of Hex code for this Tag's color
  const [color, setColor] = useState(selectedArr[idx] ? "#0096c7" : "#caf0f8")

  // Hook to log if this Tag is selected or not into the console
  useEffect(() => {
    let resultstr = selectedArr[idx] ? "selected" : "not selected"
    console.log(`${name} is ${resultstr}`)
  })

  // Callback-function to change color of tag when selected,
  // and also update the selectedArr state
  const clicked = () => {
    setColor(selectedArr[idx] ? "#caf0f8" : "#0096c7")

    // Change and update selectedArr
    let temp = [...selectedArr]
    temp[idx] = !selectedArr[idx]
    setSelectedArr(temp)
  }

  return (
    <div
      className="tag"
      onClick={() => clicked()}
      style={{ backgroundColor: color }}
    >
      <p1>{name}</p1>
    </div>
  )
}

export default Tag
