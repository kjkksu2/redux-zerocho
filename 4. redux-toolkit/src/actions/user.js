const { createAsyncThunk } = require("@reduxjs/toolkit");

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

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });

const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);

  const result = await delay(500, {
    userId: 1,
    nickname: "markus",
  });

  return result;
});

module.exports = { login };
