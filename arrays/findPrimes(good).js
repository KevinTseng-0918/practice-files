function findPrimes(n) {
  let arr = [2, 3];
  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(findPrimes(10)); // 應返回[2, 3, 5, 7]
console.log(findPrimes(20)); // 應返回[2, 3, 5, 7, 11, 13, 17, 19]
