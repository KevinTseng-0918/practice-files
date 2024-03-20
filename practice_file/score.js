// let score = prompt("請輸入您的成績");
// score = Number(score);
const score = 60;
if (score >= 90) {
  console.log("優秀");
} else if (score < 90 && score >= 80) {
  console.log("良好");
} else if (score < 80 && score >= 70) {
  console.log("中等");
} else if (score < 70 && score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
