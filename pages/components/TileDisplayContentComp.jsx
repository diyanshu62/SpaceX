
import {
    TitleCounterComp, 
    TileContainer, 
    } from '../components/ComponentsWithProps';
    
import TileImageComp from '../components/TitleImage';
import TitleMissionComp from '../components/TitleMission';
import TitleContentComp from '../components/TitleContent';

const Display = (item, index) => {
    return (
      <TileContainer key={index}>
        <TileImageComp src={item.links?item.links.mission_patch:""} />
        <TitleCounterComp content={item.mission_name} id={item.flight_number} />
        <TitleMissionComp
          title="Mission ID:"
          value={item.mission_id ? item.mission_id[0] : "Null"}
        />
        <TitleContentComp title="Launch year:" value={item.launch_year} />
        <TitleContentComp
          title="Successful Launch:"
          value={item.launch_success ? "true" : "false"}
        />
        <TitleContentComp
          title="Successful Landing:"
          value={item.launch_success ? "No Data" : "Null"}
        />
      </TileContainer>
    );
  };


  export default Display;