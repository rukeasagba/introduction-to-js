// SINGLE LINE COMMENT


//alert("Hello world");

/*
MULTI-LINE COMMENT

*/

//Declaring variables

//var fruit = "Apple";
//fruit = "Mango";
//console.log(fruit);


// let car = "Mercedes";
// car = "Benz";
// console.log(car);


// const color = "White";
// // color = "Blue";


// //Data Types

// //String

// // const myName = "Lawrence";
// // const fruit = "Apple";
// // const age = 20;
// //const car = "Benz"

// // Concatenation
// // console.log("My name is " + 
// // myName + 
// // "and I love " + 
// // fruit +
// // " and I am " +
// // age +
// // " years old"
// // );


// let firstNumber  = 10;
// let secondNumber = 20;
// const sum = firstNumber + secondNumber;
// firstNumber++;


// //Addition
// console.log(firstNumber + secondNumber);

// //Classwork
// console.log(firstNumber + " + " + secondNumber + " = " + sum);


// //Subtraction
// console.log(secondNumber + " - " + firstNumber + " = " + firstNumber);

// //Division /
// //console.log(secondNumber / firstNumber);

// //Multiplication *
// //console.log(firstNumber * secondNumber);

// //Exponential **
// console.log(firstNumber ** 2);

// //Modulus %
// console.log("Modulus " + (firstNumber % 6))


// //Increment ++ and Decrement --
// console.log(firstNumber);


//Number
//const digit = 20.5;
//onsole.log(typeof digit);

const amount = 30.5
console.log(typeof amount);


//Boolean
//const positive = true;
//const negative = false;

// let negative;
// console.log(typeof negative);
// negative = false;
// console.log(typeof negative);


// let car = "Benz is a car";

//Length
// console.log(car.length);


//Uppercase
// console.log(car.toUpperCase());

//Lowercase
// console.log(car.toLowerCase());


//Trim removes any unwanted white space
// console.log(car.trim());


//slice
// console.log(car.slice(5, 8));
// console.log(car.slice(-9, -3));
// console.log(car.slice(0, -9));


//Replace words
// console.log(car.replace("car", "boat"));
// console.log(car.replace("Benz", "Mercedes"));


// const myName = "Lawrence";
// const hobby = "Watching Anime";
// const age = 20;

// const tempStr = `My name is ${myName}, I love ${hobby} and I am ${age} years old`;

// console.log(tempStr);

// const num1 = 10;
// const num2 = "10";
// const num3 = 20

// + works for mathematical operations and concatenation

// console.log(num1 + num2);

// - works only for mathematical operations
// console.log(num1 - num2);

//It will first do the mathematical operation before concatenation
// console.log(num1 + num3 + num2);


// const username = prompt("What is your name?");
// console.log(`You are welcome ${username}`);

// const username = "Ruke";
// const hobby = "Dancing";
// const age = 30;

//Accept name, hobby and age
// const username = prompt("What is your name?");
// console.log(`You are welcome ${username}`);

// const hobby = prompt("What is your hobby?");
// console.log(`You love ${hobby}`);

// const age = prompt("What is your age?");
// console.log(`You are ${age} years old`);

// const tempStr = `My name is ${username}, I love ${hobby}, and I am ${age} years old`;


//OBJECTS


//ARRAYS
// const fruits = ["mango", "banana", "guava", "pear"];

//Reverse list

// console.log(fruits.reverse());


//To find the last fruit
// const numOfFruit = fruits.length; // 4
// console.log(fruits[numOfFruit - 1]);

// console.log(fruits[2]);

// console.log(fruits.length);

// console.log(fruits[0].toUpperCase());

// const dogs = "Brown is a dog";

// console.log(dogs.split(' '));

// console.log(dogs.split(''));

/* Formula for circumference of a circle  = 2pir

Accept the radius from the user

Print out the result of the circumference in: The circumference of the circle is: result

Hint: make pi a constant of 3.12
*/

// const pi = 3.12;
// const radius = prompt("What is the radius of the circle?");
// const circumference = 2 * 3.12 * radius;
// const result = `The circumference of the circle is: ${circumference}`;
// console.log(result);

