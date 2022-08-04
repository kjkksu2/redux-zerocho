const { produce } = require("immer");

const initialState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "LOG_IN_SUCCESS":
        draft.isLoggingIn = false;
        draft.data = action.data;
        break;
      case "LOG_IN_FAILURE":
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      case "LOG_OUT":
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      default:
        return state;
    }
  });

module.exports = userReducer;
