// console.log("Hello 1");

// setTimeout(() => {
//   console.log("Hello 2");
// }, 0);

// // function printFun(){
// //     console.log("Hello ");
// // }

// console.log("Hello 3");

// function add(a, b, cb) {
//   const result = a + b;
//   cb(result);
// }
// function callBack(result) {
//   console.log("result", result);
// }

// add(10, 30, callBack);

// const names = ["Ali", "Bob", "Chris"];

// names.forEach((name) => {
//   console.log("name", name);
// });

// console.log("firstName", names[0]);

// const myForEach = (array, myCallback) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     myCallback(element);
//   }
// };

// myForEach(names, (name) => {
//   console.log("name", name);
// });

// const students = [
//   {
//     id: 1,
//     name: "Ali",
//     email: "ali@gmail.com",
//     age: 20,
//     gender: "male",
//   },
//   {
//     id: 2,
//     name: "Bob",
//     email: "bob@gmail.com",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 3,
//     name: "John",
//     email: "john@gmail.com",
//     age: 40,
//     gender: "male",
//   },
// ];

// students.forEach((student) => {
//   console.log("student", student);
// });

// const filteredStudents = students.filter((student) => student.id === 2);

// const filteredStudents = students.find(
//   (student) => student.email === "bob@gmail.com"
// );

// console.log("filteredStudents", filteredStudents);

// const newStudents = students.map((student) => student.name);

// console.log("newStudents", newStudents);

// const student2 = {
//   id: 4,
//   name: "Hassan",
//   age: 20,
// };

// const { age } = student2;

// console.log("student2", age);

// console.log("student2 spread", ...student2);

// const student3 = {
//   ...student2,
//   email: "hassan@gmail.com",
// };
// console.log("student3", student3);

let a, b, remainig;

// [a, b] = [10, 20];

// console.log(a);

// console.log(b);

// [a, b, ...remainig] = [10, 20, 30, 40, 50];

// console.log(remainig);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [...array1, ...array2];
// console.log(array3);

function sum(...theArgs) {
  console.log("theArgs", theArgs);
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
