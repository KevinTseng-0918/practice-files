// array 3種迭代

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, 3, 4, 5, 6, 7];
//for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//for of
for (const n of arr2) {
  console.log(n);
}
//forEach
arr3.forEach((n) => {
  console.log(n);
});
