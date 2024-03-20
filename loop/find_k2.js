const str = "12345k12345k";
let i = 0;

while (i < str.length) {
  if (str[i] == "k") {
    console.log("第" + i + "個是k");
  }
  i++;
}
