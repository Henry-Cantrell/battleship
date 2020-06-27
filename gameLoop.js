let gameBoard = require("./gameBoardStuff/gameBoard");
let newShip = require("./ship");
let newPlayer = require("./playerFactory");
let gameBoardRender = require("./gameBoardStuff/gameBoardRender");

let gameLoop = () => {
    gameBoardRender("One");
    gameBoardRender("Two");
  
    const gameBoardOne = gameBoard(
      document.getElementById("One1"),
      document.getElementById("One2"),
      document.getElementById("One3")
    );
    const gameBoardTwo = gameBoard(
      document.getElementById("Two1"),
      document.getElementById("Two2"),
      document.getElementById("Two3")
    );
  
    const playerOne = newPlayer(gameBoardTwo);
    const playerTwo = newPlayer(gameBoardOne);
  };

  module.exports = gameLoop