import React from "react"
import TwitterIcon from "../images/twitter.svg"
import FbIcon from "../images/facebook.svg"
import "./share.css"

const Share = props => {
  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title} by @intlspace`

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}`

  return (
    <div>
      <h3 className="center">Share</h3>
      <ul className="social">
        <li>
          <a href={fb} target="blank">
            <FbIcon />
          </a>
        </li>
        <li>
          <a href={twitter} target="blank">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share
