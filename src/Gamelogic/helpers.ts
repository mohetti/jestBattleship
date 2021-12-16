function emptyBoardArray() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
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
  let possible = [];
  // vorsicht
  if (isHorizontal) {
    for (let i = startCoord[1]; i < startCoord[1] + shipCells; i++) {
      let coord = [startCoord[0], i];
      possible.push(coord);
    }
  }
  if (!isHorizontal) {
    for (let i = startCoord[0]; i < startCoord[0] + shipCells; i++) {
      let coord = [i, startCoord[1]];
      possible.push(coord);
    }
  }
  return possible;
}

// exported for testing purposes only
export function hasNoJump(arr: number[][], isHorizontal: boolean) {
  if (isHorizontal) {
    let yCoords = arr.map((x) => x[1]);
    let isValid = yCoords.reduce((acc: number | boolean, curr, i) => {
      if (i === 0) return (acc = curr);
      if (curr - Number(acc) === 1) return (acc = curr);
      return (acc = false);
    }, 0);
    return Boolean(isValid);
  }
  let xCoords = arr.map((x) => x[0]);
  let isValid = xCoords.reduce((acc: number | boolean, curr, i) => {
    if (i === 0) return (acc = curr);
    if (curr - Number(acc) === 1) return (acc = curr);
    return (acc = false);
  }, 0);
  return Boolean(isValid);
}
function finalShipPlacement(
  board: number[][],
  shipCells: number,
  isHorizontal?: boolean
): number[][] {
  if (isHorizontal === undefined) isHorizontal = getAxis();

  const boundary = 10 - shipCells;
  const inboundArr = board.filter((x) => {
    return isHorizontal ? x[1] <= boundary : x[0] <= boundary;
  });

  let randomIndex = getRandomIndex(inboundArr.length);

  let possibleArr = possibleCoords(
    inboundArr[randomIndex],
    shipCells,
    isHorizontal
  );

  return hasNoJump(possibleArr, isHorizontal)
    ? possibleArr
    : finalShipPlacement(board, shipCells, isHorizontal);
}

export function randomFleet(board: number[][] = emptyBoardArray()) {
  const emptyBoard = board;
  let randomIndex = getRandomIndex(emptyBoard.length);
  const tinyShip = [emptyBoard[randomIndex]];
  emptyBoard.splice(randomIndex, 1);

  const smallShip = finalShipPlacement(emptyBoard, 2);
  smallShip.forEach((val) =>
    emptyBoard.splice(
      emptyBoard.indexOf(
        emptyBoard.find((x) => x[0] === val[0] && x[1] === val[1])!
      ),
      1
    )
  );
  const medShip = finalShipPlacement(emptyBoard, 3);
  medShip.forEach((val) =>
    emptyBoard.splice(
      emptyBoard.indexOf(
        emptyBoard.find((x) => x[0] === val[0] && x[1] === val[1])!
      ),
      1
    )
  );
  const bigShip = finalShipPlacement(emptyBoard, 4);
  bigShip.forEach((val) =>
    emptyBoard.splice(
      emptyBoard.indexOf(
        emptyBoard.find((x) => x[0] === val[0] && x[1] === val[1])!
      ),
      1
    )
  );

  let obj = {
    bigShip: bigShip,
    medShip: medShip,
    smallShip: smallShip,
    tinyShip: tinyShip,
  };

  return obj;
}
