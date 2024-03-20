//如果n=5, 收先第一圈跳過進到
//第二個retrun
//=> 5*factorial(4)=>5*4*factorial(3)=>5*4*3*factorial(2)=>5*4*3*2*factorial(1)=>5*4*3*2*1

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 應返回120
console.log(factorial(10)); // 應返回3628800
