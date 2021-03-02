import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"

const ColorBox = ({ name, background, showLink, moreURL }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-overlay-msg ${copied && "show"}`}>
          <h2>Copied {background}</h2>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
            <span className="more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
