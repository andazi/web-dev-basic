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
        myJSON.textContent = data;
        let jsData = JSON.parse(data);
        console.log(jsData);
        myJS.textContent = jsData;
    } catch (e) {
        error.textContent = e;
    }
};
