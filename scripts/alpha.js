// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

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