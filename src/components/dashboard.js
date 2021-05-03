import React, { useState } from "react";
import { isAuth } from "../actions/auth";
import Chart from "react-apexcharts";

import { logOut } from "../actions/auth";
import { data } from "../data/chart";
import { Home, File, ShoppingCart, Users, BarChart2, Layers } from 'react-feather';

import "../style/dashboard.css";

const Dashboard = (props) => {
  if (!isAuth()) props.history.push("/sign-in");

  const [options] = useState({
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Lorem ipsum dolor si amet",
      align: "left",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    xaxis: {
      categories: data.map((datum) => datum.date.substring(0, 2)),
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    annotations: {
      yaxis: [
        {
          y: 0.5,
          y2: 0.8,
          borderColor: "red",
          fillColor: "#FEB019",
        },
      ],
    },
  });

  const [series] = useState([
    {
      name: "Value",
      data: data.map((datum) => datum.prob),
    },
  ]);

  return (
    <>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow-sm">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          Mini Dashboard
        </a>
        <input
          className="form-control form-control-dark w-100 h-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul
          className="navbar-nav px-3"
          onClick={() => {
            logOut(() => {
              props.history.push("/sign-in");
            });
          }}
        >
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
      <div className="row px-3">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Home />{' '}<span>Dashboard</span> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <File />{' '}<span>Orders</span>  
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <ShoppingCart />{' '}<span>Products</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Users />{' '}<span>Customers</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <BarChart2 />{' '}<span>Reports</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Layers />{' '}<span>Integrations</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-4 col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="chart-wrapper rounded shadow-sm">
            <Chart options={options} series={series} type="line" height={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
