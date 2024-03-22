function findMax(numbers) {
  let max = numbers[0]; //假設array中的第一個數字是最大值
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      //開始在陣列中逐個比較大小
      max = numbers[i]; //如果比到更大的值則將max變數更新為當前的值借此持續更新最大值
    }
  }
  return max; //全部run完後再把最大值回傳
}

console.log(findMax([1, 3, 5, 7, 9])); // 應返回9
console.log(findMax([-2, 0, -10, -4])); // 應返回0
