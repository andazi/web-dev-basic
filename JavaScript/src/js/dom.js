// 

const images = document.querySelector('.images');
const baseURL = `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/home/`;

for(let i = 1; i <= 251; i++){
    const image = document.createElement('img');
    const pokemon = document.createElement('span');

    image.src =  `${baseURL}${i}.png`
    images.appendChild(image)
}

