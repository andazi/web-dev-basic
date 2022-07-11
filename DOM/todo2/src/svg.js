const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#task');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addTodo();
});
 
const addTodo = () => {
    const newTodo = input.value;
    console.log(newTodo);
    const myList = document.createElement('li');
    myList.classList.add('todoList')
    myList.innerText = input.value;
    ul.prepend(myList);
    input.value = '';
}



const trialList = document.querySelector('h3');

const span = document.createElement('span');
span.classList.add('complete');
ul.insertAdjacentElement('afterbegin', span);
const mySvg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
mySvg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
mySvg.setAttribute('viewBox', '0 0 512 512');
span.append(mySvg)
const createPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
createPath.setAttribute('d','M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z')
mySvg.append(createPath);


ul.classList.add('todoList');
const listValue = document.createElement('h6');
listValue.innerText = input.value;
ul.append(listValue);




const del = document.createElement('span');
del.classList.add('del');
ul.insertAdjacentElement('beforeend', del);
const delSvg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
delSvg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
delSvg.setAttribute('viewBox', '0 0 448 512');
del.append(delSvg)
const delPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
delPath.setAttribute('d','M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z')
delSvg.append(delPath);
