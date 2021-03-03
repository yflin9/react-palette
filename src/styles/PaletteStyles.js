const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  PaletteColors: {
    height: "90%",
  },
  goBack: {
    height: "50%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "-3.5px",
    backgroundColor: "black",
    "& a": {
      color: "white",
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
    },
  },
}

export default styles
