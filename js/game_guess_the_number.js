let playerone = document.getElementById('player1');
let playertwo = document.getElementById('player2');

//int number = Integer.parseInt(value);

let guess=false;


function game(playerone , playertwo) {
    for (let i = 0; i < 5; i++ & guess === false) {
        if (playertwo === playerone) {
            guess = true
            alert("player two is winner");
        } else if (playertwo > playerone) {
            alert("Your guess is bigger than the answer")
        } else if (playertwo < playerone) {
            alert("your guess is smaller then answer");
        } else {
            alert("player one is winner")
        }
    }
}
