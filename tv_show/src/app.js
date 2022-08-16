const toggle = document.querySelector('.toggle-btn');
const topTvShow = document.querySelector('main');

// dark-light mode toggle 

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('change');
})


let topSection = document.createElement('section');
topTvShow.
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
`











