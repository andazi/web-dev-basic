const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const myJSON = document.querySelector('.json p');
const myJS = document.querySelector('.js p');
const error = document.querySelector('.error span');
const source = document.querySelector('.source span');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    makeRequest();
})
const makeRequest = async () =>{
    try{
        source.textContent = input.value;
        let url = await fetch(input.value);
        const data = await url.json(); 
        // convert JS format to JSON format
        myJSON.textContent = JSON.stringify(data);
        // console.dir(myJSON)
        // let jsData = JSON.parse(data);
        // console.log(jsData);
        myJS.textContent = data;
        // if no error
        error.textContent = 'no error';
    } catch (e) {
        error.textContent = e;
    }
};
