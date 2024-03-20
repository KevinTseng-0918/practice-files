function isLeapYear(year) {
  if (`${year}` % 400 === 0 || (`${year}` % 4 === 0 && `${year}` % 100 !== 0)) {
    return "閨年";
  }
  return "平年";
}

console.log(isLeapYear(2024)); // 應返回閏年
console.log(isLeapYear(1977)); // 應返回平年
//test
