let gameBoardAel = (renderNum, player, playerTurn) => {

  const playerDisplay = document.getElementById('hitlog')

  const renderList = renderNum.renderArr;
  for (var i = 0; i < renderList.length; i++) {
    const tile = renderList[i];
    renderList[i].addEventListener("click", () => {
      if (player.nameProp.name === "p1" && playerTurn.turn === 'playerOne') {
        player.attack(tile);
        playerTurn.turn  = 'playerTwo'
        playerDisplay.textContent = 'Current turn is: player two'
        console.log(`${playerTurn.turn } 1`);
        console.log("p1 attacked board 2!");
      } else if (player.nameProp.name === "p1" && playerTurn.turn  === 'playerTwo') {
        console.log(`${playerTurn.turn } 2`);
        console.log("Player 2 tried to attack itself!");
      } else if (player.nameProp.name === "p2" && playerTurn.turn  === 'playerTwo') {
        player.attack(tile);
        playerTurn.turn = 'playerOne'
        playerDisplay.textContent = 'Current turn is: player one'
        console.log(`${playerTurn.turn } 3`);
        console.log("p2 attacked board 1!");
      } else if (player.nameProp.name === "p2" && playerTurn.turn  === 'playerOne') {
        console.log(`${playerTurn.turn } 4`);
        console.log("Player 1 tried to attack itself!");
      }
    });
  }
};

module.exports = gameBoardAel;

//truthObj is static value and always true
