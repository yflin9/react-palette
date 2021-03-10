import sizes from "./sizes"
const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "4rem",
    "& span": {
      [sizes.below("sm")]: {
        display: "none",
      },
    },
  },

  logo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CC5577",
    color: "#EED9BC",
    padding: "0 15px",
    marginRight: "15px",
    fontWeight: "bold",
    fontSize: "1.3rem",
    letterSpacing: "3px",
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
      outline: "none",
      backgroundColor: "#000",
      borderColor: "#000",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
    },
    [sizes.below("md")]: {
      width: "150px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "2rem",
  },
}

export default styles
