
const initializeGame = (boardSize, numberMines) => {
  let initialGame = new Array(boardSize**2);

  for(let i = 0; i < boardSize**2; i++) {
    if(i < numberMines) {
      initialGame[i] = {
        isMine: true
      }
    } else {
      initialGame[i] = {
        isMine: false
      }
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  let shuffled = shuffle(initialGame);
  let finalGame = [];
  while(shuffled.length) finalGame.push(initialGame.splice(0,boardSize));

  return finalGame;
}

export default initializeGame;