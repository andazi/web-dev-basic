// console.log('ye, i am learning javaScript');

// // conditional statement


// const dayOfWeek = prompt('Enter day of the week').toLowerCase();

// if (dayOfWeek === 'monday'){
//     console.log('YO, ITS MONDAY')
// } else if (dayOfWeek !== 'monday'){
//     console.log('ITS NOT MONDAY')
// }

// 0 - 5 = free 
// 6 - 10 = child $10
// 11 - 65 = Adult $20
// 65 + SENIOR $10

// const age = 80;
// const age = prompt('Enter your age');

// // if, else if, else statement

// if (age < 6){
//     console.log("You are a baby, you get in for free")
// } else if (age < 11) {
//     console.log("you are a child, you pay $10")
// } else if (age < 66 ){
//     console.log("Hello adult, you pay $20")
// } else {
//     console.log("helo Granny, you pay $10")
// }

// const password = prompt("pleae enter password");

// if (password.length >= 6){
//     if (password.indexOf(" ") !== -1){  // cannot include spaces = meaning 
//         console.log("Password cannot include spaces");
//     }
//     else{
//         console.log("Valid password");
//     }
// }
// else{
//     console.log("Password too short, must be 6+ characters");
// }

// checking for even and odd number

// let num = prompt('Enter a number? ')

// if (num % 2 === 0){
//     console.log(`${num} is even`);
// }
// else{
//     console.log(`${num} is odd`);
// };

// // checking factors of number

// const number = 12;

// const number = prompt("Enter a number to get it's factor?");

// let numberFactor = []

// for (let i = 1; i <= number; i++){
//     if(number % i === 0){
//         numberFactor.push(i)
//     }
// }
// console.log(`The factors of ${number} are ${numberFactor}`);



// // switch without break


// const day = 5;

// switch(day){
//     case 1:
//         console.log("weekday")
//     case 2:
//         console.log("weekday")
//     case 3:
//         console.log("weekday")
//     case 4:
//         console.log("weekday")
//     case 5:
//         console.log("weekday")
//     case 6:
//         console.log("weekend")
//     case 7:
//         console.log("weekend")
// }

// // switch with break is the best approach

// const day = 5;

// switch(day){
//     case 1:
//         console.log("weekday")
//         break
//     case 2:
//         console.log("weekday")
//         break
//     case 3:
//         console.log("weekday")
//         break
//     case 4:
//         console.log("weekday")
//         break
//     case 5:
//         console.log("weekday")
//         break
//     case 6:
//         console.log("weekend")
//         break
//     case 7:
//         console.log("weekend")
//         break
// }


// // when the output for cases are same

// const day = 5;

// switch(day){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("weekday")
//         break
//     case 6:
//     case 7:
//         console.log("weekend")
//         break
// }


// // array


// const colors = ['blue', 'red', 'green', 'orange']

// colors.pop() // removes from the end

// colors.push('yellow') // adds to the end

// colors.unshift('purple') // adds to the start

// colors.shift()  // removes from the end

// colors.unshift('teal')

// console.log(colors)


// const color = ["teal", "blue", "red", "green", "yellow"]

// const color1 = color.slice(2) // slices from index 2

// color.splice(4, 0, 'violet', 'aqua', 'maroon') //4 is index, 0 is num of removed item,  string is added item

// console.log(color)


// // object


// all keys are converted to string excluding symbols

// const client = {
//     favNum : 5485965,
//     isFunny : true,
//     color : 'pink',
//     1990 : 'jan'
// }  

// console.log(client[1990])
// console.log(client[favNum])

// console.log(client.favNum) // 5485965
// console.log(client.1990)  // unexpected number error
// console.log(client.'1990') // unexpected string error

// client.weight = 123 // add data
// client['height'] = 1.68  // add data

// client.color = 'gold' // modify color to gold

// const client1 = client;


// array and object


// object in an array

// const shoppingCart = [
//     {
//         product: 'dell xps',
//         price: 1200,
//         qty: 9
//     },
//     {
//         product: 'apple mac pro',
//         price: 2500,
//         qty: 6
//     },
//     {
//         product: 'asus',
//         price: 900,
//         qty: 25
//     }
// ]

// // access asus

// const productIndex = shoppingCart[2] // index of asus

// const productName = productIndex.product  // get value of product

// console.log(productIndex.product)

// // or

// console.log(shoppingCart[2].product)
// console.log(shoppingCart[2]['product'])

// // array in object

// const resume = {
//     firstName: 'Andazi',
//     lastName: 'Boboye',
//     age: 28,
//     strength: ['passion', 'curiosity', 'hardwork', 'team work', 'goal oriented'],
//     skills: ['data entry', [
//         'HTML', 'CSS', 'JavaSript', 'Python'
//     ], 'content creation', 'photography', 'photo editing'],
//     experience: {
//         currentYear: 'I lead A||z tech team in the production of work_with_me app, which has over 3 million downloads as at 20th jan, 2023',
//         year2: 'I have developed lots of trending portfolio site for client and website for educational institutes.',
//         year3: 'develop my portfolio site which has won twice in a row the awwward for top portfolio'
//     },
//     bio: ['answering question on stackover for fun', 'learning new technologies', 'teaching new coders', 'drinking coffee, lol']
// }

// resume['skills'][1]  // ['HTML', 'CSS', 'JavaSript', 'Python']

// resume['experience']['year2'] // ['i have develop ....]


// // loop


