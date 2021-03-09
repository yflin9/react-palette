import { makeStyles } from "@material-ui/core/styles"
import { DRAWER_WIDTH } from "../constants"

const drawerWidth = DRAWER_WIDTH

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navBtns: {
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginLeft: "1rem",
    },
  },
}))

export default useStyles
