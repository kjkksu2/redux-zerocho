const initialState = {
  isLoggingIn: true,
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggingIn: true,
        data: null,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        data: action.data,
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        data: null,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggingIn: false,
        data: null,
      };
    default:
      return state;
  }
};

module.exports = userReducer;
