function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

console.log(sum);
console.log(sum(2, 3));

function printResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`);
}

printResult(10, 25, sum);
printResult(10, 25, mult);
