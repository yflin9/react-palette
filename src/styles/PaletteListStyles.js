import sizes from "./sizes"
import bg from "./bg.svg"

const styles = {
  "@global": {
    ".miniPalettes-exit": {
      opacity: 1,
    },
    ".miniPalettes-exit-active": {
      opacity: 0,
      transition: "0.35s ease-in",
    },
  },
  root: {
    backgroundColor: "#cc5577",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    overflow: "scroll",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.below("lg")]: {
      width: "80%",
    },
    [sizes.below("xs")]: {
      width: "60%",
    },
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& h1": {
      color: "#EED9BC",
      fontWeight: "bold",
      // fontSize: "1.3rem",
      letterSpacing: "3px",
    },
  },
  palettes: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.below("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.below("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
  addIcon: {
    fontSize: "2rem",
    textDecoration: "none",
    color: "white",
    transform: "scale(1)",
    transition: "0.3s ease-out",
    "&:hover": {
      transform: "scale(1.25)",
      transition: "0.3s ease-out",
    },
  },
}

export default styles
