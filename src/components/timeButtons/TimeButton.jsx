import React from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timeSlice";

const TimeButton = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setTime(value));
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        data-testid="button1"
        value={"1"}
        onClick={() => handleClick("1")}
      >
        1d
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        value={"7"}
        onClick={() => handleClick("7")}
      >
        7d
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        value={"14"}
        onClick={() => handleClick("14")}
      >
        2w
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        value={"30"}
        onClick={() => handleClick("30")}
      >
        1m
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        value={"180"}
        onClick={() => handleClick("180")}
      >
        6m
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        value={"365"}
        onClick={() => handleClick("365")}
      >
        1y
      </button>
    </div>
  );
};

export default TimeButton;
