const toggle = document.querySelector('.toggle-btn');
const topTvShow = document.querySelector('main');

// dark-light mode toggle 

toggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
})

// top tv show

let topSection = document.createElement('section');
topTvShow.classList.add('top-tv');
topTvShow.innerHTML = `
<div class="top-tv-heading">
    <div class="top-title>
        <p class="title">
            ${title}
        </p>
    </div>
    <div class="summary">
        <p class"detail">
            ${detail}
        </p>
    </div>
</div>
`;

// other sorted movies

let tvShows = document.createElement('section');
tvShows.classList.add("tv-year");
tvShows.innerHTML = `
<header class="year">${year}</header>
<div class="tv-container"></div>
`;

// tv shows to sort

let show = `
<div class="tv-card">
    <div class="tv-img>
        <img class="img">
    </div>
    <div class="tv-title">
        <p class="title"></p>
    </div>
</div>
`









