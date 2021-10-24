import React, { useState } from "react"

import TagContainer from "./TagContainer"

const TagButton = () => {
  const [showTags, setShowTags] = useState(false)
  const [buttonText, setButtonText] = useState("Show Tags")
  const [hidden, setHidden] = useState("hidden")

  const onClick = () => {
    setShowTags(!showTags)
    setButtonText(showTags ? "Show Tags" : "Hide Tags")
    setHidden(showTags ? "undefined" : "hidden")
  }
  return (
    <div>
      <input type="button" onClick={onClick} value={buttonText}></input>
      {showTags ? <TagContainer /> : null}
    </div>
  )
}

export default TagButton
