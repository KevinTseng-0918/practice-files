//array最常用的methods:map & filter

const arr = [1, 3, 5, 7, 100, 224];
//map
const doubled = arr.map((n) => 2 * n);
const strarr = arr.map((n) => n.toString());
const doubleOdds = arr.map((n) => {
  if (n % 2 !== 0) {
    return n * 2;
  }
  return n;
});
console.log(doubled);
console.log(strarr);
console.log(doubleOdds);
//filter
const odd = arr.filter((n) => {
  if (n % 2 !== 0) {
    return n;
  }
});
const greaterthan100 = arr.filter((n) => n >= 100);

console.log(odd);
console.log(greaterthan100);
