
window.onload = function() {

    let userScore = 0;
    let compScore = 0;
    let userScore_span = document.querySelector('#user-score');
    let compScore_span = document.querySelector('#comp-score');
    let scoreBoard_div = document.querySelector('.score-board');
    let result_p = document.querySelector('.result > p');
    let rock_div = document.querySelector('#rock');
    let paper_div = document.querySelector('#paper');
    let scissors_div = document.querySelector('#scissors');
    
    
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    
    function convertWord(word) {
        switch (word) {
            case 'rock':
                return 'Rock';
            case 'paper':
                return 'Paper';
            case 'scissors':
                return 'Scissors';
        }
    }
    
    function win(user, comp) {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        let smallUserWord = 'user'.fontsize(3).sub();
        let smallCompWord = 'comp'.fontsize(3).sub();
        let userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + ' beats ' +
                                 comp + smallCompWord + '. You win. 🔥';
        userChoice_div.classList.add('green-glow');
        setTimeout(function() {userChoice_div.classList.remove('green-glow');}, 800);
    }
    
    function lose(user, comp) {
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        let smallUserWord = 'user'.fontsize(3).sub();
        let smallCompWord = 'comp'.fontsize(3).sub();
        let userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + ' loses to ' +
                                 comp + smallCompWord + '. You lost. 💩';
        userChoice_div.classList.add('red-glow');
        setTimeout(function() {userChoice_div.classList.remove('red-glow');}, 800);
    }
    
    function draw(user, comp) {
        let smallUserWord = 'user'.fontsize(3).sub();
        let smallCompWord = 'comp'.fontsize(3).sub();
        let userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + ' draws with ' +
                                 comp + smallCompWord + '.';
        userChoice_div.classList.add('gray-glow');
        setTimeout(function() {userChoice_div.classList.remove('gray-glow');}, 800);
    }
    
    function game(userChoice) {
        let compChoice = getComputerChoice();
        switch (userChoice + compChoice) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                win(userChoice, compChoice);
                break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                lose(userChoice, compChoice);
                break;
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                draw(userChoice, compChoice);
                break;
        }
    }
    
    
    
    function main() {
        rock_div.addEventListener('click', function() {
            game('rock');
        });
    
        paper_div.addEventListener('click', function() {
            game('paper');
        });
    
        scissors_div.addEventListener('click', function() {
            game('scissors');
        });
       
    }
    
    main();
    
};
