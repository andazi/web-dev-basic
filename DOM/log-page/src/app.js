// const labels = document.querySelectorAll('label');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('#btn');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
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

// disabling btn until input values are corect
btn.disabled = true;

for(let input of inputs){
    input.addEventListener('input', (e) => {
        e.preventDefault();
        let small = e.target.nextElementSibling;
        let inputName = e.target.id;
        let inputValue = e.target.value;


        // console.log(inputName);
        if(inputValue === ''){
            small.innerText = 'please fill in details';
        } else if (inputValue !== ' '){

            // name validation
            if (inputName === 'name'){
                if(inputValue.indexOf(' ') !== -1){
                    small.innerText = 'remove spaces in username';
                    // console.log(inputValue.indexOf(' '));
                }else{
                    small.innerText = '';
                    // console.log(inputValue.indexOf(' '));
                }

            // email validation    
            } else if (inputName === 'email'){
                if(inputValue.includes('@') && inputValue.includes('.') && inputValue.indexOf(' ') === -1){
                    small.innerText = '';
                } else {
                    small.innerText = 'Invalid Email';
                }

            // password validation
            } else if (inputName === 'password1'){

                // checking length
                if (inputValue.length >= 10){
                    // console.log(inputValue.length)

                    // checking for special characters
                    const specialXter = [
                        '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '_',
                         '-', '=', '+', '{', '}', '~', '?'
                    ];
                    if(inputValue.includes(...specialXter)){
                        small.innerText = '';
                        // console.log(inputValue)

                    } else {
                        small.innerText = 'include special character eg, #,@,&...'
                    }
                                        
                } else {
                    small.innerText = 'password too short'
                }
            }else {
                console.log('password 2')
                if(password1.value !== password2.value){
                    small.innerText = 'mismatch password';
                    btn.classList.remove('btn');
                } else {
                    small.innerText = '';
                    btn.disabled = false;
                    console.log(inputValue.length)
                    btn.classList.add('btn');
                }  
            } 
        }
    })
}
