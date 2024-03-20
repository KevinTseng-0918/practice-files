//迴文

const str = "abccba";
let isPalindrome = true;
let i = 0;

//Math.floor:用於取最接近的整數且不大於所給數字的最大整數，用於將字串長度切半
while (i < Math.floor(str.length / 2)) {
  //str.length -1 =最後一個字 ex:str[6-1]=a
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break; // 如果發現不相等的字元，立即跳出迴圈，不需要繼續比較
  }
  i++;
}
if (isPalindrome) {
  console.log("是迴文");
} else {
  console.log("不是迴文");
}