// // for loop

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for (let num = 20; num >= 10; num--){
//     console.log('This is a simple for loop')
//     console.log(`${num} is greater than 10`)
// }

// // adding 2 to i 

// for (i = 0; i<= 20; i += 2){
//     console.log(i)
// }

// iterating over a loop

// const names = ['john', 'abdul', 'kate', 'delgado', 'musk', 'boboye']

// for ( let i = 0; i <= names.length; i++){
//     console.log(i, names[i]);
// }


// // looping from start and end

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let i = 0; i <= numbers.length; i++){
//    console.log(i, numbers[i])
// }

// for (let i = numbers.length; i >= 0; i--){
//     console.log(i, numbers[i]);
// }

// // nested for loop

// let str = 'smile';

// for (i = 0; i <= str.length; i++){
//     console.log('outer:', i);
//     for (j = 0; j < str.length; j++){  // for every i, second for is iterated
//         console.log('   inner:', str[j])
//     }
// }

// const seatingChart = [
//     ['Jose', 'Mark', 'Sherry'],
//     ['Martha', 'Sisylus', 'Athena'],
//     ['Alex', 'Hayley', 'Luke']
// ];

// for (let row = 0; row < seatingChart.length; row++){
//     console.log(`row #${row + 1} are ${seatingChart[row]}`);
//     let Row = seatingChart[row];
//     for (student = 0; student < Row.length; student++){
//         console.log(Row[student]);
//     }
// }


// while loop

// iterating from 0

// let num = 0;
// while (num < 10) {
//     console.log(num, 'i love my mom');
//     num++;
// }

// iterating from 1

// let num = 0;
// while (num < 10) {
//     num++;
//     console.log(num, 'i love my mom');
// }

// // guessing game

// let maxNumber = parseInt(prompt('Enter maximum number?'));  // parseInt convert string to number, 45tt is convert to 45

// while (!maxNumber){   // not a number is falsy, if maxNumber is false, ! negate it to true 
//     maxNumber = parseInt(prompt('Enter a valid Number'));
// }

// const targetNumber = Math.floor(Math.random() * maxNumber + 1); //creating random numbers of 1 to maxNumber
// console.log(targetNumber);  // confirnmation if it works

// // guessing loop

// let guess = prompt("Guess a number or type 'q' to quit");  // all variable as input
// let attempts = 1;

// while (parseInt(guess) !== targetNumber){ // converts to number if a condition is not  correct
//     if (guess === 'q') {
//         break;
//     } else if (guess > targetNumber){
//         guess = prompt('Too high! Guess New Number');
//     } else {
//         guess = prompt('Too low! Guess New Number');
//     }
//     attempts++;
// }
// if (guess === 'q'){
//     console.log('You Quit!')
//     console.log('Try again later')
// } else {
//     console.log('Guessed number: ' + guess);
//     console.log('You win!!!');
//     console.log(`Took you ${attempts} trials`)
// }


// // for of

// const animals = ['dog', 'cat', 'monkey', 'tortoise', 'dove', 'rabbit', 'butterfly', 'snake', 'elephant', 'lion', 'kangaroo', 'lopster', 'dolphin', 'eagle'];

// // for loop

// useful if you want to get the index of item

// for (let i = 0; i < animals.length; i++){
//     console.log(`Visit https://www.animalgeographic.com/animal/${animals[i]}`);
// }

// // for...of

// clean and better

// for (let animal of animals){
//     console.log(`Visit https://www.animalgeographic.com/animal/${animal}`);
// }

// const seatingChart = [
//     ['Jose', 'Mark', 'Sherry'],
//     ['Martha', 'Sisylus', 'Athena'],
//     ['Alex', 'Hayley', 'Luke']
// ];

// for (let row of seatingChart){
//     for (student of row){
//         console.log(student);
//     }
// }

// const colleagueAge = {
//     dave: 34,
//     issac: 40,
//     boboye: 25,
//     mary: 30,
//     alex: 29,
//     hayland: 24,
//     cortius: 39
// }

// // for...in  for object iteration  only gives the key

// for (let names in colleagueAge){
//     console.log(names)
// }

// for (let colleague in colleagueAge){
//     console.log(`${colleague} is ${colleagueAge[colleague]}years old`)
// }

// we can use Objest.key() to get the keys

// for (let names of Object.keys(colleagueAge)){
//     console.log(names);
// }

// // we can use Object.value() to get the value

// for (let age of Object.values(colleagueAge)){
//     console.log(age);
// }

// // average age

// let totalAge = 0;
// let colleagues = Object.values(colleagueAge).length; 
// for (let age of Object.values(colleagueAge)){
//     console.log(age);
//     totalAge += age;
// }
// console.log('Total age = ' + totalAge + 'years');
// console.log(`Average age = ${totalAge / colleagues}years`);
// console.log(`Average age = ${Math.round(totalAge / colleagues)}years`);  // round age

// TODO LIST

// 'new' - Add a Todo
// 'list' - List all Todo
// 'delete' - Remove specific Todo
// 'quit' - Exit App

// const list = [];
// let action = prompt('Enter command?  (add) todo, (del) todo, (quit) todo (list) Todo');

// while (action !== 'quit'){
//     if(action === 'list'){
//         console.log('*********************')
//         console.log('list of items')
//         console.log('*********************')
//         for (let i = 0; i < list.length; i++){
//             todoList = `${i}: ${list[i]}`;
//             console.log(todoList)
//         }
//         console.log('*********************')
//     }else if (action === 'add'){
//         const newTodo = prompt('Enter new todo list?');
//         list.push(newTodo);
//         console.log(`${newTodo} added to list`)
//     }else if (action === 'del'){
//         console.log('*********************')
//         console.log('list of items')
//         console.log('*********************')
//         for (let i = 0; i < list.length; i++){
//             todoList = `${i}: ${list[i]}`;
//             console.log(todoList)
//         }
//         console.log('*********************')
//         const delIndex = parseInt(prompt('Enter list index to delete'));
//         if (Number.isNaN(delIndex)){ // study
//             console.log('invalid index')
//         } else if (delIndex >= list.length){
//             console.log(`no item at index ${delIndex}`)
//         }else{
//             const deleted = list.splice(delIndex, 1);
//             console.log(`${deleted} has been deleted`)
//         }
//     }
//     else{
//         console.log('Unknown command')
//         action = prompt('Enter command?  (add) todo, (del) todo, (quit) todo (list) Todo');
//     }
//     action = prompt('Enter command?  (add) todo, (del) todo, (quit) todo (list) Todo');
// }
// if ( action === 'quit'){ 
//     console.log('bye');
// }

// // function

// function randomNumber(){
//     console.log(Math.floor(Math.random() * 100) + 1);
// }
// randomNumber();  // call the function

// // function with argument

// function greetings(firstName) {
//     console.log(`Hello ${firstName}`);
// }

// greetings('Boboye');   //arguments are input to our functions


// // multiple arguments

// function greet(firstName, lastName){
//     return `Hey there, ${firstName} ${lastName}`;
// }
// greet('Boboye', 'Andazi');

// function laugh(sound, freq){
//     for (i = 0; i <= freq; i++){
//         console.log(sound);
//     }
// }
// laugh('muahahaha', 2);

// function laugh(sound, freq){
//     let laughter = [];
// for (i = 0; i <= freq; i++){
//     laughter.push(sound);
// }
// console.log(laughter);
// }
// laugh('muahahaha ', 2);

// function laugh(sound, freq){
//     let laughter = '';
//     for (i = 0; i <= freq; i++){
//         laughter += sound;
//     }
//     console.log(laughter.toUpperCase());
// }
// laugh('muahahaha ', 2);

// // return keyword

// function add(x, y){
//     let sum = x + y;
//     return sum;
// }
// add(4, 5);

// function ageLimit(age){
//     if (age < 13){
//         return "Bed time. Go and sleep dear.";
//     } else if (age < 18) {
//        return "I believe you have homework and get the hell away from the television";
//     } else if (age < 25 ){
//         return "How was college?";
//     } else if (age < 27){
//         return `You are ${age}years old. Leave the house and fly away`
//     } else {
//         return "How is the family?"
//     }
// }
// ageLimit(25);

// DEFINE YOUR FUNCTION BELOW:

// function sumArray(array){
//     let total = 0;
//     for(let i of array){
//         // console.log(total);
//         total += i;
//     }
//     return total;
// }
// sumArray([1,10,100,1000,10000]);

// weekdays

// const days = {
//     1: 'monday',
//     2: 'tuesday',
//     3: 'wednesday',
//     4: 'thursday',
//     5: 'friday',
//     6: 'saturday',
//     7: 'sunday'
// }

// function returnDay(day){
//     if (day < 1 || day > 7){
//         return null;
//     }
//     else {
//         return days[day];
//     }
// }
// let day = parseInt(prompt('number'));
// returnDay(day);


// // function scope
// vaiables declared inside a function is called local variable and can't ba access unless call upon
// variable declared outside a function is ccalled a global variable and can be access by other functions


// const creature = "Common Sea Dragon";

// function scubaDive(){
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }

