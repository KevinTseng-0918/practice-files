function filterAdults(people) {
  const adult = people.filter((n) => n.age >= 18);
  return adult;
}
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Jim", age: 15 },
  { name: "Jill", age: 23 },
  { name: "Jack", age: 13 },
];

console.log(filterAdults(people)); // 應返回[{name: "Jane", age: 20}, {name: "Jill", age: 23}]
