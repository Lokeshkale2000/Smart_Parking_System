let parkingData = JSON.parse(localStorage.getItem('parkingData'));

if (!parkingData) {
  parkingData = [
    [0, 1, 0, 2, 3],   // Ground Floor: 0 - Empty, 1 - Bike, 2 - Car
    [2, 3, 0, 0],      // First Floor
    [0, 3, 1, 2, 0],   // Second Floor
    [2, 0, 0, 0],      // Third Floor
    [0, 0, 1, 2, 0],   // Fourth Floor
  ];
}

const saveParkingDataToLocalStorage = () => {
  localStorage.setItem('parkingData', JSON.stringify(parkingData));
};

const updateParkingLot = (floorNumber, lotNumber, newValue) => {
  if (floorNumber < 0 || floorNumber >= parkingData.length) {
    console.log("Floor number is out of range");
    return;
  }

  if (lotNumber < 0 || lotNumber >= parkingData[floorNumber].length) {
    console.log("Lot number is out of range");
    return;
  }
  
  if (newValue < 0 || newValue >= 4) {
    console.log("Invalid Vehicle Type");
    return;
  }

  parkingData[floorNumber][lotNumber] = newValue;
  console.log("Updated");
  saveParkingDataToLocalStorage();
};

export { parkingData, saveParkingDataToLocalStorage, updateParkingLot };
