const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const miliSecond = document.querySelector(".milisecond");
const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");

let interval;

playBtn.addEventListener("click", () => {
  if (playBtn.innerText == "Play") {
    playBtn.innerText = "Pause";
    interval = setInterval(stopwatch, 10);
  } else {
    clearInterval(interval);
    playBtn.innerText = "Play";
  }
});

const stopwatch = () => {
  miliSecond.innerText++;
};
