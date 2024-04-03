// src/App.js
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div class="wrapper">
        <p class="line__1">Welcome to the </p>
        <p class="line__2">Smart Parking System</p>
      </div>

      <div className="dashboard-btn-section">
        <Link to="parking-status">
          <button className="dashboard-btn">Show All Parking Status</button>
        </Link>
        <br />
        <br />
        <Link to="park-vehicle">
          <button className="dashboard-btn ">Park Your Vehicle</button>
        </Link>
        <br />
        <br />
        <Link to="remove-vehicle">
          <button className="dashboard-btn ">Remove Your Vehicle</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
