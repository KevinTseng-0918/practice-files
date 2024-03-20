let year = prompt("請輸入年份");
year = Number(year);
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + "閨年");
} else {
  console.log(year + "平年");
}
