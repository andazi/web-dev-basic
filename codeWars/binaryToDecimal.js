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
