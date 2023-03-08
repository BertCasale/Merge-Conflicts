function addAllNumbers(...arr) {
  if (!arr.every((element) => Number.isNumber(element)))
    throw "All arguments must be numbers.";
  return arr.reduce((a, b) => a + b);
}

addAllNumbers(1, 2, 3); //> 6
  addAllNumbers(10, "B", 20); //> error All arguments must be numbers.