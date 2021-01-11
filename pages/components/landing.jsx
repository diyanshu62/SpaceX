import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

const FilterForLanding= (props) => {
  const clickLanding =(e,y)=>{
    props.isClicked(e);
    props.handleFilterCLick(e,y,props.data);
  }
  return (
    <>
      <div className="sp-filter-launch-year-title">
        <p className="sp-para">Successful Landing</p>
        {props.data && props.data.map((item,index)=>{
            return (
                    <>
                        <div className="sp-filter-option" key={index}>
                            <span className="sp-option" onClick={(event)=>{clickLanding(item.landing,item.isClicked)}} className={item.isClicked.toString()}>
                              {item.landing== "true"?"Ture":"False"}
                            </span>
                        </div>
                    </>
                )
        })}
      </div>
    </>
  );
};


const mapStateToProps = (state)=>{
  return {
    data:state.landing
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
     isClicked:((landing)=>{dispatch({type:"LANDING",payload:landing})})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterForLanding);
