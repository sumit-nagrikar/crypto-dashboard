import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import CoinCard from "../coinCard/CoinCard";
import SyncLoader from "react-spinners/SyncLoader";

const Sidebar = () => {
  // Fetch market data
  const { data, isFetching } = useGetMarketsQuery();

  return (
    <div className="container mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Top Trending Crypto Currencies by Coin Market</h2>
        <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data &&
            data.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
