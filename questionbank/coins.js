function coinChange(coins, amount) {
  // recursive solution
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  let min = Infinity;
  // 請在這邊使用迴圈和遞迴，完成邏輯
  for (let i = 0; i < coins.length; i++) {
    let count = coinChange(coins, amount - coins[i]);
    if (count >= 0 && count < min) {
      min = count + 1;
    }
  }
  if (min === Infinity) return -1;
  return min;
}

console.log(coinChange([1, 2, 5], 11));
