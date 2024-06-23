// CoinDataFetcher.js
import React, { useState, useEffect } from 'react';

function CoinDataFetcher({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && React.cloneElement(children, { data: data })}
    </div>
  );
}

export default CoinDataFetcher;
