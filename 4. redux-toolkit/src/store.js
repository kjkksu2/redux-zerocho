const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [logger, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

module.exports = store;
