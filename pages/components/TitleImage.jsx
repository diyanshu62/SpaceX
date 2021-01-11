
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

export default TileImageComp;