const TitleMissionComp = (props) => {
    return (
      <div className="sp-tile-content-flex-0">
        <span className="sp-span-title-flex-0">{props.title} </span>
        <span className="sp-span-text-flex-0">
          <ul className="sp-margin-0">
            <li>{props.value}</li>
          </ul>
        </span>
      </div>
    );
  };

  export default TitleMissionComp;