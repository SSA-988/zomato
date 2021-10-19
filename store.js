//  import { configureStore, createReducer } from "@reduxjs/toolkit";
//  import navReducer from "./slices/navSlice";
//  import cartReducer from "./slices/cartSlice"
// import { createStore, combineReducers } from "redux";
//  import cartItems from "./slices/cartSlice";

//  export const store = createStore(cartReducer);


import { createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}

//  import { configureStore } from "@reduxjs/toolkit";
//  import navReducer from "./slices/navSlice";

//  export const store = configureStore({
//    reducer: {
//      nav: navReducer,
//      cart:cartReducer,
//    },
// });
