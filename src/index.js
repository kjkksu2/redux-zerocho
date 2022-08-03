const { createStore } = require("redux");

// 초기값
const initialState = {
  user: "",
  posts: [],
};

// actions
const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: null,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    default:
      return state;
  }
};
const store = createStore(reducer, initialState);

// dispatch
console.log(store.getState());

store.dispatch(
  login({
    id: 1,
    name: "markus",
    admin: true,
  })
);
console.log(store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요.",
  })
);
console.log(store.getState());

store.dispatch(logout());
console.log(store.getState());
