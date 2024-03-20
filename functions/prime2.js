//質數判斷式(用functions表達)

function isprime(i) {
  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      console.log("不是質數");
      return;
    }
  }
  console.log("是質數");
}
//console.log(isprime(5));不需要用console.log() 上面已經印出來了
isprime(5);
isprime(6);
