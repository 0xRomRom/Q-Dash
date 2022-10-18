"use strict";

import Chart from "chart.js/auto";

const portfolioLabels = ["Ethereum", "Bitcoin", "Solana"];
const portfolioPriceArray = [322, 120, 800, 230];

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: portfolioLabels,
    datasets: [
      {
        label: "# of Votes",
        data: portfolioPriceArray,
        backgroundColor: [
          "rgba(36, 108, 249, 0.2)",
          "rgba(247 , 147, 26, 0.2)",
          "rgba(71, 196, 100, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(175, 192, 192, 0.2)",
          "rgba(253, 102, 255, 0.2)",
          "rgba(155, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(36,108,249, 1)",
          "rgba(247 , 147, 26, 1)",
          "rgba(71, 196, 100, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(175, 192, 192, 1)",
          "rgba(253, 102, 255, 1)",
          "rgba(155, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
