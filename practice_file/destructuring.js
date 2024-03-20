//destructuring = 解構
const kevin = {
  name: "kevin",
  age: "18",
  email: "kevin@gmail.com",
};
const { name, age, email } = kevin;
console.log(name, age, email);

//function
function printname({ name, age }) {
  console.log(name);
  console.log(age);
}
printname(kevin);
