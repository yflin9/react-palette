const styles = {
  root: {
    backgroundColor: "#eee",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    transform: "scale(1)",
    boxShadow: "0 0 0px 0px rgba(0, 0, 0, 0.45)",
    transition: "0.3s ease-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
      boxShadow: "0 0 20px 0px rgba(0, 0, 0, 0.45)",
      transition: "0.3s ease-out",
    },
  },
  colors: {
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
  },
}

export default styles
