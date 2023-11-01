const HEX_CODE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generatorBtn = document.querySelector("#btn");
const colorCodeName = document.querySelector("#color");
const infoBtn = document.querySelector("#info");
const infoAlertBox = document.querySelector(".alert");
const infoAlertBoxCloseBtn = document.querySelector("#close-btn")

function getRandomNumber() {
  return Math.floor(Math.random() * HEX_CODE_VALUES.length);
}

// generates random hex code color
generatorBtn.addEventListener("click", () => {
  let hexCode = "#";
  const HEX_CODE_LENGTH = 6;

  for (let i = 0; i < HEX_CODE_LENGTH; i++) {
    hexCode += HEX_CODE_VALUES[getRandomNumber()];
  }

  colorCodeName.textContent = hexCode;
  document.body.style.backgroundColor = hexCode;
});

// opens alert info
infoBtn.addEventListener("click", () => {
  infoAlertBox.style.visibility = "visible";
});

// closes alert info
infoAlertBoxCloseBtn.addEventListener("click", () => {
  infoAlertBox.style.visibility = "hidden";
});
