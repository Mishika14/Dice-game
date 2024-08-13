var playbutton=document.querySelector(".btndiv .btn");

playbutton.addEventListener("click",function(){
    // Select the dice elements
    const dice1 = document.querySelector(".player1");
    const dice2 = document.querySelector(".player2");

    // Add the rolling animation class
    dice1.classList.add("roll-animation");
    dice2.classList.add("roll-animation");

    // After the animation is done, remove the class and change the dice images
    setTimeout(() => {
        // Generate random numbers between 1 and 6 for both players
        const player1 = Math.floor(Math.random() * 6) + 1;
        const player2 = Math.floor(Math.random() * 6) + 1;

        // Update the dice images
        dice1.setAttribute("src", "images/dice" + player1 + ".png");
        dice2.setAttribute("src", "images/dice" + player2 + ".png");

        // Update the heading based on the game result
        if (player1 > player2) {
            document.querySelector(".heading").textContent = "Player 1 Wins!";
        } else if (player1 < player2) {
            document.querySelector(".heading").textContent = "Player 2 Wins!";
        } else {
            document.querySelector(".heading").textContent = "It's a Tie!";
        }

        // Remove the animation class after the animation ends
        dice1.classList.remove("roll-animation");
        dice2.classList.remove("roll-animation");
    }, 500); 

}   )
