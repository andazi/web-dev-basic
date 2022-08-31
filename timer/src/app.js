const playPause = document.querySelector('.play-pause');
const resetTimer = document.querySelector('.restart');
const recordTimer = document.querySelector('.record');
const timerList = document.querySelector('.record-list');
const countSecond = document.querySelector('.second-count');
const countMinute = document.querySelector('.minute-count');
const countHour = document.querySelector('.hour-count');

// time initialization
let seconds = 0;
let minutes = 0;
let hours = 0;


playPause.addEventListener('click', () => {
    playPause.classList.toggle('pause')
    if(playPause.classList.contains('pause')){
        playPause.textContent = 'pause';
        startTimer()
    } else{
        playPause.textContent = 'play';
        // startTimer = null;
        // startTimer.clearInterval(null)

    }
})

resetTimer.addEventListener('click', () => {
    reset()
    timerList.innerHTML = '';
})

recordTimer.addEventListener('click', () => {
    let presentTime = document.createElement('li');
    presentTime.innerHTML = `<li>${hours} : ${minutes} : ${seconds}</li>`;
    timerList.append(presentTime);

})



const stopWatch = () => {
    seconds++
    if(seconds < 10){
        countSecond.textContent = `0${seconds}`;
    }else{
        countSecond.textContent = seconds;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++
        if (minutes < 10) {
            countMinute.textContent = `0${minutes}`;
        } else {
            countMinute.textContent = minutes;

        }

        if (minutes === 60) {
            minutes = 0;
            hours++
            if (hours < 10) {
                countHour.textContent = `0${hours}`;
            } else {
                countHour.textContent = hours;

            }
        }
    }
}


const startTimer = (() => (setInterval(() => stopWatch(), 1000)
))

const reset = () =>{
    seconds = 0;
    minutes = 0;
    hours = 0;
}