// Area of circle
/*Classwork
Formula for area of a circle  = pirsquared
Accept the radius from the user
Print out the result of the area in: The area of the circle is: result
Hint: Make pi a constant of 3.12
*/


// const pi = 3.12;
// const radius = prompt("What is the radius of the circle?");
// const area = 3.12 * radius**2;
// // const area = pi * Math.pow(radius, 2);
// const result = `The area of the circle is ${area}`;
// console.log(result);

// Square root
// const root = Math.sqrt(81);


// ASSIGNMENT
//Screenshot code of Almighty formula. Due on 15th

// const a = prompt ("What is a?");
// const b = prompt("What is b?");
// const c = prompt("What is c?");
// const z = 4 * a * c;
// const y = Math.sqrt(b**2 - z);
// const p = -b + y;
// const r = -b - y;
// const quadraticFormula1 =  p / 2 * a;
// const quadraticFormula2 = r / 2 * a;
// const result = `x is ${quadraticFormula1} , ${quadraticFormula2}`; 
// console.log(result);

//Answer to Assignment
// let a = 1;
// let b = 2;
// let c = 3;
// const x1 = -b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
// const x1 = -b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;


//Remove from the back of an array
//fuits.pop();

// const fruits = ['Mango', 'Banana', 'Guava', 'Pear']

//Add to the end of an array
//fruits.push('Apple');

//Remove from the beginning of an array
//fruits.shift();

//Add to beginning of an array
// fruits.unshift('Apple');

//Splicing - Adding to an array

// fruits.splice(2, 0, 'Apple');


//Index of an array starts from 0 and the index of a string starts from 1

//Splicing - Removing from an array
// fruits.splice(2, 1);

//Splicing - Remove from an array and add something
// fruits.splice(2, 1, 'Apple');

//Replace
// fruits.splice(0, 1, 'Apple');
// fruits[0] = 'Apple';

// console.log(fruits);


//Comparison Operators
//Greater than

// console.log(10 > 5)

//Lesser than
// console.log(5 < 10)

//Greater or equal
// console.log(10 >= 5)

//Lesser or equal
// console.log(5 <= 10)

// Double Equal to checks on value
// console.log('10' == 10)

//Not equal to checks only the value
// console.log(10 != 9)

// Triple not equal to checks the value and the type
// console.log('10' === 10)

//Triple equal to checks the value and type
// console.log('10' === 10)
// console.log('10' === 'ten'); //Computer does not know ten is 10, hence false


// AND, OR , NOT.  1 IS TRUE AND 0 IS FALSE
// AND
// 1 && 0 = 0
// 1 && 0 = 0
// 1 && 1 = 1
// 0 && 0 = 0
// 0 && 1 = 0
// 1 && 1 = 1

//OR
// 1 || 1 = 1
// 1 || 0 = 1
// 0 || 1 = 1
// 0 || 0 = 0

//Not symbol is !
// Not 1 = 0
// Not 0 = 1
// !true = false


//Conditionals
// if (2 == 2) {
//     console.log('Yes it is correct');
// }

// if (2 !== 2) {
//     console.log('Yes it is correct');
// }

// if (2 === '2') {
//     console.log('Yes it is correct');
// } else{
//     console.log('No, it is not correct')
// }

// const age = 20;

// if(age >= 18) {
//     console.log('You can drive a car.');
// } else if (age <= 18) {
//     console.log('You cannot drive a car, but you can drive a bicycle');
// }

// let age = 11;

// if (age >= 18) {
//     console.log('You can drive a car.');
// } else if (age < 18 && age > 12 ) {
//     console.log('You cannot drive a car, but you can drive a bicycle');
// } else {
//     console.log('It is not safe for you to drive now');
// }

//Classwork 
//Get age from user
//Then if age is greater than equal to 18, then say, you are ---- years old and you can drive a car

// let age = prompt("What is your age?");

// if (age >= 18) {
//     console.log('You are ' + age + ' years old and you can drive.');
// } else if (age <= 17 && age >= 12) {
//     console.log('You are ' + age + ' years old, you cannot drive a car, but you can drive a bicycle');
// } else {
//     console.log('You are ' + age + ' years old, and it is not safe for you to drive now');
// }

