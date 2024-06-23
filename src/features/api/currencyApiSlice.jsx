// Import necessary dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the currency API slice
export const currencyApi = createApi({
  reducerPath: "currencyApi", // Set the reducer path
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }), // Prepend CORS proxy URL
  endpoints: (builder) => ({
    getAllCurrencies: builder.query({
<<<<<<< HEAD
      query: () => "/simple/supported_vs_currencies", // Define the query endpoint
=======
      query: () => "/simple/supported_vs_currencies",
>>>>>>> 5712a682cde34527cd30f1192bcd9584cd8912a4
    }),
  }),
});

<<<<<<< HEAD
// Extract the hooks
export const { useGetAllCurrenciesQuery } = currencyApi;

// Modify the currency API query hook to use CORS proxy
export const useGetAllCurrenciesQueryWithCors = () => {
  const { data, error, isLoading } = useGetAllCurrenciesQuery();

  // If there's an error, log it to the console
  if (error) {
    console.error("Error fetching currencies:", error);
  }

  return { data, isLoading };
};






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const currencyApi = createApi({
//   reducerPath: "currencyApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
//   endpoints: (builder) => ({
//     getAllCurrencies: builder.query({
//       query: () => "/simple/supported_vs_currencies",
//     }),
   
//   }),
// });

// export const { useGetAllCurrenciesQuery, } = currencyApi;
=======
export const { useGetAllCurrenciesQuery, } = currencyApi;
>>>>>>> 5712a682cde34527cd30f1192bcd9584cd8912a4
