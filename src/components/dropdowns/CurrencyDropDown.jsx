import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";
import { useSelector } from "react-redux";
import { useGetAllCurrenciesQuery } from "../../features/api/CurrencyApiSlice";

const CurrencyDropDown = () => {
  //Get selected currency from store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  //Fetch currency list data
  const { data: currencyList } = useGetAllCurrenciesQuery();

  return (
    <div className="h-10vh w-full min-w-50 max-w-120 flex items-center">
      <select
        className="w-1/4 h-50 overflow-scroll font-semibold bg-blue-200 m-1 rounded-lg px-5 cursor-pointer"
        onChange={handleChange}
        value={currency}
      >
        <option value="currency" disabled>
          Currency
        </option>
        {currencyList &&
          currencyList.map((currencyName, index) => (
            <option value={currencyName} key={index}>
              {currencyName.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CurrencyDropDown;
