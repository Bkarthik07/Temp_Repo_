//singleton
//object literals
// const jsuser = {
//     name:"karthik",
//     age:20
// };
// console.log(jsuser);
// console.log(jsuser["name"]);
// let object = new Object();
// object.name = "karthik";
// console.log(object);
// const jsuser = {
//     name: "karthik",
//     age: 20,
//     getName: function() {
//         return this.name;
//     },
//     setName: function(name) {
//         this.name = name;
//     },
//     fullname:{
//         firstName: "karthik",
//         lastName: "kumar",
//         getFullName: function() {
//             return this.firstName + " " + this.lastName;
//         },
//         setFullName: function(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }
// };
// console.log(jsuser.fullname?.firstName);


//********************************************************************** */
// const obj1 = {1: "karthik", 2: "kumar"};
// const obj2 = {3: "karthik", 4: "kumar"};
// const obj3 = {obj1, obj2};
// console.log(obj3);
// Object.assign(obj1, obj2);
// console.log(obj1);
// obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
// console.log(Object.getOwnPropertyNames(obj3));

//Destructuring
    // const user = {
    //     name: "karthik",
    //     email:"karthik@gmail.com",
    //     age: 20
    // };
    // console.log(user);
    // const {name} = user;
    // console.log(name);
// //function destructuring
// const user = {
//     name: "karthik",
//     email: "karthik@gmail.com"
// };
// function getUserName({name}){
//     console.log(name);
// }
// getUserName(user);
// //array destructuring
// const arr = [1, 2, 3, 4, 5];
// const [a, b, c, ...rest] = arr;
// console.log(a, b, c, rest);
// //nested destructuring
// const nestedArr = [1, 2, [3, 4, 5]];
// const [x, y, [z, w]] = nestedArr;
// console.log(x, y, z, w);

// {
//     "name": "karthik",
//     "age": 20,
//     "getName": function() {
//         return this.name;
//     }
// }
// if(true){
//     var a = 10;
//     let b= 20;
//     const c = 30;
// }
// const c = 1
// let b = 20;
// console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

//Closures
// function outerFunction() {
//     let outerVariable = "I am from outer function";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }
// const closureFunction = outerFunction();
// closureFunction(); // Output: I am from outer function  

// function createCart() {
//   let items = [];

//   return {
//     addItem: function (item) {
//       items.push(item);
//       console.log(`${item} added to cart.`);
//     },
//     showCart: function () {
//       console.log("Cart contains:", items);
//     }
//   };
// }

// const myCart = createCart();

// myCart.addItem("Apple");
// myCart.addItem("Banana");
// myCart.showCart(); // Cart contains: [ 'Apple', 'Banana' ]
//****************************************** */
// //This and Arrow Functions
// const person = {
//     name:"karthik",
//     age:20,
//     gmail:"karthik@gmail.com",
//     print:function(){
//         console.log(`name:${this.name},age:${this.age}`);
//     }
// };
// person.print(); // name:karthik,age:20
// const user = () =>{
//       console.log("arrow function");
//       console.log(this)
// }
// user();
// const user1 = () => console.log("hi hello");
// user1(); // hi hello

//****************************************************************** */
//Immediately Invoked function Expression (IIFE)

// (function greet(){
//     console.log("Hello, World!");
// })();
//****************************************************************** */
// const map = new Map();
// map.set("name", "karthik");
// map.set("age", 20); 
// map.set("email", "karthik@gmail.com");
// console.log(map);
// for(const [i,j] of map){
//     console.log(i+" "+j);
// }
// const user = {
//     name: "karthik",
//     age: 20,
//     email: "karthik@gmial.com"};
// for
// const arr = ['karthik', 'kumar', 'ramu', 'suresh'];
// arr.forEach((item) => {
//     console.log(`Value: ${item}`);
// });

//************************************************************************** */
//filter, map, reduce
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter
// const evenNumbers = arr.filter((num) => num%2 === 0);
// console.log("Even Numbers:", evenNumbers); // Even Numbers: [ 2, 4, 6, 8, 10 ]
//map
// newnums = arr.map((num)=> num+10);
// newnums = arr.map((num) => num + 10).filter((num) => num%2 === 0).map((num)=>num+1);
// console.log("New Numbers:", newnums); // New Numbers: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
//reduce
// const sum = arr.reduce((accmulator, currentValue) => (accmulator+currentValue), 0);
// console.log("Sum:", sum); // Sum: 55