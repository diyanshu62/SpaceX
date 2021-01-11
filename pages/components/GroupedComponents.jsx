const Heading = () => {
  return <h2 className="sp-header" style={{margin:"7px 10px 7px 10px"}}>SpaceX Launch Programs</h2>;
};

const TitleOnFilterComp = (props) => {
  return <p className="sp-para">{props.text}</p>;
};

const FilterSectionContainerComp = (props) => {
  return <div className="sp-filter-launch-year-title">{props.children}</div>;
};

const FilterHeading = (props) => {
  return <div className="sp-filter-title">{props.title}</div>;
};

const TileMainSectionComp = (props) => {
  return <div className="sp-right-panel-container">{props.children}</div>;
};

const MainWrapper = (props) => {
  return <div className="sp-wrapper-container">{props.children}</div>;
};
const MainContainer = (props) => {
  return <div className="sp-container">{props.children}</div>;
};

const MainContainerFilter = (props) => {
  return <div className="sp-wrapper-filter">{props.children}</div>;
};

export {
  Heading,
  TitleOnFilterComp,
  FilterSectionContainerComp,
  FilterHeading,
  TileMainSectionComp,
  MainWrapper,
  MainContainer,
  MainContainerFilter,
};
