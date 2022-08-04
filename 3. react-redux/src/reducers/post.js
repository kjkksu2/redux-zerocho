const { produce } = require("immer");

const initialState = [];

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        return state;
    }
  });

module.exports = postReducer;
