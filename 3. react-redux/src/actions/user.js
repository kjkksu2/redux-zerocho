const loginRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const loginFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

const login = (data) => {
  return (dispatch, getState) => {
    dispatch(loginRequest(data));

    try {
      setTimeout(
        () => dispatch(loginSuccess({ userId: 1, nickname: "markus" })),
        2000
      );
    } catch (e) {
      dispatch(loginFailure(e));
    }
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  login,
  logout,
};
