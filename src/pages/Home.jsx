import React from "react";
import CryptoCurrencyDropDown from "../components/dropdowns/CryptoCurrencyDropDown";
import CurrencyDropDown from "../components/dropdowns/CurrencyDropDown";
import Searchbar from "../components/searchbar/Searchbar";
import TimeButton from "../components/timeButtons/TimeButton";
import ChartTypeDropDown from "../components/dropdowns/ChartTypeDropDown";
import LineChart from "../components/charts/LineChart";
import Sidebar from "../components/sidebar/Sidebar";
import PieChart from "../components/charts/PieChart";
import ExchangeRates from "../components/exchangerates/ExchangeRates";
import { useSelector } from "react-redux";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import VerticalBarChart from "../components/charts/VerticalBarChart";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );

  return (
    <div className="w-full">
      <Navbar />


      <div className="flex flex-col md:flex-row justify-between items-stretch w-full">


        <div className="md:w-3/4 flex flex-col h-full">
          <div className="flex justify-between items-center h-20 px-4 md:px-8 bg-red-500">
            <CurrencyDropDown />
            <Searchbar />
          </div>
          <div className="flex flex-col md:flex-col h-full bg-red-100">
            <div className="md:w-full flex flex-col h-full bg-orange-100">
              <div className="flex justify-between items-center h-20 px-32 md:px-8 bg-blue-500">
                <TimeButton />
                <CryptoCurrencyDropDown />
                <ChartTypeDropDown />
              </div>


              <div className="flex-1 flex flex-col items-center justify-center">
                {chartType === "verticalBarChart" ? (
                  <VerticalBarChart />
                ) : chartType === "horizontalBarChart" ? (
                  <HorizontalBarChart />
                ) : (
                  <LineChart />
                )}
              </div>


            </div>
            <div className="md:w-full flex flex-row justify-between items-stretch">
              <PieChart />
              <ExchangeRates />
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <Sidebar />
        </div>

      </div>

      
    </div>
  );
};

export default Home;
