
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ParkingStatus from "./components/ParkingStatus";
import Dashboard from "./components/Dashboard";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="Smart_Parking_System/" element={<Dashboard />} />
          <Route path="Smart_Parking_System/parking-status" element={<ParkingStatus />} />
          <Route path="Smart_Parking_System/park-vehicle" element={<ParkVehicle />} />
          <Route path="Smart_Parking_System/remove-vehicle" element={<RemoveVehicle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
