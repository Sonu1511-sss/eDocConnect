import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["0-18", "19-40", "41-60", "60+"],
    datasets: [
      {
        label: "Viral Infection",
        data: [90, 181, 112, 67],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
          "rgb(0, 0, 0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="min-h-screen  flex  flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
      {/* Alert Box */}
      <div className="bg-red-600 animate-pulse text-yellow-300 px-6 py-3 rounded-md shadow-lg mb-6 font-semibold text-lg">
        🚨 Alert: Bhopal - 450 Cases Found
      </div>

      {/* Chart Container */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-black">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
