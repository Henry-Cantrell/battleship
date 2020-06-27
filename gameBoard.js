let newShip = require("/home/suzuka/Coding/the_odin_project/Projects/battleship/src/modules/ship");

let gameBoard = (coor1, coor2, coor3) => {

    const thisCoords = {
    c1: coor1,
    c2: coor2,
    c3: coor3,
  };

  let thisShip = newShip(thisCoords.c1, thisCoords.c2, thisCoords.c3);

  let receiveAttack = (attack) => {
    if (
      attack === thisShip.coords.coordUno ||
      thisShip.coords.coordDos ||
      thisShip.coords.coordTres
    ) {
      thisShip.hit(attack);
      return "nice hit";
    } else {
      return "missed";
    }
  };
  return { thisCoords, thisShip, receiveAttack };
};

module.exports = gameBoard;