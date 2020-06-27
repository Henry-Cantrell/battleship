let newShip = require("./ship");
let gameBoard = require("./gameBoard");
let playerFactory = require("./playerFactory");

const gameBoardPlayer = gameBoard("d1", "d2", "d3");
const gameBoardComp = gameBoard("c1", "c2", "c3");

let playerHuman = playerFactory(gameBoardComp);

test("Hit test", () => {
  expect(playerHuman.attack('move')).toBe('test cleared');
});