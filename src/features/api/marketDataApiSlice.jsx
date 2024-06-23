import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  reducerPath: "marketDataApi", // Add a reducerPath for the api slice
  baseQuery: fetchBaseQuery({ baseUrl: "data.json" }),
  endpoints: (builder) => ({

    
    getMarketData: builder.query({
<<<<<<< HEAD
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
=======
      query: ({ coin, currency, time }) =>
       `/coins/${coin}/market?vs_currency=${currency}&days=${time}`,
>>>>>>> 5712a682cde34527cd30f1192bcd9584cd8912a4
    }),


    getExchangeData: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetExchangeDataQuery } = marketDataApi;