// let message = '';
// switch (parseInt(age)) {
//     case 1:
//         message = 'You are 1 year old, you cannot drive';
//         break;
//     case 2:
//         message = 'You are 2 years old, you can not drive';
//         break;
//     case 3:
//         message = 'You are 3 years old, you can not drive';
//         break;
//     case 4:
//         message = 'You are 4 years old, you can not drive';
//         break;
//     case 5:
//         message = 'You are 5 years old, you can not drive';
//         break;
//     case 6:
//         message = `You are ${age} years old, you can not drive`;
//         break;
//     case 18:
//         message = 'You are 18 years old, you can drive';    

// }

// console.log(message);

// let gender = prompt('What gender do you identify as?');

// let message = '';
// switch (gender) {
//     case 'female':
//         console.log('You are female, you qualify');
//         break;
//     case 'male':
//         console.log('You are male, you do not qualify');
//         break;
//     case 'neutral': 
//         console.log('You are neutral, you qualify under certain conditions');
// }



// const fruit = 'Apple'

// switch (fruit) {
//     case 'Apple':
//         console.log('This is an apple');
//         break;
//     case 'banana':
//         console.log('This is a banana');
//         break;
//     default:
//         console.log('This fruit is not in our list');
// }

//Classwork
//Accept any number from a user, tell the user the type of number it is, the number can either be even or odd

// let number = prompt("Enter a number");

// if (number % 2 === 0) {
//     console.log('This is an even number');
// } else {
//     console.log('This is an odd number');
// } 


//Iterations
// Iterations are also known as loops

//For loop
// for (let i = 1; i <=5; i = i + 2) {
//     console.log(i)
// }

//i += 2 is the same thing as i = i + 2

// const fruits = ['Apple', 'Banana', 'Orange', 'Guava', 'Pear']
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// const fruits = ['Apple', 'Banana', 'Orange', 'Guava', 'Pear']
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

//For in loop

// for (let item in fruits) {
//     console.log(fruits[item]);
// }

// //For of Loop
// for (item of fruits) {
//     console.log(item);
// }

// Foreach
// fruits.forEach(function (item, index) {
//     console.log(`${index + 1}: ${item}`);
// });


// const car = {
//     model: 'Benz',
//     color: 'yellow',
//     year: 2020,
// };

// for (let key in car) {
//     console.log(car[key]);
// }

// //For in loop 

// for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
// }


//Functions

//Function Declaration
// function printName() {
//     console.log('Lawrence');
// }
// printName();

//Function Expression
// const printName = function () {
//     console.log('Lawrence');
// }
// printName();

// const printName = function (name) {
//     console.log(name);
// }
// printName('John');



// Classwork

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(8, 2);
// sum(20, 2);


// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(2, 3));

//Joining two or more arrays together using the spread operator (...)
// const name1 = ['Bolu', 'Eniola', 'Jerry'];
// const name2 = ['Ike', 'Tom', 'Barry'];

// const allNames = [...name1, ...name2];
// console.log(allNames);

// const name1 = ['Bolu', 'Eniola', 'Jerry'];
// const name2 = ['Ike', 'Tom', 'Barry'];

// const allNames = [...name1, ...name2, 'Lawrence'];
// console.log(allNames);

// const name1 = ['Bolu', 'Eniola', 'Jerry'];
// const name2 = ['Ike', 'Tom', 'Barry'];
// const myName = "Ayo"
// const allNames = [...name1, myName, ...name2, 'Joy'];
// console.log(allNames);

//Joining 2 or more objects together using the spread operator (...)

// const car = {
//     model: 'BMW',
//     year: 2020,
// };

// const person = {
//     name: 'John',
//     age: 20,
//     ...car,
// }

// console.log(person);


// const car = {
//     model: 'BMW',
//     year: 2020,
// };

// const person = {
//     userName: 'John',
//     age: 20,
//     ...car,
// }

//Destructuring
// const { userName, model, age} = person;
// // const carName = person.model;
// // const userName = person.userName;
// // const personAge = person.age;

// console.log(userName, model, age)

