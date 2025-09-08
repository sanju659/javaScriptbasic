// acccessing some html element
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let msg = document.querySelector("#msg-sc");

// my option to choose a option
const option = document.querySelectorAll(".option"); // it is besically a object
option.forEach((val) => {
  val.addEventListener("click", () => {
    let yourChoice = val.getAttribute("id");
    compare(yourChoice);
  });
});

//computer's option to chose a option
let compChoise = () => {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};

//comparing choises
let compare = (yourChoice) => {
  let youOption = yourChoice;
  let compOption = compChoise();
  let drawMatch = false;
  let youWon = false;
  let compWon = false;

  if (youOption === compOption) {
    drawMatch = true;
  } else if (youOption === "rock") {
    if (compOption === "paper") {
      compWon = true;
    } else {
      youWon = true;
    }
  } else if (youOption === "paper") {
    if (compOption === "scissors") {
      compWon = true;
    } else {
      youWon = true;
    }
  } else if (youOption === "scissors") {
    if (compOption === "paper") {
      youWon = true;
    } else {
      compWon = true;
    }
  }
  result(drawMatch, youWon, compWon);
};

let yourScore = 0;
let compScore = 0;
let result = (drawMatch, youWon) => {
  if (drawMatch) {
    msg.innerText = "Match draw!";
    msg.style.backgroundColor = "rgb(204, 248, 7)";
    msg.style.color = "rgb(32, 32, 32)";
  } else if (youWon) {
    msg.innerText = "You won!";
    msg.style.backgroundColor = "rgb(122, 245, 39)";
    msg.style.color = "rgb(32, 32, 32)";
    yourScore++;
    you.childNodes[1].innerText = yourScore;
  } else {
    msg.innerText = "You lost!";
    msg.style.backgroundColor = "rgb(235, 54, 63)";
    msg.style.color = "white";
    compScore++;
    comp.childNodes[1].innerText = compScore;
  }
};
