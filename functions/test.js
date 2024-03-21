function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const counter1 = outer();
const counter2 = outer();
const result1 = counter1();
//在這行中，counter1() 函式被呼叫。這個函式會使 count 變數增加 1，並返回 count 的值。因此，result1 將會是 1
const result2 = counter1();
//在這行中，再次呼叫 counter1() 函式。這會導致 count 變數再次增加 1，因此 result2 將會是 2
const result3 = counter2();
//在這行中，呼叫 counter2() 函式。雖然 counter2 也是由 outer() 返回的，但是它獨立於 counter1，所以 count 變數在 counter2 中是一個全新的變數，值從 0 開始。因此 result3 將會是 1

console.log(result2);
console.log(result3);
