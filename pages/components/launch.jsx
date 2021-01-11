import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

const FilterForLaunch= (props) => {
  const clickLaunch =(e,y)=>{
    props.isClicked(e);
    props.handleFilterCLick(e,y,props.data);
  }
  return (
    <>
      <div className="sp-filter-launch-year-title">
        <p className="sp-para">Successful Launch</p>
        {props.data && props.data.map((item,index)=>{
            return (
                    <>
                        <div className="sp-filter-option" key={index}>
                            <span className="sp-option" onClick={(event)=>{clickLaunch(item.launch,item.isClicked)}} className={item.isClicked.toString()}>
                              {item.launch== "true"?"Ture":"False"}
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
    data:state.launch
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
     isClicked:((launch)=>{dispatch({type:"LAUNCH",payload:launch})})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterForLaunch);
