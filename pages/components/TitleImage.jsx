<<<<<<< HEAD
const TileImageComp = (props) => {
  if(!props.src){
    return <div className="sp-img-wrapper">
              <img src="no-image.png" />
           </div>
  }
    return (
      <div className="sp-img-wrapper">
        <img src={props.src} />
      </div>
    );
  };

=======
const TileImageComp = (props) => {
  if(!props.src){
    return <div className="sp-img-wrapper">
              <img src="no-image.png" />
           </div>
  }
    return (
      <div className="sp-img-wrapper">
        <img src={props.src} />
      </div>
    );
  };

>>>>>>> f6e38f2dcf27319d2246233527a7390d4cb7a56e
  export default TileImageComp;