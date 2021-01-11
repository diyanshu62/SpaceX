const reducerYear = (state = [], action) => {
   // console.log(state);
  if (action.type == "YEAR") {
    state.map((item, index) => {
      if (item.year == action.payload) {
        item.isClicked = !item.isClicked;
      } else {
        item.isClicked = false;
      }
    });
  }

  return state;
};

export default reducerYear;
