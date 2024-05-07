

function start() {
    const userNumber = parseInt(document.getElementById('user_input').value);
    if (isNaN(userNumber)) {
        alert(" PLEASE ENTER THE NUMBER IN INPUT FIRST");
        return;
    }
    const randomNumber = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000
    document.getElementById('number').innerText = randomNumber;
    intervalId = setInterval(() => {
        const currentNumber = parseInt(document.getElementById('number').innerText);
        if (currentNumber === userNumber) {
            document.getElementById('result').innerText = "CONGRATIONS NUMBER MATCH YOU WON!";
            clearInterval(intervalId);
        } else {
            document.getElementById('result').innerText = "SORRY NUMBER DOES  NOT MATCH YOU LOSE!";
        }
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
}























































