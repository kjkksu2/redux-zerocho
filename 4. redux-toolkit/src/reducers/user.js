const { createSlice } = require("@reduxjs/toolkit");

const { login } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  // 동기(user에 종속된 것들)(logout도 사실은 비동기다)
  reducers: {
    logout: (state, action) => {
      state.data = null;
    },
  },

  // 비동기(user 바깥에서 작동하는 것들)
  extraReducers: {
    // user/login/pending
    [login.pending]: (state, action) => {
      state.isLoggingIn = true;
    },

    // user/login/fulfilled
    [login.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoggingIn = false;
    },

    // user/login/rejected
    [login.rejected]: (state, action) => {
      state.isLoggingIn = false;
    },
  },
});

module.exports = userSlice;
