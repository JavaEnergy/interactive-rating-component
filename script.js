const circleOne = document.getElementById("circleOne");
const cicrcleTwo = document.getElementById("cicrcleTwo");
const circleThree = document.getElementById("circleThree");
const circleFour = document.getElementById("circleFour");
const cicrcleFive = document.getElementById("cicrcleFive");

const infoOne = document.getElementById("infoOne");
const infoTwo = document.getElementById("infoTwo");
const infoThree = document.getElementById("infoThree");
const infoFour = document.getElementById("infoFour");
const infoFive = document.getElementById("infoFive");

const firstContainer = document.getElementById("firstContainer");
const secondContainer = document.getElementById("secondContainer");
let info = document.getElementById("info");

cicrcleTwo.addEventListener("click", () => {
  cicrcleTwo.style.backgroundColor = "#7C8798";
  infoTwo.style.display = "inline-block";
  switchContainer();
});
circleThree.addEventListener("click", () => {
  circleThree.style.backgroundColor = "#7C8798";
  infoThree.style.display = "inline-block";
  switchContainer();
});
circleOne.addEventListener("click", () => {
  circleOne.style.backgroundColor = "#7C8798";
  infoOne.style.display = "inline-block";
  switchContainer();
});
circleFour.addEventListener("click", () => {
  circleFour.style.backgroundColor = "#7C8798";
  infoFour.style.display = "inline-block";
  switchContainer();
});
cicrcleFive.addEventListener("click", () => {
  cicrcleFive.style.backgroundColor = "#7C8798";
  infoFive.style.display = "inline-block";
  switchContainer();
});

function switchContainer() {
  firstContainer.style.display = "none";
  secondContainer.style.display = "block";
}
