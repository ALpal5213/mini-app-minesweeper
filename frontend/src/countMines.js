
let countMines = (i, j, game, boardSize) => {
  let count = 0;
  let istart = -1;
  let iend = 1;
  let jstart = -1;
  let jend = 1;

  if(i === 0) {
    istart = 0;
    iend = 1;
  } else if(i === boardSize - 1) {
    istart = -1;
    iend = 0;
  }

  if(j === 0) {
    jstart = 0;
    jend = 1;
  } else if(j === boardSize - 1) {
    jstart = -1;
    jend = 0;
  }

  for(let indI = istart; indI <= iend; indI++) {
    for(let indJ = jstart; indJ <= jend; indJ++) {
      if(game[i + indI][j + indJ].isMine) {
        console.log("game", game[i + indI][j + indJ])
        count++;
      }
    }
  }

  return count;
}

export default countMines;