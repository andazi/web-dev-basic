// https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/home/

const images = document.querySelector('.images');
const baseURL = `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/home/`;

for(let i = 1; i <= 151; i++){
    const pokemon = document.createElement('figure');
    pokemon.classList.add('pokemon-fig');
    const image = document.createElement('img');
    image.classList.add('pokemon');
    const label = document.createElement('figcaption');

    images.appendChild(pokemon);

    image.src =  `${baseURL}${i}.png`;
    label.innerText = `pokemon no.${i}`;
    
    pokemon.appendChild(image);    
    pokemon.appendChild(label);    

}

