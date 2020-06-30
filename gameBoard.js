let newShip = require("/home/suzuka/Coding/the_odin_project/Projects/battleship/src/modules/ship");

let gameBoard = (coor1, coor2, coor3, name) => {

  let nameObj = {
    name: name
  }

  let thisShip = newShip(coor1, coor2, coor3);

  let receiveAttack = (tile) => {
    thisShip.hit(tile);
  };
  return { receiveAttack, nameObj };
};

module.exports = gameBoard;
