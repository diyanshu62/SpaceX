import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

const FilterForYear = (props) => {
  const clickYears =(e,y)=>{
    props.isClicked(e);
    
    props.handleFilterCLick(e,y,props.data);
  }
  return (
    <>
      <div className="sp-filter-launch-year-title">
        <p className="sp-para">Launch Year</p>
        {props.data && props.data.map((item,index)=>{
            return (
                    <>
                        <div className="sp-filter-option" key={index}>
                            <span className="sp-option" onClick={(event)=>{clickYears(item.year,item.isClicked)}} className={item.isClicked.toString()}>
                              {item.year}
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
    data:state.year
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
     isClicked:(year)=>{dispatch({type:"YEAR",payload:year})}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterForYear);
