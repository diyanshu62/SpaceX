const reducerLanding = (state = [], action) => {
   // console.log(state);
    if (action.type == "LANDING") {
      state.map((item, index) => {
        if (item.landing == action.payload) {
          item.isClicked = !item.isClicked;
        } else {
          item.isClicked = false;
        }
      });
    }
    return state;
  };
  
  export default reducerLanding;
  