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
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 20px 0px rgba(0, 0, 0, 0.45)",
      transition: "0.3s ease-out",
      "&:hover svg": {
        opacity: 1,
      },
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
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    position: "absolute",
    height: "20px",
    width: "20px",
    top: "0",
    right: "0",
    padding: "8px",
    borderRadius: "5px",
    zIndex: "8",
    opacity: "0",
    transition: "0.3s ease-out",
  },
}

export default styles
