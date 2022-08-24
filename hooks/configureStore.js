import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { actions } from "./actions";

import cartReducer from "./cart";
import errorReducer from "./error";

const persistConfig = {
  key: "root",
  storage,
};
const combinedReducers = combineReducers({
  cart: cartReducer,
  error: errorReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === actions.DESTROY_SESSION) state = undefined;
  return combinedReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };
