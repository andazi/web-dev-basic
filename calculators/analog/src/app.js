const calculator = document.querySelector(".frame");
const inputButtons = document.querySelectorAll(".keys");
const output = document.querySelector(".key-output");
const result = document.querySelector(".result");

// input key value

for (let button of inputButtons) {
    button.addEventListener("click", () => {
        let key = button.value
        console.log(key)
        if (key === 'CLR') {
            // clear the content

            output.value = " ";
            result.value = " ";
        } else if (key === '=') {
            // getting result

            let myResult = output.value;
            result.value = myResult;
        } else {
            // showing key press
            output.value += key;
        }
    })
};

result.addEventListener("dblclick", () => {
    result.value
})