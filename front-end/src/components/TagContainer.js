import React, { useState } from "react"
import Tag from "./Tag"

import "../styles/TagContainer.css"

const TagContainer = () => {
  const [tags, setTags] = useState(["Tag1", "Tag2", "Tag3"])

  return (
    <div className="tagContainer">
      <div className="row">
        <div className="col">
          <Tag name={"Cheap-eats"} />
        </div>
        <div className="col">
          <Tag name={"Recipes"} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Tag name={"Campus Dining"} />
        </div>
        <div className="col">
          <Tag name={"Delivery"} />
        </div>
      </div>
    </div>
  )
}

export default TagContainer
