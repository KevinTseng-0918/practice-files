//閨年判斷
const year = 2100;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("閨年");
} else {
  console.log("平年");
}
