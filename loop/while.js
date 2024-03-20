let i = 0;

while (i < 100) {
  if (i % 5 === 0) {
    i++;
    continue;
  }
  console.log(i);
  //process.stdout.write(i + " "); //左到右輸出
  i++;
}