// scubaDive(); // Spanish Dancer

// let fruit = 'Pineapple';
// function fruitName(){
//     let fruit = 'orange';  // local variable
//     return fruit;
// }
// fruitName();    // local variable
// console.log(fruit) // a global variable


// let fruit = 'Pineapple';
// function fruitName(){
//     return fruit;
// }
// fruitName();    // returns the global variable due to absense of local variable
// console.log(fruit) // a global variable

// let fruit = 'Pineapple';
// function fruitName(){
//     let fruit = 'orange';
// }
// fruitName();    // local variable declared but no return statement

// block scope
// mostly in loops and conditions

// let radius = 5;
// if (radius > 0 ){
//     let pI = 3.148;
//     let area = radius * pI;
// }
// console.log(radius);  // 5 : global variable
// console.log(pI);  //undefined
// console.log(area); //undefined


// let radius = 5;
// if (radius > 0 ){
//     let radius = 8;
//     let pI = 3.148;
//     let area = radius * pI;
// }
// console.log(radius);  // 5 : global variable
// console.log(pI);  //undefined
// console.log(area); //undefined

// let radius = 5;
// if (radius > 0 ){
//     let pI = 3.148;
//     let area = radius * pI;
//     console.log(radius)
//     console.log(pI);  
//     console.log(area); // 15.74  : global variable radius
// }
// console.log(radius);  // 5 : scope outside the block

// let radius = 5;
// if (radius > 0 ){
//     let radius = 10;
//     let pI = 3.148;
//     let area = radius * pI;
//     console.log(radius)
//     console.log(pI);  
//     console.log(area); // 31.48  : block scope : local variable 
// }
// console.log(radius);  // 5 : global variable


// lexical scope 

// function outer(){
//     let scientist = ['Dr Sinister', 'Dark Beast', 'Dr Doom', 'Doctor octopus'];
//     function inner(){
//         for (let name of scientist){
//             let cryHelp = `Save me!! ${name} has capture me as an apprentice`;
//             return cryHelp;
//         }
//     }
// }

// outer(); // no result : local variable need to be called

// function outer(){
//     let scientist = ['Dr Sinister', 'Dark Beast', 'Dr Doom', 'Doctor octopus'];
//     function inner(){
//         for (let name of scientist){
//             let cryHelp = `Save me!! ${name} has capture me as a student`;
//             console.log(cryHelp);
//         }
//     }
//     inner();
// }

// outer(); // inner() runs the outer runs inner


// function statement

// function add(x,y){
//     return x + y;
// }
// add(23, 77);  // 100

// function expression
// assign a function with no name to a variable

// const sum = function(x,y){
//     return x + y;
// }
// sum(23, 77);  // 100


// Higher order function
// function that accepts other function as arguments
// return a function


// // basic higher function with random

// function rollDie(roll){
//     for(let i = 0; i < 2; i++){
//         roll();
//     };
// } // roll() runs for based on the for loop in rollDie()

// function roll(){
//     const rolling = Math.floor(Math.random() * 6) + 1;
//     console.log(rolling);
// }

// rollDie(roll);  // rollDie() is call with roll() as argument which then runs it 


// // returning a function


// function ageGroup(age){
//     return age >= 18 && age <= 45
// }

// console.log(34); // true

