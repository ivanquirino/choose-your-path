import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import master from "./index";

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    ...getDefaultMiddleware({ thunk: false }),
    reducer: { master },
    devTools: true,
    middleware: [sagaMiddleware],
  });

  return { store, sagaMiddleware };
};

export default createStore;
