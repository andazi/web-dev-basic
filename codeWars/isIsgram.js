function isIsogram(str){
    str = str.toLowerCase();
    let newStr = [];
    for (let letter of str) {
        if (newStr.includes(letter)) {
            return false;
        }
        else {
            newStr.push(letter)
        }
    }
    return true
}

isIsogram('monochrome')