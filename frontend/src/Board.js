
import { Container, Row, Col } from 'react-bootstrap';
import Square from './Square.js'
import './Board.css'
import { useContext, useState, useEffect } from 'react'

import { GameContext } from './App';

const Board = () => {
  const {game, gameOver, gameWon} = useContext(GameContext);
  console.log(game)
  return ( 
    <>
      {/*!gameOver &&*/ !gameWon && <Container className="board-container">
        {game.map((row, j) => {
          return <Row key={j}>
            {row.map((col, i) => {
              return <Col key={i} className="square-container">
                <Square i={i} j={j} isMine={game[i][j].isMine}/>
              </Col>
            })}
          </Row>
        })}
      </Container>}
      {gameOver && <Container>
        <Row>
          <Col className="center" xs="12">
            <h1 className="gameover">GAME OVER</h1>
          </Col>
        </Row>
      </Container>}
      {gameWon && <Container>
        <Row>
          <Col className="center" xs="12">
            <h1 className="gamewon">YOU WON!!</h1>
          </Col>
        </Row>
      </Container>}
    </> 
    

  );
}
 
export default Board;