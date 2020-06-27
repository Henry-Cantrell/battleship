//START OF HUMAN PLAYER OBJ
let playerFactory = (gameBoardChoice) => {
    let moveHistory = [];
  
    let attack = (attack) => {
      if (moveHistory.includes(attack)) {
        return "test passed";
      } else {
        moveHistory.push(attack);
        gameBoardChoice.receiveAttack(attack);
        return "test cleared";
        l;
      }
    };
    return { moveHistory, attack };
  };
  
  //END OF HUMAN PLAYER OBJ
  
  module.exports = playerFactory;
  

  