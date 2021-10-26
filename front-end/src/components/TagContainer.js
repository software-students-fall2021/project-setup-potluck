import React, { useState } from "react"
import Tag from "./Tag"

import "../styles/TagContainer.css"

const TagContainer = ({ selectedArr, setSelectedArr }) => {
  // State to show / Hide tags

  return (
    <div className="tagContainer">
      <div className="row">
        <div className="col">
          <Tag
            name={"Cheap-eats"}
            selectedArr={selectedArr}
            setSelectedArr={setSelectedArr}
            idx={0}
          />
        </div>
        <div className="col">
          <Tag
            name={"Recipes"}
            selectedArr={selectedArr}
            setSelectedArr={setSelectedArr}
            idx={1}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Tag
            name={"Campus Dining"}
            selectedArr={selectedArr}
            setSelectedArr={setSelectedArr}
            idx={2}
          />
        </div>
        <div className="col">
          <Tag
            name={"Delivery"}
            selectedArr={selectedArr}
            setSelectedArr={setSelectedArr}
            idx={3}
          />
        </div>
      </div>
    </div>
  )
}

export default TagContainer
