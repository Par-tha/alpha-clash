// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get the expected alphabet
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedAlphabet = currentAlphabet.toLowerCase();
     console.log(playerPressed, expectedAlphabet);

    //  check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        
        // update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // increase the score by 1
        const newScore = currentScore + 1;
        // show the udated score
        currentScoreElement.innerText = newScore;
        
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        // 1.get the curent live number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2.reduce the life count
        const newLife = currentLife - 1;
        // 3.display the updated life
        currentLifeElement.innertext = newLife;
    }

}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}