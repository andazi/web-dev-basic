// // without refactoring 
// const playerOneBtn = document.querySelector('#playerOneBtn');
// const playerTwoBtn = document.querySelector('#playerTwoBtn');
// const resetBtn = document.querySelector('#reset');
// const playerOneScore = document.querySelector('#playerOneScore');
// const playerTwoScore = document.querySelector('#playerTwoScore');
// const playTo = document.querySelector('select');


// let playerOneNewScore = 0;
// let playerTwoNewScore = 0;
// let winningScore = 3;
// let isGameOver = false;

// // adding score
// playerOneBtn.addEventListener("click", function(){
//     if(!isGameOver){            
//         playerOneNewScore += 1;
//         if(playerOneNewScore === winningScore){
//             isGameOver = true;
//             playerOneScore.classList.add('winner');
//             playerTwoScore.classList.add('loser');
//             playerOneBtn.disabled = true;
//             playerTwoBtn.disabled = true;
//         }
//         playerOneScore.textContent = playerOneNewScore; 
// } 
// });

// playerTwoBtn.addEventListener("click", function(){
//     if(!isGameOver){            
//         playerTwoNewScore += 1;
//         if(playerTwoNewScore === winningScore){
//             isGameOver = true;
//             playerTwoScore.classList.add('winner');
//             playerOneScore.classList.add('loser');
//             playerOneBtn.disabled = true;
//             playerTwoBtn.disabled = true;
//         }
//         playerTwoScore.textContent = playerTwoNewScore; 
// } 
// });

// // reset
// resetBtn.addEventListener('click', function(){
//     reset()
// })

// playTo.addEventListener("change", function(){
//     let newPlayTo = playTo.value;
//     winningScore = parseInt(newPlayTo);
//     reset();
    

// })

// function reset(){
//     playerOneNewScore = 0;
//     playerTwoNewScore = 0;
//     playerOneScore.textContent = 0;
//     playerTwoScore.textContent = 0;
//     isGameOver = false;
//     playerOneScore.classList.remove('winner', 'loser');
//     playerTwoScore.classList.remove('loser', 'winner');
//     playerOneBtn.disabled = false;
//     playerTwoBtn.disabled = false;
// }

// refactor
const playerOne = {
    score: 0,
    button: document.querySelector('#playerOneBtn'),
    displayScore: document.querySelector('#playerOneScore')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#playerTwoBtn'),
    displayScore: document.querySelector('#playerTwoScore')
}

function updateScore(player, opponent){
    if(!isGameOver){            
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.displayScore.classList.add('winner');
            opponent.displayScore.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.displayScore.textContent = player.score; 
} 
}


const resetBtn = document.querySelector('#reset');
const playTo = document.querySelector('select');

let winningScore = 3;
let isGameOver = false;

// adding score
playerOne.button.addEventListener('click', function(){
    updateScore(playerOne, playerTwo)
});

playerTwo.button.addEventListener('click', function(){
    updateScore(playerTwo, playerOne);
});

// reset
resetBtn.addEventListener('click', function(){
    reset();
})

playTo.addEventListener('change', function(){
    winningScore = parseInt(playTo.value);
    reset();
    

})

function reset(){
    for(let player of [playerOne, playerTwo]){
        player.score = 0;
        player.displayScore.textContent = 0;
        player.displayScore.classList.remove('winner','loser');
        player.button.disabled = false;
    }
    isGameOver = false;
}

