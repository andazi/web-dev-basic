// Narcissistic  number
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    value = value.toString();
    let total = 0

    // iterating the value
    for(let num of value){
        num = parseInt(num)
        num = num ** value.length
        total += num
    }
    // compare the sum to the value

    if(value == total){
        return true
    }
    return false
}
narcissistic(153)