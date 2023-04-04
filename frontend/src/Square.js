import './Square.css'
import { useContext, useState, useEffect } from 'react'
import { GameContext } from './App';
import countMines from './countMines.js'

const Square = ({isMine, i, j}) => {
  const {game, setGameOver, boardSize} = useContext(GameContext);
  const [hidden, setHidden] = useState(true);
  const [minesNear, setMinesNear] = useState(countMines(i, j, game, game.length))
  let className = ""
  
  // let minesNear = 0;

  // minesNear = countMines(i, j, game);
  
  if(hidden) {
    className = "square hidden" 
  } else if(isMine) {
    className = "square mine"
  } else {
    className = "square safe"
  }

  return (  
    <>
      <div className={className} onClick={() => {
        console.log("row: ", j, " col: ", i)
        console.log("mine", game[i][j].isMine)
        setHidden(false)
        if(hidden && isMine) {
          setGameOver(true);
        }
      }}>
      
        {!hidden && !isMine && minesNear !== 0 && <span>{minesNear}</span>}
      </div>
    </>
  );
}
 
export default Square;