import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice";
import moment from "moment"; // Correct import for moment
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto"; // Correct import for chart.js components

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VerticalBarChart() {
  // Get selected crypto currency, currency, and selected time from store
  const selectedCoin = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );
  const selectedCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );
  const selectedTime = useSelector((state) => state.selectTime.selectedTime);

  // Fetch data
  const { data: cryptoData, isFetching } = useGetMarketDataQuery({
    coin: selectedCoin,
    currency: selectedCurrency,
    time: selectedTime,
  });

  const coinsData = cryptoData?.prices;

  const chartData = coinsData?.map((value) => ({
    x: value[0],
    y: value[1],
  })) || []; // Ensure chartData is an array even if coinsData is undefined or null

  // Chart options
  const options = {
    responsive: true,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
      datalabels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          return {
            size: size,
            weight: 600,
          };
        },
        formatter: function (value) {
          return Math.round(value * 10) / 10;
        },
      },
    },
    title: {
      display: true,
      text: "Vertical Bar Chart",
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  // Chart data
  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM Do")),
    datasets: [
      {
        label: selectedCoin
          ? `${selectedCurrency.toUpperCase()} vs ${selectedCoin.toUpperCase()}  `
          : selectedCurrency.toUpperCase(),
        data: chartData.map((val) => val.y),
        borderColor: "rgb(0, 204, 0)",
        backgroundColor: "rgb(0, 128, 0)",
      },
    ],
  };

  return (
    <div className="h-full w-full p-1 shadow-md">
      <SyncLoader
        color="rgb(0, 51, 102)"
        size={10}
        loading={isFetching}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Bar data={data} options={options} />
    </div>
  );
}

export default VerticalBarChart;
