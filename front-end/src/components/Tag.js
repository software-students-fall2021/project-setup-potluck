import React, { useState, useEffect } from "react"

import "../styles/Tag.css"

const Tag = ({ name, selectedArr, setSelectedArr, idx }) => {
  const [color, setColor] = useState(selectedArr[idx] ? "#0096c7" : "#caf0f8")

  useEffect(() => {
    let resultstr = selectedArr[idx] ? "selected" : "not selected"
    console.log(`${name} is ${resultstr}`)
  })

  const clicked = () => {
    setColor(selectedArr[idx] ? "#caf0f8" : "#0096c7")
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
