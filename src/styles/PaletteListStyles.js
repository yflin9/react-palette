const styles = {
  root: {
    backgroundColor: "rgba(0,0,0,0.1)",
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
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  palettes: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
  addIcon: {
    fontSize: "2rem",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "black",
      transition: "0.3s ease-in-out",
    },
  },
}

export default styles
