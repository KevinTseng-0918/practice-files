function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

const scores = [90, 95, 85, 100];
console.log(calculateAverage(scores)); // 應返回92.5
