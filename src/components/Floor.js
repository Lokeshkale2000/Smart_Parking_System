// src/components/Floor.js
import React from 'react';
import ParkingLot from './ParkingLot';

const Floor = ({ floorNumber, parkingLots }) => {
  return (
    <div className="floor">
      <h2>Floor {floorNumber}</h2>
      <div className="parking-lot-container">
        {parkingLots.map((vehicleType, lotNumber) => (
          <ParkingLot key={lotNumber} vehicleType={vehicleType} />
        ))}
      </div>
    </div>
  );
};

export default Floor;
