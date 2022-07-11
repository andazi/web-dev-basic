const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#task');
// const myList = document.createElement('li');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addTodo();
});
 
const addTodo = () => {
    const myList = document.createElement('li');
    myList.classList.add('todoList')
    myList.innerText = input.value;
    ul.prepend(myList);
    input.value = '';
}
