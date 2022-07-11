const btn = document.querySelector('#btn');
const colorName = document.querySelector('h2');
const header = document.querySelector('header');

btn.addEventListener("mouseover", () =>{  
    randomColor();
    document.body.style.backgroundColor = randomColor();
    colorName.innerText = randomColor();
    header.style.color = textColor();
    colorName.style.color = randomColor();
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

const textColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    const color = `rgb(${266 - r},${266 - g},${266 - b})`;
    return color;
}