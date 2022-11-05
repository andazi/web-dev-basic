// not done
function numeral_to_roman(num) {
    let romanNumeral = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I'
    };

    // my logic should start from the highest
    // find 23; 23 - 1000, 23 -500, 23 -100, 23 -50, 23 -10 => 2 * 3
    // 3 -1000 .......

    let result = "";
    while (num >= 0) {
        for (const numerals in romanNumeral) {
            let roman = romanNumeral[numerals];
            // console.log(numerals);
            if (num - numerals > 0) {
                result += roman;
                // console.log(result)
                // num = 0;
            } else if (num - numerals === 0) {
                result += roman;
            } else {
                result += roman;
                num -= numerals;
            }
        }
        return result
    }

}

numeral_to_roman(23);