// getAttribute and setAttribute
const profile = document.querySelectorAll('.profile img');

for(let attribute of profile){
    attribute.setAttribute('alt', 'profile image')
}

const body = document.querySelector('div');
let currentClass = body.getAttribute('class');
body.setAttribute('class', `${currentClass} purple`);

// classList
let container = document.querySelector('.container header');
container.classList.add('head');

// prepend and append
const para = document.querySelector('.box p');

para.prepend('BEFORE   ');
para.append('  AFTER');

// appendChild
const review = document.querySelector('.qoute p');
const newP = document.createElement('p');
newP.innerText = 'for the love of man give this man a pair of toothpick';
review.appendChild(newP);


// insertAdjancentElement

const head = document.querySelector('.container header');
const h2 = document.createElement('h4');
h2.innerText = 'beforebegin';
head.insertAdjacentElement('beforebegin', h2);

const h3 = document.createElement('h4');
h3.innerText = 'afterbegin';
head.insertAdjacentElement('afterbegin', h3);

const h4 = document.createElement('h4');
h4.innerText = 'beforeend';
head.insertAdjacentElement('beforeend', h4);

const h5 = document.createElement('h4');
h5.innerText = 'afterend';
head.insertAdjacentElement('afterend', h5);























   











