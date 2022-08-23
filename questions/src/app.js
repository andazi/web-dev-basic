const queries = document.querySelectorAll('.query');
const toggleQuestion = document.querySelectorAll('.question-toggle');

for(let eachQuery of queries){
    console.log(eachQuery)
    eachQuery.addEventListener('click', () => {
        eachQuery.classList.toggle('show')
    })
}