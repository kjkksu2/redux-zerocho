const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const reducer = require("./reducers");

const initialState = {
  user: {
    isLoggedIn: false,
    data: null,
  },
  posts: [],
};

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const thunkMiddleware = (store) => (next) => (action) => {
  // 비동기(함수)
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  // 동기(객체)
  return next(action);
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(logger, thunkMiddleware)
    : composeWithDevTools(applyMiddleware(logger, thunkMiddleware)); // dispatch랑 reducer 사이에 실행

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
