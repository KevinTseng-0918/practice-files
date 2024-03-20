//質數判斷式
const n = 8;
let isPrime = true;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    console.log("不是質數");
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("是質數");
}
