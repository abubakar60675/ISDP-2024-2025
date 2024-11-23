console.log("Hello World");

// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

var a = 10;

let b = 10;
b = "something";

const c = 10;
// c = "something";
const student = {
  name: "Ali",
  email: "ali@gmail.com",
};

student["age"] = 20;

const array = [1, 2, 3];
array[0] = 10;

array.unshift(4);
console.log("b", b);
function sum(first, second) {
  console.log("first", first);
  console.log("second", second);
  a = 20;
  console.log("a", a);
  let b = 30;

  console.log("b in function", b);
  var d = "new";
}

function add(a, b) {
  return a + b;
}

// const add1 = (a, b) => {

//   return a + b;
// };

const add1 = (a, b) => a + b;

console.log("add1 shortcut", add1(10, 20));

const add2 = (a, b) => {
  return a + b;
};

const addValue = add(10, 20);

console.log("add", addValue);
console.log("add", add(10, 20));

// console.log("d", d);
console.log("a", a);
console.log("b out of function", b);

sum(5, 10);

console.log("array type of", typeof array);
console.log("array", array);

console.log("c", c);

console.log("student", student);

console.log("a", a);
