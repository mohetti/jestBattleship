const Ship = (n: number) => {
  let intactParts = n;

  const hitShip = () => {
    intactParts--;
    return checkIfSunk();
  };
  const checkIfSunk = () => {
    return intactParts === 0;
  };
  return { hitShip };
};

export default Ship;
