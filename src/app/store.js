import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "../features/api/currencyApiSlice"
import { coinApi } from "../features/api/coinApiSlice"
import currencyDropDownReducer from "../features/currencyDropDownSlice";
import cryptoCurrencyDropDownReducer from "../features/cryptoCurrencyDropDownSlice";
//configure store
export const store = configureStore({
  //reducers
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    selectCurrency: currencyDropDownReducer,

    [coinApi.reducerPath]: coinApi.reducer,//what we're doing is creating an entry in the Redux store's reducer object.
    selectCryptoCurrency: cryptoCurrencyDropDownReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(coinApi.middleware)
    .concat(currencyApi.middleware) 
});
/*The need for this middleware arises from the fact that the currencyApi slice likely includes
 asynchronous API calls to fetch currency data. Middleware provided by Redux Toolkit, when combined 
 with getDefaultMiddleware(), helps manage asynchronous actions gracefully by providing features like
  Redux Thunk, which allows for asynchronous logic within Redux actions. */
