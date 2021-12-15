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

function finalShipPlacement(
  board: number[][],
  shipCells: number,
  isHorizontal?: boolean
) {
  if (isHorizontal === undefined) isHorizontal = getAxis();

  // return values
  const boundary = 10 - shipCells;
  const inboundArr = board.filter((x) => {
    return isHorizontal ? x[1] <= boundary : x[0] <= boundary;
  });
}

export function randomFleet(board: number[][] = emptyBoardArray()) {
  const emptyBoard = board;
  let randomIndex = getRandomIndex(board.length);
  const tinyShip = board[randomIndex];
  board.splice(randomIndex, 1);

  const smallShip = finalShipPlacement(board, 3);

  // x.filter(x => x[1] !== smth) filtert später alle raus, die für zB bigShip sowieso nicht in Frage kommen
  //

  return { bigShip: [], medShip: [], smallShip: [], tinyShip: [] };
}
