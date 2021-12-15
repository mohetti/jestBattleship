function emptyBoardArray() {
  return [
    [1, 2],
    [2, 3],
  ];
}

function getRandomIndex(arrLength: number) {
  return Math.floor(Math.random() * arrLength);
}

function getAxis() {
  return Math.floor(Math.random() * 2) === 0;
}

function possibleCoords(
  startCoord: number[],
  shipCells: number,
  isHorizontal: boolean
) {
  let possible = [startCoord];
  // vorsicht
  if (isHorizontal) {
    for (let i = startCoord[1]; i < shipCells - 1; i++) {
      let coord = [startCoord[0], startCoord[1] + 1];
      possible.push();
    }
  }
}

function finalShipPlacement(
  board: number[][],
  shipCells: number,
  isHorizontal?: boolean
) {
  if (isHorizontal === undefined) isHorizontal = getAxis();

  // recursive outcome comese below and before boundary
  const boundary = 10 - shipCells;
  const inboundArr = board.filter((x) => {
    return isHorizontal ? x[1] <= boundary : x[0] <= boundary;
  });

  let randomIndex = getRandomIndex(inboundArr.length);

  let possible = possibleCoords(
    inboundArr[randomIndex],
    shipCells,
    isHorizontal
  );

  // *** place ship randomly

  // coordinate-tuples cant be the same or be out of bounce. so this doesnt need to be tested.
  // but, coordinate-tuples could jump over a coordinate that is not in the array anymore, like: [0,2] [0,4]
  // *** testing if a jump happened. If no: finalShipPlacement is finished. If jump happened, try again recursevly
}

export function randomFleet(board: number[][] = emptyBoardArray()) {
  const emptyBoard = board;
  let randomIndex = getRandomIndex(emptyBoard.length);
  const tinyShip = emptyBoard[randomIndex];
  emptyBoard.splice(randomIndex, 1);

  const smallShip = finalShipPlacement(board, 3);
  // find those coordinates and remove them from emptyBoard. Since they're unique, no deeper logic is needed

  return { bigShip: [], medShip: [], smallShip: [], tinyShip: [] };
}
