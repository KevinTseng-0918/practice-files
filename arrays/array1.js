//array = 陣列

const arr = [];
const arr2 = [1, 2, 3];
const arr3 = ["1", "2", "3"];
const arr4 = ["1", 2, true];

console.log(typeof arr);

//length
console.log(arr.length);
console.log(arr3.length);
//indexing(取值)
console.log(arr2[0]);
//取範圍外的值會回傳undefined
console.log(arr2[-1]);
console.log(arr2[100]);

//改值
arr2[0] = 100;
console.log(arr2);
console.log(arr2[0]);
