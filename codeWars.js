// social media like comment

// function likes(names) {
//     switch (names.length) {
//         case 0:
//             return "no one like this"
//             break
//         case 1:
//             return `${names[0]} likes this`
//             break
//         case 2:
//             return `${names[0]} and ${names[1]} likes this`
//             break
//         case 3:
//             return `${names[0]}, ${names[1]} and ${names[2]} likes this`
//             break
//         default:
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
// }

// likes(['jude', 'emeka', 'cynthia', 'andazi'])

// Isogram


// function isIsogram(str){
//     str = str.toLowerCase();
//     let newStr = [];
//     for (let letter of str) {
//         if (newStr.includes(letter)) {
//             return false;
//         }
//         else {
//             newStr.push(letter)
//         }
//     }
//     return true
// }

// isIsogram('andetrixi')


// sort numbers
// let numbers = [0,45,3,2,4354,64,24,54,6,9,0,67,4,5,2,2,45,7,8,85,7];

// numbers.sort((a,b) => (b-a));
// console.log(numbers)

// Narcissistic  number
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// function narcissistic(value) {
//     value = value.toString();
//     let total = 0

//     // iterating the value
//     for(let num of value){
//         num = parseInt(num)
//         num = num ** value.length
//         total += num
//     }
//     // compare the sum to the value

//     if(value == total){
//         return true
//     }
//     return false
// }
// narcissistic(153)