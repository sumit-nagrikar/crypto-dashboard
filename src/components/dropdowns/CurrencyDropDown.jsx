import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../features/currencyDropDownSlice";
import { useGetAllCurrenciesQuery } from "../../features/api/currencyApiSlice"; // Imported the correct hook

const CurrencyDropDown = () => {
  // Get selected currency from store
  const currency = useSelector((state) => state.selectCurrency.selectedCurrency);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  // Fetch all currencies data
  const { data: currencyList, isLoading, isError } = useGetAllCurrenciesQuery(); // Use the correct hook here

  useEffect(() => {
    if (isError) {
      // Handle error
    }
  }, [isError]);

  return (
    <div className="h-10vh w-full min-w-50 max-w-120 flex items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <select
          className="w-1/4 h-50 overflow-scroll font-semibold bg-blue-200 m-1 rounded-lg px-5 cursor-pointer"
          onChange={handleChange}
          value={currency}
        >
          <option value="currency" disabled>
            Currency
          </option>
          {currencyList &&
            currencyList.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default CurrencyDropDown;
