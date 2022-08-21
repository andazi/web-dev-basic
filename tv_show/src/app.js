const toggle = document.querySelector('.toggle-btn');
const allTvShows = document.querySelector('main');
const tvShow = document.querySelector('.top-tv');
const tvSearch = document.querySelector('#search-form');
const searchList = document.querySelector('.search-result')

// dark-light mode toggle 

toggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
    
})

tvSearch.addEventListener('input',  async (e) => {
    e.preventDefault();
    let querySearch = tvSearch.elements.query.value;

    const config = {params: {
        q: querySearch
    }}
    let queryData = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    queryData = queryData.data
    console.log(queryData)
    // searching for tv shows

    for (let res = 0; i <= queryData.length; res++) {
        let result = document.createElement('li');
        result.textContent = queryData[i];
        searchList.append(result);
        console.log(searchList)

        // if (res > 4) {
        //     result.classList.add('hideList');

        // }

    }

})



// // creating view more toggle

// searches.addEventListener('input', () => {
//     let searchValue = tvSearch.elements.query.value;

//     let views = document.createElement('li');
//     views.textContent = 'view more';

//     views.classList.add('view-more');
//     views.classList.remove('hideList')
//     searchList.append(views)

//     views.addEventListener('click', () => {
//         searchList.classList.add('showList');
//         views.style.display = 'none';

//     })
// })


// arrays of shows 
const showsContainer = [];
// all dates
let startDate = [];
// no duplicated dates
let uniqueDate = [];

// make request

const requestShow = async () => {
    try {
        let tvData = await axios.get('https://api.tvmaze.com/shows');
        // tvData = JSON.stringify(tvData);
        // tvData = JSON.parse(tvData);
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
}}

// top tv show
const showItem = () => {

    for (let show of showsContainer) {
        let myFav = 'the flash';
        if (show.name.toLowerCase() === myFav) {
            tvShow.style.backgroundImage = `url(${show.images[1]})`;
        }      
    } 
}


// looping over dates and retrieving unique years    
const dates = () => {
    for (let show of showsContainer) {
        let tvPremiered = parseInt(show.premiered);
        startDate.push(tvPremiered);
    }

    // removing duplicate

    for (let yearDate of startDate) {
        if (uniqueDate.includes(yearDate)) {
        }
        else {
            uniqueDate.push(yearDate)
        }
    }
}


// tv shows sorted by year

const scrollTv = () =>{
    // sort uniqueDate
    const sortedUniqueDate = uniqueDate.sort((a, b) => (b-a));

    for (let year of sortedUniqueDate) {
        let newShows = document.createElement('section');
        newShows.classList.add('tv-year');
        let newShowYear = document.createElement('header');
        newShowYear.classList.add('year');
        newShowYear.textContent = `${year}`;
        newShows.append(newShowYear);

        let newShow = document.createElement('div');
        newShow.classList.add('tv-container');
        newShows.append(newShow)

        for (let show of showsContainer) {
            let tvPremiered = parseInt(show.premiered);
            if (tvPremiered === year) {
                let thisShow = document.createElement('div');
                thisShow.classList.add("tv-card");
                thisShow.innerHTML = `
                    <div class="tv-img">
                        <img src="${show.images[1]}" alt="${show.name} cover image" class="img">
                    </div>
                    <div class="tv-title">
                        <p class="title">${show.name}</p>
                    </div>
                `;
                newShow.append(thisShow)
                allTvShows.append(newShows)                
            }
        }
    }
}

const makeRequest = async () => {
    await requestShow()
    showItem()
    dates()
    scrollTv()
}
// makeRequest()
