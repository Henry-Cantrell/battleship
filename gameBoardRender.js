let gameBoardAel = require('./gameBoardAel')

let contentRender = (name) => {
    const container = document.createElement("div");
    container.id=name
    const body = document.getElementById("body");
    for (var i = 0; i < 9; i++) {
      const boardSquare = document.createElement("div");
      boardSquare.className = "squares";
      boardSquare.id = `${name}${i}`;
      boardSquare.addEventListener('click', () => {
          gameBoardAel(name)
      })
      container.appendChild(boardSquare);
    }
    body.appendChild(container)
  };
  
module.exports = contentRender