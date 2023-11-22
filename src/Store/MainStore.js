import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import  commonReducer  from "./common";

const rootReducer = combineReducers({
  common: commonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: true,
});

export default store;