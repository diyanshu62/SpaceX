
const Loader = () => {
  const styles = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100vh",
    textAlign: "center",
    lineHeight: "100vh",
    backgroundColor: "rgb(43, 43, 43, 0.8)",
    color:"#FFFFFF",
    fontSize:"30px",
    zIndex:"99999",
  };

  return <div style={styles}>Fetching....</div>;
};

export default Loader;
