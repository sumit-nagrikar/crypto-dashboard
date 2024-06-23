import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  reducerPath: "marketDataApi", // Add a reducerPath for the api slice
  baseQuery: fetchBaseQuery({ baseUrl: "data.json" }),
  endpoints: (builder) => ({

    
    getMarketData: builder.query({
      query: ({ coin, currency, time }) =>
       `/coins/${coin}/market?vs_currency=${currency}&days=${time}`,
    }),


    getExchangeData: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetExchangeDataQuery } = marketDataApi;
