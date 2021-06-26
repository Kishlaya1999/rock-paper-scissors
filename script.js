const selections = ["./images/img1.png", "./images/img2.png", "./images/img3.png"];    //Images source that would be later inserted in computer selection

// elements selected to menupulate it
let userSelection = document.querySelectorAll(".user-selection");          
let computerSelection = document.getElementById("clicked-img-computer");
let userImage = document.getElementById("clicked-img-player");
let submitBtn = document.getElementById("submit");
let roundGoingOnElement = document.getElementById("round");
let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");
let roundStatus=document.getElementById("status");

//variables for score section
let playerScore = 0;
let roundGoingOn = 0;
let computerScore = 0;

//displaying clicked image by the user and displaying it in user section image
userSelection.forEach(function (selected) {
     selected.addEventListener("click", function () {
          // console.log(this.getAttribute("src"));
     
          userImage.setAttribute("src", this.getAttribute("src"));

     })
})


//Events occuring on clicking the submit button
submitBtn.addEventListener("click", function () {
     roundGoingOn++;
     roundGoingOnElement.innerHTML = roundGoingOn;
     let userSelectedImage = userImage.getAttribute("src");                //for determining the image present in user side 
     if (userSelectedImage === "./images/user-circle-regular.svg") {       //if user has not selected anything then alert would be generated saying select a symbol
          alert("select a symbol");
     }
     // console.log(clickedImage.getAttribute("src"));
     let randomImage = Math.floor(Math.random() * selections.length);           //a random number is generated between 0 to 2 and assigned to variable
     computerSelection.setAttribute("src", selections[randomImage]);            //using selected number a source(location) is given to computer selection (source getting form selections array) 
     let computerSelectedImage = computerSelection.getAttribute("src");              //for determing the image present in computer side and assigning it to variabel
     if (userSelectedImage === computerSelectedImage) {                         //if computer selected image and user selected image is same then that round becoms draw
          roundStatus.innerHTML="It's a Draw";
     }

     let rock = "./images/img1.png"          //source(location) of rock
     let paper = "./images/img2.png"         //source(location) of paper
     let scissor = "./images/img3.png"       //source(location) of scissor       

     if (roundGoingOn <= 10) {                                             //if round is less than 10 then only game will move further
          if (userSelectedImage == rock) {                                 // ? if user image is rock
               if (computerSelectedImage == paper) {                       //and computer image is paper then computer wins that round and computer gets a point
                    computerScore++;                                       //computer score is incremented by 1 since it won that round
                    computerScoreElement.innerHTML = computerScore;        //computer's score is displayed in computer's score section
                    roundStatus.innerHTML="You Lost ☹";                   //Since user lost the round so "YOU LOST" message is displayed on screen
               } else if (computerSelectedImage == scissor) {              //if computers image is scissor then user wins that round and user gets a point
                    playerScore++;                                         //user score is incremented by 1
                    playerScoreElement.innerHTML = playerScore;            //user's score is displayed in user score section
                    roundStatus.innerHTML="You Won 🎉";                    //Since user won that round so "YOU WON" message is displayed on 
               }
          } else if (userSelectedImage == paper) {
               if (computerSelectedImage == rock) {
                    playerScore++;
                    playerScoreElement.innerHTML = playerScore;
                    roundStatus.innerHTML="You Won 🎉";
               } else if (computerSelectedImage == scissor) {
                    computerScore++;
                    computerScoreElement.innerHTML = computerScore;
                    roundStatus.innerHTML="You Lost ☹";
               }
          } else if (userSelectedImage == scissor) {
               if (computerSelectedImage == rock) {
                    computerScore++;
                    computerScoreElement.innerHTML = computerScore;
                    roundStatus.innerHTML="You Lost ☹";
               } else if (computerSelectedImage == paper) {
                    playerScore++;
                    playerScoreElement.innerHTML = playerScore;
                    roundStatus.innerHTML="You Won 🎉";
               }
          }
     } else {
          if (playerScore > computerScore) {
               alert("Congratulations!! 🎉✨ You Won");
          } else if (playerScore < computerScore) {
               alert("You Lost ☹ Better Luck next time");
          } else {
               alert("Match Draw");
          }
          // roundGoingOn=0;
          // playerScore=0;
          // computerScore=0;
     }

});