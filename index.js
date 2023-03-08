function reduceSomeNums(...numberArray) {
  if (!numberArray.every((nom) => Number.isNumber(nom)))
    throw "All arguments must be numbers.";
  return numberArray.reduce((a, b) => a + b);
}

reduceSomeNums(1, 2, 3); //> 6
reduceSomeNums(10, "B", 20); //> error All arguments must be numbers.