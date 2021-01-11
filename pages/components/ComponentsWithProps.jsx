import React, { useState } from "react";
const TitleCounterComp = (props) => {
  return (
    <div className="sp-first-title">
      {props.content} #{props.id}
    </div>
  );
};

const TileContainer = (props) => {
  return (
    <div className="sp-tiles">
      <div className="sp-tiles-inner">{props.children}</div>
    </div>
  );
};

const FilterValue = (props) => {
  const [isClickedYear, setIsClickedYear] = useState(false);
  const [isClickedLaunch, setIsClickedLaunch] = useState(false);
  const [isClickedLanding, setIsClickedLanding] = useState(false);
  const [isClicked, setClicked] = useState(false);
 
  const handleFilterSelect = () => {
    if (props.type == "landing") {
      if(!isClickedLanding){
        props.handleFilterForYear(props.year, props.type);
      }else{
        props.handleFilterForYear("", props.type);
      }
      setIsClickedLanding(!isClickedLanding);
    } else if (props.type == "launch") {
      if(!isClickedLaunch){
        props.handleFilterForYear(props.year, props.type);
      }else{
        props.handleFilterForYear("", props.type);
      }
      setIsClickedLaunch(!isClickedLaunch);
    } else if(props.type == "year") {
      if(!isClickedYear){
        props.handleFilterForYear(props.year, props.type);
      }else{
        props.handleFilterForYear("", props.type);
      }
      setIsClickedYear(!isClickedYear);
    } else{}
    setClicked(!isClicked);
  };

  if (isClicked) {
    return (
      <span
        className="sp-option"
        style={{ cursor: "pointer",background:"#36d034" }}
        onClick={handleFilterSelect}
      >
        {props.year}
      </span>
    );
  }
  return (
    <span
      className="sp-option"
      style={{ cursor: "pointer" }}
      onClick={handleFilterSelect}
    >
      {props.year}
    </span>
  );
};

export { TitleCounterComp, TileContainer, FilterValue };
