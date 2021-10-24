import React, { useState } from "react"
import Tag from "./Tag"

const TagContainer = () => {
  const [tags, setTags] = useState(["Tag1", "Tag2", "Tag3"])

  return (
    <div className="tagContainer">
      {tags.map((name) => (
        <Tag name={name} />
      ))}
    </div>
  )
}

export default TagContainer
