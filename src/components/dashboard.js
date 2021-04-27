import React, { useState } from "react";
import { isAuth } from "../actions/auth";
import Chart from "react-apexcharts";

import { data } from "../data/chart";

import "../style/dashboard.css";

const Dashboard = (props) => {
  if (!isAuth()) props.history.push("/sign-in");

  const [options, setOptions] = useState({
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: data.map((datum) => datum.date),
    },
    markers: {
      size: 5,
    },
    dataLabels: {
      enabled: true,
    },
    annotations: {
      yaxis: [
        {
          y: 0.5,
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "red",
            },
            text: "Y-axis annotation on 0.5",
          },
        },
        {
          y: 0.8,
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "red",
            },
            text: "Y-axis annotation on 0.8",
          },
        },
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Value",
      data: data.map((datum) => datum.prob),
    },
  ]);

  return (
    <div className="dashboard-wrapper">
      <h1 className="text-center mb-4">This is Mini Dashboard</h1>
      <div className="chart-wrapper">
        <Chart options={options} series={series} type="line" />
      </div>
    </div>
  );
};

export default Dashboard;