// // assign function as a variable

// function ageGroup(min, max){
//     return function (age){
//         return age >= min && age <= max;
//     }
// }

// // save the function in a variable

// const isBaby = function (age){
//     return age >= 0 && age <= 12;
// }

// const isTeen = function (age){
//     return age >= 13 && age <= 19;
// }


// // defining a function

// const myMath = {
//     pi : 4.142871,
//     radius : 20,
//     areaCircle : function (pi, radius){
//         return pi * r **2;
//     },
//     circum : function (pi, radius){
//         return 2 * pi * radius;
//     },
//     square : function(num){
//         return num ** 2
//     }
// }

// // finding the area
// myMath.circum(myMath.pi, myMath.radius);
// myMath.area(34);

// // cleaner and modern pattern

// const myMath = {
//     pi : 4.142871,
//     radius : 20,
//     areaCircle(pi, radius){
//         return pi * r **2;
//     },
//     circum(pi, radius){
//         return 2 * pi * radius;
//     },
//     square(num){
//         return num ** 2
//     }
// }

// // finding the area
// myMath.circum(myMath.pi, myMath.radius);
// myMath.area(34);

// const square = {
//     area(side){
//         return side * side;
//     },
//     perimeter(side){
//         return side * 4;
//     }
// };
// let perimeter = square.perimeter(45);
// console.log(perimeter)
// console.log(square.area(45));

// // keyword this

// this is commonly in an object in a method
// the value depend on the invoked context of the function

// const person = {
//     name : 'boboye',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     sentence() {
//         return `the kid name is ${this.name}, he has ${this.hair}, enchanting ${this.eyes} and funny looking ${this.shoes} with a ${this.laptop} laptop on his left hand. `
//     }
// }

// console.log(person.sentence());  // 'the kid name is boboye, he has black, enchanting blue and funny looking brown with a grey laptop on his left hand. '

// // the value depend on the invoked context of the function

// person.name = 'andazi boboye';
// person.shoes = 'void black';

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount += 1;
//         return 'EGG'
//     }
// };

// console.log(hen.name); //helen
// console.log(hen.eggCount); //0
// console.log(hen.layAnEgg()); // egg adds 1 to eggCount
// console.log(hen.eggCount); // 1
// console.log(hen.eggCount); // 1
// console.log(hen.layAnEgg()); // + 1
// console.log(hen.layAnEgg()); // + 1
// console.log(hen.eggCount); // 3


// console.log(person.sentence()); // person.name has changed and person.shoes too

// // try and catch

// try {
//     hello.toUpperCase();  // gives an error
// } catch {
//     console.log('error!!!') // returns error!!!
// }

// error is mostly use to avoid disruption of code
//down server, unfound files in the directory ....

// function randomNumber(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(4));   // gives an error if a string is passed
//     } catch {
//         console.log('please pass in a string'); // returns error!!!
//     }
// }

// randomNumber(23);
// randomNumber('lol ');

// function manners(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(4));   // gives an error if a string is passed
//     } catch (e) {
//         console.log(e); //returns the type of error
//         console.log('please pass in a string'); // returns error!!!
//     }
// }


// manners('aaaah ');
// manners(23);


// // forEach
// // forEach is old since we have for of

//accepts a callback function
// calls the function once per element in an array

// const numbers = [1,2,3,4,5,6,7,8,9,0,1,2,2,3,3,4,4,5,5,65,6,67,7];

// function print(element){
//     console.log(element);
// }

// numbers.forEach(print); // prints each element in numbers


// const numbers = [1,2,3,4,5,6,7,8,9,0,1,2,2,3,3,4,4,5,5,65,6,67,7];

// numbers.forEach(function (el){
//     console.log(el);
// })

// const numbers = [1,2,3,4,5,6,7,8,9,0,1,2,2,3,3,4,4,5,5,65,6,67,7];

// numbers.forEach(function (el){
//     if (el % 2 === 0){
//         console.log(`${el} is even`);
//     } else {
//         console.log(`${el} is odd`);
//     }
// })

// const stats = [
//     {
//         title: 'SpiderMan',
//         rating: 4.7
//     },
//     {
//         title: 'Marvel',
//         rating: 4 
//     },
//     {
//         title: 'Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Arrow',
//         rating: 4.1
//     },
//     {
//         title: 'Black Panther',
//         rating: 4.9
//     },
//     {
//         title: 'Scarlet Witch',
//         rating: 5
//     }   
// ]


// defines the function
// assign each object to character

// stats.forEach(function (character){
//     // console.log(character);  // returns the object
//     console.log(`${character.title} has rating ${character.rating}/5`)
// })

// using for...of
// simple and elegant

// const stats = [
//     {
//         title: 'SpiderMan',
//         rating: 4.7
//     },
//     {
//         title: 'Marvel',
//         rating: 4 
//     },
//     {
//         title: 'Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Arrow',
//         rating: 4.1
//     },
//     {
//         title: 'Black Panther',
//         rating: 4.9
//     },
//     {
//         title: 'Scarlet Witch',
//         rating: 5
//     }   
// ]

// for (let character of stats){
//     console.log(character);  // returns the object
//     console.log(`${character.title} has rating ${character.rating}/5`);
// }

// // map
// similar to forEach
// accepts a callback, runs the function ones
// creates a new array

// const numbers = [1,2,3,4,5,6,7,8,9,0,1,2,2,3,3,4,4,5,5,65,6,67,7];

// const numSqr = numbers.map(function(num){
//     return num * num;
// })

// console.log(numSqr);

// const stats = [
//         {
//             title: 'Darkside',
//             rating: 4.7
//         },
//         {
//             title: 'Thanos',
//             rating: 4 
//         },
//         {
//             title: 'Reverse Flash',
//             rating: 3.9
//         },
//         {
//             title: 'Harley Quinn',
//             rating: 4.1
//         },
//         {
//             title: 'Loki',
//             rating: 4.9
//         },
//         {
//             title: 'Lex Luthor',
//             rating: 5
//         }   
//     ]

