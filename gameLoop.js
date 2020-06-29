let gameBoard = require("./gameBoardStuff/gameBoard");
let gameBoardRender = require("./gameBoardStuff/gameBoardRender");
let gameBoardAel = require("./gameBoardStuff/gameBoardAel");
let newPlayer = require("./playerFactory");
let truthToggle = require("./truthChecker");

let gameLoop = () => {
  const truth = truthToggle();

  const renderOne = gameBoardRender("One");
  const renderTwo = gameBoardRender("Two");

  const gameBoardOne = gameBoard(
    renderOne.renderArr[0],
    renderOne.renderArr[1],
    renderOne.renderArr[2],
    "Dos"
  );
  const gameBoardTwo = gameBoard(
    renderTwo.renderArr[0],
    renderTwo.renderArr[1],
    renderTwo.renderArr[2],
    "Uno"
  );

  const playerOne = newPlayer(gameBoardTwo, renderOne, 'p1');
  const playerTwo = newPlayer(gameBoardOne, renderTwo, 'p2');

  gameBoardAel(renderOne, playerOne, truth);
  gameBoardAel(renderTwo, playerTwo, truth);
};

module.exports = gameLoop;
