// src/components/ParkingStatus.js
import React from "react";
import { parkingData } from "./Parkingdata";
import Floor from "./Floor";
import { Link } from "react-router-dom";

const ParkingStatus = () => {
  return (
    <div className="parking-status">
      <h1 className="parking-status-header">Parking Status</h1>
      <Link to="/Smart_Parking_System">
        <button className="back-btn">Back</button>
      </Link>
      <div className="parking-status-container">
        <div className="indicator-info">
          <p className="indicator-info-header">Indicators</p>
          <div className="indicator">
            <div className="parking-lot empty"></div>
            <p>Vacant Lot</p>
          </div>
          <div className="indicator">
            <div className="parking-lot bike"></div>
            <p>1 Bike Parked</p>
          </div>
          <div className="indicator">
            <div className="parking-lot two-bikes"></div>
            <p>2 Bikes Parked</p>
          </div>
          <div className="indicator">
            <div className="parking-lot car"></div>
            <p>Car Parked</p>
          </div>
        </div>
        <div className="parking-status-data">
          {parkingData.map((floorLots, index) => (
            <Floor key={index} floorNumber={index} parkingLots={floorLots} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingStatus;
