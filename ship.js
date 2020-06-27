let newShip = (coord1, coord2, coord3) => {
    let toggleObj = {
      toggle1: false,
      toggle2: false,
      toggle3: false,
    };
  
    const coords = {
      coordUno: coord1,
      coordDos: coord2,
      coordTres: coord3,
    };
  
    let isSunk = (whichSquare) => {
      if (toggleObj.toggle1 && toggleObj.toggle2 && toggleObj.toggle3) {
        console.log("Sunk");
      } else {
        console.log(`${whichSquare} was hit!`);
      }
    };
  
    let hit = (tile) => {
      if (tile === coords.coordUno) {
        toggle1 = true;
        isSunk(tile);
        return "Alpha male!";
      } else if (tile === coords.coordDos) {
        toggle2 = true;
        isSunk();
      } else if (tile === coords.coordTres) {
        toggle3 = true;
        isSunk();
      } else {
        return "Player missed!";
      }
    };
    return { toggleObj, coords, isSunk, hit };
  };
  
  module.exports = newShip;
  