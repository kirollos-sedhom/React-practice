import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [gameOver, setGameOver] = useState(false);
  const [playerXwinCount, setplayerXwinCount] = useState(0);
  const [playerOwinCount, setplayerOwinCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

  // useEffect(() => {
  //   if (gameOver) {
  //     setGameState(Array(9).fill(""));
  //     setCurrentPlayer("X");
  //   }
  // }, [gameOver]);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold absolute top-30">Tic Tac Toe!</h1>

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

      <div className="scoreboard flex  w-full justify-center gap-8 mt-7">
        <div className="score flex flex-col items-center">
          <p className="font-bold">player X</p>
          <p>{playerXwinCount}</p>
        </div>
        <div className="score flex flex-col items-center">
          <p className="font-bold">player O</p>
          <p>{playerOwinCount}</p>
        </div>
        <div className="score flex flex-col items-center">
          <p className="font-bold">Tie</p>
          <p>{tieCount}</p>
        </div>
      </div>
    </div>
  );

  function handleClickSquare(index: number) {
    if (gameOver) {
      handleGameOver();
      return;
    }

    // update board
    if (gameState[index]) {
      // means this square is already used.
      // we don't want to change that
      return;
    }
    const newGameState = [...gameState];
    newGameState[index] = currentPlayer;
    setGameState(newGameState);

    // check win
    const someoneWon = checkWin(newGameState);

    // check tie
    checkTie(someoneWon, newGameState);

    // update turn

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function checkWin(newGameState: string[]) {
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

    if (
      WinConditions.some((winCondition) =>
        wasThisWinConditionAchieved(winCondition, newGameState)
      )
    ) {
      if (currentPlayer === "X") {
        setplayerXwinCount(playerXwinCount + 1);
      } else {
        setplayerOwinCount(playerOwinCount + 1);
      }
      setGameOver(true);
      return true;
    } else {
      console.log("still playing");
      return false;
    }
  }

  function checkTie(someoneWon: boolean, newGameState: string[]) {
    if (!someoneWon && areAllSquaresUsed(newGameState)) {
      setTieCount(tieCount + 1);
      setGameOver(true);
      return true;
    }

    return false;
  }
  function wasThisWinConditionAchieved(
    winCondition: number[],
    newGameState: string[]
  ) {
    return winCondition.every(
      (square) => newGameState[square] === currentPlayer
    );
  }

  function areAllSquaresUsed(gameState: string[]) {
    return gameState.every((square) => square !== "");
  }

  function handleGameOver() {
    setGameOver(false);
    setGameState(Array(9).fill(""));
    setCurrentPlayer("X");
  }
};

export default TicTacToe;
