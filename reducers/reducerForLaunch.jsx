const reducerLaunch = (state = [], action) => {
   // console.log(state);
  if (action.type == "LAUNCH") {
    state.map((item, index) => {
      if (item.launch == action.payload) {
        item.isClicked = !item.isClicked;
      } else {
        item.isClicked = false;
      }
    });
  }
  return state;
};

export default reducerLaunch;
