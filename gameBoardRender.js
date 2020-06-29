let contentRender = (name) => {
  let renderArr = [];

  const container = document.createElement("div");
  container.id = name;
  const body = document.getElementById("body");
  for (var i = 0; i < 9; i++) {
    const boardSquare = document.createElement("div");
    boardSquare.className = "squares";
    boardSquare.id = `${name}${i}`;
    container.appendChild(boardSquare);
    renderArr.push(boardSquare);
  }
  body.appendChild(container);

  return {renderArr}
};

module.exports = contentRender;

