import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [previousPlayer, setPreviousPlayer] = useState("O");

  useEffect(() => {
    /*
      win conditions
 
      todo:
      impletment check win conditions
    */
    console.log("Checking win for:", previousPlayer);

    const WinConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (WinConditions.some(checkWinCondition)) {
      console.log(previousPlayer, "won");
    }
  }, [gameState]);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96  h-96 grid grid-rows-3 grid-cols-3">
        {gameState.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickSquare(index)}
              className="bg-blue-300 p-2 border-1 flex items-center justify-center text-lg font-bold select-none"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );

  function handleClickSquare(index: number) {
    if (gameState[index]) {
      // means this square is already used.
      // we don't want to change that
      return;
    }
    console.log(index);
    const newGameState = [...gameState];
    newGameState[index] = currentPlayer;
    setGameState(newGameState);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setPreviousPlayer(previousPlayer === "X" ? "O" : "X");
  }

  function didCurrentPlayerUseIt(squareNumber: number) {
    // const playerWhoJustMoved = currentPlayer === "X" ? "O" : "X";
    return gameState[squareNumber] === previousPlayer;
  }

  function checkWinCondition(WinCondition: number[]) {
    return WinCondition.every(didCurrentPlayerUseIt);
  }
};

export default TicTacToe;
