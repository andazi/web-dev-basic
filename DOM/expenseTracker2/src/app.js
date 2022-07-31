const formInput = document.querySelector('form');
const input = document.querySelectorAll('input');
const btn = document.querySelector('button');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const amounts = document.querySelectorAll('.amt');
const myTotal = document.querySelector('#total');
const error = document.querySelector('.error');

const newEvent = {
    event: document.querySelector('#event'),
    date : document.querySelector('#date'),
    amount: document.querySelector('#amount'),
    change: function(currentValue = newEvent.amount.value){
            try{
            let previousValue = parseFloat(table.children[1].children[0].children[2].innerText)
            let percentChange = ((currentValue - previousValue)/currentValue) * 100 
            return percentChange.toFixed(2)
            } catch {
                return 0
            
            }},
    eventAmounts:  []
}

formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    newExpense();

    // clearing input value
    for(let inputValue of input){
        inputValue.value = '';
    }
})

// creating element 
const newExpense = () => {
    let expense = document.createElement('tr');
    expense.innerHTML = `
    <td class='item'>${newEvent.event.value}</td>
    <td class='amountDate'>${newEvent.date.value}</td>
    <td class='amt'>${newEvent.amount.value}</td>
    <td class='change'>${newEvent.change()}</td>
    `

    if (newEvent.amount.value !== '' && 
        newEvent.event.value !== '' && 
        newEvent.date.value !== ''){
        if (parseFloat(newEvent.amount.value) > 0 ||
            parseFloat(newEvent.amount.value) <= 0 ){ 
            tbody.prepend(expense);
           
    
            // pushing every amount to an array
            newEvent.eventAmounts.push(`${parseFloat(newEvent.amount.value)}`);
            let num = newEvent.eventAmounts;
            sumAmount(num);

            error.innerText = '';
        }else{
            error.innerText = 'insert correct values';
        }  
   } else {
        error.innerText = 'insert Values';
    } 
}

const sumAmount = (num) => {
        // sum amount using for 
        let total = 0;
        for(let amt of num){
            let sum = parseFloat(amt);
            total += sum;
            myTotal.innerText = total;
        }
}

// const changes = (currentValue) => {
//     let previousValue = parseFloat(table.children[1].children[0].children[2].innerText)
//     newEvent.change = ((previousValue - currentValue)/currentValue) * 100 
// }

// %change in amount
// for(let i of amounts){
//     let previousAmt = parseFloat(i.innerText);
//     console.log(previousAmt);
// }

// table value
// table.children[1].children[0].children[2].innerText
// table.children[1].children[1].children[2].innerText

// table.children[1].children[1].children[3]
// arrow down 
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
// arrow up
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/></svg>
// let currentValue = newEvent.amount.value;
// let previousValue = parseFloat(table.children[1].children[0].children[2].innerText)
// let change =  ((previousValue - currentValue)/currentValue) * 100 