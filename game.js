//DOM variables
const gameSection = document.querySelector(".game");
const startSection = document.querySelector(".start");
const startBtn = document.querySelector("#start-btn");
//Grid
const gridBox = document.querySelectorAll(".box");

//Functions
const onStart = () => {
  gameSection.style.display = "none";
};

//Event listeners
startBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  gameSection.style.display = "flex";
});

//Function calls
onStart();
