const formInput = document.querySelector('form');
const input = document.querySelectorAll('input');
const btn = document.querySelector('button');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const amounts = document.querySelectorAll('.amt');
const myTotal = document.querySelector('#total');

const newEvent = {
    event: document.querySelector('#event'),
    date : document.querySelector('#date'),
    amount: document.querySelector('#amount'),
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
    <td>${newEvent.event.value}</td>
    <td>${newEvent.date.value}</td>
    <td class='amt'>${newEvent.amount.value}</td>
    `

    // amount errors
    const amountErrors = ['', null, !Number, NaN];


    let amountValue = newEvent.amount.value;
    let eventValue = newEvent.event.value;
    let eventDate = newEvent.date.value;
    // const spread = [...amountValue];
    // const checkError = spread.some(content => content.includes(...amountErrors));        
  

    if (eventValue === '' ||
        eventDate=== '' ||
        typeof amountValue !== 'number'){
        
            console.log('error')
   } else {
        tbody.prepend(expense);
        
        // pushing every amount to an array
        newEvent.eventAmounts.push(`${parseFloat(amountValue)}`);
        let num = newEvent.eventAmounts;
 
        // sum amount using for 
        let total = 0;
        for(let amt of num){
            let sum = parseFloat(amt);
            total += sum;
            myTotal.innerText = total;
        }
    } 
}