// // For objects we use curly braces {}, for arrays we would use square brackets[]
// //Arrays have fixed position but objects don't
// //Objects have keys and values. year is a key and 2020 is a value (example above)

// const fruits = ['Apple', 'Orange', 'Banana', 'Guava'];
// //Fruits[0];
// //fruits[1];
// const [firstFruit, thirdFruit, secondFruit] = fruits;
// console.log(secondFruit);

//secondfruit, thirdfruit and firstfruit don't mean first, third and second fruit in the array
//They will bring out what's in the position it is placed. so thirdfruit brings orange instead of banana


//Classwork
/* Write a function that accepts 3 arguments, the function should return a string that says, 
"Hello Lawrence, you are 20 years old and you love reading"
*/



// function userDetail(userName, age, hobby) {
//     return `Hello ${userName}, you are ${age} years old and you love ${hobby}`
// }

// console.log(userDetail('Lawrence', 20, 'reading'));

//Classwork write a function that returns the square of a number

// function square(num1){
//     return num1**2
// }

// console.log(square(5))

// const square = function (num){
//     return Math.pow(num, 2);
//     // return num * num;
//     // return num ** 2;
// }

// console.log(square(12));

//Arrow Functions
// const square = (num) => {
//     return Math.pow(num, 2);

// }
// console.log(square(3));

// const square = (num) => Math.pow(num, 2);
// console.log(square(9))

//You can't use function declaration for arrowhead. You have to make it an expression

//Convert classwork above into a function expression with arrow function

// const userDetail = (userName, age, hobby) => `Hello ${userName}, you are ${age} years old and you love ${hobby}`
// console.log(userDetail('Lawrence', 20, 'reading'));

//Classwork
//Write a program that iterates 20 times
//if the number is divisible by 3 print "Fizz"
//else if the number is divisible by 5 print  "Buzz"
//else if the number is divisible by 3 and 5 print "Fizz Buzz"
//else print the number


//For loop
// for (let i = 1; i <=5; i = i + 2) {
//     console.log(i)
// }