// const villain = stats.map(function(character){
//     return character.title
// })

// // mostly use to manipulate a portion of our data to use as a new array

// const fullNames = [
//     {
//         first: 'Albus', 
//         last: 'Dumbledore'
//     },
//     {
//         first: 'Harry', 
//         last: 'Potter'
//     },
//     {
//         first: 'Hermione',
//          last: 'Granger'
//         },
//     {
//         first: 'Ron', 
//         last: 'Weasley'
//     },
//     {
//         first: 'Rubeus', 
//         last: 'Hagrid'
//     },
//     {
//         first: 'Minerva', 
//         last: 'McGonagall'
//     },
//     {
//         first: 'Severus',
//         last: 'Snape'
//     }
// ];

// const firstNames = [];
// for (let names of fullNames){
//     console.log(names);
//     console.log(names.first);
//     firstNames.push(names.first);
// }
// console.log(firstNames);

// arrow function
// helps us make a function expression

//regular expression
// const sqr = function(num){
//     return num * num;
// }
// console.log(sqr(23));

// arrow function
// const sqr = (num) => {
//     return num * num
// }

// console.log(sqr(90));

// const numPower = (num, power) =>{
//     return num ** power;
// }

// console.log(numPower(2,10));

// const rollDie = () => {
//     return Math.floor(Math.random() * 10) + 1
// }

// console.log(rollDie());

// arrow function
// implicit arrow function
// remove the return keyword and curly bracket for parenthesis
// works on simple functions

// const sqr = (num) => (
//     num * num
// )

// console.log(sqr(90));

// const numPower = (num, power) =>(
//     num ** power
// )

// console.log(numPower(2,10));

// to further compact the code
// remove the parenthesis and single lined the code

// const rollDie = () => Math.floor(Math.random() * 10) + 1
// console.log(rollDie());

// const sqr = (num) => num * num

// console.log(sqr(90));

// const numPower = (num, power) => num ** power
// console.log(numPower(2, 18));

// const stats = [
//     {
//         title: 'Darkside',
//         rating: 4.7
//     },
//     {
//         title: 'Thanos',
//         rating: 4 
//     },
//     {
//         title: 'Reverse Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Harley Quinn',
//         rating: 4.1
//     },
//     {
//         title: 'Loki',
//         rating: 4.9
//     },
//     {
//         title: 'Lex Luthor',
//         rating: 5
//     }   
// ]

// const villains = stats.map(xter => xter.title)
// console.log(villains)

// const resume = {
//     firstName: 'Andazi',
//     lastName: 'Boboye',
//     age: 28,
//     strength: ['passion', 'curiosity', 'hardwork', 'team work', 'goal oriented'],
//     skills: ['data entry', [
//         'HTML', 'CSS', 'JavaSript', 'Python'
//     ], 'content creation', 'photography', 'photo editing'],
//     experience: {
//         currentYear: 'I lead A||z tech team in the production of work_with_me app, which has over 3 million downloads as at 20th jan, 2023',
//         year2: 'I have developed lots of trending portfolio site for client and website for educational institutes.',
//         year3: 'develop my portfolio site which has won twice in a row the awwward for top portfolio'
//     },
//     bio: ['answering question on stackover for fun', 'learning new technologies', 'teaching new coders', 'drinking coffee, lol']
// }

// without function

// for (let item of resume.bio){
//     console.log(item);
// }  

