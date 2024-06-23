// CoinTable.js
import React from 'react';
import { useSelector } from 'react-redux';

function CoinTable({ data }) {
    console.log("data",data)

    // const newData = useSelector(({data})=>data?.)
  return (
    <div>
      <h2>Coin Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(coin => (
            <tr key={coin.id}>
              <td>{coin.id}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
