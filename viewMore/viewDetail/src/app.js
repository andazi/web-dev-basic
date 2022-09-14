const queries = document.querySelectorAll('.query');

for(let query of queries){
    query.addEventListener('click', (e) => {
        let head = e.target.className
        if(head === 'question'){
            query.classList.toggle('show')
        }
    })
}