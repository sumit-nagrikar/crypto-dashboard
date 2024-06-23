import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getTrendingcoins: builder.query({
      query: () => "/search/trending",
    }),

    getMarkets: builder.query({
      query: () =>
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
    }),

    getAllCoins: builder.query({
      query: () => "/coins/list",
    }),
  }),
});

<<<<<<< HEAD
export const {
  useGetTrendingcoinsQuery,
  useGetMarketsQuery,
  useGetAllCoinsQuery,
} = coinApi;
=======
<<<<<<< HEAD

export const {
  useGetTrendingcoinsQuery,
  useGetMarketsQuery,
  useGetAllCoinsQuery
} = coinApi;

=======
export const { useGetTrendingCoinsQuery, useGetMarketsQuery, useGetAllCoinsQuery } = coinApi;
>>>>>>> 0d87544e65b816a5b08f8fe7f63ce44e7703e879
>>>>>>> 086f6853b2b99e286ca87da85ba081b29100ff47
