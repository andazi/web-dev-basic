// const labels = document.querySelectorAll('label');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('#btn')
// const label = document.querySelector('lable');

// revealing the input label on click
form.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e);
    // console.dir(e);
    // console.dir(e.target);
    // console.dir(e.target.tagName);

    if (e.target.tagName === 'INPUT'){
        // console.log(e.target.previousElementSibling);
        let label = e.target.previousElementSibling;
        label.classList.add('label');
    }
})


// restrictions

for(let input of inputs){
    input.addEventListener('blur', (e) => {
        e.preventDefault();
        // console.dir(e.target);
        // console.dir(e.target.value);
        // fill content
        let small = e.target.nextElementSibling;
        let name = e.target.id;
        let inputValue = e.target.value;
        console.log(name)
        if(inputValue === ''){
            small.innerText = 'please fill in details';
        } else if (inputValue !== ' '){

            // name validation
            if (name === 'name'){
                if(inputValue.indexOf(' ') === -1){
                    small.innerText = 'fullname not complete';
                    // console.log(inputValue.indexOf(' '));
                }else{
                    small.innerText = '';
                    // console.log(inputValue.indexOf(' '));
                }
            }
        }
    })
    
}