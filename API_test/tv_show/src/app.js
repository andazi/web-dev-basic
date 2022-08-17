const toggle = document.querySelector('.toggle-btn');
const tvShow = document.querySelector('main');

// dark-light mode toggle 

toggle.addEventListener('click', () => {
    toggle.classList.toggle('change');
})

// top tv show

// let topShow = document.createElement('section');
// topShow.classList.add('top-tv');
// topShow.innerHTML = `
// <div class="top-tv-heading">
//     <div class="top-title>
//         <p class="title">
//             ${title}
//         </p>
//     </div>
//     <div class="summary">
//         <p class"detail">
//             ${detail}
//         </p>
//     </div>
// </div>
// `;

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

const makeRequest = async () =>{
    try {
        let tvData = await axios.get('https://api.tvmaze.com/shows');
        // console.log(tvData);
        // console.log(typeof("tvData"))
        tvData = JSON.stringify(tvData);
        // console.log(tvData)
        tvData = JSON.parse(tvData);
        tvData = tvData.data
        console.log()
        for(let show of tvData){
            let title = show.name;
            let year = show.premiered;
            let summary = show.summary;
            let image = show.image.medium;
            
            console.log(title)
            console.log(year)
            console.log(image)
            console.log(summary)

        }
    } catch (e) {
        console.log(e)
    }
}
// makeRequest()






