import React from 'react';

const ParkingLot = ({ vehicleType }) => {
  const lotClass = vehicleType === 0 ? 'empty' : vehicleType === 1 ? 'bike' : vehicleType === 2 ? 'car' : 'two-bikes';
  return <div className={`parking-lot ${lotClass}`}></div>;
};

export default ParkingLot;