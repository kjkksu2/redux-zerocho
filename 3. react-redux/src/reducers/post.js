const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.data];
    default:
      return state;
  }
};

module.exports = postReducer;
