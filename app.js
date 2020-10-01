const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];


for (let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', getRandomThrow);
}

function getRandomThrow(e){
 
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

 
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    
   
    let result = didUserWin(playerSelection, computerSelection);
    if (result === 'Player'){
        result += ' wins!';
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!';
    }

  
    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function didUserWin(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if (computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}
/*function clear()
{
    document.getElementById("myForm").reset();
}*/