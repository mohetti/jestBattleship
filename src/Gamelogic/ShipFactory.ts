const Ship = (n: number) => {
  let intactParts = n;

  const hitShip = () => {
    intactParts--;
  };
  const checkIfSunk = () => {
    return intactParts === 0;
  };
  return { hitShip, checkIfSunk };
};

export default Ship;
