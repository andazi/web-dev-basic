// RGB To Hex Conversion

function integer(value, toDecimal) {
    let binaryValues = [];
    let newValue = value;
    if (newValue >= 1 && toDecimal <= 10 && toDecimal > 1) {
        while (newValue !== 0) {
            let rem = newValue % toDecimal;
            newValue = Math.floor(newValue / toDecimal);
            binaryValues.unshift(rem)
            if (newValue < toDecimal) {
                binaryValues.unshift(newValue)
                rem = 0
                newValue = 0
            }
        }
        console.log(`binary values of ${value} are ${binaryValues}`)

    } else {
        console.log('error: values incorrect')
    }
}
integer(256, 2)









































