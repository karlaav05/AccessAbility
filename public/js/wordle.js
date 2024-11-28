let currentRow = 0;

function checkGuess(solution, tries) {
    const guess = document.getElementById("guessInput").value.toUpperCase();
    if (guess.length !== solution.length) {
        alert(`Guess must be ${solution.length} letters long.`);
        return;
    }

    const row = document.querySelectorAll(".row")[currentRow];
    const cells = row.querySelectorAll(".cell");

    for (let i = 0; i < solution.length; i++) {
        cells[i].textContent = guess[i];
        if (guess[i] === solution[i]) {
            cells[i].classList.add("correct");
        } else if (solution.includes(guess[i])) {
            cells[i].classList.add("present");
        } else {
            cells[i].classList.add("absent");
        }
    }

    currentRow++;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();

    console.log(currentRow, tries);
    if (guess === solution) {
        document.getElementById("guessInput").disabled = true;
        document.getElementById("submitButton").disabled = true;
    } else if (currentRow >= tries) {
        document.getElementById("guessInput").disabled = true;
        document.getElementById("submitButton").hidden = true;
        document.getElementById("retryButton").hidden = false;
    }
}