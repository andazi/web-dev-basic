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
// 65 + SENIOP $10

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
//     console.log(`Hey there, ${firstName} ${lastName[0]}`);
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
//     for (i = 0; i <= freq; i++){
//         laughter.push(sound);
//     }
//     console.log(laughter);
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































































































   