// function
// const itemList = function list(items){
//     for (let item of items.bio){
//         console.log(item);
//     } 
// }
// itemList(resume);

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [
//     {
//         first: 'Albus', 
//         last: 'Dumbledore'
//     },
//     {
//         first: 'Harry', 
//         last: 'Potter'
//     }, 
//     {
//         first: 'Hermione', 
//         last: 'Granger'
//     }, 
//     {
//         first: 'Ron', 
//         ast: 'Weasley'
//     }, 
//     {
//         first: 'Rubeus', 
//         last: 'Hagrid'
//     }, 
//     {
//         first: 'Minerva', 
//         last: 'McGonagall'
//     }, 
//     {
//         first: 'Severus', 
//         last: 'Snape'
//     }
// ];


// // Write your code here

// const fisrtName = fullNames.map(names => names.first);


// // setTimeout(callback function, delay)
// call once 

// console.log('Hello....')
// setTimeout(() => {
//     console.log('...World')
// },2000)

// more delay

// console.log('Hello....')
// setTimeout(() => {
//     console.log('...World')
// },2000);
// console.log('Welcome')


// // setInterval;
// like setTimeout but repeatly

// setInterval(() => {
//     console.log('Hello World')
// }, 2000)

// setInterval(() => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     console.log(num)
// }, 2000)

// setInterval keeps looping with a clearOutput

// const id = setInterval(() => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     console.log(num)
// }, 2000);


// // filter
// creates a new array with elements that pass the implemented test

// const number = [1,2,32,34,3,12,4,5,566,4,3,2,2,3,5,67,8,7,876,5,6,];

// const oddNumber = number.filter(num => num % 2 !== 0);
// console.log(oddNumber);

// const lessNumber = oddNumber.filter(n => n < 20);
// console.log(lessNumber);

// const stats = [
//     {
//         title: 'Darkside',
//         rating: 4.7
//     },
//     {
//         title: 'Thanos',
//         rating: 4 
//     },
//     {
//         title: 'Reverse Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Harley Quinn',
//         rating: 4.1
//     },
//     {
//         title: 'Loki',
//         rating: 4.9
//     },
//     {
//         title: 'Lex Luthor',
//         rating: 5
//     }   
// ]

// const goodVillain = stats.filter(villain => villain.rating < 4.5);
// console.log(goodVillain);
// const villain = goodVillain.map((name)=> name.title);
// console.log(villain);

// const Villains = stats.filter(villain => villain.rating > 4.5)
//                 .map((name)=> name.title);
// console.log(villains);


// // some and every

// every 
// test whether all elements in the array pass the provided function.
//returns a boolean value

// const exams = [40, 43, 56, 70, 61, 99, 54, 98, 67];

// const scores = exams.every(score => score > 65);
// console.log(scores);

// const scores = exams.every(score => score >= 40);
// console.log(scores);

// const registry = ['Namian','Kola', 'Bola', 'Usman','Thelma', 'Boboye'];

// const students = registry.every(names => names.length >= 4);
// console.log(students);

// const stats = [
//     {
//         title: 'Darkside',
//         rating: 4.7
//     },
//     {
//         title: 'Thanos',
//         rating: 4 
//     },
//     {
//         title: 'Reverse Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Harley Quinn',
//         rating: 4.1
//     },
//     {
//         title: 'Loki',
//         rating: 4.9
//     },
//     {
//         title: 'Lex Luthor',
//         rating: 5
//     }   
// ]

// const rating = stats.map(character => character.rating)

// const villain = rating.every(rating => rating > 4)
// console.log(villain);


// some
// alike with every
// test whether any elements in the array pass the argument

// const stats = [
//     {
//         title: 'Darkside',
//         rating: 4.7
//     },
//     {
//         title: 'Thanos',
//         rating: 4 
//     },
//     {
//         title: 'Reverse Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Harley Quinn',
//         rating: 4.1
//     },
//     {
//         title: 'Loki',
//         rating: 4.9
//     },
//     {
//         title: 'Lex Luthor',
//         rating: 5
//     }   
// ]

// const rating = stats.map(character => character.rating)

// const villain = rating.some(rating => rating > 4)
// console.log(villain);

// even number function
// const allEvens = numbers = numbers.every(num => num % 2 === 0)

// const allEvens = numbers => {
//     let number = numbers.every(num => num % 2 === 0)
//     return number
// }
//  <>  ||  * +  () => {} console.log() :  $  % ! +=  >=
// reduce 
// executes a return statement on each element in an array

// const shopping = [45, 65, 76, 90, 65, 89, 76];

// suming the scores in exam

// const cost = shopping.reduce((sum, price) => sum += price);
// console.log(cost); // 506

// cost with tax
// 20 being tax

// const costTax = shopping.reduce(((sum, price) => sum += price), 20);
// console.log(costTax)  //526

// returning min value

// const shopping = [23, 54, 33.5, 45, 65, 76, 90, 6.5, 89, 76];
// const minPrice = shopping.reduce((min, price) => {
//     if (min > price) {
//         return price
//     }
//     return min
// })
// console.log(minPrice);

// // max price
// const maxPrice = shopping.reduce((max, price) => {
//     if (max < price) {
//         return price
//     }
//     return max
// })
// console.log(maxPrice);


// // arrow function and keyword this
// in arrow function, keyword this refers to the window scope not the inner scope

// const person = {
//     name : 'boboye',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     sentence() {
//         return `the kid name is ${this.name}, he has ${this.hair}, enchanting ${this.eyes} and funny looking ${this.shoes} with a ${this.laptop} laptop on his left hand. `
//     }
// }
// let myPerson = person.sentence();

// console.log(myPerson); // this.name = boboye ....

// const person = {
//     name : 'boboye',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     sentence : () => (
//         `the kid name is ${this.name}, he has ${this.hair}, enchanting ${this.eyes} and funny looking ${this.shoes} with a ${this.laptop} laptop on his left hand. `
//     )
// }
// let myPerson = person.sentence();

// console.log(myPerson);  // this.name = undefined

// // we can call this keyword inside of a higher function

// const person = {
//     name : 'boboye',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     sentence : function () {
//         setTimeout(() => {
//             return console.log(`the kid name is ${this.name}, he has ${this.hair}. `);
//         }, 300)
//     }
// }
// let myPerson = person.sentence();

// console.log(myPerson); 


// // setting default param

// const product = (x,y) =>  x * y;

// console.log(product(2,99)); //198
// console.log(product()); // NaN
// console.log(product(2));  // NaN

// default
// follows order

// const product = (x,y = 1) =>  x * y;

// console.log(product(2,99)); //198
// console.log(product()); // NaN
// console.log(product(2));  // 2

// const product = (x=1,y) =>  x * y;

// console.log(product(2,99)); //198
// console.log(product()); // NaN
// console.log(product(2));  // NaN


// // spread argument
// ...arg
// spreads syntax allows an iterable such as array to be expanded
// use for method that demand multiple arg
// ... spreads the param

// const nums = [23,45,32,34,56,78,99,76,44]; 

// const maxNum = Math.max(nums);
// console.log(maxNum); // NaN 

// const maxNum = Math.max(...nums);

// console.log(maxNum); // 99

// const topic = 'THIS IS SPREAD';
// console.log(...topic)

// const class1 = [23,43,56,75,89,88,12,34,56,37,27,43];
// const class2 = [45,32,45,67,87,32];

// const class3 = [...class1, ...class2];
// console.log(class3);

// const baby1 = ['A', 'B', 'C'];
// const baby2 = ['X', 'Y', 'Z'];
// const baby = [...baby1, 'M','N', 'O', ...baby2];

// console.log(baby);

// spread in objects copies the object properties into a new object

// const userForm =  {
//     first : 'boboye',
//     last : 'andazi',
//     password : 'pdko8u4nofkfkl./3',
//     usename : 'bobli',
// };

// const admin = {...userForm, isAdmin : true };
// console.log(admin)


// conflicted properties
// const feline =  {
//     legs : 4,
//     hairy : true,
//     feed : 'canivorous',
//     family : 'filidaae',
// };
// const reptile =  {
//     legs : 5,
//     hairy : false,
//     feed : 'omnivorous',
//     family : 'reptilia'
// };

// const admin = {...feline, ...reptile};  // property with same key, last arg takes precident
// console.log(admin)

// const cart1 =  {
//     bag : 4,
//     pet : 'cat',
//     shoe : 10,
//     payment : true,
// };
// const cart2 =  {
//     book : 5,
//     pencil : 10,
//     phone : 'Samsung',
//     payment : false,
// };

// const list = {...cart1, ...cart2};  // property with same key, last arg takes precident, // payment = false
// console.log(list)


// // rest param

// like spread but not exactly
// array-like object
// has length property
// does not support method like push, pop, log
// contains all arg passed into function
// not available to arrow function

// function sum(){
//     return arguments.reduce((total, el) => total += el)  // return error due arrow function
// }

// function sum(num){
//     return num.reduce((total, el) => total += el)  // return error due arrow function
// }
// const sumTotal = sum(34,45,67,886,54);
// console.log(sumTotal);

// function sum(...num){
//     return num.reduce((total, el) => total += el)
// }
// const sumTotal = sum(34,45,67,886,54);
// console.log(sumTotal); // 1086

// sum = (nums) => (
//     console.log(nums)
//     )
// sum(34,45,67,886,54);  // 34

// sum = (...nums) => (
//     console.log(nums)
//     )
// sum(34,45,67,886,54); //[34,45,67,886,54]



// function sum(nums){
//     console.log(nums)
// }
// sum(34,45,67,886,54) // 34


// function sum(...nums){
//     console.log(nums)
// }
// sum(34,45,67,886,54)

// function medal(gold,silver,bronze, ...others){
//     console.log(`GOLD MEDAL GOES TO ${gold} `);
//     console.log(`SILVER MEDAL GOES TO ${silver} `),
//     console.log(`BRONZE MEDAL GOES TO ${bronze} `),
//     console.log(`IRON MEDAL GOES TO ${others} `)
// }
// medal('GLORIA','MANNY', 'PEPPER', 'LUKE', 'PHILIP', 'RONALDO')


// // destructuring
// modern short and clean syntax to unpack
// values from array
// properties from object
// into distinct variable

// destructuring of array
// const raceResult = ['GLORIA','MANNY', 'PEPPER', 'JAY', 'ALEX', 'RONALDO'];
// // destructure
// const [gold, silver, bronze, ...others] = raceResult;
// gold;
// console.log(gold) //GLORIA
// console.log(others) // [ 'JAY', 'ALEX', 'RONALDO' ]
// console.log(...others) // JAY ALEX RONALDO

//destructuring objects
// order doesnt matter

// const person = {
//     firstName : 'boboye',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     bio : 'i love coding and experiencing new technologies'
// }
// destructure
// const {firstName, bio, ...others} = person;

// console.log(firstName);
// console.log(others);

// renaming property

// const {firstName, laptop : favColor, ...others} = person;
// console.log(laptop);  // error

// adding more property
// const {firstName, favColor = 'purple', ...others} = person;
// console.log(favColor);

// // param destructuring
// in an event or most events, when we dont need all param

// const client = {
//     firstName : 'boboye',
//     lastName : 'andazi',
//     laptop : 'grey',
//     shoes : 'brown',
//     hair : 'black',
//     eyes : 'blue',
//     bio : 'i love coding and experiencing new technologies'
// }

// const candidate = function(client){
//     const{firstName, lastName, bio} = client;
//     return `${firstName} ${lastName} said "${bio}" in his bio`
// }
// console.log(candidate(client));

// const stats = [
//     {
//         title: 'SpiderMan',
//         rating: 4.7
//     },
//     {
//         title: 'Marvel',
//         rating: 4 
//     },
//     {
//         title: 'Flash',
//         rating: 3.9
//     },
//     {
//         title: 'Arrow',
//         rating: 4.1
//     },
//     {
//         title: 'Black Panther',
//         rating: 4.9
//     },
//     {
//         title: 'Scarlet Witch',
//         rating: 5
//     }   
// ]

// const highestRated = stats.filter(character => character.rating > 4.5);

// destructure
// const highestRated = stats.filter(({rating}) => rating > 4.5);

// const longerName = stats.filter(({title}) => title.length > 7);

// regular mapping
// const comment = stats.map((movie) => 
//     `${movie.title} charm is ${(movie.rating * 100).toFixed(0)} times ` 
// );

// map and destructuring
// const comment = stats.map(({title, rating}) => 
//     `${title} charm is ${(rating * 100).toFixed(0)} times ` 
// );


// // DOM
// Javascript object that represent the webpage content
// manipulate the webpage
// consist of a bunch of objects

// DOCUMENT
// document object is our entry point into worldo DOM
// contains representations of all the content on the page
// with tons of useful methods and properties

// SELECTING (OLD)
// methods let us select object

//getElementById()
//getElementsByTagName()
//getElementsByClassName()

//document.getElementById(id name);
// returns DO of the HTML idName
// returns an HTML collection
// iterable but it's not an array

// const msg = document.getElementById('unique');


//document.getElementsByTagName(element Tag name)
// const images = document.getElementsByTagName('img');


//document.getElementsByClassName(class name);
// const logo = document.getElementsByClassName('profile');


// // document.querySelector(callback)
// // document.querySelectorAll(callback)

// newer and flexible method to select either single or all
// callback could be any of the css selector

// // selects the very first content in '.qoute p'
// const reviews = document.querySelector('.qoute p');
// for(let review of reviews){
//     console.log(review)
// }

// selects the very first content in '.qoute p'
// const image = document.querySelector('img');
// for(let img of image){
//     console.log(img)
// }

// // selects the all content in '.qoute p'
// const reviews = document.querySelectorAll('.qoute p');
// for(let review of reviews){
//     console.log(review)
// }

// // manipulation

// innerText textContent innerHTML

// innerText
// returns content seen on the webpage
// add/edit to content

// const reviews = document.querySelector('.qoute p')
//         .innerText = 'I own a ship, my name is Captain Boboye.';


// add to content
// const reviews = document.querySelector('.qoute p')
//         .innerText += 'I own a ship, my name is Captain Boboye.';

// textContent
// just like innerText but returns the markup
// behaves like pre element in HTML and `` in JS
// returns even hidden content

// const reviews = document.querySelector('.qoute p')
//         .textContent

// innerHTML
// returns everything including the element tag
// often used to change html element but rarely used

// const reviews = document.querySelector('.qoute p')
//         .innerHTML = '<em>returns everything including the element tag often used to change html element but rarely used</em>'


// // attribute
// getAttribute
// setAttribute

// getAttribute
// retrieves the attribute

// const profile = document.querySelectorAll('.profile img');
// for(let attribute of profile){
//     console.log(attribute.alt);
//     //let attribute['alt'] = 'profile image'
// }

// const profile = document.querySelector('.profile img').getAttribute('alt')


// setAttribute
// changes the attribute content
// const profile = document.querySelector('.profile img').setAttribute('alt', 'profile image')

// const profile = document.querySelectorAll('.profile img');
// for(let attribute of profile){
//     attribute.setAttribute('alt', 'profile image')
// }


// // style
// you can't view css style with JS
// when ever you add a style with style method, its inline styling

// const body = document.querySelector('.container');
// body.style.backgroundColor = 'purple';

// set class and add styling
// const body = document.querySelector('div');
// body.getAttribute('class');
// body.setAttribute('class', 'purple');

// add to class
// quite rigid
// const body = document.querySelector('div');
// let currentClass = body.getAttribute('class');
// body.setAttribute('class', `${currentClass} purple`);

// // classList
// intereat with classes on an element
// you can push classes or remove
// there are various function to classList method such as add,remove,toggle...

// let container = document.querySelector('.container header');
// container.classList.add('head');


// // Parent child  sibling

// accessing the parent
// accessing the parent of class '.box'
// const move = document.querySelector('.box');
// let parent = move.parentElement;
// // accessing the parent of the parent of .box
// let grandparent = parent.parentElement;


// accessing the children
// you can only have one parent and multiple children
// returns an itereble list but not an array
// const move = document.querySelector('.reviews');
// let babies = move.children;
// accessing grand children


// sibling 
// const move = document.querySelector('.box');
// // nextSibling gives the coresponding node, a DOM node
// let nodeSibling = move.nextSibling;

// // nextElementSibling returns the element
// let elementSibling = move.nextElementSibling;


// append appendChild prepend
// prepend adds to the beginning, append to end

// const move = document.querySelector('.box p');

// // adds to the bottom of the container
// move.append('ZEUSSSS', ' i am the god of war');

// // prepend
// // adds before the content in the container
// not supported by internet explorer
// move.prepend('for the love of god,give this man a set of pants');

//appendChild accepts a node call back

// select the parent element
// const review = document.querySelector('.qoute p');
// // create element
// const newP = document.createElement('p')
// // assign value to eye
// newP.innerText = 'for the love of man give this man a pair of toothpick';
// // append
// review.appendChild(newP);



// insertAdjancentElement

// beforebegin
// **********<>*************
// *       afterbegin      *
// *        content        *
// *       beforeend       *
// ***********</>***********
//         afterend
// beforebegin<>afterbegin content beforeend</>afterend


// const head = document.querySelector('.container header');

// const h2 = document.createElement('h4');
// h2.innerText = 'beforebegin';
// head.insertAdjacentElement('beforebegin', h2);

// const h3 = document.createElement('h4');
// h3.innerText = 'afterbegin';
// head.insertAdjacentElement('afterbegin', h3);

// const h4 = document.createElement('h4');
// h4.innerText = 'beforeend';
// head.insertAdjacentElement('beforeend', h4);

// const h5 = document.createElement('h4');
// h5.innerText = 'afterend';
// head.insertAdjacentElement('afterend', h5);

// // remove and removeChild
// removeChild is not supported by explorer
// removeChild removes the child of the selected parent

// const baby = document.querySelector('.box');
// const mama = baby.parentElement;
// mama.removeChild(baby);

// shorter
// const baby = document.querySelector('.box');
// const mama = baby.parentElement.removeChild(baby);


// remove
// modern
// removes the elected element
// const baby = document.querySelector('.box')
// baby.remove();
// shorter
// const baby = document.querySelector('.box').remove();


// WebAPI $ Threading
// JavaScript is single threaded.
// runs one thing at a time
// browser handles certain task in the background like making requestor setTimeout

// callstack
// LIFO LAST IN FIRST OUT
// mechanism JS use to keep track of of its place in a script that callls multiple function

// callstack hell
// passing in mush of callback for it to become too nested

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, nextColor) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         nextColor && nextColor()
//     }, delay)
// }
// delayedColorChange('olive', 1000, () => {
//     delayedColorChange('teal', 1000, () => {
//         delayedColorChange('aqua', 1000, () => {
//             delayedColorChange('blue', 1000)
//         })
//     })
// });

// // movie API callback hell
// searchMovieApi('the big bang theory', () => {
//     saveToDB(movies, () => {
//         // if it works, run this:
//     }, () => {
//         // else run this
//     }, () => {
//         // if API is down or request failed
//     })
// })

// promises
// better way to avoid callback hell
// an object representing the eventual completion
// or failure of an asynchronous operation

// fakeRequestCallback and fakeRequestPromises
// callback
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('connection timeout :(')
        }else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback('books.org/page1', 
function(response){
    console.log("IT WORKED!!!");
    alert(response);
    fakeRequestCallback('books.org/page2', 
function(response){
    console.log("IT WORKED AGAIN!!!");
    alert(response);
    fakeRequestCallback('books.org/page3', 
function(response){
    console.log("IT WORKED THRICE!!!");
    alert(response);
},
function(err){
    console.log(err, 'SORRY, PAGE 3 NOT FOUND');
    alert(err);
})

},
function(err){
    console.log(err, 'SORRY, PAGE 2 NOT FOUND');
    alert(err);
})

},
function(err){
    console.log(err, 'SORRY, PAGE 1 NOT FOUND');
    alert(err);
})

































