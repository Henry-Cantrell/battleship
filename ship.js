let newShip = (coord1, coord2, coord3) => {
  let toggleObj = {
    t1: false,
    t2: false,
    t3: false,
  };

  const hitList = {
    c1: coord1,
    c2: coord2,
    c3: coord3,
  };

  let isSunk = () => {
    if (toggleObj.t1 && toggleObj.t2 && toggleObj.t3) {
      console.log("Sunk!");
    } else {
      console.log("isSunk fired");
    }
  };

  let hit = (tile) => {
    if (tile === hitList.c1) {
      toggleObj.t1 = true;
      isSunk();
      console.log("1");
    } else if (tile === hitList.c2) {
      toggleObj.t2 = true;
      isSunk();
      console.log("2");
    } else if (tile === hitList.c3) {
      toggleObj.t3 = true;
      isSunk();
      console.log("3");
    } else {
      isSunk();
    }
  };
  return { toggleObj, isSunk, hit };
};

module.exports = newShip;
