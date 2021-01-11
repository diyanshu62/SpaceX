 
const TitleContentComp = (props) => {
    return (
      <div className="sp-tile-content">
        <span className="sp-span-title">{props.title} </span>
        <span className="sp-span-text">{props.value}</span>
      </div>
    );
  };

  export default TitleContentComp;