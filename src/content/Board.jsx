import React, { useState } from "react";
import './border.css';
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);


  const notwin = state[0] !== null && state[1] !== null && state[2] !== null && state[3] !== null && state[4] !== null && state[5] !== null && state[6] !== null && state[7] !== null && state[8] !== null;


  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // state[a] give value of winer 0 or x
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (indexValue) => {
    if (state[indexValue] !== null) {
      return;
    }
    const AllcopyState = [...state];
    setIsTurn(!isTurn); // true convert false and false convert true all time when called
    AllcopyState[indexValue] = isTurn ? "🅾️" : "❎";
    setState(AllcopyState);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>

      <div >
        {isWinner ? (
          <h4 className="popup ">
            {isWinner} 🎉 <span className="animate-charcter"> won the game {" "}</span> <br />
            <button onClick={handleReset}>Play Again</button>
          </h4>
        ) : (
          ""
        )}
      </div>
      {/* not winer */}
      <div >
        {notwin ? (
          <h4 className="popup ">
            {notwin} 😒  <span className="animate-charcter"> none won {" "}</span> <br />
            <button onClick={handleReset}>Play Again</button>
          </h4>
        ) : (
          ""
        )}
      </div>
      <div className="container">

        <>
          
          <div>
          <button onClick={handleReset}>Play Again</button>
          <h4>Player {isTurn ? "🅾️" : "❎"}  move</h4>
          </div>

          <div >
            <div className="row">
              <Square className="box_t" onClick={() => handleClick(0)} value={state[0]} />
              <Square className="box_t" onClick={() => handleClick(1)} value={state[1]} />
              <Square className="box_t" onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Board;
