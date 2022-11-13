function solution(str) {
    let strLength = str.length;
while(strLength > 0){
    console.log(str[0], str[1]);
    str = str.slice(0,1);
}
}

solution("boboye");

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']z