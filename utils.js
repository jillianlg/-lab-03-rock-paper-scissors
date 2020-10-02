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

export function didUserWin(player, computer){

    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock' && computer === 'Paper'){
            return 'Computer';
        }
    }
// Finish fixing code below
    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
// Finish fixing code below
    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}