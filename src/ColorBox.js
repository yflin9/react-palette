import React, { useState } from "react"
import { Link } from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import styles from "./styles/ColorBoxStyles"
import { withStyles } from "@material-ui/styles"

const ColorBox = ({ name, background, fullPalette, moreURL, classes }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      <CopyToClipboard text={background} onCopy={handleCopy}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
          ></div>
          <div
            className={`${classes.overlayMsg} ${
              copied && classes.showOverlayMsg
            }`}
          >
            <h2 className={classes.copyText}>{background}</h2>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyBtn} onClick={handleCopy}>
              Copy
            </button>
          </div>
          {fullPalette && (
            <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
              <span className={classes.moreBtn}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={copied}
        autoHideDuration={3000}
        message={<span>Copied to Clipboard!</span>}
        onClose={() => setCopied(false)}
        action={[
          <IconButton
            key="close"
            color="inherit"
            onClick={() => setCopied(false)}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </>
  )
}

export default withStyles(styles)(ColorBox)
