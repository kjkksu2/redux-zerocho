const { createStore, applyMiddleware } = require("redux");

const reducer = require("./reducers");
const { login, logout } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggedIn: true,
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

const enhancer = applyMiddleware(logger, thunkMiddleware); // dispatch랑 reducer 사이에 실행

const store = createStore(reducer, initialState, enhancer);

store.dispatch(
  login({
    id: 1,
    name: "markus",
    admin: true,
  })
);
console.log(store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요.",
//   })
// );
// console.log(store.getState());

// store.dispatch(logout());
// console.log(store.getState());
