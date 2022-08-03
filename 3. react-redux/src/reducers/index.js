const { combineReducers } = require("redux");

const postReducer = require("./post");
const userReducer = require("./user");

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

module.exports = reducer;
