let gameBoardAel = (renderNum, player, truthObj) => {
  const renderList = renderNum.renderArr;
  for (var i = 0; i < renderList.length; i++) {
    const tile = renderList[i];
    renderList[i].addEventListener("click", () => {
      if (player.nameProp.name === 'p1' && truthObj.toggle) {
        player.attack(tile);
        truthObj.toggleFalse();
      } else if (player.nameProp.name === 'p1' && !truthObj.toggle) {
        window.alert("Wrong board!");
        console.log('ael fire')
      } else if (player.nameProp.name === 'p2' && !truthObj.toggle) {
        player.attack(tile);
        truthObj.toggleTrue();
      } else if (player.nameProp.name === 'p2' && truthObj.toggle) {
        window.alert("Wrong board!");
        console.log('ael fire')
      }
    });
  }
};

module.exports = gameBoardAel;
