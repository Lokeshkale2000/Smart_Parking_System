// src/components/ParkVehicle.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parkingData, updateParkingLot } from "./Parkingdata";

const ParkVehicle = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "bike") {
      const bikeSlots = [];
      parkingData.forEach((floorLots, floorIndex) => {
        floorLots.forEach((slot, lotIndex) => {
          if (slot === 0 || slot == 1) {
            bikeSlots.push({ floor: floorIndex, lot: lotIndex });
          }
        });
      });
      setAvailableSlots(bikeSlots);
    } else if (event.target.value === "car") {
      const carSlots = [];
      parkingData.forEach((floorLots, floorIndex) => {
        floorLots.forEach((slot, lotIndex) => {
          if (slot === 0) {
            carSlots.push({ floor: floorIndex, lot: lotIndex });
          }
        });
      });
      setAvailableSlots(carSlots);
    }
  };

  const handlePark = ({ floor, lot }) => {
    const currentSlotValue = parkingData[floor][lot];
    let fare = 0;
    if (currentSlotValue === 0 && selectedOption == "bike") {
      fare = 20;
      updateParkingLot(floor, lot, 1); // Reserve for bike
    } else if (currentSlotValue === 0 && selectedOption == "car") {
      fare = 30;
      updateParkingLot(floor, lot, 2); // Reserve for car
    } else if (currentSlotValue === 1) {
      fare = 20;
      updateParkingLot(floor, lot, 3); // Upgrade to two bikes
    }

    if (parkingData[floor][lot] >= 2) {
      setAvailableSlots(
        availableSlots.filter(
          (slot) => !(slot.floor === floor && slot.lot === lot)
        )
      );
    }
    if (fare > 0) {
      alert(`Your parking fare is Rs. ${fare}`);
    }
  };

  return (
    <div className="park-vehicle">
      <h1>Park Your Vehicle</h1>
      <Link to="/Smart_Parking_System">
        <button className="back-btn-park">Back</button>
      </Link>
      <div className="radio-btns">
        <input
          type="radio"
          id="bike"
          name="vehicle"
          value="bike"
          onChange={handleOptionChange}
        />
        <label htmlFor="bike">Bike</label>
        <input
          type="radio"
          id="car"
          name="vehicle"
          value="car"
          onChange={handleOptionChange}
        />
        <label htmlFor="car">Car</label>
      </div>
      <div className="available-slots-section">
        {availableSlots.length === 0 ? selectedOption !== null?(
          <p>No available slots for selected option.</p>
        ) :(<p>Please Select Vehicle Type to Park.</p>): (
          <div>
            <p className="available-heading">Available Lots for {selectedOption} : </p>
            <ul>
              {availableSlots.map(({ floor, lot }) => (
                <li key={`${floor}-${lot}`}>
                  Floor {floor + 1}, Lot {lot + 1}
                  <button onClick={() => handlePark({ floor, lot })}>
                    Park
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkVehicle;
