const keys = document.querySelectorAll('button');

const displayInput = document.querySelector('#input');
const displayOutput = document.querySelector('#output');

displayOutput.readOnly = true;

for (let key of keys) {
    key.classList.add('btn');
    key.addEventListener("click", (e) =>{
        let myKey = e.target.value;
        console.log(myKey);
        trial()
    }
    );
}

//  still not working ?

const trial = (myKey) => {
    let num = Number(myKey);
    console.log(num)
    if (num !== 'NaN') {
        // console.log()
        displayInput.value += num;
        let display = displayInput.value;
        // let displayX = parseFloat(displayInput.value);
        console.log(display);
    }
    else{
        displayInput.value += myKey
    }
}
