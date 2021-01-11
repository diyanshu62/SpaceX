
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
          value={item.mission_id && item.mission_id.length != 0 ? item.mission_id[0] : "Data not available"}
        />
        <TitleContentComp title="Launch year:" value={item.launch_year} />
        <TitleContentComp
          title="Successful Launch:"
          value={item.launch_success ? "true" : "false"}
        />
        {
           (item && item.rocket && item.rocket.first_stage && item.rocket.first_stage.cores && item.rocket.first_stage.cores[0] ) ?
           (
            item.rocket.first_stage.cores[0].land_success == null ?
            (<TitleContentComp title="Successful Landing:" value={"Data not available"} />) :
              <TitleContentComp title="Successful Landing:" value={item.rocket.first_stage.cores[0].land_success.toString()} />
           ) :<TitleContentComp title="Successful Landing:" value={"Data not available"} />
          
        }
        
      </TileContainer>
    );
  };


  export default Display;