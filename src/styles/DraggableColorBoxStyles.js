import sizes from "./sizes"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  root: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-5.5px",
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    },
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
      transition: "0.25s ease-in",
    },
    [sizes.below("lg")]: {
      height: "20%",
      width: "25%",
    },
    [sizes.below("md")]: {
      height: "10%",
      width: "50%",
    },
    [sizes.below("xs")]: {
      height: "5%",
      width: "100%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    left: "0",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(0, 0, 0, 0.5)",
    transform: "scale(1)",
    transition: "0.25s ease-out",
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

export default useStyles
