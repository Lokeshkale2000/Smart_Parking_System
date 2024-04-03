
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parkingData, updateParkingLot } from "./Parkingdata";

const RemoveVehicle = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedSlot(null); 
  };

  const handleRemove = () => {
    if (selectedSlot) {
      const { floor, lot } = selectedSlot;
      const currentSlotValue = parkingData[floor][lot];
      let fare = 0;
      if (currentSlotValue === 1 || currentSlotValue === 2) {
        updateParkingLot(floor, lot, 0); 
        if(selectedOption == "bike")
        {
          fare = 20;
        }
        else
        {
          fare = 30;
        }
        setSelectedSlot(null);
      } else if (currentSlotValue === 3) {
        updateParkingLot(floor, lot, 1); 
        fare = 20;
      }

      if (fare > 0) {
        alert(`Your parking fare is Rs. ${fare}, Please Pay on Counter`);
      }
    }
  };

  const renderSlotOptions = () => {
    if (!selectedOption) return null;

    const vehicleType =
      selectedOption === "bike" ? [1, 3] : selectedOption === "car" ? [2] : [];
    const availableSlots = [];

    parkingData.forEach((floorLots, floorIndex) => {
      floorLots.forEach((slot, lotIndex) => {
        if (vehicleType.includes(slot)) {
          availableSlots.push({ floor: floorIndex, lot: lotIndex });
        }
      });
    });

    return (
      <div className="remove-vehicle">
      {selectedOption == null? 
        <p className="select-vehicle">Please Select Vehicle Type to Remove.</p>: 
        (
          <div>
            <p className="select-slot">Select a {selectedOption} slot to remove:</p>
              <select
                onChange={(event) => setSelectedSlot(JSON.parse(event.target.value))}
              >
                <option value="">Select Slot</option>
                {availableSlots.map(({ floor, lot }) => (
                <option
                key={`${floor}-${lot}`}
                value={JSON.stringify({ floor, lot })}
                >
                  Floor {floor + 1}, Lot {lot + 1}
                </option>))}
              </select>
          </div>
        )
      }
        
        {selectedSlot && (
          <button onClick={handleRemove}>
            Remove {selectedOption === "bike" ? "Bike" : "Car"}
          </button>
        )}
      </div>)
  };

  return (
    <div className="remove-vehicle">
      <h1>Remove Your Vehicle</h1>
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
      {renderSlotOptions()}
    </div>
  );
};

export default RemoveVehicle;