// if (age >= 18) {
//     console.log('You are ' + age + ' years old and you can drive.');
// } else if (age <= 17 && age >= 12) {
//     console.log('You are ' + age + ' years old, you cannot drive a car, but you can drive a bicycle');
// } else {
//     console.log('You are ' + age + ' years old, and it is not safe for you to drive now');
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('Fizz Buzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

//Map, Filter, Find, Reduce
// const drinks = [
//     {
//         id: 1,
//         color: 'Black',
//         sugar: '40gm',
//         isCarbonated: true,
//     },
//     {
//         id: 2,
//         color: 'Brown',
//         sugar: '0gm',
//         isCarbonated: false,
//     },
//     {
//         id: 3,
//         color: 'orange',
//         sugar: '40gm',
//         isCarbonated: true,
//     },
// ];

// const canDrinks = drinks.map(function (drink, index){
// let newObj = {};
// if (drink.id === 1) {
//     newObj = { ...drink, isCanned: true };

// } else {
//     newObj = { ...drink, isCanned: false };
// }
// return newObj;
//     return drink.id === 1 
//     ? { ...drink, isCanned: true } 
//     : { ...drink, isCanned: false};
// });

// console.log(canDrinks);

//Always return when mapping. 

//FILTER
// const carbonated = drinks.filter((drink) => {
//     return drink.isCarbonated === true;
// });

// console.log(carbonated);

//FIND
// const tea = drinks.find((drinks) => {
//     return drinks.color === 'Brown';

// });

// console.log(tea);

//REDUCE
// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((initialValue, currentValue) => {
//     return initialValue + currentValue;
// }, 0);

// console.log(sum);

// const cart = [
//     {productName: 'iphone12', price: 245000},
//     {productName: 'Samsung A22', price: 110000},
//     {productName: 'Nokia 3310', price: 10000},
// ];

// const totalPrice = cart.reduce((initialValue, currentValue) => {
//     return initialValue + currentValue.price;
// }, 0);

// console.log(totalPrice);

//Assignment
//Write a function that receives an argument
//If the argument when reversed is the same when spelt from the beginning
//print true
//else print false
//example madam would print true but leg would print false'
//131 would print true but 311 would print false

// function spelling (epe) {
//     if ()
// }


// function palindrome(str) {
//     return true;
// }
// palindrome("eye");


// function isPalindrome(string) {
//     const reversedString = '';
//     for (let i = string.length - 1; i >= 0; i-- ) {
//         reversedString += string[i];
//     }
//     return string === reversedString
// }

// program to check if the string is palindrome or not

// program to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // convert string to an array
//     const arrayValues = string.split('');

//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     const reverseString = reverseArrayValues.join('');

//     if (string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// const string = prompt('Enter a string: ');

//ANSWER TO ASSIGNMENT
// function checkPalindrome(str) {

//     // convert string to an array
//     const arrayValues = str.split('');

//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     const reversemadam = reverseArrayValues.join('');

//     if (str == reversemadam) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// };


// checkPalindrome('madam');
// checkPalindrome('leg');

//CLASSES
//Always start class name with uppercase letter

//Name export
// import { Movie } from './Movie'

//Default export
// import Movie from './Movie'



// class Person {
//     constructor(firstName, age, hobby) {
//         this.firstName = firstName;
//         this.age = age;
//         this.hobby = hobby;

//     }

//     summary(){
//         return `My name is ${this.firstName}`;
//     }

//     getage(){
//         return `You are ${this.age} years old. In two years you would be ${this.age + 2} years old`;
//     }

//     getFutureAge(num) {
//         return `You would be ${this.age + num} in ${num} years.`;
//     }
// }

// //Create a class to inherit previous class
// class Job extends Person {
//     constructor(firstName, age, hobby, jobName) {
//         super(firstName, age, hobby);
//         this.jobName = jobName;
//     }

//     getJobName() {
//         return `Hi ${this.firstName}, you are a ${this.jobName}.`;

//     }

// }

// //This is an example of instances. When working on classes, you need to create an instance
// const personOne = new Person('John', 20, 'driving');
// const personTwo = new Person('Bola', 22, 'reading');
// const personOneJob = new Job('Bola', 22, 'reading', 'Frontend Dev');


// console.log(personOne.getage());
// console.log(personOne.getFutureAge(5));
// console.log(personOneJob);
// console.log(personOneJob.getJobName());



// class Movie {
//     constructor(title, genre, tags) {
//         this.title = title;
//         this.genre = genre;
//         this.tags = tags;
//     }

//     description() {
//         this.tags.forEach((tag) => {
//             console.log(`${this.title} has ${tag} tag.`);
//         });
//     }
// }



//Modules (Imports and Exports)
//Default export
// import Movie from './Movie.js';

// const got = new Movie('Game of Thrones', 'Thriller', ['War', 'Blood', 'Lies'])
// console.log(got.description());

//You can change name of export default when importing
// import Cinema from './Movie.js';

// const got = new Cinema('Game of Thrones', 'Thriller', ['War', 'Blood', 'Lies'])

// //Named export
// import {colors} from './Movie.js'
// console.log(colors)

//Named and Default export
// import Cinema, {colors as crayon} from './Movie.js';
// console.log(crayon);

//Another format for Named and Default Export
// import Cinema, { colors } from './Movie.js';
// console.log(colors);

/* Classwork: Create a new file Calculation.js
Create a class in calculation.js file
In the class, create a method to
=> add
=> substract
=> multiply
=> divide

examples:
const calc = new calculation();
calc.add(2,3) = 5
calc.substract(5, 2) = 3
calc.multiply(2, 7) = 14
calc.divide(81, 9) = 9
*/

//Answer to Classwork
import Calculation from './calculation.js'

const calc = new Calculation();
console.log(calc.add(2, 3))
console.log(calc.subtract(8, 2))
console.log(calc.multiply(7, 2))
console.log(calc.divide(81, 9))





















// console.log(personTwo);


// const personOne = {
//     firstName: 'John',
//     age: 20,
//     hobby: 'driving',
//     summary(){
//        return this;
//     },
// };

// console.log(this)
// console.log(personOne.summary())


// const personTwo = {
//     firstName: 'Bola',
//     age: 22,
//     hobby: 'playing games',
// };

