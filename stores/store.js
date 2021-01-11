import {createStore, combineReducers} from 'redux';
import reducerYear from '../reducers/reducerForYear';
import reducerLaunch from '../reducers/reducerForLaunch';
import reducerLanding from '../reducers/reducerForLanding';
const initialYearData = [
    { year: 2006, isClicked: false },
    { year: 2007, isClicked: false },
    { year: 2008, isClicked: false },
    { year: 2009, isClicked: false },
    { year: 2010, isClicked: false },
    { year: 2011, isClicked: false },
    { year: 2012, isClicked: false },
    { year: 2013, isClicked: false },
    { year: 2014, isClicked: false },
    { year: 2015, isClicked: false },
    { year: 2016, isClicked: false },
    { year: 2017, isClicked: false },
    { year: 2018, isClicked: false },
    { year: 2019, isClicked: false },
  ];
  const initialLaunchData = [
      { launch: "true", isClicked: false },
      { launch: "false", isClicked: false },
  ];
  const initialLandingData = [
    { landing: "true", isClicked: false },
    { landing: "false", isClicked: false },
];
  
const filterData = [initialYearData,initialLaunchData,initialLandingData];
const masterReducer = combineReducers({
    year: reducerYear,
    launch: reducerLaunch,
    landing:reducerLanding,
}); 
const store = createStore(masterReducer,{"year":initialYearData, "launch":initialLaunchData,"landing":initialLandingData});
export default store;