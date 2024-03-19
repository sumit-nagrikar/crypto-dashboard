import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "../features/api/CurrencyApiSlice";
import currencyDropDownReducer from "../features/currencyDropDownSlice";

//configure store
export const store = configureStore({
  //reducers
  reducer: {
   
    [currencyApi.reducerPath]: currencyApi.reducer,
  
    selectCurrency: currencyDropDownReducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(currencyApi.middleware)
});