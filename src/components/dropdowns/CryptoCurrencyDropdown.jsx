import React from "react";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";
import { useSelector } from "react-redux";

const CryptoCurrencyDropDown = () => {
  const cryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );

  const dispatch = useDispatch();

  //Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };

  return (
    <div className="h-10vh w-1/4">
      <select
        className="w-full h-50 overflow-y-scroll bg-blue-200 border-none rounded-lg font-medium p-1 cursor-pointer"
        onChange={handleChange}
        value={cryptoCurrency}
      >
        <option value="cryptoCurrency" disabled>
          Crypto Currency
        </option>
        {coinList &&
          coinList.map((coin) => (
            <option value={coin.id} key={coin.id}>
              {coin.name.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CryptoCurrencyDropDown;
