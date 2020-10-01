export function getRandomThrow(){ //removed the (e) for testing

    // let playerSelection = e.target.innerText;

    let computerSelection = Math.random();

    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

// function didUserWin(player, computer){

//     let result = didUserWin(playerSelection, computerSelection);

//     if (player === computer){
//         return 'Draw';
//     }

//     if (player === 'Rock'){
//         if (computer === 'Paper'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Paper'){
//         if (computer === 'Scissors'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Scissors'){
//         if (computer === 'Rock'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }
// }