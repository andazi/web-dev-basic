const keys = document.querySelectorAll('button');

const displayInput = document.querySelector('#input');
const displayOutput = document.querySelector('#output');

displayOutput.readOnly = true;

for (let key of keys) {
    key.classList.add('btn');
    key.addEventListener("click", (e) =>{
        myKey = e.target.value;
        // trial()
    }
    );
}

// const trial = () => {
//     if (myKey !== '='){
//         let num = parseFloat(myKey);
//         if (num >= 0) {
//             displayInput.value += num;
//             let display = displayInput.value;
//             let displayX = parseFloat(displayInput.value);
//             console.log(displayX);
//             console.log(display);
//         } else if (myKey !== '='){
//             displayInput.value += myKey;
//             let display = displayInput.value;
//             console.log(display);
//             console.log(myKey);
//         }else {
//             displayOutput.value = display;
//             console.log(display)
//     }
//     } 
// }
