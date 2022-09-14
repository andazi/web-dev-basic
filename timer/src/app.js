const playPause = document.querySelector('.play-pause');
const resetTimer = document.querySelector('.restart');
const recordTimer = document.querySelector('.record');
const timerList = document.querySelector('.record-list');
const countSecond = document.querySelector('.second-count');
const countMinute = document.querySelector('.minute-count');
const countHour = document.querySelector('.hour-count');

// variables initialization
let seconds = 0;
let minutes = 0;
let hours = 0;
let startTimer = null;

// stopWatch logic
const stopWatch = () => {
    seconds++
    if (seconds < 10) {
        countSecond.textContent = `0${seconds}`;
    } else {
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

// play and pause eventListener
playPause.addEventListener('click', () => {
    playPause.classList.toggle('pause')
    if (playPause.classList.contains('pause')) {
        playPause.textContent = 'pause';
        startTimer = window.setInterval(() => stopWatch(), 1000)
    } else {
        playPause.textContent = 'play';
        window.clearInterval(startTimer)

    }
})

// reset eventListener
resetTimer.addEventListener('click', () => {
    reset()
})


// reset all timer
const reset = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;

    countSecond.textContent = `0${seconds}`;
    countMinute.textContent = `0${hours}`;
    countHour.textContent = `0${minutes}`;

    timerList.innerHTML = '';

}

// record time
recordTimer.addEventListener('click', () => {
    let presentTime = document.createElement('li');
    presentTime.innerHTML = `<li>${countHour.textContent} :
     ${countMinute.textContent} : ${countSecond.textContent}</li>`;
    timerList.append(presentTime);

})





















