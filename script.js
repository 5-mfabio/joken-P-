const result = document.querySelector('.result');
const humanScoreElement = document.querySelector('#your-score');
const machineScoreElement = document.querySelector('#machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    console.log('Humano: ' + humanChoice);

    const machineChoice = playMachine();
    console.log('Máquina: ' + machineChoice);

    playTheGame(humanChoice, machineChoice);
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Deu empate!';
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScoreElement.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou!';
    } else {
        machineScoreNumber++;
        machineScoreElement.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu para a Alexa!';
    }
};