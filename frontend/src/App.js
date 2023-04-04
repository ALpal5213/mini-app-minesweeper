
import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Board from './Board.js'
import initializeGame from './initializeGame.js'
import './App.css';

export const GameContext = createContext();

function App() {
  const [numberMines, setNumberMines] = useState(10);
  const [boardSize, setBoardSize] = useState(10);
  const [game, setGame] = useState(initializeGame(boardSize, numberMines));
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [reset, setReset] = useState(false);

  let newBoardSize;

  useEffect(() => {
    setGame(initializeGame(boardSize, numberMines));
  }, [reset])
  
  return (
    <>
      <GameContext.Provider value={{
        numberMines, setNumberMines,
        boardSize, setBoardSize,
        game, setGame,
        gameOver, setGameOver,
        gameWon, setGameWon,
      }}>
        <h1>Minesweeper</h1>
        <label>Set Board Size</label>
        <input type="number" min="5" max="20" placeholder={boardSize} onChange={(e) => {
          setBoardSize(parseInt(e.target.value));
          
        }}/>
        <label>Set Number of Mines</label>
        <input type="number" min="1" max="20" placeholder={numberMines} onChange={(e) => {
          setNumberMines(parseInt(e.target.value));
          
        }}/>
        <button type="submit" onClick={() => {
          setReset(!reset);
        }}>Reset Game Board</button>
        <Board/>
      </GameContext.Provider>
      
    </>
  );
}

export default App;
