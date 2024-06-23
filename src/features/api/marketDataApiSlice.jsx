import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  reducerPath: "marketDataApi", // Add a reducerPath for the api slice
  baseQuery: fetchBaseQuery({ baseUrl: "data.json" }),
  endpoints: (builder) => ({

    
    getMarketData: builder.query({
    //   query: (coin,currency,time) => `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`,
    // }),

      query: ({ coin, currency, time }) => {
        if (!coin || !currency || !time) {
          throw new Error("Invalid parameters: coin, currency, and time are required.");
        }
        return {
          url: `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`,
        };
      },
    }),


    getExchangeData: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetExchangeDataQuery } = marketDataApi;
