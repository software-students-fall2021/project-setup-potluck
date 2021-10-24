import React, { useState, useEffect } from "react"

import "../styles/Tag.css"

const Tag = (props) => {
  const [tagSelected, setTagSelected] = useState(true)

  useEffect(() => {
    let resultstr = tagSelected ? "selected" : "not selected"
    console.log(`${props.name} is ${resultstr}`)
  }, [tagSelected, props.name])

  return (
    <div className="tag" onClick={() => setTagSelected(!tagSelected)}>
      <p1>{props.name}</p1>
    </div>
  )
}

export default Tag
