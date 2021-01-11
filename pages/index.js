import React, { useState } from "react";
import axios from 'axios';
import Loader from "./components/Loader";
import URL from './components/URL';
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
import {
  FilterValue
} from './components/ComponentsWithProps';
import Display from './components/TileDisplayContentComp';

/* Main component here */
const Home = (prop) => {
  const [data, setData] = useState(prop.data);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState({"year":"","launch":"","landing":""});

  function handleFilter(param, type) {
    var url = "";
    if(type == "year" && param == ""){
      url = URL;
      setFilter({...filter})
    } else if(type == "year" && param != ""){
      url = URL +"?launch_year="+param;
      setFilter({"year":param,...filter});
    } else{}

    if(type == "launch" && param ==  ""){
      url = URL;
      setFilter({...filter})
    } else if(type == "launch" && (param === "True" || param === "False")){
      url = URL+"?launch_success=" +param.toLowerCase();
      setFilter({"launch":param,...filter});
    } else{}

    if(type == "landing" && param ==  ""){
      url = URL;
      setFilter({...filter})
    } else if(type == "landing" && (param === "True" || param === "False"))  {
      url = URL+"?land_success=" +param.toLowerCase();
      setFilter({"landing":param,...filter});
    } else{}
    
    setIsFetching(true);
    axios.get(url)
      .then(res => {
        setData(res.data);
        setIsFetching(false);
      })
      .catch((err)=>{
        throw(err);
      });
  }

  return (
    <MainWrapper>
      {isFetching ? <Loader /> : ""}
      <Heading />
      <MainContainer>
        <MainContainerFilter>
          <FilterHeading title="Filters" />
          <FilterSectionContainerComp>
            <TitleOnFilterComp text="Launch Year" />
            <div className="sp-filter-option">
              <FilterValue year="2006" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2007" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2008" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2009" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2010" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2011" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2012" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2013" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2014" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2015" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2016" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2017" type="year" handleFilterForYear={handleFilter} />
            </div>
            <div className="sp-filter-option">
              <FilterValue year="2018" type="year" handleFilterForYear={handleFilter} />
              <FilterValue year="2019" type="year" handleFilterForYear={handleFilter} />
            </div>
          </FilterSectionContainerComp>
          <FilterSectionContainerComp>
            <TitleOnFilterComp text="Successful Launch" />
            <div className="sp-filter-option">
              <FilterValue year="True" type="launch"  handleFilterForYear={handleFilter} />
              <FilterValue year="False" type="launch" handleFilterForYear={handleFilter} />
            </div>
          </FilterSectionContainerComp>
          <FilterSectionContainerComp>
            <TitleOnFilterComp text="Successful Landing" />
            <div className="sp-filter-option">
              <FilterValue year="True" type="landing" handleFilterForYear={handleFilter} />
              <FilterValue year="False" type="landing" handleFilterForYear={handleFilter} />
            </div>
          </FilterSectionContainerComp>
        </MainContainerFilter>
        <TileMainSectionComp>
          {data.length > 0 ? data.map(Display) : "No records"}
        </TileMainSectionComp>
      </MainContainer>
    </MainWrapper>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    URL
  );
  const data = await res.json();
  return {
    props: { data: data },
  };
}

export default Home;
