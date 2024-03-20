const str = "abccbajfdsalkjfklasjoirwjkl;adsfk;";
const character = "a";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === character) {
    count++;
  }
}
// 請在這邊使用for迴圈，計算字串中，character字元出現的次數，並將結果存到count
console.log(`字串 ${str} 中，字元 ${character} 出現了 ${count} 次`);
