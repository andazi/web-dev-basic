// WORKED

function binaryToDecimal(value) {
    let n = value.length
    let total = 0
    for (let binaryValue of value) {
        n--
        let decimal = binaryValue * 2 ** n
        total += decimal
    }
    return total
}

binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1])

// let binary = [1, 1, 1, 1, 1, 1, 1, 1];
// binary = [1, 0, 0, 0, 0, 0, 0, 0, 0]

// let n = binary.length
// binary.reduce((sumDecimal, decimal, n) => {
//     n--
//     let total = decimal * 2 ** n

//     return sumDecimal + total

    
// })

// let decimal = 0

// let n = binary.length

// binary.forEach((binaryValue) => {
//     let decimal = 0

//     n--
//     decimal = binaryValue * 2 ** n;
//     // decimal += decimal
//     console.log(decimal)
//     // console.log(`${binaryValue} * 2**${n} = ${decimal}`)

// })

