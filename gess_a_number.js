var userGuess = Number(prompt("Bonjour, essayez de deviner le nombre mystère !"));
function checkWin(guess) {
    var secretNumber = 22;
    while (guess !== secretNumber) {
        if (guess < secretNumber) {
            alert("Plus grand");
        }
        else {
            alert("Plus petit");
        }
        guess = Number(prompt("Désolé ce n'est pas le bon nombre ! Essaie encore "));
    }
    alert("Bravo ous avez deviné !");
}
function startGame() {
    checkWin(userGuess);
}
startGame();
