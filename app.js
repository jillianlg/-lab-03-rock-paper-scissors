const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];


for (let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', getRandomThrow);
    
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
}


    //Event Listenter Stuff

    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}


/*function clear()
{
    document.getElementById("myForm").reset();
}*/