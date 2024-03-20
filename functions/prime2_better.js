//質數判斷式(用functions表達)(優化版)

function isprime(i) {
  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      //console.log("不是質數");
      return false;
    }
  }
  //console.log("是質數");
  return true;
}
//console.log(isprime(5));不需要用console.log() 上面已經印出來了
console.log("5是質數", isprime(5));
console.log("6是質數", isprime(6));
