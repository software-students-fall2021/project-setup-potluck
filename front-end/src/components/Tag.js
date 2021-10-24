import React, { useState, useEffect } from "react"

import "../styles/Tag.css"

const Tag = (props) => {
  const [tagSelected, setTagSelected] = useState(true)
  const [color, setColor] = useState("#0096c7")

  useEffect(() => {
    let resultstr = tagSelected ? "selected" : "not selected"
    console.log(`${props.name} is ${resultstr}`)
  }, [tagSelected, props.name])

  const clicked = () => {
    setTagSelected(!tagSelected)
    setColor(tagSelected ? "#caf0f8" : "#0096c7")
  }

  return (
    <div
      className="tag"
      onClick={() => clicked()}
      style={{ backgroundColor: color }}
    >
      <p1>{props.name}</p1>
    </div>
  )
}

export default Tag
