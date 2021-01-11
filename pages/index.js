import React, { useState } from "react";
import axios from "axios";

import Loader from "./components/Loader";
import {
  Heading,
  TitleOnFilterComp,
  FilterSectionContainerComp,
  FilterHeading,
  TileMainSectionComp,
  MainWrapper,
  MainContainer,
  MainContainerFilter,
} from "./components/GroupedComponents";
import FilterForYear from "./components/Years";
import FilterForLaunch from "./components/launch";
import FilterForLanding from "./components/landing";
import { FilterValue } from "./components/ComponentsWithProps";
import Display from "./components/TileDisplayContentComp";
const URL = "https://api.spaceXdata.com/v3/launches?";
// Data objects only for setting up non reactive flags
var queryParamsLaunch = "";
var queryParamsLanding = "";
var queryParamsYear = "";
var whichFilter = "";

/* Main component here */

const Home = (prop) => {
  const [data, setData] = useState(prop.data);
  const [isFetching, setIsFetching] = useState(false);

  function handleFilter(param, type, filterKeys) {
    setIsFetching(true);
    axios
      .get(CreateFilterURL(param, type, filterKeys))
      .then((res) => {
        setData(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <>
    <MainWrapper>
      <div className="sp-filter-list">Filter applied: {} </div>
      {isFetching ? <Loader /> : ""}
      <Heading />
      <MainContainer>
        <MainContainerFilter>
          <FilterHeading title="Filters"></FilterHeading>
          <FilterSectionContainerComp>
            <FilterForYear handleFilterCLick={handleFilter} />
            <FilterForLaunch handleFilterCLick={handleFilter} />
            <FilterForLanding handleFilterCLick={handleFilter} />
          </FilterSectionContainerComp>
        </MainContainerFilter>
        <TileMainSectionComp>
          {data.length > 0 ? data.map(Display) : "No records"}
        </TileMainSectionComp>
      </MainContainer>
    </MainWrapper>
    <div className="sp-credits">Designed By: <a href="https://github.com/diyanshu62">Divyanshu Pandey</a></div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(URL);
  const data = await res.json();
  return {
    props: { data: data },
  };
}

function CreateFilterURL(param, type, data) {
  var keyData = tabFilter(data);
  if (whichFilter == "year") {
    if (keyData.length != 0) {
      queryParamsYear = "&launch_year=" + keyData[0].year;
      localStorage.setItem("year", "&launch_year=" + keyData[0].year); // TODO: this is just for ref
    } else {
      queryParamsYear = "";
      localStorage.removeItem("year");
    }
  } else if (whichFilter == "launch") {
    if (keyData.length != 0) {
      queryParamsLaunch = "&launch_success=" + keyData[0].launch;
      localStorage.setItem("launch", "&launch_success=" + keyData[0].launch); // TODO: this is just for ref
    } else {
      queryParamsLaunch = "";
      localStorage.removeItem("launch");
    }
  } else if (whichFilter == "landing") {
    if (keyData.length != 0) {
      queryParamsLanding = "&land_success=" + keyData[0].landing;
      localStorage.setItem("landing", "&land_success=" + keyData[0].landing); // TODO: this is just for ref
    } else {
      queryParamsLanding = "";
      localStorage.removeItem("landing");
    }
  } else {
    /* Resetting all flags */
    queryParamsLaunch = "";
    queryParamsLanding = "";
    queryParamsYear = "";
    whichFilter = "";
    localStorage.removeItem("landing");
    localStorage.removeItem("launch");
    localStorage.removeItem("year");
  }

  return URL + queryParamsLaunch + queryParamsLanding + queryParamsYear;
}

function tabFilter(data) {
  var key = data.filter((item) => {
    if (item.hasOwnProperty("year")) {
      whichFilter = "year";
      return item.isClicked == true;
    } else if (item.hasOwnProperty("launch")) {
      whichFilter = "launch";
      return item.isClicked == true;
    } else if (item.hasOwnProperty("landing")) {
      whichFilter = "landing";
      return item.isClicked == true;
    } else {
      whichFilter = "";
    }
  });
  return key;
}

export default Home;
