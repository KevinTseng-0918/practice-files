function findPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
function isPrime(i) {
  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrimes(10)); // 應返回[2, 3, 5, 7]
console.log(findPrimes(20)); // 應返回[2, 3, 5, 7, 11, 13, 17, 19]
