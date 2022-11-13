// // nt working
// function num_to_roman(num) {
//     let romanNumeral = {
//         1000: "M",
//         500: " D",
//         100: "C",
//         50: "L",
//         10: "X",
//         5: " V",
//         1: "I"
//     };

// let result = "";
// while (num >= 0) {
//     for (let numeral in romanNumeral) {
//         let roman = romanNumeral[numeral];

//         if (num - numeral > 0) {
//             // let roman = romanNumeral[numeral];
//             result += roman;
//             num -= numeral;
//             console.log(num)
//         }
//     }
//     // return result
//     console.log(result)

//     }
// }
// num_to_roman(23);

let roman = {
    1: "I",
    5: " V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

const romanNumeral = [];

for (let x in roman) {
    let num = roman[x];
    roman.push(`
    ${x}: "${num}"
    `)
    console.log(romanNumeral)
}