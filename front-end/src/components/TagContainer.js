import React, { useState } from "react"
import Tag from "./Tag"

import "../styles/TagContainer.css"

// This Component contains all tags, which are (unfortunately) hard coded
// for ease of alignment.
// TO-DO: Figure out CSS styling, so that we can display Tags with selectedArr.map()
// rather than hard coded
const TagContainer = ({ selectedArr, setSelectedArr }) => {
  return (
    <div className="tagContainer">
      <div className="row">
        <div className="col">
          {/* Hard code index for each tag, to access selectedArr */}
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
