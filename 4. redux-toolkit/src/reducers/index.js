const { combineReducers } = require("redux");

const postSlice = require("./post");
const userSlice = require("./user");

const reducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});

module.exports = reducer;
