import chroma from "chroma-js"
import sizes from "./sizes"
const styles = {
  ColorBox: {
    height: (props) => (props.fullPalette ? "25%" : "50%"),
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s",
    },
    [sizes.below("lg")]: {
      height: (props) => (props.fullPalette ? "20%" : "30%"),
      width: "25%",
    },
    [sizes.below("md")]: {
      height: (props) => (props.fullPalette ? "10%" : "20%"),
      width: "50%",
    },
    [sizes.below("xs")]: {
      height: (props) => (props.fullPalette ? "5%" : "10%"),
      width: "100%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    left: "0",
    padding: "10px",
    color: "#000",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.09 ? "white" : "black",
  },
  moreBtn: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
    width: "60px",
    height: "30px",
    position: "absolute",
    right: "0",
    bottom: "0",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "0.75rem",
    lineHeight: "30px",
  },
  copyBtn: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
    display: "inline-block",
    width: "100px",
    height: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    lineHeight: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",
    opacity: 0,
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
  },
  showOverlay: {
    position: "absolute",
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
  },
  overlayMsg: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textTransform: "uppercase",
    opacity: "0",
    fontSize: "2rem",
    transform: "scale(0.0001)",
  },
  showOverlayMsg: {
    display: "flex",
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.2s",
  },
}

export default styles
