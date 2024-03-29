import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query({
<<<<<<< HEAD
      query: () => "/simple/supported_vs_currencies"

=======
      query: () => "/simple/supported_vs_currencies",
>>>>>>> 0d87544e65b816a5b08f8fe7f63ce44e7703e879
    }),
   
  }),
});

<<<<<<< HEAD
export const { useGetAllCurrenciesQuery , useGetCurrencyToCoinDataQuery } = currencyApi; // Remove `useGetCurrencyToCoinDataQuery` if not used



=======
export const { useGetAllCurrenciesQuery, } = currencyApi;
>>>>>>> 0d87544e65b816a5b08f8fe7f63ce44e7703e879
