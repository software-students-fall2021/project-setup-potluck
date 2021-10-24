import React, { useState } from "react"

import TagContainer from "./TagContainer"

const TagButton = () => {
  const [showTags, setShowTags] = useState(false)
  const [buttonText, setButtonText] = useState("Show Tags")
  const [selectedArr, setSelectedArr] = useState([true, true, true, true])

  const onClick = () => {
    setShowTags(!showTags)
    setButtonText(showTags ? "Show Tags" : "Hide Tags")
  }
  return (
    <div>
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
