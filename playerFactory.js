let playerFactory = (gameBoardChoice, name) => {
  let moveHistory = [];

  let nameProp = {
    name: name
  }

  let turnTeller = () => {
    const hitLog = document.getElementById("hitlog");
    hitLog.textContent = `Current player is: ${gameBoardChoice.nameObj.name}`;
  };

  let recordUpdater = (tile) => {
    const record = document.getElementById("hitrecord");
    record.textContent += `List of ships hit: ${tile}`;
  };

  let attack = (tile) => {
    if (moveHistory.includes(tile)) {
      window.alert("Duplicate move!");
    } else {
      moveHistory.push(tile);
      gameBoardChoice.receiveAttack(tile);
  }};

  return { moveHistory, attack, nameProp };
};
module.exports = playerFactory;
