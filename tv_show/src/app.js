const toggle = document.querySelector('.toggle-btn');
const allTvShows = document.querySelector('main');
const tvShow = document.querySelector('.top-tv');

// dark-light mode toggle 

toggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
})


// arrays of shows 
const showsContainer = [];

// make request

const requestShow = async () => {
    try {
        let tvData = await axios.get('https://api.tvmaze.com/shows');
        tvData = JSON.stringify(tvData);
        tvData = JSON.parse(tvData);
        tvData = tvData.data;


        // retrieving data
        for (let show of tvData) {
            let title = show.name;
            let premieredDate = show.premiered;
            let endDate = show.ended;
            let summary = show.summary;
            let imageMedium = show.image.medium;
            let imageOriginal = show.image.original;
            let item = {
                name: `${title}`,
                premiered: `${premieredDate}`,
                ended: `${endDate}`,
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

// top tv show
const showItem = () => {
    let topShow = '';
    // let topShow = document.createElement('section');
    // topShow.classList.add('top-tv');

    for (let show of showsContainer) {
        let myFav = 'the flash';
        if(show.name.toLowerCase() === myFav){
            tvShow.style.backgroundImage = `url(${show.images[1]})`;
        }      
    } 
}
showItem();

const otherShow = (array) => {
    // looping over array
    for (let show of showsContainer) {
        let tvPremiered = parseInt(show.premiered.slice(0, 4));
        // conosole.log(tvPremiered)
        if (tvPremiered === 2014) {

            let newShows = document.createElement('section');
            newShows.classList.add('tv-year');
            let newShowYear = document.createElement('header');
            newShowYear.classList.add('year');
            newShowYear.textContent = 2014;
            newShows.append(newShowYear);

            let newShow = document.createElement('div');
            newShow.classList.add('tv-container');


            // let thisShow = document.createElement('div');
            // thisShow.classList.add("tv-card");
            newShow.innerHTML = `
                <div class="tv-card">
                    <div class="tv-img>
                        <img class="img" src="${show.images[0]} alt="${show.name} cover image">
                    </div>
                    <div class="tv-title">
                        <p class="title">${show.name}</p>
                    </div>
                </div>
                `;
            newShows.appendChild(newShow)

            // newShow.append(thisShow)

            // allTvShows.append(newShow)
        }
        console.log(newShows)
        // console.log(tvPremiered);
        // showItem()
        // tvShow.append('topShow');
        // showItem()
    }
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












