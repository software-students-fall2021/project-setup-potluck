import React, { useState } from "react"

import TagContainer from "./TagContainer"
import "../styles/TagContainer.css"

// The most outer container Component, consisting of tags and the button to show/hide tags
const TagButton = () => {
  const [showTags, setShowTags] = useState(false)
  const [buttonText, setButtonText] = useState("Show Tags")

  // State to track which tags are selected - idx hardcoded (subject to change?)
  const [selectedArr, setSelectedArr] = useState([true, true, true, true])

  // Call back function to show/hide tags
  const onClick = () => {
    setShowTags(!showTags)
    setButtonText(showTags ? "Show Tags" : "Hide Tags")
  }

  return (
    <div className="tagButton">
      <input type="button" onClick={onClick} value={buttonText}></input>
      {showTags ? (
        <TagContainer
          selectedArr={selectedArr}
          setSelectedArr={setSelectedArr}
        />
      ) : null}
    </div>
  )
}

export default TagButton
