
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortedArray = students.sort(function(a,b){
  return (a.name > b.name) ? 1 : a.name < b.name ? -1 : a.age > b.age ? -1 : 1;
});

console.log(sortedArray);