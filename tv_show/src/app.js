const toggle = document.querySelector('.toggle-btn');
const tvShow = document.querySelector('main');

// dark-light mode toggle 

toggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
})


// arrays of shows 
const showsContainer = [];

// GET data when online

const requestShow = async () => {
    try {
        let tvData = await axios.get('https://api.tvmaze.com/shows');
        tvData = JSON.stringify(tvData);
        tvData = JSON.parse(tvData);
        tvData = tvData.data;
        // retrieving data
        for (let show of tvData) {
            let title = show.name;
            let year = show.premiered;
            let summary = show.summary;
            let imageMedium = show.image.medium;
            let imageOriginal = show.image.original;
            let item = {
            name: `${title}`,
            premiered: `${year}`,
            summary: `${summary}`,
            images: [`${imageMedium}`, `${imageOriginal}`]
        };
            showsContainer.push(item);
        }
    } catch (e) {
        console.log(e)
    }
}
requestShow();


// looping over array
const showsLoop = () => {
    for (let show of showsContainer) {
        const topShowDisplay = setTimeout(() => { showItem }, 100);
        tvShow.append('topShow');
        // topShowDisplay()
        return topShowDisplay
    }
}


// top tv show
const showItem = () => {
    let topShow = document.createElement('section');
    topShow.classList.add('top-tv');
    // tvShow.append('topShow');
    topShow.style.backgroundImage = `${show.images}`;
    topShow.innerHTML = `
<div class="top-tv-heading">
    <div class="top-title>
        <p class="title">
            ${show.name}
        </p>
    </div>
    <div class="summary">
        <p class"detail">
            ${show.summary}
        </p>
    </div>
</div>
`;
return topShow;
}










// // other sorted movies

// let tvShowSort = document.createElement('section');
// tvShowSort.classList.add("tv-year");
// tvShowSort.innerHTML = `
// <header class="year">${year}</header>
// <div class="tv-container"></div>
// `;

// // tv shows to sort

// let show = `
// <div class="tv-card">
//     <div class="tv-img>
//         <img class="img">
//     </div>
//     <div class="tv-title">
//         <p class="title"></p>
//     </div>
// </div>
// `

// // appending top-tv and tv-year
// tvShow.appendChild('topTvShow');
// tvShow.appendChild('tvShowSort');

// fetching api


// makeRequest()












